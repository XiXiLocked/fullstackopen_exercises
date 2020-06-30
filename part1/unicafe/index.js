aimport React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button =(props)=>{
  const {click,text} =props.props
  return (
    <>
    <button onClick={click}>{text}</button>
    </>
  )
}

const Feedback= (props)=>{
  const [good, neutral, bad] = props.prop
  return (
    <>
    <h1>give feedback</h1>
    <Button props={good}></Button>
    <Button props={neutral}></Button>
    <Button props={bad}></Button>
    </>
  )
}

const Statistics =({text, value}) =>{
  
  return (
  <tr><td>{text}</td><td>{value}</td></tr>
  )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const stats = [
    {text:"good",
    click:()=>setGood(good+1),
    count:good
  },
  {text:"neutral",
  click:()=>setNeutral(neutral+1),
  count:neutral,
}, 
   {text:"bad",
  click:()=>setBad(bad+1),
count:bad}

  ]

  if (stats.some(s=>s.count>0))
  {
    return (
    <div>
      <Feedback prop={stats} />
      <h1>statistics</h1>
      <table>
        <tbody>
      <Statistics text="good" value={good} />
      <Statistics text="neutral" value= {neutral} />
      <Statistics text="bad" value= {bad} />
      <Statistics text="all" value={good+neutral+bad} />
      <Statistics text="average" value={(good-bad)/(good+neutral+bad)} />
      <Statistics text="positive" value={100*good/(good+neutral+bad)+"%"} />
      </tbody>
      </table>
      
    </div>
    )
  }
  else
  {
    return (
      <div>
        <Feedback prop={stats} />
        <h1>statistics</h1>
        <p>no feedback given</p>
      </div>
    )
  }
 
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
