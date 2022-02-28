import { createContext, useState } from "react";

const FavorateContext=createContext({
    favorates:[],
    totalFavorates:0,
    addFavorate:(favmeetup)=>{},
    removeFavate:(meetupId)=>{},
    itemisfav:(meetupId)=>{}
});

export function FavorateContactProvider(props){
    const[userfavorate,setuserfavorate]=useState([]);

    function addFavoratehandler(favmeetup){
        setuserfavorate(prevfav=>{
            return prevfav.concat(favmeetup)
        });
    }
    function removeFavoratehandler(meetupId){
        setuserfavorate(prevfav=>{
            return prevfav.filter(meetup => meetup.id !== meetupId);
        });
    }
     
    function itemIsFavoratehandler(meetupId){
     return userfavorate.some(meetup=>meetup.id === meetupId);
    }

const contaxt={
    favorates:userfavorate,
    totalFavorate:userfavorate.length,
    addFavorate:addFavoratehandler,
    removeFavate:removeFavoratehandler,
    itemisfav:itemIsFavoratehandler
}

    return <FavorateContext.Provider value={contaxt}>
        {props.children}
    </FavorateContext.Provider>
}
export default FavorateContext;