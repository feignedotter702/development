import { useState, useEffect } from 'react'
export default function GenreComponent({ genreType, setGenre }) {
  const initState = genreType.reduce((obj, genre) => {
    obj[genre] = false
    return obj
  }, {})
  const [checkedGenre, setCheckedGenre] = useState(initState)
  const handleChange = genre => {
    setCheckedGenre({
      ...checkedGenre,
      [genre]: !checkedGenre[genre],
    })
  }
  useEffect(() => {
    const checkedList = Object.keys(checkedGenre).filter(genre => checkedGenre[genre])
    setGenre(checkedList)
  }, [checkedGenre])
  return (
    <div className="sort">
      <div className="title">Genre</div>
      {genreType.map(genre => (
        <div className="content" key={genre}>
          <input
            type="checkbox"
            name="genre"
            id={genre}
            checked={checkedGenre[genre]}
            onChange={() => handleChange(genre)}
          />
          <label htmlFor={genre}>{genre}</label>
        </div>
      ))}
    </div>
  )
}
