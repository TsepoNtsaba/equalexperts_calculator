import React from 'react';
import { ButtonProps, ButtonStyle } from './style';

const Button = (props: ButtonProps) => {
    return (
        <React.Fragment>
            <ButtonStyle {...props}/>
        </React.Fragment>
    );
};


export default Button;