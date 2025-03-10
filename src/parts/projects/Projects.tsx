import { ProjectsStyledContainer } from './Projects.styled.tsx';
import { PagePartProps } from '../../shared/models/PagePartProps.ts';
import { H1Styled } from '../../components/Typography.styled.tsx';
import { ProjectSectionComponent } from '../../components/project-section/ProjectSection.component.tsx';
import { ProjectItem } from '../../shared/models/ProjectItem.model.ts';
import { ProjectListComponent } from '../../components/project-section/ProjectList.component.tsx';

const jsTsProjects: ProjectItem[] = [
    {
        title: "Space Invaders",
        description: "",
    },
    {
        title: "Fury Road",
        description: "",
    },
    {
        title: "Pogodynka",
        description: "",
    },
    {
        title: "plugin do ESLinta?",
        description: "",
    },
];

const wordpressProjects: ProjectItem[] = [
    {
        title: "Stable Master",
        description: "",
    },
    {
        title: "Plugin onboardingowy",
        description: "",
    },
    {
        title: "Plugin z galerią",
        description: "",
    },
    {
        title: "Plugin z duplikatem postów",
        description: "",
    },
];

const javaProjects: ProjectItem[] = [
    {
        title: "For Gold & Sweetrolls",
        description: "",
    },
    {
        title: "Wifi status support Android plugin for Unity",
        description: "",
    },
];

const cppProjects: ProjectItem[] = [
    {
        title: "UD (C++ & Lua scripting)",
        description: "",
    },
    {
        title: "Nevada (C)",
        description: "",
    },
];

export function Projects(props: PagePartProps) {
    return (
        <ProjectsStyledContainer ref={props.ref}>
            <H1Styled $textAlign={"center"}>&#60;projekty&#62;</H1Styled>

            <ProjectSectionComponent
                title={"JS/TS"}
            >
                <ProjectListComponent projects={jsTsProjects} />
            </ProjectSectionComponent>

            <ProjectSectionComponent
                title={"WordPress"}
            >
                <ProjectListComponent projects={wordpressProjects} />
            </ProjectSectionComponent>

            <ProjectSectionComponent
                title={"Java"}
            >
                <ProjectListComponent projects={javaProjects} />
            </ProjectSectionComponent>

            <ProjectSectionComponent
                title={"C/C++"}
            >
                <ProjectListComponent projects={cppProjects} />
            </ProjectSectionComponent>
        </ProjectsStyledContainer>
    );
}
