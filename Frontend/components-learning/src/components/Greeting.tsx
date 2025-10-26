function Greeting(props:any) {
  return (
    <div>
      {
      props.isLoggedIn ? (props.isAuthorized ? <h1>You are Authorized</h1> : <h1>Access  Denied</h1>) : (<h1>Please login</h1>)
      }
    </div>
  );
}

export default Greeting;
