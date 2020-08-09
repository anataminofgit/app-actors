import React from "react"
import ActorCard from "../Components/ActorCard";
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ActorModel from "../data-model/ActorModel";


const ActorGalary = (props) => {
    const { actors, funcActorMovies } = props;
    const [filter, setFilter] = React.useState("");
    const [actorSort, setActorSort] = React.useState(0);

    let listActorsModel = actors.map((item) => {
        const { fname, lname, birthday, imgUrl, linkIMDB } = item;
        return new ActorModel(fname, lname, birthday, imgUrl, linkIMDB);
    });


    listActorsModel = listActorsModel.filter(
        (item) => {
            const { fname, lname } = item;
            const fullName = (fname + lname).toLowerCase();
            return (filter.length > 0 ? fullName.includes(filter.toLowerCase()) : true);
        }
    )

    if (actorSort === "Age") {
        listActorsModel = listActorsModel.sort((a, b) => a.getAge() - b.getAge());
    }
    else if (actorSort === "First") {
        listActorsModel = listActorsModel.sort((a, b) => (a.fname === b.fname) ? 0 : (a.fname > b.fname) ? 1 : -1);
    }
    else if (actorSort === "Last") {
        listActorsModel = listActorsModel.sort((a, b) => (a.lname === b.lname) ? 0 : (a.lname > b.lname) ? 1 : -1);
    }


    const handleActorMovies = (actor) => {
        funcActorMovies(actor);
    }

    const handleChange = (event) => {


        setFilter(event.target.value);
    }

    const dropDownClick = (id) => {
        setActorSort(id);
    }


    const listActorsViews = listActorsModel.map(item => {
        const { fname, lname, birthday, imgUrl, linkIMDB } = item;
        const age = item.getAge();
        return <ActorCard key={linkIMDB} fname={fname} lname={lname}
            birthday={birthday} imgUrl={imgUrl} linkIMDB={linkIMDB} age={age} actorID={`${fname}_${lname}`} funcOnMovieClick={handleActorMovies} />
    });


    return (
        <div>
            <Container>
                <h1>List of Actors</h1>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Filter By</span>
                    </div>
                    <input onChange={handleChange} type="text" className="form-control" aria-label="filter" aria-describedby="basic-addon1"></input>
                    <Dropdown as={ButtonGroup}>
                        <Button variant="success">Sort By</Button>
                        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                        <Dropdown.Menu>
                            <Dropdown.Item key="none" onClick={() => { dropDownClick(null) }} >None</Dropdown.Item>
                            <Dropdown.Item key="First" onClick={() => { dropDownClick("First") }} >First Name</Dropdown.Item>
                            <Dropdown.Item key="last" onClick={() => { dropDownClick("Last") }} >Last Name</Dropdown.Item>
                            <Dropdown.Item key="Age" onClick={() => { dropDownClick("Age") }} >Age</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                </div>
                <CardDeck>
                    {listActorsViews}
                </CardDeck>
            </Container>
        </div>
    );
}

export default ActorGalary;