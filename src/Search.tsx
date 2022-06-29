import React, {  useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

import ElementType from './ElementType';
import useToken from './Token';

const Search = () => {
    const [item, setItem] = useState('');
    const [arrayItem, setArrayItem] = useState([]);
    

    let Tok = ''
    Tok  =  useToken()


    const setValue = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setItem((event.target as HTMLInputElement).value)
    }

    useEffect(() => {
        if (item != "" && Tok !== '') {
            fetch('https://api.spotify.com/v1/search?q=track:+' + item + '++&type=track', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + Tok
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
    }, [item, Tok])

    const searchResult = () => {
        if (item == "") {
            return (<div></div>)
        }
        else {
            return (
                <div className="search_result">
                    {arrayItem.map((element: ElementType) =>
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