'use client';

import Image from 'next/image';
// import Shape1 from '/images/nshape1.png';
// import Shape2 from '/images/nshape2.png';

const SubmitHandler = (e) => {
  e.preventDefault();
};

const Newslatter = (props) => {
  return (
    <section
      className={`wpo-newslatter-section section-padding ${props.nClass}`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7">
            <div className="wpo-section-title-s2">
              <h2>Subscribe & Get Special Discount!</h2>
              <p>
                Don’t Wanna Miss Somethings? Subscribe Right Now And Get The
                Special Discount And Monthly Newsletter.
              </p>
            </div>
          </div>
        </div>
        <div className="wpo-newsletter">
          <div className="newsletter-form">
            <form onSubmit={SubmitHandler}>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email Address..."
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="n-shape">
        <Image src="/images/nshape1.png" alt="" width={1600} height={1600} />
      </div>
      <div className="n-shape2">
        <Image src="/images/nshape2.png" alt="" width={1600} height={1600} />
      </div>
    </section>
  );
};

export default Newslatter;
