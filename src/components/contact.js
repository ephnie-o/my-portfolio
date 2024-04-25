import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import xIcon from '../__assets__/images/xIcon.jpeg';
import phone from '../__assets__/images/phone.jpeg';
import mail from '../__assets__/images/mail.jpeg';
import telegram from '../__assets__/images/telegram.png';
import linkedin from '../__assets__/images/linkedin.jpeg';
import whatsapp from '../__assets__/images/whatsapp.jpeg';
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
                            <li className='telList'>
                                <a href='tel:+233209156415' data-testid="phone-icon">
                                <Image src={phone} className='icon'/>
                                </a>
                                <a className='telLink' href='tel:+233209156415'>
                                    <p className='tel'>+233209156415</p>
                                </a>
                            </li>
                            <li>
                                <a href='mailto:stephanieodoom25@gmail.com?subject=Subject%20Here&body=Message%20Here' data-testid="email-icon">
                                <Image src={mail} className='icon'/>
                                </a>
                            </li>
                            {/* eslint-disable-next-line */}
                            <li>
                                <a href='https://wa.me/+233209156415' target='_blank' rel='noopener noreferrer' data-testid="whatsApp-icon">
                                <Image src={whatsapp} className='icon'/>
                                </a>
                            </li>
                            {/* eslint-disable-next-line */}
                            <li>
                                <a href='https://www.linkedin.com/in/stephanie-odoom-ab5761125/' target='_blank' rel='noopener noreferrer' data-testid="linkedIn-icon">
                                <Image src={linkedin} className='icon'/>
                                </a>
                            </li>
                            <li>
                                <a href='tg://resolve?domain=Ephnie' target='_blank' rel='noopener noreferrer' data-testid="telegram-icon">
                                <Image src={telegram} className='icon'/>
                                </a>
                            </li>
                            <li>
                                <a href='https://twitter.com/_ephnie_' target='_blank' rel='noopener noreferrer'  data-testid="X-icon">
                                <Image src={xIcon} className='icon'/>
                                </a>
                            </li>
                            {/* eslint-disable-next-line */}
                        </ul>
                    </Col>
                </Row>
                <p className='description'>Copyright &copy; Stephanie Odoom. All rights reserved.</p>
                {
                    showTopBtn && (<div className='go-top' data-testid="go-top" onClick={goTop}></div>)
                }
            </Container>
        </section>
    );
}

export default Contact;