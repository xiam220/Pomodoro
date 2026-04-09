import "./App.css"

const today = new Date();

export function formatDate(date){
    return new Intl.DateTimeFormat(
        "en-US",
        {   weekday: "long",
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        }
    ).format(date);
}

export function Greeting(){
    // const name = "Jane Doe"; //move to parameter
    return(
        <>
            <h1 className="welcome-message"> Welcome to Pomodoro </h1>
            <h2 className="date-today"> Today is {formatDate(today)} </h2>
        </>
    );
}

function handleClick(){
    alert("you got me");
}

export function PomodoroMode(){
    return(
        // <>
            <div className="difficulty-selection">
                <button className="difficulty-mode" onClick={handleClick}> Classic Pomodoro </button>
                <button className="difficulty-mode" onClick={handleClick}> Restrictive Pomodoro </button>
            </div>
        // </>
    );
}