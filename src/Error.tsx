import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Error(){
    let { stat } = useParams<{ stat: string }>();
    let error = '';
    switch (stat?.slice(1)) {
        case "403":
            error ="Недоступен в этой стране"
            break;
        case "401":
            error = "Отказ в доступе"
            break;
        case "400":
            error = "некорректный запрос серверу"
            break;
        default:
            error = "Ошибка сервера"
            break;
    }
return(
    <div>
        <h1 className="Error">Error!</h1>
        <h2 className="Error">{error}</h2> 
        <Link className="ErrorHome" to="/">
            Перейти на Главную
        </Link>
    </div>
)}

export default Error