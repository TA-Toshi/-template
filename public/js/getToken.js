let ClientId = "e580bfc31e834052b28dd8c82a1168ad";
let ClientSecret = "286f5e1d0c594e5c8409484cdd2e3a41";
/**
 * 
 * @returns Возвращение токена API запроса
 */ 
async function token(){
    
    const res = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-type" : "application/x-www-form-urlencoded",
            "Authorization" : "Basic " + btoa(ClientId + ":" + ClientSecret)
        },
        body: "grant_type=client_credentials"
            });

            const data = await res.json();
            console.log(data);
            return data.access_token;
}


export{token, ClientId, ClientSecret};