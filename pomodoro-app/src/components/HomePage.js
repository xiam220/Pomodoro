import "../App.css"
import { SharedContent } from "./shared-content.js";
import { Link } from "react-router-dom";


export default function HomePage(){
    return (
        <>
            <div>
                <SharedContent page="Pomodoro"/>
            </div>   
            
            <nav className="navigation">
                <Link className="pomodoro-mode" to="/ClassicPomodoro"> Classic Pomodoro </Link>
                <Link className="pomodoro-mode" to="/RestrictivePomodoro"> Restrictive Pomodoro </Link>
            </nav>
        </>
    );
}