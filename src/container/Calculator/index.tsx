import { CalculatorContainer, LogoContainer } from './style';
import Screen from '../../components/Screen';
import Keypad from '../../components/Keypad';
import React, { useState } from 'react';
import { ContainerFullHeight } from '../../global-style';
import { Row, Col } from 'styled-bootstrap-grid';
import { Heading } from 'styled-typography';

const Calculator = () => {
    const [result, setResult] = useState('0');
    const [calculations, setCalculations] = useState('');

    const onClick = (button: string) => {
        if (button === '=') {
            calculate();
        } else if (button === 'C') {
            reset();
        } else if (button === 'CE') {
            backspace();
        } else {
            setCalculations(calculations + button);
        }
    };

    const calculate = () => {
        var checkResult = '';
        if (calculations.includes('--')) {
            checkResult = calculations.replace('--', '+');
        } else {
            checkResult = calculations;
        }

        try {
            setResult((Math.round(eval(checkResult)) || '') + '');
        } catch (e) {
            setResult('Error');
        }
    };

    const reset = () => {
        setResult('0');
        setCalculations('');
    };

    const backspace = () => {
        setCalculations(calculations.slice(0, -1));
    };

    return (
        <div>
            <ContainerFullHeight>
                <Row>
                    <Col col={12}>
                        <Row style={{ textAlign: 'center'}}>
                            <Col col={12}>
                                <Heading level={2}>Calculator</Heading>
                            </Col>
                        </Row>
                        <CalculatorContainer>
                            <Row>
                                <Col col={12}>
                                    <LogoContainer>
                                        <img alt="Equal Experts" src="/logo.svg" />
                                    </LogoContainer>
                                </Col>
                            </Row>

                            <Row>
                                <Col col={12}>
                                    <Screen calculations={calculations} result={result} />
                                </Col>
                            </Row>

                            <Row>
                                <Col col={12}>
                                    <Keypad onClick={onClick} />
                                </Col>
                            </Row>
                        </CalculatorContainer>
                    </Col>
                </Row>
            </ContainerFullHeight>
        </div>
    );
};

export default Calculator;
