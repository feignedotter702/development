import { useState, useEffect } from 'react'
import './index.css'
function ListItemComponent({ item, meScore, scoreList, setScoreList }) {
  const { filmName, language, genre, score, year, rating, poster } = item
  const [myScore, setMyScore] = useState(meScore)
  const handlePlus = () => {
    if (myScore < 10) {
      setMyScore(s => s + 1)
    }
  }
  const handleMinus = () => {
    if (myScore > 0) {
      setMyScore(s => s - 1)
    }
  }
  const handleSubmit = () => {
    if (myScore <= 0) return
    const list = scoreList.filter(s => s.filmName !== filmName)
    setScoreList([
      ...list,
      {
        filmName,
        myScore,
      },
    ])
  }
  useEffect(() => {
    const s = scoreList.find(film => film.filmName === filmName)
    setMyScore(s?.myScore || 0)
  }, [scoreList])
  return (
    <li className="list-item">
      <div className="filmName">{filmName}</div>
      <div className="film-content">
        <div className="film-poster">
          <img src={`/img/${poster}`} alt={filmName} />
        </div>
        <div className="film-info">
          <div>Language: {language}</div>
          <div className="genre">Genre: {genre.toString()}</div>
          <div>Score: {score}</div>
          <div>Year: {year}</div>
          <div>Rating: {rating}</div>
        </div>
        <div className="file-operation">
          <div>
            <button onClick={handleMinus} disabled={myScore <= 0}>
              -
            </button>
            <span style={{ margin: '3px' }}>{myScore}</span>
            <button onClick={handlePlus} disabled={myScore >= 10}>
              +
            </button>
          </div>

          <div className="submit">
            <button onClick={handleSubmit} disabled={myScore <= 0}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}
export default ListItemComponent
