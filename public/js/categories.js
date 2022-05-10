import { token } from "./getToken.js";
/**
 * Вывод категорий во вкладке Поиск
 */
async function alltoken(){

  await fetch("https://api.spotify.com/v1/browse/categories",{
        headers : {
            "Content-type" : "application/json",
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
        
        /**
         * Создаем HTML структуру для запрафиваемых категорий
         */
        let PlListContainer = document.createElement("div");
        PlListContainer.classList.add("pl_list");
        
        let ContentContainer = document.createElement("div");
        ContentContainer.classList.add("pl_png_button")

        PlListContainer.appendChild(ContentContainer);
        document.querySelector(".pls_type_container").appendChild(PlListContainer);

        /**
         * Пробегаем по элементам и добавляем категории
         */
        data.categories.items.forEach(element => {

            let PlaylistContainer = document.createElement("div");
            PlaylistContainer.classList.add("playlists");

            let ContentContainer = document.createElement("div");
            ContentContainer.classList.add("png_Pl");

            let ImgContainer = document.createElement("img");
            ImgContainer.classList.add("img-Pl");

            let ButtonContainer = document.createElement("button");
            ButtonContainer.classList.add("pl_button");
            ButtonContainer.innerHTML = '<svg role="img" height="24"  width="24" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>';

            ImgContainer.src = element.icons[0].url;

            let NameContainer = document.createElement("div");
            NameContainer.classList.add("pl_name");
            NameContainer.textContent = element.name;

            let TextContainer = document.createElement("div");
            TextContainer.classList.add("pl_text");
            TextContainer.textContent = "текстовый текст";

                

            /**
             * Распределяем созданые элементы в нужном порядке
             */
            ContentContainer.appendChild(ImgContainer);
            ContentContainer.appendChild(ButtonContainer);

            PlaylistContainer.appendChild(ContentContainer);

            PlaylistContainer.appendChild(NameContainer);
            PlaylistContainer.appendChild(TextContainer);
            
            
            

            document.querySelector(".pl_list").appendChild(PlaylistContainer);
        });

    }).catch (function(err){
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
    })
}
alltoken();

