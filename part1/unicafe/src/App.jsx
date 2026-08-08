import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {

  const totalFeedback = 0 + props.feedback.good + props.feedback.neutral + props.feedback.bad
  const average = (props.feedback.good * 1 + props.feedback.neutral * 0 + props.feedback.bad * -1) / totalFeedback
  const positivePercentage = (props.feedback.good / totalFeedback) * 100

  return (
    <div>
      <table>
        <StatisticLine text="good" value={props.feedback.good} />
        <StatisticLine text="neutral" value={props.feedback.neutral} />
        <StatisticLine text="bad" value={props.feedback.bad} />
        <tr>
          <td>all</td>
          <td>{props.feedback.good + props.feedback.neutral + props.feedback.bad}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>percentage</td>
          <td>{positivePercentage} %</td>
        </tr>
      </table>
      <p>all {props.feedback.good + props.feedback.neutral + props.feedback.bad}</p>
      <p>average {average}</p>
      <p>percentage {positivePercentage} %</p>
    </div>
  )
}

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const [total, setTotal] = useState(0)

  const handleFeedbacks = (currentFeedback) => {
    let good = feedback.good
    let neutral = feedback.neutral
    let bad = feedback.bad

    if (currentFeedback == "good") {
      good = good + 1
    } else if (currentFeedback == "neutral") {
      neutral = neutral + 1
    } else if (currentFeedback == "bad") {
      bad = bad + 1
    }

    const newFeedback = {
      good: good,
      neutral: neutral,
      bad: bad
    }

    setFeedback(newFeedback)
    setTotal(total + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button onClick={() => handleFeedbacks("good")} text="good" />
        <Button onClick={() => handleFeedbacks("neutral")} text="neutral" />
        <Button onClick={() => handleFeedbacks("bad")} text="bad" />
      </div>
      <h1>
        statistics
      </h1>
      {total > 0 ? <Statistics feedback={feedback} /> : <div>no feedback given</div>}
    </div>
  )
}

export default App
