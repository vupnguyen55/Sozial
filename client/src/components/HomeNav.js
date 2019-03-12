import React from 'react'

const HomeNav = (props) => (

    <div>
        <nav id="homeNav" className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
                <h3 className="navbar-brand homeLogo text-info">
                    <i id="homeIcon" className="fa fa-usd fa-3x" aria-hidden="true"></i>ozial
                </h3></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <form className="col friendSearch">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder={props.placeholder}
                        value={props.value}
                        onChange={props.handleChange} />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" data-toggle="modal" data-target="#friendModal"
                            onClick={props.handleClick} >{props.btnName}
                        </button>
                    </div>
                </div>
            </form>
            <div>
                <p><img id="navPic" className="" src={props.picture} alt="" /></p>
            </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a id="homeButton" className="nav-link" href="#"><span id="navName">{props.fullname}</span> <i className="fas fa-users"></i> <i className="fas fa-bell-slash"></i> <i id="mssIcon" className="fas fa-comments"></i><a id="logout" href=""> Logout</a><span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
        </nav>

        <div className="modal fade" id="friendModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Who would you like to connect with?</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div>{props.friendsname.map((x) => (
                            <div key={x.id}>
                                <p>{x.full_name} &nbsp;&nbsp;
                                    <button className="addFriend btn btn-primary" value={x.id} onClick={props.handleAddClick}><i className="fas fa-user-plus"></i></button></p>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        {/* <button type="button" className="btn btn-primary"></button> */}
                    </div>
                </div>
            </div>
        </div>

    </div>
);
export default HomeNav;