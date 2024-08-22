import adult from '../../assets/adult.svg';
import transmis from '../../assets/akp.svg';
import engine from '../../assets/patrol.svg';
import kitchen from '../../assets/kitch.svg';
import beds from '../../assets/beds.svg';
import airConditioner from '../../assets/ac.svg';
import css from './Features.module.css';
import { useLocation } from 'react-router-dom';
import FeaturesBookForm from '../featuresBookForm/FeaturesBookForm';

const Features = () => {

    const location = useLocation();
    const camper = location.state.selectedCamper;

    if (!camper) return null;

    return (

        <>
            <ul className={css.featureList}>
                <li className={css.featureItem}>
                    <img src={adult} alt="Adults" className={css.featureIcon} />
                    {`${camper.adults} adults`}
                </li>
                <li className={css.featureItem}>
                    <img src={transmis} alt="Transmission" className={css.featureIcon} />
                    {camper.transmission}
                </li>
                <li className={css.featureItem}>
                    <img src={engine} alt="Engine" className={css.featureIcon} />
                    {camper.engine}
                </li>
                <li className={css.featureItem}>
                    <img src={kitchen} alt="Kitchen" className={css.featureIcon} />
                    {camper.details.kitchen ? 'Kitchen' : 'No Kitchen'}
                </li>
                <li className={css.featureItem}>
                    <img src={beds} alt="Beds" className={css.featureIcon} />
                    {`${camper.details.beds} beds`}
                </li>
                <li className={css.featureItem}>
                    <img src={airConditioner} alt="Air Conditioner" className={css.featureIcon} />
                    {camper.details.airConditioner ? 'AC' : 'No AC'}
                </li>
            </ul>
            <FeaturesBookForm />
        </>

    );
};

export default Features;
