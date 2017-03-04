import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Row, Col, Image } from 'react-bootstrap';
import BikeSil from '../assets/images/bicycle-silhouette.jpg';

@observer
class Builder extends Component {
    render() {
        return (
            <div className="container bb-bike-container">
                <Row>
                    <Col className="bb-bike" xs={12}>
                        <Image className="center-block" src={BikeSil} responsive width="65%" height="65%" />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Builder;