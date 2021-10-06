import { useState } from 'react';

import List from './components/List';
import AddPerson from './components/AddPerson';

import './App.css';

export interface IState {
  people: {
    name: string,
    age: number,
    img: string,
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Harvey Specter",
      age: 49,
      img: "https://www.themoviedb.org/t/p/original/lacMH4Ju1x9AsKXm7mDkklSsPyV.jpg",
      note: "Loves scotch"
    }
  ])

  return (
    <div className="App container">
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddPerson people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
