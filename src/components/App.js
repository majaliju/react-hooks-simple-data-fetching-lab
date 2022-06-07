// create your App component here

import React, {useState, useEffect} from "react";

function App() {
  const [image, setImage] = useState("");
  // const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => {
        // setIsLoaded(true)
        setImage(data.message)
        // setIsLoaded(!isLoaded)
      })
  }, [])

  // if (isLoaded === false) return <p>Loading...</p>

  return (
      image ? <img src={image} alt="A Random Dog" /> :  <p>Loading...</p> 
  )
}

export default App;