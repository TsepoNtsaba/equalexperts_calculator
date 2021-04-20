import { act, render, screen } from '@testing-library/react';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Calculator from '..';
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

it('renders react calculator with or without props', () => {
    render(
        <ThemeProvider theme={EqualExpertsTheme}>
            <Calculator />
        </ThemeProvider>
    );
    const headingElement = screen.getByText(/Calculator/);
    expect(headingElement).toBeInTheDocument();
});

it('performs multiplication', () => {
    render(
        <ThemeProvider theme={EqualExpertsTheme}>
            <Calculator />
        </ThemeProvider>
    );

    // get ahold of the button elements, and 100 * 60
    const one = document.querySelector('[name="1"]');
    expect(one.innerHTML).toBe('1');

    const zero = document.querySelector('[name="0"]');
    expect(zero.innerHTML).toBe('0');

    const six = document.querySelector('[name="6"]');
    expect(six.innerHTML).toBe('6');

    const multiply = document.querySelector('[name="*"]');
    expect(multiply.innerHTML).toBe('x');

    const equals = document.querySelector('[name="="]');
    expect(equals.innerHTML).toBe('=');

    act(() => {
        one.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        zero.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        zero.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        multiply.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        six.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        zero.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const calculation = document.querySelector('#calculations');
    expect(calculation.innerHTML).toBe('100*60');

    act(() => {
        equals.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const result = document.querySelector('#result');
    expect(result.innerHTML).toBe('6000');
});

it('performs addition', () => {
    render(
        <ThemeProvider theme={EqualExpertsTheme}>
            <Calculator />
        </ThemeProvider>
    );

    // get ahold of the button elements, and 100 * 60
    const one = document.querySelector('[name="1"]');
    expect(one.innerHTML).toBe('1');

    const zero = document.querySelector('[name="0"]');
    expect(zero.innerHTML).toBe('0');

    const six = document.querySelector('[name="6"]');
    expect(six.innerHTML).toBe('6');

    const addition = document.querySelector('[name="+"]');
    expect(addition.innerHTML).toBe('+');

    const equals = document.querySelector('[name="="]');
    expect(equals.innerHTML).toBe('=');

    act(() => {
        one.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        zero.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        zero.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        addition.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        six.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        zero.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const calculation = document.querySelector('#calculations');
    expect(calculation.innerHTML).toBe('100+60');

    act(() => {
        equals.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const result = document.querySelector('#result');
    expect(result.innerHTML).toBe('160');
});


it('performs substraction', () => {
    render(
        <ThemeProvider theme={EqualExpertsTheme}>
            <Calculator />
        </ThemeProvider>
    );

    // get ahold of the button elements, and 100 * 60
    const one = document.querySelector('[name="1"]') ? document.querySelector('[name="1"]') : '';
    expect(one.innerHTML).toBe('1');

    const zero = document.querySelector('[name="0"]');
    expect(zero.innerHTML).toBe('0');

    const six = document.querySelector('[name="6"]');
    expect(six.innerHTML).toBe('6');

    const minus = document.querySelector('[name="-"]');
    expect(minus.innerHTML).toBe('-');

    const equals = document.querySelector('[name="="]');
    expect(equals.innerHTML).toBe('=');

    act(() => {
        one.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        zero.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        zero.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        minus.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        six.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        zero.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const calculation = document.querySelector('#calculations');
    expect(calculation.innerHTML).toBe('100-60');

    act(() => {
        equals.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const result = document.querySelector('#result');
    expect(result.innerHTML).toBe('40');
});

it('performs division', () => {
    render(
        <ThemeProvider theme={EqualExpertsTheme}>
            <Calculator />
        </ThemeProvider>
    );

    // get ahold of the button elements, and 100 * 60
    const one = document.querySelector('[name="1"]');
    expect(one.innerHTML).toBe('1');

    const zero = document.querySelector('[name="0"]');
    expect(zero.innerHTML).toBe('0');

    const six = document.querySelector('[name="6"]');
    expect(six.innerHTML).toBe('6');

    const divide = document.querySelector('[name="/"]');
    expect(divide.innerHTML).toBe('÷');

    const equals = document.querySelector('[name="="]');
    expect(equals.innerHTML).toBe('=');

    act(() => {
        one.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        zero.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        zero.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        divide.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        six.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        zero.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const calculation = document.querySelector('#calculations');
    expect(calculation.innerHTML).toBe('100/60');

    act(() => {
        equals.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const result = document.querySelector('#result');
    expect(result.innerHTML).toBe('2'); //Expect result to be 2 because we round off
});

it('display error if equation is incorrect', () => {
    render(
        <ThemeProvider theme={EqualExpertsTheme}>
            <Calculator />
        </ThemeProvider>
    );

    // get ahold of the button elements, and 100 * 60
    const times = document.querySelector('[name="*"]');
    expect(times.innerHTML).toBe('x');

    const division = document.querySelector('[name="/"]');
    expect(division.innerHTML).toBe('÷');

    const six = document.querySelector('[name="6"]');
    expect(six.innerHTML).toBe('6');

    const equals = document.querySelector('[name="="]');
    expect(equals.innerHTML).toBe('=');

    act(() => {
        times.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        times.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        division.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        division.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        six.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        six.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const calculation = document.querySelector('#calculations');
    expect(calculation.innerHTML).toBe('**//66');

    act(() => {
        equals.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const result = document.querySelector('#result');
    expect(result.innerHTML).toBe('Error'); //Expect result to be 2 because we round off
});

it('C clears screen', () => {
    render(
        <ThemeProvider theme={EqualExpertsTheme}>
            <Calculator />
        </ThemeProvider>
    );

    // get ahold of the button elements, and 100 * 60
    const times = document.querySelector('[name="*"]');
    expect(times.innerHTML).toBe('x');

    const division = document.querySelector('[name="/"]');
    expect(division.innerHTML).toBe('÷');

    const six = document.querySelector('[name="6"]');
    expect(six.innerHTML).toBe('6');

    const clear = document.querySelector('[name="C"]');
    expect(clear.innerHTML).toBe('C');

    act(() => {
        times.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        times.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        division.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        division.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        six.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        six.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const calculation = document.querySelector('#calculations');
    expect(calculation.innerHTML).toBe('**//66');

    act(() => {
        clear.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const result = document.querySelector('#result');
    expect(result.innerHTML).toBe('0'); //Expect result to be 2 because we round off
});

it('performs addition if two negatives in evaluation e.g 3 - -6', () => {
    render(
        <ThemeProvider theme={EqualExpertsTheme}>
            <Calculator />
        </ThemeProvider>
    );

    // get ahold of the button elements, and 100 * 60
    const one = document.querySelector('[name="1"]');
    expect(one.innerHTML).toBe('1');

    const zero = document.querySelector('[name="0"]');
    expect(zero.innerHTML).toBe('0');

    const six = document.querySelector('[name="6"]');
    expect(six.innerHTML).toBe('6');

    const minus = document.querySelector('[name="-"]');
    expect(minus.innerHTML).toBe('-');

    const equals = document.querySelector('[name="="]');
    expect(equals.innerHTML).toBe('=');

    act(() => {
        one.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        zero.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        zero.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        minus.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        minus.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        six.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        zero.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const calculation = document.querySelector('#calculations');
    expect(calculation.innerHTML).toBe('100--60');

    act(() => {
        equals.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const result = document.querySelector('#result');
    expect(result.innerHTML).toBe('160');
});


it('CE performs backspace by 1 character to the calc', () => {
    render(
        <ThemeProvider theme={EqualExpertsTheme}>
            <Calculator />
        </ThemeProvider>
    );

    // get ahold of the button elements, and 100 * 60
    const one = document.querySelector('[name="1"]');
    expect(one.innerHTML).toBe('1');

    const zero = document.querySelector('[name="0"]');
    expect(zero.innerHTML).toBe('0');

    const six = document.querySelector('[name="6"]');
    expect(six.innerHTML).toBe('6');

    const minus = document.querySelector('[name="-"]');
    expect(minus.innerHTML).toBe('-');

    const equals = document.querySelector('[name="="]');
    expect(equals.innerHTML).toBe('=');

    const backspace = document.querySelector('[name="CE"]');
    expect(backspace.innerHTML).toBe('CE');

    act(() => {
        one.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        zero.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        zero.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        minus.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        minus.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        six.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        zero.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const calculation = document.querySelector('#calculations');
    expect(calculation.innerHTML).toBe('100--60');

    act(() => {
        equals.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const result = document.querySelector('#result');
    expect(result.innerHTML).toBe('160');

    act(() => {
        backspace.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    act(() => {
        backspace.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(calculation.innerHTML).toBe('100--');

     act(() => {
        six.dispatchEvent(new MouseEvent('click', { bubbles: true }));
     });
    
     act(() => {
        six.dispatchEvent(new MouseEvent('click', { bubbles: true }));
     });
    
    expect(calculation.innerHTML).toBe('100--66');
});