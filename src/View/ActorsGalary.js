import React from "react"
import ActorCard from "../Components/ActorCard";
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'


const ActorGalary = (props) => {
    const { actors } = props;
    const [filter, setFilter] = React.useState("");


    const listActors = actors
        .filter(
            (item) => {
                const { fname, lname } = item;
                const fullName = (fname + lname).toLowerCase();
                return (filter.length > 0 ? fullName.includes(filter.toLowerCase()) : true);
            }
        ).map(item => {
            return <ActorCard fname={item.fname} lname={item.lname}
                birthday={item.birthday} imgUrl={item.imgUrl} linkIMDB={item.linkIMDB} />
        })

    console.log("list ", listActors)
    const handleChange = (event) => {
        setFilter(event.target.value);
    }



    return (
        <div>
            <Container>
                <h1>List of Actors</h1>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Filter By</span>
                    </div>
                    <input onChange={handleChange} type="text" class="form-control" aria-label="filter" aria-describedby="basic-addon1"></input>
                  

                </div>
                <CardDeck>
                    {listActors}
                </CardDeck>
            </Container>
        </div>
    );

}

export default ActorGalary;