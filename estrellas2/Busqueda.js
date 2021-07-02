import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

import '../../css/app.css'
import axios from 'axios';

const testData = [
    {name: "Kevin Quemag", avatar_url: "https://avatars.githubusercontent.com/u/61263822?v=4", company: "GitHub"},
    {name: "Francisco Jumbo", avatar_url: "https://avatars.githubusercontent.com/u/61259614?v=4", company: "GitHub"},
    {name: "Fernando Rivera", avatar_url: "https://avatars.githubusercontent.com/u/47802477?v=4", company: "GitHub"},
    {name: "Erick Damian", avatar_url: "https://avatars.githubusercontent.com/u/67754832?v=4", company: "GitHub"},
    {name: "Mauricio Matango", avatar_url: "https://avatars.githubusercontent.com/u/61792044?v=4", company: "GitHub"},

];

const Listas = (props) => (
	<div>

  	{props.profiles.map(profile => <Tarjetas key={profile.name} {...profile}/>)}


    {props.profiles2.map(profile2 => <Tarjetas key={profile2.name} {...profile2}/>)}
	</div>
);


const Tarjetas = (props) => {


  return (
    <div className="github-profile">
      <img src={props.avatar_url} />
      <div className="info">
      <div className="name">{props.name}</div>
      <div className="company">{props.company}</div>
      </div>
      
    </div>
  )
}

export const Formulario = (props) => {

  const [userName, setUserName] = useState("")

  const handleSubmit = async(e) =>{
    e.preventDefault()
    const resp = await axios.get(`https://api.github.com/users/${userName}`)

    props.onSubmit(resp.data)
    setUserName("")

  }

  return (
    <div>
      	<form onSubmit={handleSubmit}>
    	  <input 
        type="text" 
        placeholder="usuario de github" 
        value={userName} 
        onChange={e => setUserName(e.target.value)}/>
        <button>Añadir</button>
    	</form>
    </div>
  )
}

export const App = () => {

  const [profiles] = useState(testData)

  const [profiles2, setProfiles2] = useState([])

  const addNewProfile = (profileData) =>{
    setProfiles2(
      [...profiles2,profileData]
      )
  }

  return (
    <div>

      <div className="header"> 
        <h1>
          Tarjetas de Github
        </h1>
      </div>
      
      <Formulario onSubmit= {addNewProfile}/>

      <Listas profiles = {profiles}
      
      profiles2 = {profiles2}
      ></Listas>

    </div>
    
  )
}

if (document.getElementById('contenedor')) {
    ReactDOM.render(<App/>, document.getElementById('contenedor'));
}