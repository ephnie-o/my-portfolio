import { render } from '@testing-library/react';
import AboutMe from '../components/AboutMe';

describe('AboutMe component', () => {
    test('renders component without crashing', () => {
        render(<AboutMe />);
    });

    test('displays section title', () => {
        const { getByText } = render(<AboutMe />);
        const title = getByText('About Me');
        expect(title).toBeInTheDocument();
    });

    test('displays education section with correct content', () => {
        const { getByText } = render(<AboutMe />);
        const educationTitle = getByText('Education');
        expect(educationTitle).toBeInTheDocument();
        const bachelorDegree = getByText("Bachelor's Degree in Pharmacy");
        expect(bachelorDegree).toBeInTheDocument();
        const certification = getByText('Meta Front-End Developer Certification');
        expect(certification).toBeInTheDocument();
    });

    test('displays skills section with correct content', () => {
        const { getByText } = render(<AboutMe />);
        const skillsTitle = getByText('Skills');
        expect(skillsTitle).toBeInTheDocument();
        const reactSkill = getByText('Proficient in ReactJS for front-end web development.');
        expect(reactSkill).toBeInTheDocument();
        const pharmaceuticalKnowledge = getByText('Comprehensive knowledge in pharmaceuticals.');
        expect(pharmaceuticalKnowledge).toBeInTheDocument();
        const fitnessEnthusiast = getByText('Fitness enthusiast with extensive understanding of workout regimens and nutrition.');
        expect(fitnessEnthusiast).toBeInTheDocument();
    });

    test('displays work experience section with correct content', () => {
        const { getByText } = render(<AboutMe />);
        const workExperienceTitle = getByText('Work Experience');
        expect(workExperienceTitle).toBeInTheDocument();
        const pharmacistExperience = getByText('Assistant Managing Pharmacist at Stereda Pharmacy: I led comprehensive technology-driven initiatives to streamline pharmacy operations, ensured regulatory compliance, optimized inventory management, enhanced patient counseling, provided technical support, analysed data for informed decision-making, and fostered collaborative healthcare efforts.');
        expect(pharmacistExperience).toBeInTheDocument();
        const developerExperience = getByText('Front-End Developer: I have worked on multiple website development projects using ReactJS, creating responsive and user-friendly interfaces.');
        expect(developerExperience).toBeInTheDocument();
        const designerExperience = getByText('UI/UX Designer: Designing and prototyping websites with Figma, creating user-centered interfaces and responsive designs that align with the latest trends and industry standards. My work includes crafting intuitive navigation, visually appealing layouts, and cohesive branding elements, ensuring an optimal user experience across different devices and platforms.');
        expect(designerExperience).toBeInTheDocument();
    });

    test('displays image', () => {
        const { getByAltText } = render(<AboutMe />);
        const image = getByAltText('A photo of Stephanie Odoom');
        expect(image).toBeInTheDocument();
    });
});