import Icon from "../Icons";
import {WiHumidity, WiCloud, WiRain, WiStrongWind, WiBarometer} from "react-icons/wi";

const HourlyCard = ({hour}) => {
    return (
        <div className="card me-2 col-2">
            <div className="card-body d-flex flex-column justify-content-between">
                <p className="text-center fs-5">{new Date(hour.forecastTimeUtc).getHours()}:00</p>
                <div className="text-center hourly">
                    <Icon condition={hour.conditionCode} hour={new Date(hour["forecastTimeUtc"]).getHours()} />
                    <p className="mb-0 mt-1 fs-4">{Math.round(hour.airTemperature)}<sup>o</sup></p>
                    <p className="my-1 fs-4">
                        {hour.conditionCode}
                    </p>
                </div>
                <div className="stats text-center">
                    <WiHumidity style={{height: "2rem", width: "2rem"}}/>
                    <p className="mb-1">{hour.relativeHumidity} %</p>
                    <WiCloud style={{height: "2rem", width: "2rem"}} />
                    <p className="mb-1">{hour.cloudCover} %</p>
                    <WiRain style={{height: "2rem", width: "2rem"}} />
                    <p className="mb-1">{hour.totalPrecipitation} mm</p>
                    <WiBarometer style={{height: "2rem", width: "2rem"}} />
                    <p className="mb-1">{hour.seaLevelPressure} hPa</p>
                    <WiStrongWind style={{height: "2rem", width: "2rem"}} />
                    <p className="mb-1">{hour.windSpeed} m/s</p>
                </div>
            </div>
        </div>
    )

}

export default HourlyCard;