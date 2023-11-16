import "./NavBar.css"
import React from 'react';
import CartWidget from "../CartWidget/CartWidget";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NavBar=()=>{
    return(
        <Container className="text-center">
            <h1 className="title">E-Commerce</h1>
            <Row className="mb-0">
                <Col xs={2}>
                    <Button variant="outline-primary" size="sm" className="w-100 prueba">Ofertas</Button>
                </Col>
                <Col xs={2}>
                    <Button variant="outline-primary" size="sm" className="w-100 prueba">Historial</Button>
                </Col>
                <Col xs={2}>
                    <Button variant="outline-primary" size="sm" className="w-100 prueba">Supermercado</Button>
                </Col>
                <Col xs={2}>
                    <Button variant="outline-primary" size="sm" className='w-100'>Moda</Button>
                </Col>
                <Col xs={2}>
                    <Button variant="outline-primary" size="sm" className='w-100'>Vender</Button>
                </Col>
                <Col xs={2}>
                    <Button variant="outline-primary" size="sm" className='w-100'>Ayuda</Button>
                </Col>
            </Row>
            <CartWidget urlImg="https://cdn.aseguratuviaje.com/companias/cardinal.png" cantidad={2}/>
        </Container>        
    );
}

export default NavBar;