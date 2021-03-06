import React from "react";

const Profile = props => (
  <div>
    <img id="profilePic" className="profile-pic" src={props.picture} alt="" />

    <p id="fullname">{props.fullname}</p>
    <br></br>
    <br></br>
    <p><button className='btn btn-link'>Friends</button></p>
    <p><button className='btn btn-link'>Groups</button></p>
    <p><button className='btn btn-link'>History</button></p>
    <p><button className='btn btn-link'>About</button></p>
    <p><button type="button" className='btn btn-link' data-toggle="modal" data-target="#settingModal">Settings</button></p>

<div className="modal fade" id="settingModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Settings</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">

      <div className="input-group-prepend homeInput">
                <span className="input-group-text" id="basic-addon1"><i className="fas fa-user-plus"></i></span>
                <input type="text" className="form-control" placeholder="Enter Full Name" aria-label="Username" aria-describedby="basic-addon1"
                    onChange={props.handleRegister} 
                    name='fullname'
                    value={props.fullname}
                />
            </div>

            {/* <div className="input-group-prepend homeInput">
                <span className="input-group-text" id="basic-addon1"><i className="fas fa-key"></i></span>
                <input type="password" className="form-control" placeholder="Update Password" aria-label="Password" aria-describedby="basic-addon1" 
                    onChange={props.handleRegister} 
                    name='password'
                    value={props.password}
                />
            </div> */}

            {/* <div className="input-group-prepend homeInput">
                <span className="input-group-text" id="basic-addon1"><i className="fas fa-envelope"></i></span>
                <input type="text" className="form-control" placeholder="Update Email" aria-label="Username" aria-describedby="basic-addon1"
                    onChange={props.handleRegister} 
                    name='email'
                    value={props.email}
                />
            </div> */}

            <div className="input-group-prepend homeInput">
                <span className="input-group-text" id="basic-addon1"><i className="fas fa-camera"></i></span>
                <input type="text" className="form-control" placeholder="Upload Picture" aria-label="Password" aria-describedby="basic-addon1" 
                    onChange={props.handleRegister} 
                    name='picture'
                    value={props.picture}
                />
            </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={props.handleUpdate} data-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
);

export default Profile;
