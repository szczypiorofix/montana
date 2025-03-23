import styled from 'styled-components';

const ProjectItemStyled = styled.li`
    padding: 12px;
    font-size: 0.7em;
    display: block;
    color: var(--Mindaro);
    border: 1px solid var(--BlackOlive);
    height: 240px;
    width: 200px;
    margin-left: 12px;
    margin-right: 12px;
    user-select: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        border-color: var(--Olivine);
    }
`;

const ProjectItemTitleStyled = styled.h3`
    padding: 4px 0;
    margin: 0;
`;

const ProjectItemDescriptionStyled = styled.p`
    font-size: 14px;
`;

export { ProjectItemStyled, ProjectItemTitleStyled, ProjectItemDescriptionStyled };
