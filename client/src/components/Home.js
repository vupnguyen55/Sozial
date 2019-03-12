import React from 'react';

const Home = (props) => (
    <div>{props.allPosts.map((note) => (
    
        <div key={note.id} className="card">
            <div className="card-body">
                <h5 className="card-subtitle mb-2 text-muted">{note.User.full_name}</h5>
                <p className="card-text">{note.body}</p>
                <hr></hr>
                <div className="btn-group" role="group">
                    <button className="btn btn-link btn-sm">
                    <i className="fa fa-thumbs-up" aria-hidden="true"> Like</i></button>
                    <button className="btn btn-link btn-sm">
                    <i className="fa fa-comments" aria-hidden="true"> Comment</i></button>
                    <button className="btn btn-link btn-sm">
                    <i className="fa fa-share" aria-hidden="true"> Share</i></button>
                </div>
            </div>
            <div className="card-footer text-muted">
                <i className="fa fa-smile-o" aria-hidden="true"></i> &nbsp;
                <i className="fa fa-camera" aria-hidden="true"></i> &nbsp;
                <input className='form-rounded' placeholder='  Write a comment...' />
            </div>
        </div>
        
    ))}
    

    </div>

        );
        
export default Home;