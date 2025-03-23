import { PropsWithChildren } from 'react';
import { ProjectSectionContainer, ProjectSectionHeading } from './ProjectSection.styled.tsx';

interface ProjectSectionProps extends PropsWithChildren {
    title: string;
}

export function ProjectSectionComponent(props: ProjectSectionProps) {
    return <ProjectSectionContainer>
        <ProjectSectionHeading>{props.title}</ProjectSectionHeading>
        {props.children}
    </ProjectSectionContainer>
}
