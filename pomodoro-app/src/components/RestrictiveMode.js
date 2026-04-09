import "../App.css"
import { SharedContent } from "./shared-content.js";
import { Link } from "react-router-dom";


export default function RestrictiveMode(){
    return (
        <>
            <div>
                <SharedContent page="Restrictive Pomodoro"/>
            </div> 

            <nav className="navigation">
                <Link className="pomodoro-mode" to="/"> Home </Link>
                <Link className="pomodoro-mode" to="/ClassicPomodoro"> Classic Pomodoro </Link>
            </nav>
        </>
    );
}