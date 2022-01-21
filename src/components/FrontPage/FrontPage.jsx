import SubHeader from "./SubHeader/SubHeader";
import Hourly from "./Hourly/Hourly";

const  FrontPage = ({weather}) => {

    return (
        <>
            <div className="display-3 w-100 h-100 bg-light">
                {weather.place.name}
            </div>
            <SubHeader weather={weather}/>
            <Hourly weather={weather} />
        </>
    )
}



export default FrontPage;