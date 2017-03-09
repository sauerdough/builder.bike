import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import mobx from 'mobx';
import { Row, Col } from 'react-bootstrap';

function _Part(props) {
    return (
        <div className="part-card">
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
        </div>
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
            let parts = [];

            console.log("partList", mobx.toJS(this.props.partStore.partList));

            for (let i = 0; i < 6; i++) {
                parts.push(<Part key={i} partObj={this.props.partStore.partList[i]}/>);
            }

            return (
                <div>
                    {parts}
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