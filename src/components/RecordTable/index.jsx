function RecordTable({ records, setRecords, from, to, classes }) {
  const deleteRecord = (e, name) => {
    if (window.confirm("Are you sure to delete this record?")) {
      setRecords(records.filter((record) => record.name !== name))
    }
  }

  return (
    <table className="table table-striped table-hover mt-3">
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Score</th>
          <th>Class</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {
          records.map((record, index) => {
            const { name, score, classroom } = record
            if (score >= from && score <= to && classes.indexOf(classroom) !== -1) {
              return (
                <tr key={index}>
                  <td>{record.name}</td>
                  <td>{record.score}</td>
                  <td>{record.classroom}</td>
                  <td>
                    <button className="btn btn-sm btn-danger" onClick={(e) => deleteRecord(e, name)}>Delete</button>
                  </td>
                </tr>
              )
            }
          })
        }
      </tbody>
    </table>
  )
}

export default RecordTable
