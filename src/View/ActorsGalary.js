import React from "react"

const ActorGalary = (props) => {
    const { actors } = props;
    console.log(actors);
    return (
        <div>
            ActorGalary items{actors.length}
        </div>
    )

}

export default ActorGalary;