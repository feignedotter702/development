import { useState, useEffect } from 'react'
import ListComponent from './component/ListComponent'
import OperationComponent from './component/OperationComponent'
import ScoreListComponent from './component/ScoreListComponent'
import logo from './logo.svg'
import './App.css'
import filmJson from './film.json'
const genreType = [...new Set(filmJson.map(film => film.genre).flat())]
const ratingType = [...new Set(filmJson.map(film => film.rating).flat())]
function App() {
  const [filmList, setFilmList] = useState(filmJson)
  const [sort, setSort] = useState('score')
  const [genre, setGenre] = useState([])
  const [rating, setRating] = useState([])
  const [scoreList, setScoreList] = useState([])
  useEffect(() => {
    const processedList = filmJson
      .filter(film => genre.every(g => film.genre.includes(g)))
      .filter(film => rating.every(r => film.rating === r))
      .sort((f1, f2) => (f1[sort] > f2[sort] ? -1 : 1))
    setFilmList(processedList)
  }, [sort, genre, rating, setFilmList])
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-left">
          <img src={logo} className="App-logo" alt="logo" />
          <div>Film</div>
        </div>
        <div className="header-right">
          <div>My Favorite</div>
          <ScoreListComponent
            className="score-list"
            scoreList={scoreList}
            setScoreList={setScoreList}
          />
        </div>
      </header>
      <main>
        <aside className="aside-content">
          <OperationComponent
            sort={sort}
            setSort={setSort}
            genreType={genreType}
            ratingType={ratingType}
            setGenre={setGenre}
            setRating={setRating}
          />
        </aside>
        <div className="main-content">
          <ListComponent list={filmList} scoreList={scoreList} setScoreList={setScoreList} />
        </div>
      </main>
    </div>
  )
}

export default App
