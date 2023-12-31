
interface User {
    email:string,
    name:string,
    lastName:string,
    location:string,
    token:string
}
export const addToLocalstorage = (user:User)=>{
    localStorage.setItem('user',JSON.stringify(user))
}


export const getUserFromLocalStorage=():User|null=>{
    const storage = localStorage.getItem('user')
    if(storage){
        return JSON.parse(storage)
    }else{
        return null
    }
}