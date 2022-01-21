import { BsSun } from "react-icons/bs";
import {
    WiCloud,
    WiNightClear, 
    WiDayCloudy, WiNightCloudy,
    WiDayRainMix, WiNightAltRainMix,
    WiCloudy,
    WiDayShowers, WiNightAltShowers,
    WiDayRain, WiNightAltRain,
    WiDaySleet, WiNightAltSleet,
    WiDaySnow, WiNightAltSnow,
    WiFog,
    WiNa,
    WiRain,
    WiRainMix
    } from "react-icons/wi"

const Icon = ({condition, hour}) => {
    let evening;
    if (!isNaN(hour)) {
        evening = hour > 18 || hour < 6
    } else {
        const now = new Date().getHours() 
        evening = now > 18 || now < 6;
    }
    switch(condition) {
        case "clear":
            return evening ? <WiNightClear className="moon" /> : <BsSun className="sun"/>
        case "isolated-clouds":
            return evening ? <WiNightCloudy /> : <WiDayCloudy className="isolated-clouds"/>
        case "scattered-clouds":
            return evening ? <WiNightAltRainMix /> : <WiDayRainMix className="scattered-clouds" />
        case "overcast":
            return <WiCloudy className="overcast" />
        case "light-rain":
            return evening ? <WiNightAltShowers /> : <WiDayShowers className="light-rain" />
        case "moderate-rain":
            return <WiRainMix />
        case "heavy-rain":
            return <WiRain />
        case "sleet":
            return evening ? <WiNightAltSleet /> : <WiDaySleet className="sleet" />
        case "light-snow":
            return evening ? <WiNightAltSnow /> : <WiDaySnow className="snow"/>
        case "moderate-snow":
            return evening ? <WiNightAltSnow /> : <WiDaySnow className="snow" />
        case "heavy-snow":
            return evening ? <WiNightAltSnow /> : <WiDaySnow className="snow"/>
        case "fog":
            return <WiFog />
        case "na":
            return <WiNa />
    }
}

export default Icon;