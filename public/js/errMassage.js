

switch(window.localStorage.getItem("status")){
    case "401":
        document.querySelector(".error_name").textContent += ' ' + window.localStorage.getItem("status");
        document.querySelector(".error_content").textContent = "Ошибка сервера";
        break;
    case "403":
        document.querySelector(".error_name").textContent += ' ' + window.localStorage.getItem("status");
        document.querySelector(".error_content").textContent = "Ошибка доступа";
        break;
    case "400":
        document.querySelector(".error_name").textContent += ' ' + window.localStorage.getItem("status");
        document.querySelector(".error_content").textContent = "Ошибка запроса";
        break;
    default:
        console.log(window.localStorage.getItem("status"))
}
