import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import { Formik, Field, Form } from 'formik';
import "./GreatPricingSection.scss"

function GreatPricingSection() {
    const [data, setData] = useState([]);

    const allData = () => {
        axios.get("http://localhost:3010/").then((response) => {
            setData(response.data);
        });
    }

    const increase = () => {
        setData([...data.sort((a, b) => (a.price > b.price) ? 1 : (b.price > a.price) ? -1 : 0)])
    }

    const decrease = () => {
        setData([...data.sort((a, b) => (b.price > a.price) ? 1 : (a.price > b.price) ? -1 : 0)])
    }



    const handledelete = (_id) => {
        axios.delete(`http://localhost:3010/${_id}`).then(() => {
            allData()
        })
    }

    useEffect(() => {
        allData()
    }, []);

    const [search, setSerach] = useState("");

    return (
        <div className='great_section'>
            <div className='great_info'>
                <h2>GREAT PRICING TABLE</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <Formik>
                <Form>
                    <Field name="search" className=" great_field" placeholder="search" type="text" onChange={(x) => setSerach(x.target.value)} />
                </Form>
            </Formik>
            <div className='price_button'>
                <button onClick={() => increase()}>Increase</button>
                <button onClick={() => decrease()}>decrease</button>
            </div>
            <div className='card'>
                {data.filter(data => data.name.toLowerCase().includes(search.toLowerCase())).map((x) => (
                    <div className='great_card' >
                        <p>{x.categories}</p>
                        <h2>${x.price}/Month</h2>
                        <p>{x.tutorial}</p>
                        <p>{x.name}</p>
                        <h6>{x.description}</h6>
                        <Link to={`/detailpage/${x._id}`}><button>Detail</button></Link>
                        <button onClick={() => handledelete(x._id)}>delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GreatPricingSection