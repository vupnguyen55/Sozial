import React from 'react'

const HomeNav = (props) => (

    <div>
        <nav id="homeNav" class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#">
                <h3 className="navbar-brand homeLogo text-info">
                    <i id="homeIcon" className="fa fa-usd fa-3x" aria-hidden="true"></i>ozial
                </h3></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
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

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a id="homeButton" class="nav-link" href="#"><span id="navName">{props.fullname}</span> <i class="fas fa-users"></i> <i class="fas fa-bell-slash"></i> <i id="mssIcon" class="fas fa-comments"></i><a id="logout" href=""> Logout</a><span class="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
        </nav>

        {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"></button> */}

        <div class="modal fade" id="friendModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div>{props.friendsname.map((x) => (
                            <div key={x.id}>
                                <p>{x.full_name} &nbsp;&nbsp;
                                    <button className='btn btn-outline-primary' value={x.id} onClick={props.handleAddClick}>Add Friend</button></p>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        {/* <button type="button" class="btn btn-primary"></button> */}
                    </div>
                </div>
            </div>
        </div>

    </div>
);
export default HomeNav;