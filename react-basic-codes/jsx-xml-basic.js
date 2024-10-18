// jsx is stricter than HTML

function AboutPage(){
  return(
    <>
      <h1>use the html code in react</h1>
      <p>Hello there <br /> self closing</p>
      <img
        className ="avatar"
        src = {user.imageUrl}    
      />
      <h1>{user.name}</h1>
    </>
  )
}

const user = {
  name:'Gopal',
  imageUrl:'https//i.gopal.com.jpg',
  imageSize:90,
}

export default function Profile(){
  return(
    <>
      <h1>{user.name}</h1>
      <img 
        className ="avatar"
        src ={user.imageUrl}
        alt ={'Photo of' + user.name}
        style={{
          width:user.imageSize,
          height:user.imageSize
        }}
    </>
  )
}
