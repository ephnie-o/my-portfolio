import Image from 'react-bootstrap/Image';
import me from '../__assets__/images/Me.jpeg';

const Home = () => {
    return(
        <section className='meContainer'>
            <Image className='me' src={me} fluid />
        </section>
    );
}

export default Home;
