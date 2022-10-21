import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import Footer from './Pages/shared/Footer/Footer';
import Header from './Pages/shared/Header/Header';
import LeftSIdeNav from './Pages/shared/LeftSideNav/LeftSIdeNav';
import RightSIdeNav from './Pages/shared/RightSideNav/RightSIdeNav';

const Main = () => {
    return (
        <>
        <Header></Header>
       <Container>
        <Row>
            <Col lg="2" className="d-none d-lg-block">
                <LeftSIdeNav></LeftSIdeNav>
            </Col>


            <Col lg="7">
            <Outlet></Outlet>
            </Col>

            <Col lg="3">
              <RightSIdeNav></RightSIdeNav>
            </Col>
        </Row>
       </Container>
       <Footer></Footer>
        </>
    );
};

export default Main;