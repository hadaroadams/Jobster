import { Form } from "react-router-dom"
import Wrapper from "../assets/wrappers/ProfileMain"
import DashInput from "./DashInput"
import Selection from "./Selection"
import { useSelector } from "react-redux"
import { RootState } from "../store"


const SearchContainer = () => {
  const {sortOptions}= useSelector((state:RootState)=>state.allJob)
  return (
    <Wrapper>
      <h1>Search Form</h1>
        <Form>
          <DashInput label="Search" name="search" onChange={()=>{}} type="text" value="" />
          <Selection label="Status" name="status" onChange={()=>{}} value="" items={[]} />
          <Selection label="Type" name="type" onChange={()=>{}} value="" items={[]} />
          <Selection label="Sort" name="sort" onChange={()=>{}} value="" items={sortOptions} />
          <button type="button">clear Filters</button>
        </Form>
    </Wrapper>
  )
}

export default SearchContainer
