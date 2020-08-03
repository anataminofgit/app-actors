import React from "react"
import  ActorCard from "../Components/ActorCard";

const ActorGalary = (props) => {
    const { actors } = props;
    console.log(actors);

    const ListActors = actors.map(actor => <ActorCard actor={actor}/>)
        
    return (
       <div>
            {ListActors}
        </div>
    );

}

export default ActorGalary;