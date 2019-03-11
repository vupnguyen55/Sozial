import React from 'react';

const Friend = (props) => (
    <div>{props.friendsname.map((x) => (
        <div key={x.id}>
            <p>{x.full_name} &nbsp;&nbsp;
            <button className='btn btn-outline-primary' value={x.id} onClick={props.handleAddClick}>Add Friend</button></p>
        </div>

    ))}
        
    </div>
    
);

export default Friend;