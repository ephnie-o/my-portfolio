import Image from 'react-bootstrap/Image';
import me from '../__assets__/images/Me.jpeg';

const Home = () => {
    return(
        <section className='meContainer'>
            <Image className='me' src={me} fluid alt='A picture of Stephanie Odoom' />
        </section>
    );
}

export default Home;
