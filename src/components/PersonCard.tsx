import React from "react"

interface Person {
  name: string,
  age: number,
  img: string,
  note?: string
}

const PersonCard: React.FC<Person> = ({ name, age, img, note }) => {
  return (
    <div className="person-card">
      <div className="avatar">
        <img className="person-img" src={img} alt="" />
        <h3 className="person-name">{name}</h3>
      </div>

      <p className="person-age">{age} years</p>
      <p className="note">{note}</p>
    </div>
  )
}

export default PersonCard
