import {  MouseEvent } from "react";


interface Button_type{
    name:string,
    OnClick:(e: MouseEvent<HTMLButtonElement>) => void,
    className:string
}
export const Button=function({name,className}:Button_type){
    return(<>
    <div className={className}><button className="w-full h-full  text-white " >{name}</button></div>    </>)

}