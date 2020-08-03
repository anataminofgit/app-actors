import React from "react"
import ActorModel from "../data-model/ActorModel";

const ActorCard = (props) => {
    const { fname, lname, birthday, imgUrl, linkIMDB } = props;
    const actor = new ActorModel(fname, lname, birthday, imgUrl, linkIMDB);

    return (
        <div>
            actor {actor.getAge()}
        </div>
    )
};
export default ActorCard;