import { useContext } from 'react';
import './ToggleSwitch.css';
import  CurrentTemperatureUnitContext  from '../../Context/CurrentTemperatureUnitContext';

function ToggleSwitch() {
    const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

    return (
        <label className="toggle-switch">
            <input onChange={handleToggleSwitchChange} type="checkbox" className="toggle-switch__checkbox" />
            <span className="toggle-switch__circle"></span>
            <span className={`toggle-switch__text toggle-switch__text_fahr ${ currentTemperatureUnit === "F" ? "toggle-switch__text_color_white" : ""}`}>F</span>
            <span className={`toggle-switch__text toggle-switch__text_cels ${ currentTemperatureUnit === "C" ? "toggle-switch__text_color_white" : ""}`}>C</span>
        </label>
    );
}

export default ToggleSwitch;