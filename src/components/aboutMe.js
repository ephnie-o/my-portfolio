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
                    <Col xs={12} md={12} lg={6}>
                        <div className='description'>
                            <p>I am Stephanie Odoom, a dedicated professional, seamlessly merging my passions for pharmaceuticals, fitness, and front-end web development. My diverse background in these fields provides me with a unique perspective and a broad skill set that can cater to a variety of needs.</p>
                            <h4 className='color'>Education</h4>
                            <ul>
                                <li>Bachelor's Degree in Pharmacy</li>
                                <li>Meta Front-End Developer Certification</li>
                            </ul>
                            <h4 className='color'>Skills</h4>
                            <ul>
                                <li>Experienced in React.js for building reusable UI components and managing state in web applications.</li>
                                <li>Skilled in Next.js for dynamic web apps with server-side rendering.</li>
                                <li>Proficient in Tailwind CSS for efficient and responsive styling.</li>
                                <li>Experienced in Vue.js for interactive and scalable web apps.</li>
                                <li>Proficient in Nuxt.js for server-side rendered and static websites.</li>
                                <li>Expertise in CSS3 for modern styling and animations.</li>
                                <li>Well-versed in HTML5 for structured and accessible web content.</li>
                                <li>Proficiency in JavaScript, utilizing it to enhance web application functionality and create interactive user experiences.</li>
                                <li>Strong management skills, including project management, team coordination, and effective communication to drive successful project outcomes.</li>
                                <li>Comprehensive knowledge in pharmaceuticals.</li>
                                <li>Fitness enthusiast with extensive understanding of workout regimens and nutrition.</li>
                            </ul>
                            <h4 className='color'>Work Experience</h4>
                            <ul>
                                <li><b>Assistant Managing Pharmacist at Stereda Pharmacy:</b> I led comprehensive technology-driven initiatives, optimizing operations, ensuring compliance, and fostering collaborative healthcare efforts. This included spearheading the development and implementation of a tailored ERP system, overseeing its conception, development, and front-end interface design to enhance efficiency and user experience.</li>
                                <li><b>Front-End Developer:</b> I have worked on multiple website development projects using ReactJS, NextJS, VueJs, NuxtJs with React Bootstrap, Tailwind CSS and CSS3, creating responsive and user-friendly interfaces.</li>
                                <li><b>UI/UX Designer:</b> Designing and prototyping websites with Figma, creating user-centered interfaces and responsive designs that align with the latest trends and industry standards. My work includes crafting intuitive navigation, visually appealing layouts, and cohesive branding elements, ensuring an optimal user experience across different devices and platforms.</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <Image className='photo photoAboutMe' src={professionalPhoto} alt='A photo of Stephanie Odoom'/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AboutMe;