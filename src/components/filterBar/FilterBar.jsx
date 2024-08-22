import VehicleType from '../vehicleType/VehicleType';
import VehicleEquipment from '../vehicleEquipment/VehicleEquipment';
import InputFormLocation from '../locationFilter/LocationFilter';
import css from './FilterBar.module.css';



const FilterBar = () => {
    return (
        <form>
            <InputFormLocation />
            <p className={css.text}>Filters</p>
            <VehicleEquipment />
            <VehicleType />
        </form>
    )
}

export default FilterBar;