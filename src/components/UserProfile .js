import '../styles/styles.css';
import React from 'react'

const UserProfile= ({renderComponent,user})=> {
  return (
    <div>
      {renderComponent(user)}
    </div>
  )
}

export default UserProfile 
