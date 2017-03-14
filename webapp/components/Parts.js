import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { Row, Col } from 'react-bootstrap';

function _Part(props) {
    return (
        <Col xs={6} sm={6} md={4} className="part-card">
            <Row>
                <Col xs={12}>
                    <span className="part-title">{props.partObj.brand} {props.partObj.title}</span>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <span className="part-desc">{props.partObj.description}</span>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <span className="part-price">{props.partObj.price}</span>
                </Col>
            </Row>
        </Col>
    );
}

_Part.propTypes = {
    partObj: PropTypes.object
};

export const Part = observer(_Part);

@observer
class PartsContainer extends Component {
    render() {
        if (this.props.partStore.partList.length > 0) {
            let partCards = [];
            const numCards = 6;

            for (let i = 0; i < numCards; i++) {
                partCards.push(<Part key={i} partObj={this.props.partStore.partList[i]}/>);
            }

            return (
                <div className="part-container container-fluid center-block">
                    {partCards}
                </div>
            );
        }
        return null;
    }
}

PartsContainer.propTypes = {
    partStore: PropTypes.object
};

export default PartsContainer;