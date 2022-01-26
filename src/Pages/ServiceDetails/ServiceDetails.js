import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';




const ServiceDetails = () => {
    let { id } = useParams();
    const [serviceDetails, setServiceDetails] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then((data) => {
                const foundService = data.filter(detail => detail._id == id)
                console.log(foundService);
                setServiceDetails(foundService);

            })
    }, [id])


    const { name, description, image, price, date, time, rating } = serviceDetails[0] || {}
    return (
        <div className="container mt-4  ">
            <div className="row justify-content-center align-items-center ">
                <div className=" col-md-12">
                    <div className="card h-100 shadow-lg">
                        <img src={image} className="card-img-top " alt="..." />
                        <div className="card-body " >

                            <p className="text-nowrap text-uppercase"><strong >{name}</strong></p>
                            <p className="card-text"> <strong>Description:</strong> {description}</p>

                            <p className="text-nowrap"><strong >Price:</strong>{price}</p>

                            <p className="text-nowrap"><strong >Date</strong>{date}</p>
                            <p className="text-nowrap"><strong >Duration:</strong>{time}</p>
                            <p className="text-nowrap"><strong >Time:</strong>{rating}</p>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    );
};

export default ServiceDetails;