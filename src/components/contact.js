import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import xIcon from '../__assets__/images/xIcon.jpeg';
import Image from 'react-bootstrap/Image';

const Contact = () =>{
const [showTopBtn, setShowTopBtn] = useState(false);

useEffect(() => {
    window.addEventListener('scroll', ()=> {
        if(window.scrollY > 400){
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    })
}, [])

function goTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

    return(
        <section className='contact'>
            <Container fluid>
                <div>
                    <h4 className='subtitle'>CONTACT ME</h4>
                    <p className='description'>-Click on any of these to contact me directly-</p>
                </div>
                <Row>
                    <Col>
                        <ul>
                            {/* eslint-disable-next-line */}
                            <li className='telList'>
                                <a href='tel:+233209156415'>
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                </a>
                                <a className='telLink' href='tel:+233209156415'>
                                    <p className='tel'>+233209156415</p>
                                </a>
                            </li>
                            {/* eslint-disable-next-line */}
                            <li>
                                <a href='mailto:stephanieodoom25@gmail.com?subject=Subject%20Here&body=Message%20Here'>
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </a>
                            </li>
                            {/* eslint-disable-next-line */}
                            <li>
                                <a href='https://wa.me/+233209156415' target='_blank' rel='noopener noreferrer'>
                                    <i className="fa fa-whatsapp" aria-hidden="true"></i>
                                </a>
                            </li>
                            {/* eslint-disable-next-line */}
                            <li>
                                <a href='https://www.linkedin.com/in/stephanie-odoom-ab5761125/' target='_blank' rel='noopener noreferrer'>
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                            </li>
                            {/* eslint-disable-next-line */}
                            <li>
                                <a href='tg://openmessage?user=+233209156415' target='_blank' rel='noopener noreferrer'>
                                    <i className="fa fa-telegram" aria-hidden="true"></i>
                                </a>
                            </li>
                            {/* eslint-disable-next-line */}
                            <li>
                                <a href='https://twitter.com/_ephnie_' target='_blank' rel='noopener noreferrer'>
                                <Image src={xIcon} width='35px' height='35px' className='xIcon'/>
                                </a>
                            </li>
                            {/* eslint-disable-next-line */}
                        </ul>
                    </Col>
                </Row>
                <p className='description'>Copyright &copy; Stephanie Odoom. All rights reserved.</p>
                {
                    showTopBtn && (<div className='go-top' onClick={goTop}></div>)
                }
            </Container>
        </section>
    );
}

export default Contact;