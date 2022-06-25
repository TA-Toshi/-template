import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './Main';
import Category from './Category';
import Search from './Search';
import LeftBar from './LeftBar';
import Footer from './Footer';
export const ForSearch = React.createContext<string>("");
import useToken from './Token';

function App() {

    let ClientId = "e580bfc31e834052b28dd8c82a1168ad"
    let ClientSecret = "286f5e1d0c594e5c8409484cdd2e3a41"

    const [category, setCategory] = useState([]);

    let Tok = ''
    Tok  =  useToken('q')
    console.log(Tok)
    

    useEffect(() => {
        
        if (Tok != '') {

            fetch('https://api.spotify.com/v1/browse/categories', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + Tok
                }
            }).then((result) => {
                if (!result.ok) {
                    return Promise.reject(result.status);
                }
                else {
                    return result.json();
                }
            }).then((data) => {
                setCategory(data.categories.items);
            })

        }
    }, [Tok]);

    return (
        <div className="App">
            <Router>
                <ForSearch.Provider value={Tok}>
                    <header className="left-bar">
                        <LeftBar />
                    </header>
                    <main className="top_bar">
                        <nav className="top_bar_container">
                            <div className="top_bar_container_lr">
                                <div className="buttons_top_bar">
                                    <button className="but_top_bar">
                                        <svg role="img" height="24" width="24" viewBox="0 0 24 24"><path fill="rgb(207, 207, 207)" d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path></svg>
                                    </button>
                                    <button className="but_top_bar">
                                        <svg role="img" height="24" width="24" viewBox="0 0 24 24"><path fill="rgb(207, 207, 207)" d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path></svg>
                                    </button>
                                </div>
                                <Search />
                                <div className="butLog_top_bar">
                                    <button className="registr">
                                        Зарегистрироваться
                                    </button>
                                    <button className="login" type="button">
                                        Войти
                                    </button>
                                </div>
                            </div>
                        </nav>
                        <Routes>
                            <Route path='/category' element={<Category data={category} />}>
                            </Route>
                            <Route path='/' element={<Main/>}>
                            </Route>
                        </Routes>
                    </main>
                    <footer className="footer_bar">
                        <Footer />
                    </footer>
                </ForSearch.Provider>
            </Router>
        </div>
    )
}

export default App;
