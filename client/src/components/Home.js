import React from 'react';

const Home = (props) => (
    <div>{props.allPosts.map((note) => (
        <div key={note.id} className="card">
            <div className="card-body">
                <h5 className="card-subtitle mb-2 text-muted">{note.title} {note.UserId}</h5>
                <p className="card-text">{note.body}</p>
            </div>
        </div>
    ))}
    
    </div>
);

export default Home;