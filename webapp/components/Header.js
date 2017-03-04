import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Row, Col } from 'react-bootstrap';

@observer
class Header extends Component {
    render() {
        return (
            <div>
                <Row className="bb-header">
                    <Col className="text-center bb-logo" xs={2}>
                        <span className="bb-logo-text">Builder.Bike</span>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;