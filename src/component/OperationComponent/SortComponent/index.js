import './index.css'
export default function SortComponent({ sort, setSort }) {
  return (
    <div className="sort">
      <div className="title">Sort By</div>
      <div className="content">
        <input
          type="radio"
          name="sort"
          value="score"
          id="score"
          defaultChecked={sort === 'score'}
          onChange={() => setSort('score')}
        />
        <label htmlFor="score">Score</label>
      </div>
      <div className="content">
        <input
          type="radio"
          name="sort"
          value="year"
          id="year"
          defaultChecked={sort === 'year'}
          onChange={() => setSort('year')}
        />
        <label htmlFor="year">Year</label>
      </div>
    </div>
  )
}
