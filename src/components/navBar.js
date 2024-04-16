import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../__assets__/images/logo.png';
import { useRef } from 'react';
import Home from './home';
import AboutMe from './aboutMe';
import Project from './projects';
import Services from './services';
import Contact from './contact';

const NavBar = () => {
    const homeRef = useRef(null);
    const aboutMeRef = useRef(null);
    const projectsRef = useRef(null);
    const servicesRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToRef = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
    };

    return(
        <div>
            <Navbar collapseOnSelect className="bg-body-tertiary" expand="lg" fixed='top'>
                <Container>
                    <Navbar.Brand href='#home' onClick={() => scrollToRef(homeRef)} className="d-flex align-items-center">
                        <img
                        alt="logo"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top logo"
                        />{' '}
                        <span className="d-inline-block ml-2">Stephanie Odoom</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href='#home' className='link' onClick={() => scrollToRef(homeRef)} data-testid="home-link">Home</Nav.Link>
                            <Nav.Link href='#aboutMe' className='link' onClick={() => scrollToRef(aboutMeRef)} data-testid="aboutMe-link">About</Nav.Link>
                            <Nav.Link href='#projects' className='link' onClick={() => scrollToRef(projectsRef)} data-testid="projects-link">Projects</Nav.Link>
                            <Nav.Link href='#services' className='link' onClick={() => scrollToRef(servicesRef)} data-testid="services-link">Services</Nav.Link>
                            <Nav.Link href='#contact' className='link' onClick={() => scrollToRef(contactRef)} data-testid="contact-link">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div ref={homeRef} data-testid="home-section"><Home /></div>
            <div ref={aboutMeRef} data-testid="aboutMe-section"><AboutMe /></div>
            <div ref={projectsRef} data-testid="projects-section"><Project /></div>
            <div ref={servicesRef} data-testid="services-section"><Services /></div>
            <div ref={contactRef} data-testid="contact-section"><Contact /></div>
        </div>
    );
}

export default NavBar;