import { NavLink } from 'react-router-dom';
import '../styles/pages.css';

const Home = () => {
    return (
        <div className='home'>
            <div className='hero'>
                <h1>Campers of your dreams</h1>
                <h3>You can find everything you want in our catalog</h3>
                <NavLink to='/catalog'>
                    <button type='button'> View Now</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Home;
