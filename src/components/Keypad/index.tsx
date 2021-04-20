import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';
import Button from '../Button';
import { KeypadContainer } from './style';

interface Props {
    onClick?: (name: string) => void;
}

const Keypad = (props: Props) => {
    return (
        <KeypadContainer>
            <Row>
                <Col col={3}>
                    <Button secondary name="(" onClick={(e: any) => (props.onClick ? props.onClick(e.target.name) : '')}>
                        (
                    </Button>
                </Col>

                <Col col={3}>
                    <Button secondary name="CE" onClick={(e: any) => (props.onClick ? props.onClick(e.target.name) : '')}>
                        CE
                    </Button>
                </Col>

                <Col col={3}>
                    <Button secondary name=")" onClick={(e: any) => (props.onClick ? props.onClick(e.target.name) : '')}>
                        )
                    </Button>
                </Col>

                <Col col={3}>
                    <Button tertiary name="/" onClick={(e: any) => (props.onClick ? props.onClick(e.target.name) : '')}>
                        ÷
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col col={3}>
                    <Button name="1" onClick={(e: any) => (props.onClick ? props.onClick(e.target.name) : '')}>
                        1
                    </Button>
                </Col>

                <Col col={3}>
                    <Button name="2" onClick={(e: any) => (props.onClick ? props.onClick(e.target.name) : '')}>
                        2
                    </Button>
                </Col>

                <Col col={3}>
                    <Button name="3" onClick={(e: any) => (props.onClick ? props.onClick(e.target.name) : '')}>
                        3
                    </Button>
                </Col>

                <Col col={3}>
                    <Button tertiary name="*" onClick={(e: any) => (props.onClick ? props.onClick(e.target.name) : '')}>
                        x
                    </Button>
                </Col>
            </Row>

            <Row>
                <Col col={3}>
                    <Button name="4" onClick={(e: any) => (props.onClick ? props.onClick(e.target.name) : '')}>
                        4
                    </Button>
                </Col>

                <Col col={3}>
                    <Button name="5" onClick={(e: any) => (props.onClick ? props.onClick(e.target.name) : '')}>
                        5
                    </Button>
                </Col>

                <Col col={3}>
                    <Button name="6" onClick={(e: any) => (props.onClick ? props.onClick(e.target.name) : '')}>
                        6
                    </Button>
                </Col>

                <Col col={3}>
                    <Button tertiary name="-" onClick={(e: any) => (props.onClick ? props.onClick(e.target.name) : '')}>
                        -
                    </Button>
                </Col>
            </Row>

            <Row>
                <Col col={3}>
                    <Button name="7" onClick={(e: any) => (props.onClick ? props.onClick(e.target.name) : '')}>
                        7
                    </Button>
                </Col>

                <Col col={3}>
                    <Button name="8" onClick={(e: any) => (props.onClick ? props.onClick(e.target.name) : '')}>
                        8
                    </Button>
                </Col>

                <Col col={3}>
                    <Button name="9" onClick={(e: any) => (props.onClick ? props.onClick(e.target.name) : '')}>
                        9
                    </Button>
                </Col>

                <Col col={3}>
                    <Button tertiary name="+" onClick={(e: any) => (props.onClick ? props.onClick(e.target.name) : '')}>
                        +
                    </Button>
                </Col>
            </Row>

            <Row>
                <Col col={3}>
                    <Button name="." onClick={(e: any) => (props.onClick ? props.onClick(e.target.name) : '')}>
                        .
                    </Button>
                </Col>

                <Col col={3}>
                    <Button name="0" onClick={(e: any) => (props.onClick ? props.onClick(e.target.name) : '')}>
                        0
                    </Button>
                </Col>

                <Col col={3}>
                    <Button name="C" onClick={(e: any) => (props.onClick ? props.onClick(e.target.name) : '')}>
                        C
                    </Button>
                </Col>

                <Col col={3}>
                    <Button tertiary name="=" onClick={(e: any) => (props.onClick ? props.onClick(e.target.name) : '')}>
                        =
                    </Button>
                </Col>
            </Row>
        </KeypadContainer>
    );
};

export default Keypad;
