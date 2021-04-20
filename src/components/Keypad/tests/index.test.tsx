import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { ThemeProvider } from 'styled-components';
import Keypad from '..';
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
                <Keypad />
            </ThemeProvider>,
            container
        );
    });
    expect(container.textContent).toBe('(CE)÷123x456-789+.0C=');
});

it('performs onClick event', () => {
    const onClick = jest.fn();
    act(() => {
        render(
            <ThemeProvider theme={EqualExpertsTheme}>
                <Keypad onClick={onClick} />
            </ThemeProvider>,
            container
        );
    });

    // get ahold of the button element, and trigger some clicks on it
    const button = document.querySelector('[name="1"]');
    expect(button.innerHTML).toBe('1');

    act(() => {
        button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(button.innerHTML).toBe('1');

    act(() => {
        for (let i = 0; i < 5; i++) {
            button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        }
    });

    expect(onClick).toHaveBeenCalledTimes(6);
    expect(button.innerHTML).toBe('1');
});
