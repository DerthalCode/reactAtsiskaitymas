import { useEffect, useState } from "react";
import {FaArrowRight} from "react-icons/fa";
import CurrentForecast from "./CurrentForecast";
import DayForecast from "./DayForecast";
import { nanoid } from "nanoid";

const SubHeader = ({weather}) => {
    const [weatherNow, setWeatherNow] = useState({});

    useEffect(() => {
        const today = new Date();
        const indexOfNow = weather.forecastTimestamps.findIndex(element => {
            const date = new Date(element.forecastTimeUtc);
            if (date.getDate() == new Date().getDate() && date.getHours() == new Date().getHours()){
                return true;
            }
        })

        setWeatherNow(weather.forecastTimestamps[indexOfNow]);
        
    }, [weather])


  
    return (
        <div className="pb-1" style={{height: "330px",  backgroundImage: "url(https://media.istockphoto.com/photos/storm-sky-rain-picture-id512218646?k=20&m=512218646&s=612x612&w=0&h=C-2Gn8nsMG-o7QNiXYPqu4FeJJFABhPpe4rTG0CIMWQ=)"}}>
            <div className="container h-100 d-flex align-items-end position-relative">
                <div className="border col-3" style={{height: "80%"}}>
                    {Object.keys(weatherNow).length && <CurrentForecast weather={weatherNow} />}
                </div>
                <div className="border col-9 d-flex flex-nowrap tap-scroll" style={{height: "60%",overflowY: "hidden", overflowX: "scroll"}}>
                    {weather.forecastTimestamps.filter(forecast => (new Date(forecast["forecastTimeUtc"]).getHours() == 12))
                    .map(forecast => (<DayForecast key={nanoid()} weather={forecast}/>))}
                </div>
                <div
                onClick={() => document.querySelector(".tap-scroll").scrollLeft += 100} 
                className="border position-absolute d-flex align-items-center justify-content px-1 btn btn-dark" style={{ bottom: "0", right: "-35px", height: "60%"}}>
                    <FaArrowRight style={{fontSize: "2rem"}}/>
                </div>
            </div>
        </div>
    )
}

export default SubHeader;