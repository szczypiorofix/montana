import { ProjectItem } from '../../shared/models/ProjectItem.model.ts';
import { ProjectItemDescriptionStyled, ProjectItemStyled, ProjectItemTitleStyled } from './ProjectItem.styled.tsx';

export function ProjectItemComponent(props: ProjectItem) {
    return <ProjectItemStyled>
        <ProjectItemTitleStyled>{props.title}</ProjectItemTitleStyled>
        <ProjectItemDescriptionStyled>{props.description}</ProjectItemDescriptionStyled>
    </ProjectItemStyled>
}
