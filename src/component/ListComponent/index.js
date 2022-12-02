import ListItemComponent from './ListItemComponent'
import './index.css'
function ListComponent({ list, scoreList, setScoreList }) {
  const myScore = filmName => {
    const film = scoreList.find(film => film.filmName === filmName)
    return film?.myScore || 0
  }
  return (
    <ul>
      {list.map(item => (
        <ListItemComponent
          item={item}
          key={item.filmName}
          meScore={myScore()}
          scoreList={scoreList}
          setScoreList={setScoreList}
        />
      ))}
    </ul>
  )
}
export default ListComponent
