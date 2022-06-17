import React from 'react';

function Footer() {
    return(
        <div className="hello_footer_bar">
            <div className="hello_footer_bar_content">
                <p className="hello_footer_bar_content_Spoti">Предварительный просмотр Spotify</p>
                <p className="hello_footer_bar_content_Registr">Зарегистрируйся, чтобы слушать музыку без ограничений. Иногда мы будем показывать рекламу, но ты сможешь пользоваться сервисом бесплатно!</p>
            </div>
            <button className="hello_footer_bar_button">Зарегистрироваться</button>
        </div>
    )
}

export default Footer