import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import professionalPhoto from '../__assets__/images/ProfessionalPhoto.jpeg';

const AboutMe = () => {
    return(
        <section className="aboutMe">
            <Container>
                <div>
                    <h2 className='subtitle'>About Me</h2>
                </div>
                <Row>
                    <Col xs={12} md={6}>
                        <Image className='photo photoAboutMe' src={professionalPhoto}/>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className='description'>
                            <p>I am Stephanie Odoom, a dedicated professional, seamlessly merging my passions for pharmaceuticals, fitness, and front-end web development. My diverse background in these fields provides me with a unique perspective and a broad skill set that can cater to a variety of needs.</p>
                            <h4 className='color'>Education</h4>
                            <ul>
                                <li>Bachelor's Degree in Pharmacy</li>
                                <li>Meta Front-End Developer Certification</li>
                            </ul>
                            <h4 className='color'>Skills</h4>
                            <ul>
                                <li>Proficient in ReactJS for front-end web development.</li>
                                <li>Comprehensive knowledge in pharmaceuticals.</li>
                                <li>Fitness enthusiast with extensive understanding of workout regimens and nutrition.</li>
                            </ul>
                            <h4 className='color'>Work Experience</h4>
                            <ul>
                                <li>Assistant Managing Pharmacist at Stereda Pharmacy: I led comprehensive technology-driven initiatives to streamline pharmacy operations, ensured regulatory compliance, optimized inventory management, enhanced patient counseling, provided technical support, analysed data for informed decision-making, and fostered collaborative healthcare efforts.</li>
                                <li>Front-End Developer: I have worked on multiple website development projects using ReactJS, creating responsive and user-friendly interfaces.</li>
                                <li>UI/UX Designer: Designing and prototyping websites with Figma, creating user-centered interfaces and responsive designs that align with the latest trends and industry standards. My work includes crafting intuitive navigation, visually appealing layouts, and cohesive branding elements, ensuring an optimal user experience across different devices and platforms.</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AboutMe;