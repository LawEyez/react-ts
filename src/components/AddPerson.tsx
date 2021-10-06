import { useState } from "react"
import { IState as Props } from "../App"

interface IProps {
  people: Props["people"],
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddPerson: React.FC<IProps> = ({ people, setPeople }) => {
  const [state, setState] = useState({
    name: "",
    age: "",
    img: "",
    note: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (!state.name || !state.age || !state.img) return

    setPeople([
      ...people,
      {
        name: state.name,
        age: parseInt(state.age),
        img: state.img,
        note: state.note
      }
    ])

    setState({
      name: "",
      age: "",
      img: "",
      note: ""
    })
  }

  return (
    <div className="form-wrapper">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={state.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        placeholder="Age"
        value={state.age}
        onChange={handleChange}
      />
      <input
        type="text"
        name="img"
        placeholder="Image URL"
        value={state.img}
        onChange={handleChange}
      />
      <textarea
        name="note"
        placeholder="Note"
        value={state.note}
        onChange={handleChange}
      />

      <button onClick={handleClick}>add</button>
    </div>
  )
}

export default AddPerson
