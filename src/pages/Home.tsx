import React from 'react'
import { useSelector } from 'react-redux';

function Home() {
  const users = useSelector((state: any) => state.user.users);
  const latestUser = users.length -1
  return (
    <div>
      <h1> Welcome to our website : {users && users[latestUser]?.name}</h1>
     
    </div>
  )
}

export default Home
