type OscarProps = {
    children: React.ReactNode;
}
function Oscars(props:OscarProps) {
  return (
      <div>{props.children}</div>
  )
}

export default Oscars