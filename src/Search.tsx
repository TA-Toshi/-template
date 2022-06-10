import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ForSearch } from './App';

const Search = (props: any) => {
    const [item, setItem] = useState('');
    const [arrayItem, setArrayItem] = useState([]);
    const token = useContext(ForSearch);

    const setValue = (event: any) => {
        setItem(event.target.value)
    }

    useEffect(() => {
        if (item != "" && token !== '') {
            fetch('https://api.spotify.com/v1/search?q=track:+' + item + '++&type=track', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then((result) => {
                if (!result.ok) {
                    return Promise.reject(result.status);
                }
                else {
                    return result.json()
                }
            }).then((data) => {
                setArrayItem(data.tracks.items);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, [item, token])

    const searchResult = () => {
        if (item == "") {
            return (<div></div>)
        }
        else {
            return (
                <div className="search_result">
                    {arrayItem.map((element: any) =>
                        <div className="search_container_result" key={element.id}>
                            <a>
                                <img className="search_container_result_img" src={element.album.images[0].url}></img>
                                <span className="search_container_result_name">{element.name}</span>
                            </a>
                        </div>
                    )}
                </div>
            )
        }
    }

    let location = useLocation()
    if (location.pathname != "/category") {
        return (<div></div>);

    }
    else {
        return (
            <div className="search_bar">
                <input defaultValue="" className="search_input" type="text" placeholder=" Поиск " onKeyUp={setValue}></input>
                {searchResult()}
            </div>
        )
    }
}

export default Search;