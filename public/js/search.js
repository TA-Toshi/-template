import { token } from "./getToken.js";

/**
 * Запрос с задержкой в 300мс
 * @param {*} fn 
 * @param {*} ms 
 * @returns 
 */
const debounce = (fn, ms) => {
    let timeout;
    return function () {
        const fnCall = () => {fn.apply(this, arguments)}    
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, ms)
    }
}
/**
 * Вывод заданного списка треков
 */
async function search(){
    /**
     * Проверка строки поиска на пустоту
     */
    if (document.querySelector(".search_input").value !=""){
        document.querySelector(".search_result").style.display = "flex";
        fetch ("https://api.spotify.com/v1/search?q=track:+"+document.querySelector(".search_input").value+"++&type=track", {
            headers:{
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + await token()
            }
        }).then((result) => {
            
            if(!result.ok){
                
                return Promise.reject(result.status);
            }
            else{
                /**
                 *результат запроса в JSON
                 */
                return result.json()
            }
        }).then((data) => {
            const ResultContainer = document.querySelector(".search_result");
            ResultContainer.innerHTML = "";
            data.tracks.items.forEach(element => {
                const ResultLink = document.createElement("a");
                /**
                 * HTML структура
                 * списка поиского запроса
                 */
                ResultLink.classList.add("search_container_result");
                const ResultContent = document.createElement("div");
                ResultContent.addEventListener("click", function(){
                   let Audio = document.querySelector(".Audio");
                   Audio.setAttribute("src", element.preview_url);
                });

                ResultContent.classList.add("search_result_content");
                const ResultIMG = document.createElement("img");
                ResultIMG.classList.add("search_container_result_img");
                const ResultName = document.createElement("span");
                ResultName.classList.add("search_container_result_name");
                ResultName.textContent = element.name;

                ResultIMG.setAttribute("src",element.album.images[0].url);

                ResultLink.appendChild(ResultIMG);
                ResultLink.appendChild(ResultName);
                ResultContent.appendChild(ResultLink);
                ResultContainer.appendChild(ResultContent);
            });
        }).catch(function(err){
            switch(err){
                case 400:
                    window.localStorage.setItem("status","400");
                    window.location.href = "./error.html";
                    break;
                case 401:
                    window.localStorage.setItem("status","401");
                    window.location.href = "./error.html";
                    break;
                case 403:
                    window.localStorage.setItem("status","403");
                    window.location.href = "./error.html";
                    break;
            }
            
        });

    }
    else{
        document.querySelector(".search_result").style.display = "none";
    }
};

search = debounce(search, 300);
/**
 * Вызов запроса при нажатии клавиши
 */
document.querySelector(".search_input").addEventListener("keydown",async () => {
    await search();
})
