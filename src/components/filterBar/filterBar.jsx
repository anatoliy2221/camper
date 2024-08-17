import VehicleType from '../vehicleType/VehicleType';
import VehicleEquipment from '../vehicleEquipment/VehicleEquipment';
import Location from '../location/Location';


const FilterBar = () => {
    return (
        <>
            <Location />
            <p>Filters</p>
            <VehicleEquipment />
            <VehicleType />

        </>
    )
}

export default FilterBar;