import { useState } from "react"

const CreateBox = ({ records, setRecords }) => {
  const [name, setName] = useState("Student1")
  const [score, setScore] = useState(75)
  const [classroom, setClassroom] = useState("A")

  const handleChange = (e) => {
    let key = e.target.name
    let val = e.target.value

    if (key === "name") {
      setName(val)
    } else if (key === "score") {
      setScore(Number(val))
    } else {
      setClassroom(val)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let isValid = true
    if (name === "" || score === "") {
      alert("Please fill out student name and score.")
      isValid = false
    } else {
      records.map((record) => {
        if (record.name === name) {
          alert("The name is already registered. Please fill out another name.")
          isValid = false
          return
        }
      })
    }
    if (!isValid) return

    let record = {
      name,
      score,
      classroom,
    }
    setRecords([...records, record])
    setName("")
    setScore(75)
    setClassroom("A")
  }

  return (
    <form className="my-3 p-3 border rounded" onSubmit={handleSubmit}>
      <div className="row mb-3">
        <label className="col-md-4 col-form-label text-md-end" htmlFor="name" >Student Name</label>
        <div className="col-md-8">
          <input
            className="form-control"
            type="text"
            name="name"
            value={name}
            id="name"
            placeholder="eg. Robert"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="row mb-3">
        <label className="col-md-4 col-form-label text-md-end" htmlFor="score">Score</label>
        <div className="col-md-8">
          <input
            className="form-control"
            type="number"
            name="score"
            value={score}
            min={0}
            max={100}
            id="score"
            placeholder="eg. 75"
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
              type="radio"
              name="classroom"
              value="A"
              id="radioA"
              checked={classroom === "A"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="radioA">A</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="classroom"
              value="B"
              id="radioB"
              checked={classroom === "B"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="radioB">B</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="classroom"
              value="C"
              id="radioC"
              checked={classroom === "C"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="radioC">C</label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 offset-md-4">
          <button className="btn btn-primary" type="submit">Create Record</button>
        </div>
      </div>
    </form>
  )
}

export default CreateBox
