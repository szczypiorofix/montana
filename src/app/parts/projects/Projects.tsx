import { ProjectsStyledContainer } from './Projects.styled.tsx';
import { PagePartProps } from '../../shared/models/PagePartProps.ts';
import { H1Styled } from '../../components/Typography.styled.tsx';
import { ProjectSectionComponent } from '../../components/project-section/ProjectSection.component.tsx';
import { ProjectListComponent } from '../../components/project-section/ProjectList.component.tsx';
import {
    cppProjects,
    javaProjects,
    jsTsProjects,
    wordpressProjects,
} from './Projects.list.ts';

export function Projects(props: PagePartProps) {
    return (
        <ProjectsStyledContainer ref={props.ref}>
            <H1Styled $textAlign={'center'}>&#60;projekty&#62;</H1Styled>

            <ProjectSectionComponent title={'JS/TS'}>
                <ProjectListComponent projects={jsTsProjects} />
            </ProjectSectionComponent>

            <ProjectSectionComponent title={'WordPress'}>
                <ProjectListComponent projects={wordpressProjects} />
            </ProjectSectionComponent>

            <ProjectSectionComponent title={'Java'}>
                <ProjectListComponent projects={javaProjects} />
            </ProjectSectionComponent>

            <ProjectSectionComponent title={'C/C++'}>
                <ProjectListComponent projects={cppProjects} />
            </ProjectSectionComponent>
        </ProjectsStyledContainer>
    );
}
