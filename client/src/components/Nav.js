import React from 'react';

const Nav = (props) => (
    <div className="container-fluid carouselContainer">
        <nav className="navbar navbar-expand-lg navbar-light justify-content-between">

            <div id="navCarousel" className="carousel slide" data-ride="carousel" data-interval="9000">
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
                        <img className="d-block w-100" src="https://www.nationalgeographic.com/content/dam/travel/2017-digital/how-instagram-is-changing-travel/selfie-moriane-lake-banff-canada.ngsversion.1485378002988.adapt.1900.1.jpg" alt="Second slide"></img>
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
                        <img className="d-block w-100" src="http://static1.squarespace.com/static/58d94e54b3db2b57ce97c524/58daa04bb3db2b38d4674feb/5a8b721f71c10b584549bef8/1550014169797/How-To-Instagram-Pics-Travel-1500x1000.jpg?format=1500w" alt="Sixth slide"></img>
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