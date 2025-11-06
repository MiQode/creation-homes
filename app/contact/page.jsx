import React, { Fragment } from 'react';
import PageTitle from '../components/pagetitle/PageTitle';

import ContactpageSec from '../components/ContactpageSec/ContactpageSec';

const ContactPage = () => {
  return (
    <Fragment>
      <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} />
      <ContactpageSec />
      {/* <Newslatter nClass={'section-bg'}/>
            <Footer/>
            <Scrollbar/> */}
    </Fragment>
  );
};

export default ContactPage;
