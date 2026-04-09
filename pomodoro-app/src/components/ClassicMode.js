import "../App.css"
import { SharedContent } from "./shared-content.js";
import { Link } from "react-router-dom";

export default function ClassicMode(){
    return (
        <>
            <div>
                <SharedContent page="Classic Pomodoro"/>
            </div>    

            <nav className="navigation">
                <Link className="pomodoro-mode" to="/"> Home </Link>
                <Link className="pomodoro-mode" to="/RestrictivePomodoro"> Restrictive Pomodoro </Link>
            </nav> 
        </>
    );
}