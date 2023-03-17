import React from 'react'
import Body from '../Body/Body'
import Header from '../Header/Header'
import './Main.css'

function Main() {
  return (
    
    <div><Header/>
    <div class='component'>
        <h1><Body/></h1><div class='shift'>Welcome to this e-Library.<br/><h3 style={"color":"red";} >Here, You can register your profile and publish your books. You can request a book for reading reviewing purpose.</h3></div></div></div>
  )
}

export default Main