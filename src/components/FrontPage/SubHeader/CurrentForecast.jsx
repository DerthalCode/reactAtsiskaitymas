import Icon from "../Icons";
import "./currentForecast.css";

const CurrentForecast = ({weather}) => {
    return (
        <div className="current">
            <h3 className="text-white pt-2 ps-2">Dabar</h3>
            <div className="d-flex align-items-center justify-content-center">
                <Icon condition={weather.conditionCode} />
            </div>
            <div className="fs-1 fw-bold text-white">
                {weather.airTemperature} <sup>o</sup>
            </div>
            <div className="text-center text-white fs-2">
                {weather.conditionCode}
            </div>
        </div>
    )
}

export default CurrentForecast;