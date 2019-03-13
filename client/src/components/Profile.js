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

<div className="modal fade" id="settingModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">

      <div className="input-group-prepend homeInput">
                <span className="input-group-text" id="basic-addon1"><i className="fas fa-user-plus"></i></span>
                <input type="text" className="form-control" placeholder="Full Name" aria-label="Username" aria-describedby="basic-addon1"
                    onChange={props.handleRegister} 
                    name='regFullName'
                    value={props.regFullName}
                />
            </div>

            <div className="input-group-prepend homeInput">
                <span className="input-group-text" id="basic-addon1"><i className="fas fa-key"></i></span>
                <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" 
                    onChange={props.handleRegister} 
                    name='regPss'
                    value={props.regPss}
                />
            </div>

            <div className="input-group-prepend homeInput">
                <span className="input-group-text" id="basic-addon1"><i class="fas fa-envelope"></i></span>
                <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"
                    onChange={props.handleRegister} 
                    name='regEmail'
                    value={props.regEmail}
                />
            </div>

            <div className="input-group-prepend homeInput">
                <span className="input-group-text" id="basic-addon1"><i class="fas fa-camera"></i></span>
                <input type="text" className="form-control" placeholder="Picture" aria-label="Password" aria-describedby="basic-addon1" 
                    onChange={props.handleRegister} 
                    name='regPicture'
                    value={props.regImg}
                />
            </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={props.handleUpdate}>Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
);

export default Profile;
