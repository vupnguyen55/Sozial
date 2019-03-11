import React from 'react';

const Nav = (props) => (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
            <h3 className="navbar-brand text-info">
                <i className="fa fa-usd fa-3x" aria-hidden="true"></i>ozial
            </h3>

            <div id="navCarousel" className="carousel slide" data-ride="carousel" data-interval="300">
                <ol className="carousel-indicators">
                    <li data-target="#navCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#navCarousel" data-slide-to="1"></li>
                    <li data-target="#navCarousel" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2015/12/15/09/04/banner-1093909__340.jpg" alt="Second slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2016/09/22/10/44/banner-1686943__340.jpg" alt="Third slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2018/06/07/09/01/emotions-3459666__340.jpg" alt="First slide"></img>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#navCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#navCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            &nbsp;
            <form className="form-inline">
                <button type="button" className="btn btn-outline-info my-2 my-sm-0">
                    <i className="fa fa-user-plus" aria-hidden="true"></i> Register
                </button>
            </form>
        </nav>
    </div>
);

export default Nav;