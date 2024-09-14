import travelTrucks from '../../assets/TravelTrucks.svg';
import css from './Logo.module.css';

const Logo = () => {
    return (
        <div className={css.logo}>
            <img src={travelTrucks} width={136} height={16} alt='TravelTrucks' />
        </div>
    )
};

export default Logo;
