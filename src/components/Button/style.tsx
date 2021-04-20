import styled, { css } from 'styled-components';

export interface ButtonProps extends React.ButtonHTMLAttributes<any> {
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    primaryGrey?: boolean;
}

export const ButtonStyle =
    styled.button <
    ButtonProps >
    `
    background: #f9f9f9;
    color: #000;
    font-size: 1em;
    padding: 15px 15px;
    border-radius: 3px;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    font-weight: bold;

    ${(props) => props.primary && css`color: ${props.theme.colors.text ? props.theme.colors.text : '#000000' };`};
    ${(props) => props.secondary && css`color: ${props.theme.colors.secondary ? props.theme.colors.secondary : '#47fada'};`};
    ${(props) => props.tertiary && css`color: ${props.theme.colors.tertiary ? props.theme.colors.tertiary : '#eb6868'};`};
    ${(props) => props.primaryGrey && css`color: ${props.theme.colors.primaryGrey ? props.theme.colors.primaryGrey : '#f9f9f9'};`};
`;
