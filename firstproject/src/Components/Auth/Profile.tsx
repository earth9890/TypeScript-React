export type ProfileProps = { 
    name : String
}
function Profile({name}:ProfileProps) {
  return (
      <>
          <div>Profile</div>
          <h1>Private Name : {name}</h1>
      </>
  )
}

export default Profile