import React, {useState} from 'react'
import './Book.css'
import Header from '../Header/Header'
import Body from '../Body/Body'

function Book() {
    const[input, setInput]= useState('')
  const  handleonChange=(event)=>
    setInput(event.target.value)
  return (
    <div> <Header/>
    <div class='container'>
      <div class= 'form-design'>
        <h1>Publish <span>Book</span></h1>
      <input type='text' class='area' value={input} onChange={handleonChange} placeholder='Enter your book title here'/><br/>
      <input type='text'class='area' value={input} onChange={handleonChange} placeholder='Enter your book excerpt here'/><br/>
      <input type='text'class='area' value={input} onChange={handleonChange} placeholder='Enter your book ISBN here'/><br/>
      <input type='text'class='area' value={input} onChange={handleonChange} placeholder='Enter your book category here'/><br/>
      <input type='text'class='area' value={input} onChange={handleonChange} placeholder='Enter your book subcategory here'/><br/>
      <h4>Please Enter your book cover here</h4>
      <input type='file'class='area' value={input} onChange={handleonChange}/><br/>
      <button type='submit' class='submit'>Submit</button>
      </div>
    
    <Body/>
    </div></div>
  )
}

export default Book