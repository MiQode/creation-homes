import React from 'react';
import Link from 'next/link';

const PageTitle = (props) => {
  return (
    <div className="wpo-breadcumb-area bg-[url('/images/page-title.jpg')] bg-no-repeat bg-center bg-cover ">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="wpo-breadcumb-wrap">
              <h2>{props.pageTitle}</h2>
              <ul>
                <li>
                  <Link href="/home">Home</Link>
                </li>
                <li>
                  <span>{props.pagesub}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
