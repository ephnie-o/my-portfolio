import {render, fireEvent} from '@testing-library/react';
import NavBar from '../components/navBar';

window.scrollTo = jest.fn();

describe('NavBar component', () => {

    test('renders without crashing', () => {
        render(<NavBar />);
    });

    test('displays the logo and brand text', () => {
        const { getByAltText, getByText } = render(<NavBar />);
        const logo = getByAltText('logo');
        const brandText = getByText('Stephanie Odoom');
        expect(logo).toBeInTheDocument();
        expect(brandText).toBeInTheDocument();
    });

    test('scrolls to the home section when the Home link is clicked', () => {
        const { getByTestId } = render(<NavBar />);
        const homeLink = getByTestId('home-link');
        fireEvent.click(homeLink);
        const homeSection = getByTestId('home-section');
        expect(homeSection).toBeInTheDocument();
        expect(window.scrollTo).toHaveBeenCalled();
    });

    test('scrolls to the about section when the About link is clicked', () => {
        const { getByTestId } = render(<NavBar />);
        const aboutLink = getByTestId('aboutMe-link');
        fireEvent.click(aboutLink);
        const aboutMeSection = getByTestId('aboutMe-section');
        expect(aboutMeSection).toBeInTheDocument();
        expect(window.scrollTo).toHaveBeenCalled();
    });

    test('scrolls to the projects section when the Projects link is clicked', () => {
        const { getByTestId } = render(<NavBar />);
        const projectsLink = getByTestId('projects-link');
        fireEvent.click(projectsLink);
        const projectsSection = getByTestId('projects-section');
        expect(projectsSection).toBeInTheDocument();
        expect(window.scrollTo).toHaveBeenCalled();
    });

    test('scrolls to the services section when the Services link is clicked', () => {
        const { getByTestId } = render(<NavBar />);
        const servicesLink = getByTestId('services-link');
        fireEvent.click(servicesLink);
        const servicesSection = getByTestId('services-section');
        expect(servicesSection).toBeInTheDocument();
        expect(window.scrollTo).toHaveBeenCalled();
    });

    test('scrolls to the contact section when the Contact link is clicked', () => {
        const { getByTestId } = render(<NavBar />);
        const contactLink = getByTestId('contact-link');
        fireEvent.click(contactLink);
        const contactSection = getByTestId('contact-section');
        expect(contactSection).toBeInTheDocument();
        expect(window.scrollTo).toHaveBeenCalled();
    });
})