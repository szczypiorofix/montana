import { ProjectItem } from '../../shared/models/ProjectItem.model';
import { ProjectItemDescriptionStyled, ProjectItemStyled, ProjectItemTitleStyled } from './ProjectItem.styled';

export function ProjectItemComponent(props: ProjectItem) {
    return <ProjectItemStyled>
        <ProjectItemTitleStyled>{props.title}</ProjectItemTitleStyled>
        <ProjectItemDescriptionStyled>{props.description}</ProjectItemDescriptionStyled>
    </ProjectItemStyled>
}
