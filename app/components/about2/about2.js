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
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-content">
                <div className="about-title">
                  <span>Exclusive Offer</span>
                  <h2>Enjoy Your Dream Vacation In Tororo</h2>
                </div>
                <div className="wpo-about-content-inner">
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words whichs
                    don&quot;t look even slightly believable. If you are going
                    to use a passage of Lorem Ipsum, you need to be sure.
                  </p>
                  <div className="about-info-wrap">
                    <div className="about-info-left">
                      <p>2 Days / 3 Night</p>
                      <ul>
                        <li>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <span>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="about-info-right">
                      <p>Only</p>
                      <h3>$2500</h3>
                    </div>
                  </div>
                  <Link
                    className="theme-btn"
                    onClick={ClickHandler}
                    href="/room"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            {/* 🏠 About Creation Homes Welcome to Creation Homes — Where Every Stay
            Feels Like Home At Creation Homes, we believe comfort and connection
            should be effortless. We’ve reimagined the way people discover,
            book, and enjoy homes — creating a platform that connects travelers
            with beautiful, affordable, and well-managed spaces across Uganda
            (and beyond). Whether you’re booking a weekend getaway, a long-term
            residence, or a stylish city apartment, Creation Homes makes it easy
            to find the right home for your lifestyle. 🌍 Our Vision To become
            the most trusted platform for discovering, managing, and hosting
            short- and long-term homes in Africa — bringing quality,
            convenience, and technology together for homeowners and guests
            alike. 💡 Our Mission To empower property owners and guests through
            simplicity, transparency, and reliability. We strive to provide:
            Comfortable stays that blend design, affordability, and local
            authenticity. Effortless hosting through smart tools that simplify
            listings, communication, and payments. Trust and safety with
            verified homes, secure transactions, and responsive customer
            support. 🏡 Why Choose Creation Homes Verified Listings — Every home
            on our platform is verified for quality, accuracy, and safety. Smart
            Booking System — Simple, instant, and reliable bookings with
            flexible cancellation options. Tailored Experiences — From solo
            travelers to family getaways, we match you with spaces that fit your
            needs. 24/7 Support — Our local team is always one call away to make
            sure you have a smooth experience. 🤝 For Homeowners We help you
            turn your property into a reliable source of income. Our all-in-one
            dashboard makes managing bookings, payments, and guest interactions
            effortless — so you can focus on what matters most: great
            hospitality. List your property in minutes and start earning with
            peace of mind knowing Creation Homes handles the details. ✨ Our
            Promise At Creation Homes, we don’t just connect people to spaces —
            we connect people to comfort, community, and opportunity. Every stay
            supports a growing ecosystem of local hosts, artisans, and service
            providers. Because when you stay with Creation Homes, you’re part of
            a story that’s building the future of home living in Africa. 🗺️
            Explore. Stay. Belong. Find your next home away from home with
            Creation Homes — where every stay is more than accommodation — it’s
            an experience created for you. */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
