import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Tour from '../__assets__/images/Tour.jpeg';
import Award from '../__assets__/images/Award.jpeg';
import Gym from '../__assets__/images/Gym.jpeg';

const Services = () =>{
    return(
        <section className='services'>
            <Container>
                <div>
                    <h2 className='subtitle'>Services</h2>
                    <p className='description center'>-Click on each image to view my services-</p>
                </div>
                <Row className='justify-content-between'>
                    <Col xs={12} sm={5} md={3.5} lg={3} className='overlayContainer'>
                        <Image src={Tour} alt="Stephanie on tour" className='photo' />
                        <div className='overlay'>
                            <div className='text'>
                                <h4 className='topic'>Website Development</h4>
                                <p className='content'>Leveraging my skills in ReactJS, I offer front-end web development services tailored to your needs. Whether you're a small business owner looking to establish your online presence or an individual seeking to create a personal website, I can assist you in bringing your vision to life.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={5} md={3.5} lg={3} className='overlayContainer'>
                        <Image src={Award} alt="Stephanie winning an award" className='photo' />
                        <div className='overlay'>
                            <div className='text'>
                                <h4 className='topic'>Pharmaceutical Consultation</h4>
                                <p className='content'>With my background in pharmacy, I can provide expert advice on medication use, potential drug interactions, and overall pharmaceutical care. <b>Click on the link below to access the pharmacy website.</b></p>
                                <br />
                                <p className='content'><a className='slink' href='https://steredapharmacy.com/' target='_blank' rel='noopener noreferrer'>www.steredapharmacy.com</a></p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={5} md={3.5} lg={3} className='overlayContainer'>
                        <Image src={Gym} alt="Stephanie at the gym" className='photo' />
                        <div className='overlay'>
                            <div className='text'>
                                <h4 className='topic'>Fitness Consultation</h4>
                                <p className='content'>
                                    As a gym enthusiast, I can offer guidance on workout plans, fitness goals, and nutrition to help you lead a healthier lifestyle.
                                    <br />
                                    <br />
                                    <i><b>*Workout website coming soon.*</b></i>
                                </p>
                                {/* Click on the link below to access my workout website */}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Services;