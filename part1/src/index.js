import React from 'react'
import ReactDOM from 'react-dom'



const  Header =(props)=>{
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Part = (props)=>{
  return (
    <>
    <p>
    {props.name} {props.exercises}
  </p> 
  </>
  )
}

const Content = (props) =>{
  return (
    
    <>
        {
      props.parts.map((p,i)=>
        <Part name = {p.name} exercises = {p.exercises} key={i}/>)
    }
    </>
  )

}

const Total =(props) =>{
  let total = 0
  for (let i=0;i<props.parts.length;++i)
  {
    total += props.parts[i].exercises;
  }
  return (
    <>
    <p>Number of exercises {total}</p>
    </>
  )
  
  
}

const App = () => {
  const course = {
    name : 'Half Stack application development',
    parts :[
    {
    name :'Fundamentals of React', 
    exercises : 10
  }
  ,{
    name :'Using props to pass data',
    exercises : 7
  }
  ,{
    name:'State of a component',
    exercises : 14
  }]
}


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total  parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))