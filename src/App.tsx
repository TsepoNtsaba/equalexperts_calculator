import React from 'react';
import Calculator from './container/Calculator/';
import { GlobalStyle } from './global-style';
import { BaseCSS } from 'styled-bootstrap-grid';

const App = () => {
    return (
        <React.Fragment>
            <Calculator />
            <GlobalStyle />
            <BaseCSS />
        </React.Fragment>
    );
};

export default App;
