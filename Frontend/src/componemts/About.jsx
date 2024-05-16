import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';


const About = () => {
    return (
        <section className='about' id='about'>
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className='heading'> ABOUT US</h1>
                        <p>The only thing we're seriouse about is food</p>
                    </div>
                    <p className='mid'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio animi inventore cupiditate quam. Quis quaerat voluptatum
                        eveniet veniam qui iure aliquam, esse nulla veritatis debitis,
                        animi et eum suscipit reiciendis fugiat. At consectetur rem dolorem
                        magni magnam exercitationem et illum maxime, voluptas laboriosam
                        molestias architecto voluptate doloremque iste a obcaecati.
                    </p>
                    <Link to="/">
                        Explore Menu{""}
                        <span>
                            <HiOutlineArrowNarrowRight />
                        </span>
                    </Link>
                </div>
                <div className="banner">
                    <img src="/about.png" alt="about" />
                </div>
            </div>
        </section>
    )
}

export default About