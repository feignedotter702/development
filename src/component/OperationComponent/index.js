import SortComponent from './SortComponent'
import GenreComponent from './GenreComponent'
import RatingComponent from './RatingComponent'
import './index.css'
export default function OperationComponent({
  sort,
  setSort,
  genreType,
  ratingType,
  setGenre,
  setRating,
}) {
  return (
    <div className="operation">
      <SortComponent sort={sort} setSort={setSort} />
      <GenreComponent genreType={genreType} setGenre={setGenre} />
      <RatingComponent ratingType={ratingType} setRating={setRating} />
    </div>
  )
}
