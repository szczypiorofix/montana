import styled from 'styled-components';

const NavBarContainer = styled.div`
    overflow: hidden;
    background-color: var(--MyrtieGreen);
    padding: 24px 10px;
    transition: 0.4s;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 99;
    display: flex;
    justify-content: space-between;
`;

const NavBarRight = styled.div`
    float: none;
`;

const NavBarList = styled.ul`
    padding-left: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
`;

const NavBarListItem = styled.li`
    cursor: pointer;
    padding: 8px 12px;
    min-width: 100px;
    text-align: center;
    transition: 0.2s;
    user-select: none;
    &:hover {
        background-color: var(--Mindaro);
        color: var(--BlackOlive);
    }
`;

export { NavBarContainer, NavBarRight, NavBarList, NavBarListItem };
