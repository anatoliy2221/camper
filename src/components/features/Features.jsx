import { useOutletContext } from 'react-router-dom';
import adult from '../../assets/adult.svg';
import transmis from '../../assets/akp.svg';
import engine from '../../assets/patrol.svg';
import kitchen from '../../assets/kitch.svg';
import beds from '../../assets/beds.svg';
import airConditioner from '../../assets/ac.svg';
import css from './Features.module.css';

const Features = () => {
    const selectedCamper = useOutletContext();

    if (!selectedCamper) return null;

    return (
        <div className={css.container}>
            <ul className={css.featureList}>
                <li className={css.featureItem}>
                    <img src={adult} alt="Adults" className={css.featureIcon} />
                    {`${selectedCamper.adults} adults`}
                </li>
                <li className={css.featureItem}>
                    <img src={transmis} alt="Transmission" className={css.featureIcon} />
                    {selectedCamper.transmission}
                </li>
                <li className={css.featureItem}>
                    <img src={engine} alt="Engine" className={css.featureIcon} />
                    {selectedCamper.engine}
                </li>
                <li className={css.featureItem}>
                    <img src={kitchen} alt="Kitchen" className={css.featureIcon} />
                    {selectedCamper.details.kitchen ? 'Kitchen' : 'No Kitchen'}
                </li>
                <li className={css.featureItem}>
                    <img src={beds} alt="Beds" className={css.featureIcon} />
                    {`${selectedCamper.details.beds} beds`}
                </li>
                <li className={css.featureItem}>
                    <img src={airConditioner} alt="Air Conditioner" className={css.featureIcon} />
                    {selectedCamper.details.airConditioner ? 'AC' : 'No AC'}
                </li>
            </ul>
        </div>
    );
};

export default Features;
