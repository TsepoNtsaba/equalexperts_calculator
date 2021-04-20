import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { ThemeProvider } from 'styled-components';
import { EqualExpertsTheme } from './global-style';


ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={EqualExpertsTheme}>
            <GridThemeProvider gridTheme={EqualExpertsTheme.gridTheme}>
                <App />
            </GridThemeProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
