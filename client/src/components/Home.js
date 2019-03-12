import React from 'react';

const styles = {
    card: {
        marginBottom: 20
    }
} 

const Home = (props) => (
    <div>{props.allPosts.map((note) => (
    
        <div key={note.id} className="card" style={styles.card}>
            <div className="card-body">
                <h5 className="card-subtitle mb-2 text-muted">{note.title} {note.User.full_name}</h5>
                <p className="card-text">{note.body}</p>
                <hr></hr>
                <div className="btn-group" role="group">
                    <button className="btn btn-link btn-sm">
                    <i aria-hidden="true"> Like</i></button>
                    <button className="btn btn-link btn-sm">
                    <i aria-hidden="true"> Comment</i></button>
                    <button className="btn btn-link btn-sm">
                    <i aria-hidden="true"> Share</i></button>
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