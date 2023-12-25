

export const addToLocalstorage = (user:{})=>{
    localStorage.setItem('user',JSON.stringify(user))
}