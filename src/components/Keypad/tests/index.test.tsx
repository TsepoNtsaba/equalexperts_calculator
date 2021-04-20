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
    const bracket = document.querySelector('[name="("]');
    expect(bracket.innerHTML).toBe('(');

    // get ahold of the button element, and trigger some clicks on it
    const bracketClose = document.querySelector('[name=")"]');
    expect(bracketClose.innerHTML).toBe(')');

    // get ahold of the button element, and trigger some clicks on it
    const backSpace = document.querySelector('[name="CE"]');
    expect(backSpace.innerHTML).toBe('CE');

    // get ahold of the button element, and trigger some clicks on it
    const clear = document.querySelector('[name="C"]');
    expect(clear.innerHTML).toBe('C');

    // get ahold of the button element, and trigger some clicks on it
    const one = document.querySelector('[name="1"]');
    expect(one.innerHTML).toBe('1');

    // get ahold of the button element, and trigger some clicks on it
    const two = document.querySelector('[name="2"]');
    expect(two.innerHTML).toBe('2');

    // get ahold of the button element, and trigger some clicks on it
    const three = document.querySelector('[name="3"]');
    expect(three.innerHTML).toBe('3');

    // get ahold of the button element, and trigger some clicks on it
    const four = document.querySelector('[name="4"]');
    expect(four.innerHTML).toBe('4');

    // get ahold of the button element, and trigger some clicks on it
    const five = document.querySelector('[name="5"]');
    expect(five.innerHTML).toBe('5');

    // get ahold of the button element, and trigger some clicks on it
    const six = document.querySelector('[name="6"]');
    expect(six.innerHTML).toBe('6');

    // get ahold of the button element, and trigger some clicks on it
    const seven = document.querySelector('[name="7"]');
    expect(seven.innerHTML).toBe('7');

    // get ahold of the button element, and trigger some clicks on it
    const eight = document.querySelector('[name="8"]');
    expect(eight.innerHTML).toBe('8');

    // get ahold of the button element, and trigger some clicks on it
    const nine = document.querySelector('[name="9"]');
    expect(nine.innerHTML).toBe('9');

    // get ahold of the button element, and trigger some clicks on it
    const point = document.querySelector('[name="."]');
    expect(point.innerHTML).toBe('.');

    act(() => {
        bracket.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        bracketClose.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        clear.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        backSpace.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        one.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        two.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        three.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        four.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        five.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        six.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        seven.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        eight.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        nine.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        point.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(onClick).toHaveBeenCalledTimes(14);
});
