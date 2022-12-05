import Bar from "./components/Bar/Bar"
import TravelCard from "./components/TravelCard/TravelCard"
import travelsData from "./travelData"

export default function App() {
    const travelCards = travelsData.map((travelData, index) => {
        return  <div>
                    <TravelCard
                        key={travelData.id}
                        {...travelData}
                    />
                    {index < travelsData.length - 1 && <hr className="separator"></hr>}
                </div>
    })

    return (
        <div>
            <Bar />
            <div className="travels-container">
                {travelCards}
            </div>
        </div>
    )
}