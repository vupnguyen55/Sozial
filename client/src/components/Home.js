import React from 'react';

const Home = (props) => (
    <div className='container'>
        
        <div  >{props.allPosts.map((note) => (
            <div key={note.id}>
                <p>{note.id}</p>
                <p>{note.title}</p>
                <p>{note.body}</p>
                
            </div>
        ))}
        </div>

    </div>
);

export default Home;