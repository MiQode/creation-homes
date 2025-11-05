'use client';

import Link from 'next/link';
// import Logo from '/public/images/logo.png';
import Services from '../../data/service';
import Image from 'next/image';

const Footer = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <footer className="wpo-site-footer">
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <span className="text-2xl font-extrabold text-rose-400">
                    CreationHomes
                  </span>
                  {/* <Image
                    src="/images/logo.png"
                    alt="footer"
                    width={50}
                    height={50}
                  /> */}
                </div>
                <p>
                  CreationHomes is your trusted partner in finding the perfect
                  home. We specialize in connecting buyers and renters with
                  their dream properties, offering a seamless and personalized
                  experience.
                </p>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} href="/">
                      <i className="ti-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/">
                      <i className="ti-twitter-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/">
                      <i className="ti-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/">
                      <i className="ti-google"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget s1">
                <div className="widget-title">
                  <h3>Services</h3>
                </div>
                <ul>
                  {Services.slice(0, 5).map((service, sitem) => (
                    <li key={sitem}>
                      <Link
                        onClick={ClickHandler}
                        href="/service/[slug]"
                        as={`/service/${service.slug}`}
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Important Link</h3>
                </div>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} href="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/destination">
                      Populer Destinition
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/room">
                      Awesome Rooms
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/service">
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/pricing">
                      Pricing Plan
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget wpo-service-link-widget">
                <div className="widget-title">
                  <h3>Contact </h3>
                </div>
                <div className="contact-ft">
                  <ul>
                    <li>
                      <i className="fi flaticon-placeholder"></i>Kampala Road,
                      Sun City Plaza, Kampala, Uganda
                    </li>
                    <li>
                      <i className="fi flaticon-phone-call"></i>+256 000 000 000
                    </li>
                    <li>
                      <i className="fi flaticon-send"></i>info@creationhomes.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright">
                {' '}
                Copyright &copy; 2025 Creation Homes
                {/* by{' '}
                <Link onClick={ClickHandler} href="/">
                  wpOceans
                </Link> */}
                . All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
