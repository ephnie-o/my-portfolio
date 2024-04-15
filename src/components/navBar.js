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
        ref.current.scrollIntoView({ behavior: 'smooth'});
    };

    return(
        <div>
            <Navbar collapseOnSelect className="bg-body-tertiary" expand="lg" fixed='top'>
                <Container>
                    <Navbar.Brand href='#home' onClick={() => scrollToRef(homeRef)}>
                        <img
                        alt="logo"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top logo"
                        />{' '}
                        Stephanie Odoom
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href='#home' className='link' onClick={() => scrollToRef(homeRef)}>Home</Nav.Link>
                            <Nav.Link href='#aboutMe' className='link' onClick={() => scrollToRef(aboutMeRef)}>About</Nav.Link>
                            <Nav.Link href='#projects' className='link' onClick={() => scrollToRef(projectsRef)}>Projects</Nav.Link>
                            <Nav.Link href='#services' className='link' onClick={() => scrollToRef(servicesRef)}>Services</Nav.Link>
                            <Nav.Link href='#contact' className='link' onClick={() => scrollToRef(contactRef)}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div ref={homeRef}><Home /></div>
            <div ref={aboutMeRef}><AboutMe /></div>
            <div ref={projectsRef}><Project /></div>
            <div ref={servicesRef}><Services /></div>
            <div ref={contactRef}><Contact /></div>
        </div>
    );
}

export default NavBar;