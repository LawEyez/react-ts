import React from "react"
import PersonCard from "./PersonCard"

import { IState as IProps } from '../App'

const List: React.FC<IProps> = ({ people }) => {

  const renderList = (): JSX.Element[] => {
    return people.map(p => (
      <PersonCard
        name={p.name}
        age={p.age}
        img={p.img}
        note={p.note}
      />
    ))
  }

  return (
    <div className="">{renderList()}</div>
  )
}

export default List
