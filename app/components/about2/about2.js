'use client';

import Link from 'next/link';
// import abimg from '/public/images/about.jpg';
import Image from 'next/image';

const About2 = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="wpo-about-section section-padding">
      <div className="container">
        <div className="wpo-about-section-wrapper">
          <div className="row align-items-center">
            {/* <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <Image src={abimg} alt="" />
                            </div>
                        </div> */}
            <div className="wpo-about-content">
              <div className="about-title">
                <span>Exclusive Offer</span>
                <h2>Enjoy Your Dream Vacation In Tororo</h2>
              </div>
            </div>
            <div className="wpo-about-content-inner">
              <p>
                Welcome to Creation Homes — Where Every Stay Feels Like Home At
                Creation Homes, we believe comfort and connection should be
                effortless. We’ve reimagined the way people discover, book, and
                enjoy homes — creating a platform that connects travelers with
                beautiful, affordable, and well-managed spaces across Uganda
                (and beyond). Whether you’re booking a weekend getaway, a
                long-term residence, or a stylish city apartment, Creation Homes
                makes it easy to find the right home for your lifestyle.
              </p>
            </div>
            <div className="wpo-about-content">
              <div className="about-title">
                <span>Our Vision</span>
                <p>
                  To become the most trusted platform for discovering, managing,
                  and hosting short- and long-term homes in Uganda — bringing
                  quality, convenience, and technology for our guests.
                </p>
              </div>
            </div>
            <div className="wpo-about-content">
              <div className="about-title">
                <span>Our Mission</span>
                <p>
                  To empower our guests through simplicity, transparency, and
                  reliability. We strive to provide: Comfortable stays that
                  blend design, affordability, and local authenticity.
                  Effortless hosting through smart tools that simplify listings,
                  communication, and payments. Trust and safety with verified
                  homes, secure transactions, and responsive customer support.
                </p>
              </div>
            </div>
            <div className="wpo-about-content">
              <div className="about-title">
                <span>Our Mission</span>
                <p>
                  To empower our guests through simplicity, transparency, and
                  reliability. We strive to provide: Comfortable stays that
                  blend design, affordability, and local authenticity. Trust and
                  safety with verified homes, secure transactions, and
                  responsive customer support.
                </p>
              </div>
            </div>
            <div className="wpo-about-content">
              <div className="about-title">
                <span>Why Choose Creation Homes</span>
                <p>
                  Every home on our platform is verified for quality, accuracy,
                  and safety. Smart Booking System — Simple, instant, and
                  reliable bookings with flexible cancellation options. Tailored
                  Experiences — From solo travelers to family getaways, we match
                  you with spaces that fit your needs. 24/7 Support — Our local
                  team is always one call away to make sure you have a smooth
                  experience.
                </p>
                <p>
                  Explore. Stay. Belong. Find your next home away from home with
                  Creation Homes — where every stay is more than accommodation —
                  it’s an experience created for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
