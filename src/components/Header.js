import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Table from 'react-bootstrap/Table'
import { useSelector } from "react-redux";


const Header = () => {

    const getData = useSelector((state) => state.cartreducers.carts);

    

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: '60px' }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-3">Add To Cart</NavLink>

                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
                    </Nav>

                    <Badge badgeContent={getData.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i
                            className="fa-solid fa-cart-shopping text-light"
                            style={{ fontSize: 25, cursor: "pointer" }}
                        ></i>
                    </Badge>

                </Container>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        getData.length > 0 ?
                            <div className="card_details" style={{ width: '24rem', padding: 10 }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Restaurant Name</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            getData.map((e) => {
                                                return <>
                                                    <tr>
                                                        <td>
                                                            <NavLink to={`/cart/${e.id}`}>

                                                            <img src={e.imgdata} alt="" style={{ width: '5rem', height: '5rem' }} />
                                                            </NavLink>
                                                            </td>
                                                        <td>
                                                            <p>{e.rname}</p>
                                                            <p>Price: Rs {e.price}</p>
                                                            <p>Quantity: {e.qnty}</p>
                                                            <p>
                                                                <i className="fas fa-trash smalltrash" style={{ cursor: 'pointer' }}></i>
                                                            </p>
                                                        </td>

                                                        <td>
                                                            <p>
                                                                <i className="fas fa-trash largetrash" style={{ cursor: 'pointer' }}></i>
                                                            </p>
                                                        </td>




                                                    </tr>
                                                </>
                                            })
                                        }
                                        <p>total: Rs 300</p>
                                    </tbody>

                                </Table>

                            </div>
                            : <div className="card_details d-flex justify-content-center align-items-center" style={{ width: '24rem', padding: 10, position: 'relative' }} >
                                <i onClick={handleClose} className="fas fa-close smallclose" style={{ position: 'absolute', top: 2, right: 30, cursor: 'pointer' }}></i>
                                <p style={{ fontSize: 22, marginLeft: 5, marginRight: 5 }}>Your cart is empty</p>
                                <span>Cart Icon</span>
                            </div>
                    }

                </Menu>

            </Navbar>
        </>
    );
};

export default Header;
