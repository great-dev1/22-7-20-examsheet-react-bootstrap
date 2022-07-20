import { useState } from "react"
import CreateBox from "./components/CreateBox"
import FilterBox from "./components/FilterBox"
import RecordTable from "./components/RecordTable"

const ExamScoreSheet = () => {
  const [records, setRecords] = useState([
    { name: "Student1", score: 60, classroom: "A" },
    { name: "Student2", score: 70, classroom: "B" },
    { name: "Student3", score: 80, classroom: "C" },
    { name: "Student4", score: 90, classroom: "A" },
    { name: "Student5", score: 100, classroom: "B" },
  ])
  const [from, setFrom] = useState(0)
  const [to, setTo] = useState(100)
  const [classes, setClasses] = useState(["A", "B", "C"])

  return (
    <div className="container">
      <h1 className="mt-4 text-center">Exam Score Sheet</h1>
      <div className="row">
        <div className="col-md-6">
          <CreateBox records={records} setRecords={setRecords} />
        </div>
        <div className="col-md-6">
          <FilterBox from={from} setFrom={setFrom} to={to} setTo={setTo} classes={classes} setClasses={setClasses} />
        </div>
      </div>
      <RecordTable records={records} setRecords={setRecords} from={from} to={to} classes={classes} />
    </div>
  )
}

export default ExamScoreSheet
