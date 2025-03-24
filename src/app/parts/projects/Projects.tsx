import { ProjectsStyledContainer } from './Projects.styled';
import { PagePartProps } from '../../shared/models/PagePartProps';
import { H1Styled } from '../../components/Typography.styled';
import { ProjectSectionComponent } from '../../components/project-section/ProjectSection.component';
import { ProjectListComponent } from '../../components/project-section/ProjectList.component';
import {
    cppProjects,
    javaProjects,
    jsTsProjects,
    wordpressProjects,
} from './Projects.list';

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
