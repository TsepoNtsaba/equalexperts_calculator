import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { ThemeProvider } from 'styled-components';
import Button from '..';
import { EqualExpertsTheme } from '../../../global-style';

let container: any = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renders with or without props', () => {
    act(() => {
        render(
            <ThemeProvider theme={EqualExpertsTheme}>
                <Button />
            </ThemeProvider>,
            container
        );
    });
    expect(container.textContent).toBe('');

    act(() => {
        render(
            <ThemeProvider theme={EqualExpertsTheme}>
                <Button>1</Button>
            </ThemeProvider>,
            container
        );
    });
    expect(container.textContent).toBe('1');

    act(() => {
        render(
            <ThemeProvider theme={EqualExpertsTheme}>
                <Button>+</Button>
            </ThemeProvider>,
            container
        );
    });
    expect(container.textContent).toBe('+');
});
