'use client';

import React, { useState } from 'react';
import { connect } from 'react-redux';
import MobileMenu from '../MobileMenu';
// import { removeFromCart } from '../../store/actions/action';
import Link from 'next/link';
import HeaderTopbar from '../HeaderTopbar';
// import { totalPrice } from '../../utils';
// import shape from '/public/images/hotel.png';
import Image from 'next/image';

const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);
  const [cartActive, setcartState] = useState(false);
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  // const { carts } = props;

  return (
    <header id="header" className={props.topbarBlock}>
      <HeaderTopbar />
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6">
                <div className="navbar-header">
                  <Link
                    onClick={ClickHandler}
                    className="navbar-brand logo"
                    href="/home"
                  >
                    sdsds <Image src={props.Logo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-9 col-md-1 col-1">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder"
                >
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <Link href="/">Home</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} href="/home">
                            Home style 1
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/home2">
                            Home style 2
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/home3">
                            Home style 3
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/about">
                        About
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="/">
                        Room
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} href="/room">
                            Room
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            href="/room-single/Deluxe-Contrast-Room"
                          >
                            Room single
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="/">
                        Destinition
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} href="/destination">
                            Destinition
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            href="/destination-single/The-Paris-Grand-Palace"
                          >
                            Destinition single
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="/blog">
                        Blog
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} href="/blog">
                            Blog right sidebar
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            href="/blog-left-sidebar"
                          >
                            Blog left sidebar
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/blog-fullwidth">
                            Blog fullwidth
                          </Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link onClick={ClickHandler} href="/">
                            Blog details
                          </Link>
                          <ul className="sub-menu">
                            <li>
                              <Link
                                onClick={ClickHandler}
                                href="/blog-single/They-Travel-Together"
                              >
                                Blog details right sidebar
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={ClickHandler}
                                href="/blog-single-left-sidebar/They-Travel-Together"
                              >
                                Blog details left sidebar
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={ClickHandler}
                                href="/blog-single-fullwidth/They-Travel-Together"
                              >
                                Blog details fullwidth
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="/">
                        Pages
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} href="/service">
                            Service
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/service-s2">
                            Service Style2
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            href="/service/Swimming-Pool"
                          >
                            Service Single
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/cart">
                            Cart
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/checkout">
                            Checkout
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/pricing">
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/search-result">
                            Search Result
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/404">
                            404
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/login">
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/register">
                            Register
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-1 col-md-2 col-2">
                <div className="header-right">
                  <div className="header-search-form-wrapper">
                    <div className="cart-search-contact">
                      <button
                        onClick={() => setMenuState(!menuActive)}
                        className="search-toggle-btn"
                      >
                        <i
                          className={`fi ${
                            menuActive ? 'ti-close' : 'fi flaticon-search'
                          }`}
                        ></i>
                      </button>
                      <div
                        className={`header-search-form ${
                          menuActive ? 'header-search-content-toggle' : ''
                        }`}
                      >
                        <form onSubmit={SubmitHandler}>
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search here..."
                            />
                            <button type="submit">
                              <i className="fi flaticon-search"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* <div className="mini-cart">
                    <button
                      className="cart-toggle-btn"
                      onClick={() => setcartState(!cartActive)}
                    >
                      {' '}
                      <i className="fi flaticon-shopping-cart"></i>{' '}
                      <span className="cart-count">{carts.length}</span>
                    </button>
                    <div
                      className={`mini-cart-content ${
                        cartActive ? 'mini-cart-content-toggle' : ''
                      }`}
                    >
                      <button
                        className="mini-cart-close"
                        onClick={() => setcartState(!cartActive)}
                      >
                        <i className="ti-close"></i>
                      </button>
                      <div className="mini-cart-items">
                        {carts &&
                          carts.length > 0 &&
                          carts.map((catItem, crt) => (
                            <div className="mini-cart-item clearfix" key={crt}>
                              <div className="mini-cart-item-image">
                                <span>
                                  <img src={catItem.proImg} alt="icon" />
                                </span>
                              </div>
                              <div className="mini-cart-item-des">
                                <p>{catItem.title} </p>
                                <span className="mini-cart-item-price">
                                  ${catItem.price} x {catItem.qty}
                                </span>
                                <span className="mini-cart-item-quantity">
                                  <button
                                    onClick={() =>
                                      props.removeFromCart(catItem.id)
                                    }
                                    className="btn btn-sm btn-danger"
                                  >
                                    <i className="ti-close"></i>
                                  </button>{' '}
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                      <div className="mini-cart-action clearfix">
                        <span className="mini-checkout-price">
                          Subtotal: <span> ${totalPrice(carts)}</span>
                        </span>
                        <div className="mini-btn">
                          <Link
                            onClick={ClickHandler}
                            href="/checkout"
                            className="view-cart-btn s1"
                          >
                            Checkout
                          </Link>
                          <Link
                            onClick={ClickHandler}
                            href="/cart"
                            className="view-cart-btn"
                          >
                            View Cart
                          </Link>
                        </div>
                      </div>
                      <div className="visible-icon">
                        <img src={shape} alt="icon" />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     carts: state.cartList.cart,
//   };
// };

// export default connect(mapStateToProps, { removeFromCart })(Header);

export default Header;
