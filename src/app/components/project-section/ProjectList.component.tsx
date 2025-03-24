import { ProjectItem } from '../../shared/models/ProjectItem.model';
import { ProjectItemComponent } from './ProjectItem.component';
import { ProjectListStyled } from './ProjectList.styled';

interface ProjectSectionComponentProps {
    projects: ProjectItem[];
}

export function ProjectListComponent(props: ProjectSectionComponentProps) {

    return <ProjectListStyled>
        { props.projects.map((item, index) => (
            <ProjectItemComponent key={index} title={item.title} description={item.description} />
        ))}
    </ProjectListStyled>
}
