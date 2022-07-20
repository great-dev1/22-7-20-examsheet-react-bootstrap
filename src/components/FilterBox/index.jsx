import { useState } from "react"

const FilterBox = ({ from, setFrom, to, setTo, classes, setClasses }) => {
  const [scoreFrom, setScoreFrom] = useState(from)
  const [scoreTo, setScoreTo] = useState(to)
  const [classrooms, setclassrooms] = useState(classes)

  const handleChange = (e) => {
    let key = e.target.name
    let val = e.target.value

    if (key === "from") {
      setScoreFrom(Number(val))
    } else if (key === "to") {
      setScoreTo(Number(val))
    } else {
      let checked = e.target.checked
      if (checked) {
        setclassrooms([...classrooms, val])
      } else {
        setclassrooms(classrooms.filter((classroom) => classroom !== val))
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFrom(scoreFrom)
    setTo(scoreTo)
    setClasses(classrooms)
  }

  return (
    <form className="my-3 p-3 border rounded" onSubmit={handleSubmit}>
      <div className="row mb-3">
        <label className="col-md-4 col-form-label text-md-end" htmlFor="from" >Score From</label>
        <div className="col-md-8">
          <input
            className="form-control"
            type="number"
            name="from"
            value={scoreFrom}
            min={0}
            max={100}
            id="from"
            placeholder="eg. 80"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="row mb-3">
        <label className="col-md-4 col-form-label text-md-end" htmlFor="to">To</label>
        <div className="col-md-8">
          <input
            className="form-control"
            type="number"
            name="to"
            value={scoreTo}
            min={0}
            max={100}
            id="to"
            placeholder="eg. 100"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="row mb-3">
        <label className="col-md-4 col-form-label text-md-end pt-0">Class</label>
        <div className="col-md-8">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="classroom"
              value="A"
              id="checkA"
              checked={classrooms.indexOf("A") !== -1}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="checkA">A</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="classroom"
              value="B"
              id="checkB"
              checked={classrooms.indexOf("B") !== -1}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="checkB">B</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="classroom"
              value="C"
              id="checkC"
              checked={classrooms.indexOf("C") !== -1}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="checkC">C</label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 offset-md-4">
          <button className="btn btn-success" type="submit">Filter Record</button>
        </div>
      </div>
    </form>
  )
}

export default FilterBox
