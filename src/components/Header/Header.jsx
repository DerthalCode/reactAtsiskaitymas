import { useState } from "react";
import {BsSearch} from "react-icons/bs";

const Header = ({searchHandler}) => {
    const [input, setInput] = useState("");
    
    const submitHandler = (e) => {
        e.preventDefault(); 
        searchHandler(input); 
        setInput("")
    }

    return (
        <header className="bg-primary py-2">
            <div className="d-flex align-items-center">
                <h1 className="text-white me-5">Weather App</h1>
                <form className="col-5 d-flex" onSubmit={submitHandler}>
                    <input  onChange={(e) => setInput(e.target.value)} 
                            value={input}
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="Iveskite miesta"/>
                    <button type="submit" 
                        className="w-auto btn btn-light px-3">
                        <BsSearch />
                    </button>
                </form>
            </div>
        </header>
    )
}

export default Header;