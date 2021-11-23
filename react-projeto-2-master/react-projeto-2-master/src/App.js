import logo from './logo.svg';
import React, { useState } from 'react';

function App() {

  let [photo, setPhoto] = useState(0)
  
  function getData(){
    fetch('https://api.thecatapi.com/v1/images/search').then(res=>{
      if(res.ok){
        return res.json();
      }

      throw new Error('Request fail');
    }, networkError => console.log(networkError.message)
    ).then(jsonRes=>{
      setPhoto(jsonRes[0].url)
    })
  }

  return (
    <div style={style.body} className="container">
        <div style={style.logoContainer} className="logo">
          <img style={{width: '100px', marginTop: '10px'}} src={logo} alt="logo"/>
          <p style={{textAlign: 'center', marginLeft: '35vw'}}>Hello teacher 🖖 <br /> Carousel with little cats photos 🥰😸</p>
        </div>
        <div style={style.imageConatiner}>
          <img style={style.imgs} src={photo} alt="clique no botão para ver fotos de gatinhos"/>
          <br /><button style={style.button} onClick={getData}>New photo</button>
        </div>
    </div>
  );
}

export default App;


const style={
  body:{
    width: '100vw',
    height: '100vh',
    background: "#104c6c",
  },

  logoContainer:{
    width: "100vw",
    height: '100px',
    background: 'linear-gradient(to left, #005385, #043f5f)',
    display: 'flex'
  },

  imageConatiner:{
    textAlign: 'center',
    margin: 'auto',
  },

  button:{
    textAlign: 'center',
    border: 'none',
    background: 'blue',
    width: '150px',
    height: "40px",
    borderRadius: '50px',
    fontSize: '20px',
    color: 'black',
    cursor: 'pointer'
  },

  imgs:{
    width: '45vw',
    maxWidth: '500px',
    maxHeight: '500px',
    minHeight: '500px'
  }
}