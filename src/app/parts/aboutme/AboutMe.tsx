import { AboutMeStyledContainer } from './AboutMe.styled';
import { PagePartProps } from '../../shared/models/PagePartProps';
import { H2Styled, H3Styled, PartHeader, TechStackLiStyled, TechStackUlStyled } from '../../components/Typography.styled';

export function AboutMe(props: PagePartProps) {
    return (
        <AboutMeStyledContainer ref={props.ref}>
            <PartHeader>&#60;o mnie&#62;</PartHeader>
            <H2Styled $textAlign={"left"}>Piotr Wróblewski</H2Styled>
            <H3Styled $textAlign={"left"}>Frontend Developer</H3Styled>
            <TechStackUlStyled>
                <TechStackLiStyled>JavaScript</TechStackLiStyled>
                <TechStackLiStyled>TypeScript</TechStackLiStyled>
                <TechStackLiStyled>PHP</TechStackLiStyled>
                <TechStackLiStyled>ReactJS</TechStackLiStyled>
                <TechStackLiStyled>ExpressJS</TechStackLiStyled>
                <TechStackLiStyled>Angular</TechStackLiStyled>
            </TechStackUlStyled>
        </AboutMeStyledContainer>
    );
}
