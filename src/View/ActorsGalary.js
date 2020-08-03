import React from "react"
import ActorCard from "../Components/ActorCard";

const ActorGalary = (props) => {
    const { actors } = props;
    console.log(actors);

    const ListActors = actors.map(item => {
        console.log(item);
        return <ActorCard fname={item.fname} lname={item.lname}
            birthday={item.birthday} imgUrl={item.imgUrl} linkIMDB={item.linkIMDB} />
    })

    return (
        <div>
            {ListActors}
        </div>
    );

}

export default ActorGalary;