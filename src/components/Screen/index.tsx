import React from 'react';
import { ScreenContainer } from './style';
import { Heading, Text } from "styled-typography";

interface Props {
    result?: string;
    calculations?: string;
}

const Screen = (props: Props) => {
    return (
        <ScreenContainer>
            <Text id="calculations" color={'#ffffff'}>{props.calculations}</Text>
            <Heading id="result" color={'#ffffff'} level={1}>{props.result ? props.result : '0'}</Heading>
        </ScreenContainer>
    );
};


export default Screen;