import React, {useState} from 'react'
import NavBar from '../components/navbar'
import SideBar from '../components/SideBar'

const Home = () => {
  const [showUser, setShowUser] = useState(false)
  return (
    <div>
      <NavBar setOpen={setShowUser}/>
      <SideBar setOpen={setShowUser} open={showUser}/>
    </div>
  )
}

export default Home
