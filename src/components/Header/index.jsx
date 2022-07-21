const Header = ({ translations, lang, setLang }) => {
  const handleChange = (e) => {
    setLang(e.target.value)
  }

  return (
    <div>
      <select
        className="form-select w-auto float-end"
        value={lang}
        onChange={handleChange}
      >
        <option value="En">English</option>
        <option value="Fr">Français</option>
        <option value="Ru">Русский</option>
        <option value="Ch">汉语</option>
      </select>
      <h1 className="mt-4 text-center">{translations.title}</h1>
    </div>
  )
}

export default Header
