import { useState,useEffect, use } from "react"

export default function Main(){

    const [ meme , setMeme ] = useState({
        topText : "Walk into Mordor",
        bottomText : "One does not simply" ,
        imageUrl : "http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event){
        const {value,name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }

    const [ allMemes , setAllMemes ] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    },[])

    return(
        <main>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>

            <div className="form">
                <label>Top Text
                    <input 
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input 
                        type="text" 
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button>Get a new meme image !</button>
            </div>
            
        </main>
    )
}
