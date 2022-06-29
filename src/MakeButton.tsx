import React from 'react';

function MakeButton(){
    return(
        <button className="make_pl">
            <div className="make_pl_img">
                <div className="make_pl_img_border">
                    <svg role="img" height="12" width="12" aria-hidden="true" viewBox="0 0 16 16"><path d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"></path></svg>
                </div>
            </div>
            <span className="make_pl_content">Создать Плейлист</span>
        </button> )
}

export default MakeButton