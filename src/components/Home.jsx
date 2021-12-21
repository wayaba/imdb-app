import React, { useState, useEffect } from "react";
import { themoviedbService } from "../services/Themoviedb.service";

const Home = () => {
    const [popular, setPopular] = useState(null)

    useEffect(() => {
        const a = themoviedbService.getPopular().then(data => setPopular(data))
    }, [])

    function drawTable(data) {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Poster</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((reg, index) => {
                    const src = "https://image.tmdb.org/t/p/w500" + reg.poster_path
                    return (
                        <tr key={index}>
                            <td>
                                <p>{reg.original_title}</p>
                            </td>
                            <td>
                                <img src={src} width="150" height="200"/>
                            </td>
                            <td>
                                <p>{reg.overview}</p>
                            </td>
                        </tr>
                    )
                })
                }    
            </tbody></table>)
    }


    return <>{popular ? drawTable(popular.results) : ""}</>
}

export default Home