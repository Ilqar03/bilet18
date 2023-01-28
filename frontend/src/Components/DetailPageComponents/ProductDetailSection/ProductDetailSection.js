import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import {Helmet} from "react-helmet";

function ProductDetailSection() {
    const [datam, setDatam] = useState([]);

    const { _id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3010/${_id}`).then((response) => {
            setDatam(response.data);
        });
    }, [_id]);



    return (
        <div>
            <Helmet><title>{datam.categories}</title></Helmet>

            <p>{datam.categories}</p>
            <h2>${datam.price}/Month</h2>
            <p>{datam.tutorial}</p>
            <p>{datam.name}</p>
            <h6>{datam.description}</h6>
            <Link to={"/"}><button>back</button></Link>


        </div>
    )
}

export default ProductDetailSection