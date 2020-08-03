import React from "react"
import ActorModel from "../data-model/ActorModel";

const ActorCard = (props) => {
    const { fname, lname, birthday, imgUrl, linkIMDB } = props;
    console.log("props",props)
    const actor = new ActorModel(fname, lname, birthday, imgUrl, linkIMDB);

    return (
        <div>
            actor name : {actor.fname + " " + actor.lname}
            age: {actor.getAge()}
        </div>
    )
};
export default ActorCard;