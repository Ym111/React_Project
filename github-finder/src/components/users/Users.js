import React from 'react'
import Useritem from './Useritem'
import Spinner from '../layout/spinner'
import PropTypes from 'prop-types'


const Users= ({users, loading}) => {
    if(loading ){
        return <Spinner/>
    }else{
        return (
            <div style = {userStyle}>
                {users.map(user => (
                    <Useritem key = {user.id}  user = {user}/> 
                ))}
            </div>
        );
    }
    
       
}
Users.prototype={
    users: PropTypes.array.isRequired,
    loading : PropTypes.bool.isRequired
}

const userStyle = {
    display :'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap : '1em'
}

export default Users;
