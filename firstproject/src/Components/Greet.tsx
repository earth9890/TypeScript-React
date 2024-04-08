
type GreetProps = {
    name: string,
    salary?: number,
    isLoggedIn : boolean
}
export const Greet = (props: GreetProps) => {
    const { salary = 0 } = props;
  return (
      <>
          <div>
              <h1>
                  { props.isLoggedIn ? `Welcome ${props.name} your Salary ${salary}` : `Hello ${props.name}`}</h1>
        </div>
      </>
  )
}

