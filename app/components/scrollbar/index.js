'use client';

import dynamic from 'next/dynamic';

const AnchorLink = dynamic(() => import('react-anchor-link-smooth-scroll'), {
  ssr: false,
});

const Scrollbar = () => {
  return (
    <div className="col-lg-12">
      <div className="header-menu">
        <ul className="smothscroll">
          <li>
            <AnchorLink href="#__next">
              <i className="ti-arrow-up"></i>
            </AnchorLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Scrollbar;
