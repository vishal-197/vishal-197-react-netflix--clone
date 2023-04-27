import React, {useState} from 'react'
import axios from 'axios';

function SearchMovie() {
    
    const [input, setInput] = useState("");
    const [movies, setMovies] = useState([]);
    const img_full_path = "https://image.tmdb.org/t/p/original";

    const resultStyle ={
    display: "flex",
    justifyContent: "space-between",
    alignItem: "center",
    flexWrap: "wrap",
    };

    const movieStyle={
        width: "22%",
        height: "100%",
        margin: "2rem 1rem",
    }
    const imgStyle={
        width:"80%",
        height:"70%",
    }
  
    function handleChange(e){
        setInput(e.target.value)

    }

    function handleSubmit(e){
        e.preventDefault()
        return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3a0c4dd223a8f1dfe67839464bdde91a&language=en-US&query=${input}&page=1&include_adult=false`).then((result)=>{
            console.log(result.data)
            setMovies(result.data.results)
         
        })
  

    }

  return (
    <>
    <form onSubmit={handleSubmit}>

    <input type='text' placeholder='search here' value={input} onChange={handleChange}/>
    <button>search</button>
    </form>

    <div style={resultStyle}>
        {movies.map((movie,index)=>{
            return(
                <div key={index} style={movieStyle}>
                    <div>
                        <img src={img_full_path+movie.poster_path} alt={movie.title} style={imgStyle}/>
                        <h3>{movie.title}</h3>
                        <h4>{movie.release_date}</h4>
                        <p>{movie.overview}</p>
                    </div>

                    </div>

            )
        })}
    </div>

    </>

  )
}

export default SearchMovie