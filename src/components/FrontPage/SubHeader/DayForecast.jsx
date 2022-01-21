import Icon from "../Icons";
import "./currentForecast.css";

const DayForecast = ({weather}) => {

    const getWeekday = (day) => {
        switch(day) {
            case 0:
                return "Sek"
            case 1:
                return "Pir"
            case 2:
                return "An"
            case 3:
                return "Tre"
            case 4:
                return "Ket"
            case 5:
                return "Pen"
            case 6:
                return "Sest"
        }
    }

    return (
        <div className="card col-3 ms-1">
            <div className="card-body">
                <p className="m-0 text-center fs-4">{getWeekday(new Date(weather.forecastTimeUtc).getDay())}</p>
                <div className="d-flex align-items-center justify-content-center daily">
                    <Icon condition={weather.conditionCode} />
                </div>
                <div className="d-flex justify-content-between">
                    <p className="m-0 fs-3">{weather.airTemperature}<sup>o</sup></p>
                    <p className="m-0 fs-5">{weather.conditionCode}</p>
                </div>
            </div>
        </div>
    )
} 

export default DayForecast;