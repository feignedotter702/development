import { useState, useEffect } from 'react'
export default function RatingComponent({ ratingType, setRating }) {
  const initState = ratingType.reduce((obj, rating) => {
    obj[rating] = false
    return obj
  }, {})
  const [checkedRating, setCheckedRating] = useState(initState)
  const handleChange = rating => {
    setCheckedRating({
      ...checkedRating,
      [rating]: !checkedRating[rating],
    })
  }
  useEffect(() => {
    const checkedList = Object.keys(checkedRating).filter(rating => checkedRating[rating])
    setRating(checkedList)
  }, [checkedRating])
  return (
    <div className="sort">
      <div className="title">rating</div>
      {ratingType.map(rating => (
        <div className="content" key={rating}>
          <input
            type="checkbox"
            name="rating"
            id={rating}
            checked={checkedRating[rating]}
            onChange={() => handleChange(rating)}
          />
          <label htmlFor={rating}>{rating}</label>
        </div>
      ))}
    </div>
  )
}
