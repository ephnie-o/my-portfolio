import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Project =() => {
    return(
        <section className='project'>
            <Container>
                <div>
                    <h2 className='subtitle'>Projects</h2>
                </div>
                <Row>
                    <Col>
                        <div className='description'><span className='color'>PROJECT 1:</span> I designed and developed my personal portfolio website using React.js, Bootstrap, and CSS, with the initial design and layout prototyped in Figma. This project allowed me to demonstrate my skills in frontend development, including creating a responsive and visually appealing interface. Leveraging React.js ensured seamless navigation and dynamic content updates, while Bootstrap and CSS were instrumental in achieving a modern and polished design aesthetic. Using Figma for the design phase enabled me to craft intuitive and user-centered layouts, ensuring an optimal user experience across different devices and platforms. The portfolio website serves as a showcase of my work, skills, and experiences in the field of web development. To view the prototype in Figma, <a className='figma' href='https://www.figma.com/design/mFAX3Sh8JX9UOBzEzXoz43/Portfolio-Website?node-id=0-1&t=klc5s35Aoypy5n0F-0' target='_blank' rel='noopener noreferrer'>CLICK HERE</a>.</div>
                        <br />
                        <div className='description'><span className='color'>PROJECT 2:</span> I developed a gym workout web application using React.js, Bootstrap, and CSS. The application, inspired by popular fitness platforms, offers a range of exercise routines tailored for different days and goals. Users can easily navigate through the exercises, track their progress, and customize their workout plans. I designed the website using Figma to create intuitive and user-friendly interfaces, ensuring a seamless user experience. The use of React.js provided a dynamic and responsive user interface, while Bootstrap and CSS were utilized for styling and layout design. To view the prototype in Figma, <a className='figma' href='https://www.figma.com/design/ZcBuNbQCwRQiQO5UExEmNX/Acti-Fitness-Website?t=QDoEvwAB6NHHI8Tw-0' target='_blank' rel='noopener noreferrer'>CLICK HERE</a>. To view the web application, <a className='figma' href='https://actifitness.netlify.app/' target='_blank' rel='noopener noreferrer'>CLICK HERE</a>.</div>
                        <br />
                        <div className='description'><span className='color'>PROJECT 3:</span> I am serving as the lead front-end developer for an ERP system designed specifically for my pharmacy, utilizing Next.js and Tailwind CSS. In collaboration with a team of backend developers and another front-end developer, I am spearheading the construction of this system, ensuring seamless integration of front-end functionalities with backend systems to optimize pharmacy operations. To view the code on github, <a className='figma' href='https://github.com/ephnie-o/erp-system' target='_blank' rel='noopener noreferrer'>CLICK HERE</a>.</div>
                        <br />
                        <div className='description'><span className='color'>PROJECT 4:</span> I am part of the front-end development team for an ERP system using Nuxt.js. I focus on implementing responsive designs, developing Vue.js components, managing state with Vuex, and integrating backend APIs. I also optimize performance, ensure code quality through testing, and collaborate closely with other team members to enhance the user experience with server-side rendering (SSR).</div>
                        <br />
                        <a className='figma' href='https://github.com/ephnie-o/' target='_blank' rel='noopener noreferrer'>CLICK HERE TO VIEW MY PROJECTS ON GITHUB!!</a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Project;