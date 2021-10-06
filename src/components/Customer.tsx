type Person = {
  firstName: string,
  lastName: string,
  age: number,
  address?: string,
  isLegal: boolean
}

const Customer = (props: Person) => {
  const { firstName, lastName, age, isLegal } = props

  return (
    <div>
      <h1>Hello React TS</h1>
    </div>
  )
}

export default Customer
