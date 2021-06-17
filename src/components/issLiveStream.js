import { useState, useEffect } from "react"
import { NavLink } from 'react-router-dom'

export default function IssLiveStream () {


    return (

    <div>
    <h1> ISS Live Stream </h1>

     <iframe width="720" height="480" src="https://ustream.tv/embed/9408562?autoplay=1" scrolling="no" allowfullscreen webkitallowfullscreen frameborder="0"></iframe>

    </div>

)}