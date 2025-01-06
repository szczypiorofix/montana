import styled from 'styled-components';

const NavStyled = styled.nav`
    width: 100%;
    display: block;
`;

const NavUlStyled = styled.ul`
    width: 100%;
    padding-left: 0;
    margin: 0;
    list-style: none;
    display: flex;
    overflow: hidden;
    background-color: #333;
`;

const NavLiStyled= styled.li`

`;

const NavLiButtonStyled = styled.button`
    text-decoration: none;
    display: flex;
    color: #f2f2f2;
    justify-content: center;
    background-color: transparent;
    align-items: center;
    border: none;
    cursor: pointer;
    padding: 14px 16px;
    font-size: 17px;
    transition: all 0.15s ease-in-out;
    &.active {
        background-color: #04AA6D;
    }
    &:hover {
        background-color: #ddd;
        color: black;
    }
`;

export { NavLiButtonStyled, NavLiStyled, NavStyled, NavUlStyled };
