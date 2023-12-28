

export const addToLocalstorage = (user:{})=>{
    localStorage.setItem('user',JSON.stringify(user))
}

export const getUserFromLocalStorage=()=>{
    const storage = localStorage.getItem('user')
    if(storage){
        return JSON.parse(storage)
    }else{
        return null
    }
}