

import { Link } from "react-router-dom"
import {Links as link} from "../utilities/Links"

type LinkMap = {
    id:number,
    text:string,
    icon:JSX.Element|string
    path:string,
}

const Links = () => {
  return (
    <ul>
      {
       link.map((item:LinkMap)=>{
       const {id,text,icon,path} = item
        // console.log(e)
        return <li key={id}><Link to={`/dashboard${path}`}>{icon} <span>{text}</span></Link></li>
       }) 
      }
    </ul>
  )
}

export default Links
