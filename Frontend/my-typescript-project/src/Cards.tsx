const Cards = (props:{name:string,age:number,location:string}) => {
    const{name,age,location} = props
  return (
    <div className='container'>
        <h1>Name : {name}</h1>
        <h2>Age : {age}</h2>
        <h3>Location : {location}</h3>
        <button>Click Profile</button>
    </div>
  )
}

export default Cards