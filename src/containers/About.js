import React, { useState, useEffect} from 'react';
import '../components/App.css';
import AboutCard from '../components/AboutCard';

function About() {

  const [ person, setPerson ] = useState([]);

  useEffect(() => {
    fetch("https://illuminate-website.firebaseio.com/team.json", {
      method: "GET",
    })
    .then(response => {
      return response.json();
    })
    .then(responseData => {
      const updatedperson = responseData.map(person => {
        return ({
          ...person,
        })
    })
    setPerson(updatedperson)
  })
      .catch(error => {
        console.log("Something went wrong! " + error);
      })
  }
    , []);

    let personList = person.map(person => {
      return (
        <AboutCard
          key={Math.random()}
          profilepic={person.imageURL}
          name={person.name}
          bio={person.bio}
        />
      )
    }
    )

  return (
    <div style={{textAlign: "center"}}>
      {personList}
    </div>
  );
}

export default About;