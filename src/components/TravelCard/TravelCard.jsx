import "./TravelCard.css"

export default function TravelCard(props) {
    return (
        <div className="travel-card">
            <img src={props.imageUrl} className="travel-card--img" />
            <div className="travel-card--body">
                <div className="travel-card--location">
                    <img src="/location-icon.png" />
                    <p>{props.location.toUpperCase()}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="travel-card--title">
                    {props.title}
                </h1>
                <p className="travel-card--dates bold">
                    {props.startDate} - {props.endDate}
                </p>
                <p className="travel-card--description">
                    {props.description}
                </p>
            </div>
        </div>
    )
}