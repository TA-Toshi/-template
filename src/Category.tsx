import React from 'react';
import Hook from './Hook';


const Category = () => {
    
    let data = Hook('https://api.spotify.com/v1/browse/categories')
    if (data !== null) {
        return (
            <div className="main_Pl">
                <article className="article_Pl">
                    <h2 className="pls_type">
                        Категории
                    </h2>
                    <div className="main_Pl">
                        <div className="pl_list">
                            {data.categories?.items.map((element) =>
                                <div className="playlists" key={element.id}>
                                    <div className="pl_png_button">
                                        <div className="png_Pl">
                                            <img className="img-Pl" src={element.icons[0].url} />
                                            <button className="pl_button">
                                                <svg role="img" height="24" width="24" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                                            </button>
                                        </div>
                                        <div className="pl_name_text">
                                            <div className="pl_name">
                                                {element.name}
                                            </div>
                                            <div className="pl_text">
                                                текстовый текст
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </article>
            </div>)
    } else {
        return (<div></div>)
    }


}




export default Category