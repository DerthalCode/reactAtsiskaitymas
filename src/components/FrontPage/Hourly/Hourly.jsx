import { useEffect, useState } from "react";
import {MdOutlineArrowBackIos, MdOutlineArrowForwardIos} from "react-icons/md";
import { nanoid } from "nanoid";
import HourlyCard from "./HourlyCard";
import "./hourly.css";

const Hourly = ({weather}) => {
    const [hourly, setHourly] = useState([]);

    useEffect(() => {
        setHourly(weather.forecastTimestamps.filter(data => {
            const date = new Date(data.forecastTimeUtc);
            if (date.getDate() == new Date().getDate() && date.getHours() == new Date().getHours()) {
                return;
            }
            return data;
        }))
    }, [weather])

    return (
        <div className="w-100 d-flex m-auto" style={{maxWidth: "1600px"}}>
            <div
            onClick={() => document.getElementById("tap-scroll").scrollLeft -= 170} 
            className="col-1 border border-muted d-flex justify-content-center align-items-center me-2 tap btn btn-dark">
                <MdOutlineArrowBackIos style={{color: "white", height: "2rem", width: "2rem"}} />
            </div>
            <div className="col-10 d-flex flex-nowrap" id="tap-scroll" style={{overflowX: "scroll"}}>
                {hourly?.map(hour => (<HourlyCard key={nanoid()} hour={hour} />))}
            </div>
            <div
            onClick={() => document.getElementById("tap-scroll").scrollLeft += 170} 
            className="col-1 border border-muted d-flex justify-content-center align-items-center ms-2 tap btn btn-dark">
                <MdOutlineArrowForwardIos style={{color: "white", height: "2rem", width: "2rem"}} />
            </div>
        </div>
    )
}

export default Hourly;