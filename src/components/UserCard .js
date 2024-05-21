import React from 'react'
import '../styles/styles.css';
import { Card } from '@mui/material';

const UserCard = (props) => {
    return (
        <Card variant="outlined" >
            <div className="user_card">
                <img src={props.user.avatar} alt={`${props.user.name}'s avatar`} className="user_avatar" />
                <h2 className="user_name">{props.user.name}</h2>
                <p className="user_biography">{props.user.biography}</p>
            </div>
        </Card>
    )
}

export default UserCard 
