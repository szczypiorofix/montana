import styled from 'styled-components';

const NavStyled = styled.nav`
    display: block;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: calc(100% - var(--headerHeight));
    padding-right: 6px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
`;

const NavUlStyled = styled.ul`
    display: flex;
    overflow: hidden;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 126px;
    height: 70%;
    max-height: 750px;
    text-align: start;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    list-style: none;
    z-index: 10;
`;

const NavLiStyled = styled.li`
    width: 100%;
    color: #fff;
    font-size: 6px;
    margin: 24px 0;
    cursor: pointer;
`;

const NavLiButtonStyled = styled.button`
    position: relative;
    text-decoration: none;
    display: flex;
    color: var(--PrimaryWhiteColor);
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 14px 16px;
    font-size: 2.2em;
    width: 100%;
    border-radius: 3px;
    font-weight: 500;
    font-family: inherit;
    transition: all 0.15s ease-in-out;
    &.active {
        background-color: var(--PrimaryAccentColor);
    }
    &:hover {
        background-color: var(--SecondaryWhiteColor);
        color: var(--PrimaryDarkColor);
    }
`;

export { NavLiButtonStyled, NavLiStyled, NavStyled, NavUlStyled };
