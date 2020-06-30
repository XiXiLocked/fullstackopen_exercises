import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdote= (props)=> {
    return (<>
          <p>{props.text}</p>
          <p>has {props.vote} votes</p>
        </>
    )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(props.anecdotes.map(x=>0))
  const [mostIndex, setMost] = useState(0)


  const selectNew =()=>{
    const ss = Math.floor(Math.random()*props.anecdotes.length)
    setSelected(ss)
  }
 
  const selectMost = (vote_array) =>{
    let t =0;
    for (let i =0;i<vote_array.length;++i)
    {
      if (vote_array[i]>vote_array[t])
      {
        t =i;
      }
    }
    return t;
  }
  const vote_fn = ()=>{
    const copy = [...votes];
    copy[selected]+=1
    setMost(selectMost(copy))
    setVotes(copy)
  }


  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text={props.anecdotes[selected]} vote={votes[selected]} />
      <button onClick ={vote_fn} >vote</button>
      <button onClick ={selectNew}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <Anecdote text={props.anecdotes[mostIndex]} vote={votes[mostIndex]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)