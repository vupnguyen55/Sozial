import React from 'react';

const Nav = (props) => (
    <div className="container-fluid carouselContainer">
        <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
            {/* <h3 className="navbar-brand text-info">
                <i className="fa fa-usd fa-3x" aria-hidden="true"></i>ozial
            </h3> */}

            <div id="navCarousel" className="carousel slide" data-ride="carousel" data-interval="6000">
                <ol className="carousel-indicators">
                    <li data-target="#navCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#navCarousel" data-slide-to="1"></li>
                    <li data-target="#navCarousel" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fs.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F4279e8ef7d3886ff5c0054e790fe10c3%2F206724102%2FImage%2B029.jpg&client=amp-blogside-v2&signature=b521284abe6ce39e78227e065431d4c3a396c4fc" alt="First slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://images.theconversation.com/files/196042/original/file-20171123-6020-aa3n9n.jpg?ixlib=rb-1.1.0&rect=0%2C10%2C6720%2C3360&q=45&auto=format&w=1356&h=668&fit=crop" alt="Second slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://s20772.pcdn.co/wp-content/uploads/2016/03/G0969352.jpg" alt="Third slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://one-week-in.com/wp-content/uploads/2018/04/instagram-captions-travel.jpg" alt="Fourth slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/ruined-instagram-photos-ft-blog1017.jpg?itok=HcrAeLhM" alt="Fifth slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://i.pinimg.com/originals/ed/65/da/ed65da1b275b8203421d2bbaab507c5a.jpg" alt="Sixth slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2018/04/atlanta-braves-sign-instagram-lonelyplanet-travel-72edbe236f85.jpg" alt="Seventh slide"></img>
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
        </nav>
    </div>
);

export default Nav;