import { useContext, useEffect, useState } from "react";
import useToken from './Token';
import Type from './CatType'
import { useNavigate } from "react-router-dom";

function Hook(link:string){

    const [data, setData] = useState<Type>({} as Type);

    let Tok = ''
    Tok  =  useToken('q')

    let Navigate = useNavigate()


    useEffect(()=>{
        if (Tok !== ''){
        fetch(link, {
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
                setData(data);
            }).catch(function(stat){
                Navigate("/error:"+stat)
            })}
    },[Tok]);

    return data;
}
export default Hook; 