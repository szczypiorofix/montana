'use client';

import { RefObject, useRef } from 'react';
import {NavBarLinkItem} from "@/app/shared/models";
import {NavPath} from "@/app/shared/enums";
import {ContainerComponent} from "@/app/components/container/Container.component";
import {NavBarComponent} from "@/app/components/navbar/NavBar.component";
import {ViewPortComponent} from "@/app/components/viewport/ViewPort.component";
import {AboutMe, Contact, Projects} from "@/app/parts";
import {Footer} from "@/app/components/footer/Footer";

export default function App() {
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
