type PersonProp = {
    name: {
        first: string,
        last : string
    }
}
function Person(props:PersonProp) {
  return (
      <>
          <h1>{props.name.last} { props.name.first}</h1>
      </>
  )
}

export default Person