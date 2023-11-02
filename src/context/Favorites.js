import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext()
FavoritesContext.displayName = "Favorites"

export default function FavoritesProvider({ children }){
    const [favorite, setFavorite] = useState([])

    return(
        <FavoritesContext.Provider
        value={{favorite, setFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
}

export function useFavoriteContext(){
    const {favorite, setFavorite} = useContext(FavoritesContext)

    function addFavorite(newFavorite){
        const sameFavorite = favorite.some(item => item.title === newFavorite.title)

        let newList = [...favorite]

        if (!sameFavorite){
            newList.push(newFavorite)
            return setFavorite(newList)
        }

        newList = favorite.filter((fav) => fav.title !== newFavorite.title)
        return setFavorite(newList)
    }

    return{
        favorite,
        addFavorite
    }
}