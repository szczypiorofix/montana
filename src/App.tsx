import { RefObject, useRef } from 'react';

import { JSXElement, NavBarLinkItem } from './shared/models';
import { AboutMe, Projects, Contact } from './parts';
import { NavBarComponent } from './components/navbar/NavBar.component.tsx';
import { ViewPortComponent } from './components/viewport/ViewPort.component.tsx';
import { ContainerComponent } from './components/container/Container.component.tsx';
import { NavPath } from './shared/enums';
import { Footer } from './components/footer/Footer.tsx';

export function App(): JSXElement {
    const aboutMeRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const navBarLinksItems: NavBarLinkItem[] = [
        {
            name: '<o mnie>',
            link: NavPath.ABOUT_ME,
            ref: aboutMeRef,
        },
        {
            name: '<projekty>',
            link: NavPath.PROJECTS,
            ref: projectsRef,
        },
        {
            name: '<kontakt>',
            link: NavPath.CONTACT,
            ref: contactRef,
        },
    ];

    const scrollToTarget = (target: RefObject<HTMLDivElement | null>) => {
        if (target.current) {
            target.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <ContainerComponent>
            <NavBarComponent
                navLinkItems={navBarLinksItems}
                onClick={(ref) => scrollToTarget(ref)}
            />
            <ViewPortComponent>
                <AboutMe ref={aboutMeRef} />
                <Projects ref={projectsRef} />
                <Contact ref={contactRef} />
            </ViewPortComponent>
            <Footer />
        </ContainerComponent>
    );
}
