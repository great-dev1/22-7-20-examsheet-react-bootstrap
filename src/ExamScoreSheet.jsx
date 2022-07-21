import { useState } from "react"
import { Header, CreateBox, FilterBox, RecordTable } from "./components"
import LocalizedStrings from "react-localization"
import localization from "./localization"

const ExamScoreSheet = () => {
  const [records, setRecords] = useState([
    { name: "Alan", score: 70, classroom: "A" },
    { name: "Ben", score: 90, classroom: "B" },
    { name: "Cath", score: 80, classroom: "C" },
  ])
  const [from, setFrom] = useState(0)
  const [to, setTo] = useState(100)
  const [classes, setClasses] = useState(["A", "B", "C"])

  const [lang, setLang] = useState("En")
  let translations = new LocalizedStrings(localization)
  translations.setLanguage(lang)

  return (
    <div className="container">
      <Header translations={translations} lang={lang} setLang={setLang} />
      <div className="row">
        <div className="col-md-6">
          <CreateBox translations={translations} records={records} setRecords={setRecords} />
        </div>
        <div className="col-md-6">
          <FilterBox translations={translations} from={from} setFrom={setFrom} to={to} setTo={setTo} classes={classes} setClasses={setClasses} />
        </div>
      </div>
      <RecordTable translations={translations} records={records} setRecords={setRecords} from={from} to={to} classes={classes} />
    </div>
  )
}

export default ExamScoreSheet
