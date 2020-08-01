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

      <div className='flexSection flex-center'>
        <h1>contact</h1>
        <form className='flexSection' action="" method="post">
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="" id=""/>
          </div>

          <div>
            <label htmlFor="purpose">Purpose:</label>
            <input type="text" name="" id=""/>
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" name="" id=""/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default About;