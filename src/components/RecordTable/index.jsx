function RecordTable({ translations, records, setRecords, from, to, classes }) {
  const deleteRecord = (e, name) => {
    if (window.confirm("Are you sure to delete this record?")) {
      setRecords(records.filter((record) => record.name !== name))
    }
  }

  return (
    <table className="table table-striped table-hover mt-3">
      <thead>
        <tr>
          <th>{translations.name}</th>
          <th>{translations.score}</th>
          <th>{translations.class}</th>
          <th>{translations.function}</th>
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
                    <button className="btn btn-sm btn-danger" onClick={(e) => deleteRecord(e, name)}>{translations.delete}</button>
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
