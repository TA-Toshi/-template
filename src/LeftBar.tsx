import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GeneralSvg from './GeneralSvg';
import SearchSvg from './SearchSvg';
import LogoSvg from './LogoSvg';
import MediaSvg from './MediaSvg';
import MakeButton from './MakeButton';
import LeibeButton from './LiebeButton';
function LeftBar(){
    return(
        <nav className="left_bar_nav">
            <div className="left_container">
                <div className="logo_container">
                    <a className="logo_container_enter">
                        <LogoSvg />
                    </a>
                </div>
                <ul className="left_bar_array">
                    <li className="left_bar_array_li">
                        <Link className="left_bar_array_li_enter" to="/">
                            <GeneralSvg />
                            <span className="left_bar_array_li_content">
                                Главная
                            </span>
                        </Link>
                    </li>
                    <li className="left_bar_array_li">
                        <Link className="left_bar_array_li_enter" to="/category">
                            <SearchSvg />
                            <span className="left_bar_array_li_content">
                                Поиск
                            </span>
                        </Link>
                    </li>
                    <li className="left_bar_array_li">
                        <Link className="left_bar_array_li_enter" to="/">
                            <MediaSvg />
                            <span className="left_bar_array_li_content">
                                Моя Медиатека
                            </span>
                        </Link>
                    </li>
                </ul>
                <div className="left_bar_bottom_buttons">
                    <MakeButton />
                    <LeibeButton />
                </div>
            </div>
            <div className="left_bar_bottom_content_list">
                <div className="left_bar_bottom_content_list_tail">
                    <a>
                        Файлы cookie
                    </a>
                </div>
                <div className="left_bar_bottom_content_list_tail">
                    <a>
                        Конфиденциальность
                    </a>
                </div>
                <div className="left_bar_bottom_content_list_tail">
                    <a>
                        Форма для Ваших обращений
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default LeftBar