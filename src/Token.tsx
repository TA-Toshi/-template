import { useEffect, useState } from "react";


function useToken(){

    const [data, setData] = useState('');

    let ClientId = "e580bfc31e834052b28dd8c82a1168ad"
    let ClientSecret = "286f5e1d0c594e5c8409484cdd2e3a41"


    useEffect(()=>{
        fetch("https://accounts.spotify.com/api/token", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(ClientId + ':' + ClientSecret)
            },
            body: 'grant_type=client_credentials'
        }).then((result) => {
            if (!result.ok) {
                return Promise.reject(result.status);
            }
            else {
                return result.json();
            }
        }).then((data) => {
            setData(data.access_token);
    })},[]);

    return data;
}
export default useToken; 