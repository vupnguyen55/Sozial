import React from 'react';

const Profile = (props) => (
    <div>
        <img className='profile-pic' src='https://cdn.pixabay.com/photo/2015/12/08/01/04/deer-1082318__340.jpg' alt='profile'></img>
        
        <p>{props.fullname}</p>
    </div>
);

export default Profile;
 