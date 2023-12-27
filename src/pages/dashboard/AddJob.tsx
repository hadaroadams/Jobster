import { Form } from "react-router-dom"
import Wrapper from "../../assets/wrappers/ProfileMain"
import DashInput from "../../components/dashInput"
import Selection from "../../components/Selection"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import React from "react"

const AddJob = () => {
  const {statusOptions,JobTypeOptions}= useSelector((state:RootState)=>state.job)

  const submit =(e:React.FormEvent)=>{
    e.preventDefault()
  }

  const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const name=e.target.name
    const value = e.target.value

  }
  const clear = ()=>{

  }
  return (
    <Wrapper>
      <h1>Search Form</h1>
      <Form>
        <DashInput label="Position" name="position" onChange={onChange} type="text" value=""/>
        <DashInput label="Company" name="company" onChange={onChange} type="text" value=""/>
        <DashInput label="Job Location" name="jobLocation" onChange={onChange} type="text" value=""/>
        <Selection items={[...statusOptions]} name="status" label="Status"/>  
        <Selection items={[...JobTypeOptions]} name="jobType" label="Job Type"/>  
        <section>
          <button type="button" onClick={clear}>clear</button>
          <button type="submit" onClick={submit}>Submit</button>
        </section>
      </Form>
    </Wrapper>
  )
}

export default AddJob
