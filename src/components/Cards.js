import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import Cardsdata from './Cardsdata';
import './style.css';
import { ADD } from './redux/actions/action'

const Cards = () => {

    const [data, setData] = useState(Cardsdata);
    const dispatch = useDispatch();

    const send = (e) => {
        dispatch(ADD(e))
    }


    return (
        <div className='container mt-3'>
            <h2 className='text-center'>Add to Cart Projects</h2>
            <div className='row d-flex justify-content-center align-items-center'>
                {data.map((element, id) => {
                    return <Card key={element.id} style={{ width: '18rem', marginBottom: '2rem', border: 'none' }}>
                            <Card.Img variant="top" src={element.imgdata} style={{ height: '16rem', marginBottom: '2rem' }} />
                            <Card.Body>
                                <Card.Title>{element.rname}</Card.Title>
                                <Card.Text>
                                    Price: ₹{element.price}
                                </Card.Text>
                                <div className='button_div d-flex justify-content-center'>
                                    <Button onClick={()=>send(element)} variant="primary">Go somewhere</Button>
                                </div>

                            </Card.Body>
                        </Card>
                })}


            </div>
        </div>
    )
}

export default Cards