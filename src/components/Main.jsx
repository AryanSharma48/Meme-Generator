import { useState,useEffect } from "react"

export default function Main(){

    const [meme , setMeme ] = useState({
        topText : "One does not simply",
        bottomText : "Walk into Mordor",
        imageUrl:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes , setAllMemes] = useState([])

    



    return(
        <h1>im main</h1>
    )
}