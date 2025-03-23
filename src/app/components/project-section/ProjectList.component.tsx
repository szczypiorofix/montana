import { ProjectItem } from '../../shared/models/ProjectItem.model.ts';
import { ProjectItemComponent } from './ProjectItem.component.tsx';
import { ProjectListStyled } from './ProjectList.styled.tsx';

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
