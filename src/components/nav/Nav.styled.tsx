import styled from 'styled-components';

const NavStyled = styled.nav`
    display: block;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: calc(100% - var(--headerHeight));
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    
    &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 2px;
        height: 70%;
        max-height: 750px;
        background-color: #555;
        opacity: .35;
        z-index: 10;
    }
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

const NavLiStyled= styled.li`
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
    font-size: 14px;
    width: 100%;
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
