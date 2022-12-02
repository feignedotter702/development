import { useState, useEffect } from 'react'
import './index.css'
function ScoreListComponent({ scoreList, setScoreList }) {
  const handleRemove = filmName => {
    console.log(scoreList, filmName)
    const list = scoreList.filter(item => item.filmName !== filmName)
    setScoreList(list)
  }
  const getScore = scoreList => scoreList.reduce((s, item) => s + item?.myScore || 0, 0)

  const [allScore, setAllScore] = useState(getScore(scoreList))
  useEffect(() => {
    setAllScore(getScore(scoreList))
  }, [scoreList, setAllScore])
  return (
    <div className="score">
      {scoreList.map(score => (
        <div className="score-item" key={score.filmName}>
          <div>{score.filmName}</div>
          <div>{score.myScore}</div>
          <div>
            <button onClick={() => handleRemove(score.filmName)}>REMOVE</button>
          </div>
        </div>
      ))}
      {scoreList.length > 0 ? <div>All SCORE: {allScore}</div> : ''}
    </div>
  )
}
export default ScoreListComponent
