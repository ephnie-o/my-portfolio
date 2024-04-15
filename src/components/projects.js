import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Project =() => {
    return(
        <section className='project'>
            <Container>
                <div>
                    <h2 className='subtitle'>Project</h2>
                </div>
                <Row>
                    <Col>
                        <div className='description'><span className='color'>PROJECT 1:</span> I designed and developed my personal portfolio website using React.js, Bootstrap, and CSS, with the initial design and layout prototyped in Figma. This project allowed me to demonstrate my skills in frontend development, including creating a responsive and visually appealing interface. Leveraging React.js ensured seamless navigation and dynamic content updates, while Bootstrap and CSS were instrumental in achieving a modern and polished design aesthetic. Using Figma for the design phase enabled me to craft intuitive and user-centered layouts, ensuring an optimal user experience across different devices and platforms. The portfolio website serves as a showcase of my work, skills, and experiences in the field of web development.</div>
                        <br />
                        <div className='description'><span className='color'>PROJECT 2:</span> I developed a gym workout web application using React.js, Bootstrap, and CSS. The application, inspired by popular fitness platforms, offers a range of exercise routines tailored for different days and goals. Users can easily navigate through the exercises, track their progress, and customize their workout plans. I designed the website using Figma to create intuitive and user-friendly interfaces, ensuring a seamless user experience. The use of React.js provided a dynamic and responsive user interface, while Bootstrap and CSS were utilized for styling and layout design.</div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Project;