import "../App.css"

export function SharedContent({page}){
    return(
        <div className="shared-greeting">
            <Greeting pageName={page}/>
        </div>
    );
}

const today = new Date();

function Greeting({pageName}){
    return(
        <>
            <h1 className="welcome-message"> Welcome to {pageName} </h1>
            <h3 className="date-today"> Today is {formatDate(today)} </h3>
        </>
    );
}

function formatDate({date}){
    return new Intl.DateTimeFormat(
        "en-US",
        {   weekday: "long",
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        }
    ).format(date);
}