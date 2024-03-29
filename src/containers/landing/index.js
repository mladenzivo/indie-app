import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    const cloudCSS = "https://sparxsdeploy.s3.amazonaws.com/js/main.css";
    return (
      <div className="landing-home">
        <link rel="stylesheet" type="text/css" href={cloudCSS} />
        <div className="menu-modal">
          <div className="menu-modal__wrapper">
            <div className="menu-modal__header">
              <button className="btn menu-modal__close">
                <img
                  className="icon"
                  src={require("../../assets/images/icon/close.svg")}
                  alt=""
                />
              </button>
            </div>
            <nav className="menu-modal__box">
              <ul className="menu-modal__list">
                <li className="menu-modal__list-item">
                  <Link to="#" className="menu-modal__link">
                    About
                  </Link>
                </li>
                <li className="menu-modal__list-item">
                  <Link to="#" className="menu-modal__link">
                    Features
                  </Link>
                </li>
                <li className="menu-modal__list-item">
                  <Link to="#" className="menu-modal__link">
                    Reviews
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="menu-modal__btn-group m:center-x">
              <button
                className="menu-modal__sign-up btn btn--link"
                data-login-open="sign-up"
                data-modal-open="modal-login"
              >
                Sign Up
              </button>
              <button
                className="menu-modal__login btn btn--outline"
                data-login-open="login"
                data-modal-open="modal-login"
              >
                Log In
              </button>
            </div>
            <div className="social m:center-x">
              <a
                href="https://www.facebook.com/indiesparxs"
                className="social__item"
                target="black"
              >
                <svg
                  className="icon"
                  width="10"
                  height="20"
                  viewBox="0 0 10 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_0_168)">
                    <path
                      d="M2.48148 19.9993V10.6147H0V7.23579H2.48148V4.34977C2.48148 2.08191 3.9473 -0.000732422 7.32486 -0.000732422C8.69238 -0.000732422 9.7036 0.130368 9.7036 0.130368L9.62392 3.28569C9.62392 3.28569 8.59264 3.27565 7.46726 3.27565C6.24926 3.27565 6.05412 3.83695 6.05412 4.76857V7.23579H9.72074L9.5612 10.6147H6.05412V19.9993H2.48148Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_168">
                      <rect
                        width="9.72074"
                        height="20"
                        fill="white"
                        transform="translate(0 -0.000732422)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/indiesparxs/"
                className="social__item"
                target="black"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.0874 2.48926H7.0874C4.32598 2.48926 2.0874 4.72783 2.0874 7.48926V17.4893C2.0874 20.2507 4.32598 22.4893 7.0874 22.4893H17.0874C19.8488 22.4893 22.0874 20.2507 22.0874 17.4893V7.48926C22.0874 4.72783 19.8488 2.48926 17.0874 2.48926Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.0874 11.8593C16.2108 12.6916 16.0687 13.5415 15.6812 14.2883C15.2937 15.0351 14.6806 15.6407 13.929 16.019C13.1775 16.3972 12.3259 16.5289 11.4952 16.3952C10.6645 16.2616 9.89718 15.8694 9.30225 15.2745C8.70733 14.6796 8.31515 13.9122 8.18148 13.0815C8.04782 12.2509 8.17948 11.3992 8.55774 10.6477C8.936 9.89617 9.5416 9.28306 10.2884 8.89556C11.0352 8.50806 11.8852 8.3659 12.7174 8.48932C13.5663 8.6152 14.3523 9.01078 14.9591 9.61762C15.566 10.2245 15.9615 11.0104 16.0874 11.8593Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.5874 6.98926H17.5974"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com/indiesparxs"
                className="social__item"
                target="black"
              >
                <svg
                  className="icon"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.7825 3.82036C22.8249 4.49584 21.7646 5.01247 20.6425 5.35036C20.0402 4.65787 19.2398 4.16705 18.3495 3.94428C17.4592 3.72152 16.522 3.77755 15.6646 4.10481C14.8071 4.43207 14.0709 5.01476 13.5555 5.77408C13.04 6.53339 12.7702 7.43269 12.7825 8.35036V9.35036C11.0251 9.39593 9.28374 9.00617 7.71348 8.2158C6.14321 7.42544 4.79279 6.25899 3.78247 4.82036C3.78247 4.82036 -0.217529 13.8204 8.78247 17.8204C6.723 19.2183 4.26963 19.9193 1.78247 19.8204C10.7825 24.8204 21.7825 19.8204 21.7825 8.32036C21.7815 8.04181 21.7548 7.76395 21.7025 7.49036C22.7231 6.48385 23.4433 5.21307 23.7825 3.82036Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <header className="header">
          <div className="header__container container">
            <button className="header__menu-toggle menu-toggle m:hide@lg">
              <img
                className="icon"
                src={require("../../assets/images/icon/menu.svg")}
                alt=""
              />
            </button>
            <div className="header__logo logo">
              <img
                className="logo__image"
                src={require("../../assets/images/global/logo.png")}
                alt=""
              />
            </div>
            <nav className="header__menu menu m:show@lg">
              <ul className="menu__list m:center-x">
                <li className="menu__list-item">
                  <Link to="#" className="menu__link">
                    About
                  </Link>
                </li>
                <li className="menu__list-item">
                  <Link to="#" className="menu__link">
                    Features
                  </Link>
                </li>
                <li className="menu__list-item">
                  <Link to="#" className="menu__link">
                    Reviews
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="header__btn-group">
              <button
                className="header__sign-up btn btn--link m:show@md"
                data-login-open="sign-up"
                data-modal-open="modal-login"
              >
                Sign Up
              </button>
              <button
                className="header__login btn btn--outline"
                data-login-open="login"
                data-modal-open="modal-login"
              >
                Log In
              </button>
            </div>
          </div>
        </header>
        <section id="home" className="home">
          <div className="container">
            <img
              className="home__new m:center-x m:left@md"
              src={require("../../assets/images/icon/new.svg")}
              alt=""
            />
            <div className="home__content box-y m:axis-x@md">
              <div className="box-y">
                <h1 className="home__title">
                  streaming <br className="m:hide@md" /> is old news
                </h1>
                <p className="home__subtitle">
                  Let’s talk <span>experiencing</span>
                </p>
              </div>
              <button
                className="btn home__video-btn"
                data-modal-open="modal-video"
                data-video-src="https://www.youtube.com/embed/Aj6D0EyhCPY"
              >
                <svg
                  className="home__video-icon"
                  viewBox="0 0 117 117"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26 20.148c0-8.703 9.628-13.959 16.948-9.253l59.659 38.352c6.735 4.33 6.735 14.176 0 18.506l-59.659 38.352c-7.32 4.706-16.948-.55-16.948-9.253V20.148Z"
                    fill="url(#a)"
                  />
                  <defs>
                    <linearGradient
                      id="a"
                      x1="71.5"
                      y1="0"
                      x2="71.5"
                      y2="117"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#F0BB6D" />
                      <stop offset="1" stopColor="#F0BB6D" stopOpacity=".52" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
            <div className="home__access">
              <Link
                to="#"
                className="home__access-btn btn btn--default m:center-x"
              >
                REQUEST BETA ACCESS
              </Link>
              <p className="home__access-text t:center t:left@md t:left@md">
                1000+ free indie movies <br /> are available to you instantly.
              </p>
            </div>
            <p className="home__description">
              <b>INDIE Sparxs</b> is a social promotions platform for indie
              movies. We leverage a sophisticated discovery engine to connect
              our indie creatives with their audience and potential distribution
              partners.
            </p>
          </div>
        </section>

        <div id="audience" className="audience">
          <div className="audience__slider">
            <div className="audience-slider-controller">
              <strong className="audience-slider-controller__title title title--size-lg t:center t:left@lg">
                WATCH
              </strong>
              <strong className="audience-slider-controller__subtitle subtitle t:center t:left@lg">
                For Free Right Now
              </strong>
              <div className="box m:show@lg">
                <button className="btn audience-slider-prev">
                  <svg
                    className="icon"
                    width="26"
                    height="25"
                    viewBox="0 0 26 25"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#DD5079"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.98577 20.6523L7.92779 18.5944L14.1017 12.4205L7.92779 6.24655L9.98577 4.18858L18.2177 12.4205L9.98577 20.6523Z"
                      stroke="#DD5079"
                      stroke-width="1"
                    />
                  </svg>
                </button>
                <button className="btn audience-slider-next">
                  <svg
                    className="icon"
                    width="26"
                    height="25"
                    viewBox="0 0 26 25"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#DD5079"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.98577 20.6523L7.92779 18.5944L14.1017 12.4205L7.92779 6.24655L9.98577 4.18858L18.2177 12.4205L9.98577 20.6523Z"
                      stroke="#DD5079"
                      stroke-width="1"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="audience-slider swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    className="swiper-lazy"
                    data-src={require("../../assets/images/audience/audience-slider-1.jpg")}
                    src={require("../../assets/images/global/lazyload.png")}
                    alt=""
                  />
                  <div className="swiper-lazy-preloader"></div>
                  <div className="audience-slider__views">
                    123
                    <img
                      className="icon eye"
                      src={require("../../assets/images/icon/view.svg")}
                      alt=""
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <img
                    className="swiper-lazy"
                    data-src={require("../../assets/images/audience/audience-slider-2.jpg")}
                    // src={require("../../assets/images/global/lazyload.png"
                    src={require("../../assets/images/global/lazyload.png")}
                    alt=""
                  />
                  <div className="swiper-lazy-preloader"></div>
                  <div className="audience-slider__views">
                    123
                    <img
                      className="icon eye"
                      src={require("../../assets/images/icon/view.svg")}
                      alt=""
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <img
                    className="swiper-lazy"
                    data-src={require("../../assets/images/audience/audience-slider-3.jpg")}
                    src={require("../../assets/images/global/lazyload.png")}
                    alt=""
                  />
                  <div className="swiper-lazy-preloader"></div>
                  <div className="audience-slider__views">
                    1 123 123 112
                    <img
                      className="icon eye"
                      src={require("../../assets/images/icon/view.svg")}
                      alt=""
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <img
                    className="swiper-lazy"
                    data-src={require("../../assets/images/audience/audience-slider-1.jpg")}
                    src={require("../../assets/images/global/lazyload.png")}
                    alt=""
                  />
                  <div className="swiper-lazy-preloader"></div>
                  <div className="audience-slider__views">
                    123 131 212
                    <img
                      className="icon eye"
                      src={require("../../assets/images/icon/view.svg")}
                      alt=""
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <img
                    className="swiper-lazy"
                    data-src={require("../../assets/images/audience/audience-slider-2.jpg")}
                    src={require("../../assets/images/global/lazyload.png")}
                    alt=""
                  />
                  <div className="swiper-lazy-preloader"></div>
                  <div className="audience-slider__views">
                    123
                    <img
                      className="icon eye"
                      src={require("../../assets/images/icon/view.svg")}
                      alt=""
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <img
                    className="swiper-lazy"
                    data-src={require("../../assets/images/audience/audience-slider-3.jpg")}
                    src={require("../../assets/images/global/lazyload.png")}
                    alt=""
                  />
                  <div className="swiper-lazy-preloader"></div>
                  <div className="audience-slider__views">
                    123
                    <img
                      className="icon eye"
                      src={require("../../assets/images/icon/view.svg")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="audience-slider-btn-group-botton box m:hide@lg m:align-center-x">
              <button className="btn audience-slider-prev">
                <svg
                  className="icon"
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#DD5079"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.98577 20.6523L7.92779 18.5944L14.1017 12.4205L7.92779 6.24655L9.98577 4.18858L18.2177 12.4205L9.98577 20.6523Z"
                    stroke="#DD5079"
                    stroke-width="1"
                  />
                </svg>
              </button>
              <button className="btn audience-slider-next">
                <svg
                  className="icon"
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#DD5079"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.98577 20.6523L7.92779 18.5944L14.1017 12.4205L7.92779 6.24655L9.98577 4.18858L18.2177 12.4205L9.98577 20.6523Z"
                    stroke="#DD5079"
                    stroke-width="1"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="grid">
            <section className="col-6@lg audience-card ">
              <img
                className="lazy audience-card__bg"
                data-src={require("../../assets/images/audience/audience-card-1.jpg")}
                src={require("../../assets/images/global/lazyload.png")}
                alt=""
                loading="lazy"
              />
              <div className="audience-card__wrapper box-y m:align-left  m:align-right@lg t:right@lg">
                <p className="audience-card__subtitle">
                  Independent Filmmakers, Producers, Artists
                </p>
                <h2 className="audience-card__title">CREATORS</h2>
                <p className="audience-card__text _right">
                  From amateur to auteur, our Creators supply the content and
                  can opt to make money from their projects.
                </p>
                <button className="audience-card__view-show btn btn--default">
                  Learn more
                </button>
              </div>
              <div className="audience-card__view _right  box-y m:align-right@lg t:right@lg">
                <button className="btn audience-card__view-hide _left m:right@lg">
                  <img
                    className="icon"
                    src={require("../../assets/images/icon/long-arrow.svg")}
                    alt=""
                  />
                  go back
                </button>
                <p className="audience-card__subtitle">
                  Independent Filmmakers, Producers, Artists
                </p>
                <strong className="audience-card__title">creators</strong>
                <div className="audience-card__text _right ">
                  <p>
                    Finding an audience for your indie project should be easy.
                    After all, you’ve already depleted your blood, sweat, and
                    tears (and maybe even sold your soul) in an effort to bring
                    your vision to life. Simply upload your creation, meet
                    approval guidelines, and start earning based on views.
                  </p>
                  <p>
                    As a Creator, you can opt to host monetized premiere
                    parties, connect with fans through live streams in the
                    Filmmakers’ Lounge, and meet other like-minded filmmakers.
                    Did we mention you get to keep 80% of all your earnings?
                  </p>
                </div>
                <div className="grid g:gap-y audience-card__view-grid m:show@md m:align-center m:align-right@lg m:align-top@lg t:center t:right@lg">
                  <div className="col-4@md">
                    <div className="audience-card__view-grid-image">
                      <img
                        className="m:center-x m:right@lg"
                        src={require("../../assets/images/audience/coins-icon.png")}
                        alt=""
                      />
                    </div>
                    <strong>monetize your film/show</strong>
                  </div>
                  <div className="col-4@md">
                    <div className="audience-card__view-grid-image">
                      <img
                        className="m:center-x m:right@lg"
                        src={require("../../assets/images/audience/community-icon.png")}
                        alt=""
                      />
                    </div>
                    <strong>go back</strong>
                  </div>
                  <div className="col-4@md">
                    <div className="audience-card__view-grid-image">
                      <img
                        className="m:center-x m:right@lg"
                        src={require("../../assets/images/audience/film-icon.png")}
                        alt=""
                      />
                    </div>
                    <strong>creators</strong>
                  </div>
                </div>
              </div>
            </section>
            <section className="col-6@lg audience-card">
              <img
                className="lazy audience-card__bg"
                data-src={require("../../assets/images/audience/audience-card-2.jpg")}
                src={require("../../assets/images/global/lazyload.png")}
                alt=""
                loading="lazy"
              />
              <div className="audience-card__wrapper">
                <p className="audience-card__subtitle">
                  Film/TV Lovers, Indie Enthusiasts, Streamers
                </p>
                <h2 className="audience-card__title">CINERS</h2>
                <p className="audience-card__text">
                  Across the globe, Ciners (pronounced sinners) watch compelling
                  programming and connect with community members.
                </p>
                <button className="audience-card__view-show btn btn--default">
                  Learn more
                </button>
              </div>
              <div className="audience-card__view _left">
                <button className="btn audience-card__view-hide">
                  go back
                  <img
                    className="icon"
                    src={require("../../assets/images/icon/long-arrow.svg")}
                    alt=""
                  />
                </button>
                <p className="audience-card__subtitle">
                  Independent Filmmakers, Producers, Artists
                </p>
                <strong className="audience-card__title">CINERS</strong>
                <div className="audience-card__text">
                  <p>
                    Users who stream the content here share the honorary name of
                    being called "Ciners" (haha, get it?). You don’t need to be
                    an enthusiast or a film critic to join this club.
                  </p>
                  <p>
                    {" "}
                    A simple love for sitting on the couch and enjoying the
                    moving picture is the common denominator among our
                    community. In addition to streaming, you can choose to vote
                    on your favorite films/shows, start a thread on the Forum,
                    or interact with your favorite filmmakers.
                  </p>
                </div>
                <div className="grid audience-card__view-grid m:show@md m:align-right@lg t:center t:left@lg">
                  <div className="col-4@md">
                    <div className="audience-card__view-grid-image">
                      <img
                        className="m:center m:left@lg"
                        src={require("../../assets/images/audience/stream-icon.png")}
                        alt=""
                      />
                    </div>
                    <strong>personalized library</strong>
                  </div>
                  <div className="col-4@md">
                    <div className="audience-card__view-grid-image">
                      <img
                        className="m:center m:left@lg"
                        src={require("../../assets/images/audience/icon-5.png")}
                        alt=""
                      />
                    </div>
                    <strong>react to your fave</strong>
                  </div>
                  <div className="col-4@md">
                    <div className="audience-card__view-grid-image">
                      <img
                        className="m:center m:left@lg"
                        src={require("../../assets/images/audience/connect-icon.png")}
                        alt=""
                      />
                    </div>
                    <strong>comment & connect</strong>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <section id="info" className="info">
          <div className="container">
            <h2 className="info__title title title--size-lg t:center t:left@lg">
              How <br className="m:hide@lg" /> it works
            </h2>
            <div className="info__grid grid g:gap-y">
              <div className="col-4@md info-card">
                <img
                  className="icon"
                  src={require("../../assets/images/icon/monitor-mobbile.svg")}
                  alt=""
                />
                <strong className="info-card__title">download the app</strong>
                <p className="info-card__text">
                  Available on desktop, iOS & Android
                </p>
              </div>
              <div className="col-4@md info-card">
                <img
                  className="icon"
                  src={require("../../assets/images/icon/chart.svg")}
                  alt=""
                />
                <strong className="info-card__title">
                  choose an experience
                </strong>
                <p className="info-card__text">
                  Choose between Virtual Cinema, Streaming Library, Film
                  Festival
                </p>
              </div>
              <div className="col-4@md info-card">
                <img
                  className="icon"
                  src={require("../../assets/images/icon/mirroring-screen.svg")}
                  alt=""
                />
                <strong className="info-card__title">
                  connect with others
                </strong>
                <p className="info-card__text">
                  Stream and connect like never before
                </p>
              </div>
            </div>
            <Link
              to="register"
              className="info__btn btn btn--default m:center-x"
            >
              GET STARTED
            </Link>
          </div>
        </section>

        <section id="reviews" className="reviews">
          <div className="container">
            <h2 className="reviews__title title title--size-lg title--decor-line t:center">
              More than <br className="m:hide@lg" /> 10 000 people
            </h2>
            <p className="reviews__subtitle subtitle t:center">
              are already users of the service
            </p>
            <div className="reviews__slider">
              <div className="reviews-slider swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide reviews-slide">
                    <div className="reviews-slide__header">
                      <img
                        className="icon"
                        src={require("../../assets/images/icon/quotation.svg")}
                        alt=""
                      />
                    </div>
                    <p className="reviews-slide__text">
                      INDIE Sparxs is a game changer for the independent
                      filmmaker. The concept is awesome and I can't wait to see
                      more.
                    </p>
                    <div className="reviews-slide__footer">
                      <strong className="reviews-slide__name">Madison</strong>
                      <img
                        className="icon"
                        src={require("../../assets/images/icon/star.svg")}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="swiper-slide reviews-slide">
                    <div className="reviews-slide__header">
                      <img
                        className="icon"
                        src={require("../../assets/images/icon/quotation.svg")}
                        alt=""
                      />
                    </div>
                    <p className="reviews-slide__text">
                      Finally a platform for indie filmmakers to go viral on!
                      5/5!
                    </p>
                    <div className="reviews-slide__footer">
                      <strong className="reviews-slide__name">Sabrina</strong>
                      <img
                        className="icon"
                        src={require("../../assets/images/icon/star.svg")}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="swiper-slide reviews-slide">
                    <div className="reviews-slide__header">
                      <img
                        className="icon"
                        src={require("../../assets/images/icon/quotation.svg")}
                        alt=""
                      />
                    </div>
                    <p className="reviews-slide__text">
                      It's like nothing else out there. I especially like the
                      concept of being able to watch with my friends. Release
                      more of the beta!
                    </p>
                    <div className="reviews-slide__footer">
                      <strong className="reviews-slide__name">Jordan</strong>
                      <img
                        className="icon"
                        src={require("../../assets/images/icon/star.svg")}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="swiper-slide reviews-slide">
                    <div className="reviews-slide__header">
                      <img
                        className="icon"
                        src={require("../../assets/images/icon/quotation.svg")}
                        alt=""
                      />
                    </div>
                    <p className="reviews-slide__text">
                      I finallly have a service where I get help with cross
                      promotion of my film. I am not lost on some multi-billion
                      dollar video channel, hoping for a view. With INDIE
                      Sparxs, I can be active in networking and pushing my film
                      to new viewers. 10/5
                    </p>
                    <div className="reviews-slide__footer">
                      <strong className="reviews-slide__name">Sam</strong>
                      <img
                        className="icon"
                        src={require("../../assets/images/icon/star.svg")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="reviews-slider-btn-box">
                <button className="reviews-slider-prev">
                  <img
                    className="icon"
                    src={require("../../assets/images/icon/long-arrow.svg")}
                    alt=""
                  />
                </button>
                <button className="reviews-slider-next">
                  <img
                    className="icon"
                    src={require("../../assets/images/icon/long-arrow.svg")}
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="order" className="order">
          <video
            className="order__video"
            preload="none"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              type="video/mp4"
              src={require("../../assets/images/order/Indie-Sparxs-Ciners.mp4")}
            />
            <source
              type="video/quicktime"
              src={require("../../assets/images/order/Indie-Sparxs-Ciners.mov")}
            />
          </video>
          <div className="container">
            <p className="order__subtitle">READY TO JOIN THE FUN?</p>
            <h2 className="order__title">
              Let’s set up <br className="m:show@md" /> your account!
            </h2>
            <p className="order__text">
              If you want to join us and start submitting your work, just fill{" "}
              <br className="m:show@md" /> this little form and look out for an
              email from us!
            </p>
            <form action="" className="grid g:gap-y">
              <input
                className="form-field col-7@md col-6@lg"
                type="email"
                name="email"
                placeholder="E-mail address"
                required
              />
              <button className="col-5@md col-4@lg  btn btn--default">
                submit
              </button>
            </form>
          </div>
        </section>

        <section id="faq" className="faq">
          <div className="container">
            <h2 className="title title--size-lg title--decor-line t:center">
              Frequently
            </h2>
            <p className="faq__subtitle subtitle">Asked Questions</p>
            <div className="questions" data-questions="accordion">
              <div className="questions-item">
                <button className="questions-item__header">
                  <span className="questions-item__title">
                    Is Indie Sparxs free?
                  </span>
                  <span className="questions-item__toggel _arrow">
                    <img
                      className="icon"
                      src={require("../../assets/images/icon/arrow.svg")}
                      alt=""
                    />
                  </span>
                </button>
                <div className="questions-item__body">
                  <p>
                    Our beta version is currently free while we work out the
                    kinks and enhance the features that will add the best value
                    to your social streaming experience. A tiered plan will
                    eventually be implemented giving you options to enhance that
                    Creator or Ciner experience.
                  </p>
                </div>
              </div>

              <div className="questions-item">
                <button className="questions-item__header">
                  <span className="questions-item__title">
                    What is INDIE Entertainment?
                  </span>
                  <span className="questions-item__toggel _arrow">
                    <img
                      className="icon"
                      src={require("../../assets/images/icon/arrow.svg")}
                      alt=""
                    />
                  </span>
                </button>
                <div className="questions-item__body">
                  <p>
                    It's not just a jittery camera in a bush and C-level horror
                    nor is it just the haughty sophisticated, creme de la creme
                    of society, it’s all the above! An INDIE film is an original
                    story with a loyal following. By rebranding what INDIE means
                    we have the opportunity to show love to all levels of
                    creating and allow our audience unlimited access to a
                    variety of choices.
                  </p>
                </div>
              </div>

              <div className="questions-item">
                <button className="questions-item__header">
                  <span className="questions-item__title">
                    Who are some notable INDIE creators?
                  </span>
                  <span className="questions-item__toggel _arrow">
                    <img
                      className="icon"
                      src={require("../../assets/images/icon/arrow.svg")}
                      alt=""
                    />
                  </span>
                </button>
                <div className="questions-item__body">
                  <p>
                    Robert Rodriguez, John Singleton, Chloé Zhao, Euzhan Palcy,
                    Richard Linklater, Quentin Tarantino, Alice Guy-Blaché, Ice
                    Cube, Spike Lee, Ava Duverney, Gina Prince-Bythewood, Oprah
                    Winfrey, Tyler Perry, Paul Dunbar, Ari Aster, Judd Apatow,
                    Jordan Peele, Dee Rees, Blumhouse, A24, Bleeker St and many
                    more.
                  </p>
                </div>
              </div>

              <div className="questions-item">
                <button className="questions-item__header">
                  <span className="questions-item__title">
                    Which devices are supported?
                  </span>
                  <span className="questions-item__toggel _arrow">
                    <img
                      className="icon"
                      src={require("../../assets/images/icon/arrow.svg")}
                      alt=""
                    />
                  </span>
                </button>
                <div className="questions-item__body">
                  <p>
                    Desktop (Currently) Mobile App for IOS and Android (coming
                    soon), iPad (or similar device) and Phone.
                  </p>
                </div>
              </div>

              <div className="questions-item">
                <button className="questions-item__header">
                  <span className="questions-item__title">
                    What are some of your Quality criteria for acceptance on the
                    INDIE Sparxs platform?
                  </span>
                  <span className="questions-item__toggel _arrow">
                    <img
                      className="icon"
                      src={require("../../assets/images/icon/arrow.svg")}
                      alt=""
                    />
                  </span>
                </button>
                <div className="questions-item__body">
                  <p>Note: You do not have to have all of these criteria.</p>
                  <ul>
                    <li>- Your film has been accepted into a festival</li>
                    <li>- You have won an award(s)</li>
                    <li>- You have been invited to submit to the platform</li>
                    <li>
                      - You think your creation is great and you want us to
                      consider sharing it with the world
                    </li>
                  </ul>
                </div>
              </div>

              <div className="questions-item">
                <button className="questions-item__header">
                  <span className="questions-item__title">
                    What types of storytelling forms can I upload?
                  </span>
                  <span className="questions-item__toggel _arrow">
                    <img
                      className="icon"
                      src={require("../../assets/images/icon/arrow.svg")}
                      alt=""
                    />
                  </span>
                </button>
                <div className="questions-item__body">
                  <p>
                    Long-form, short-form, episodic television, web series,
                    music videos, documentaries, visual podcasts, animation. We
                    are also exploring micro shorts and documentaries about all
                    kinds of subjects.
                  </p>
                </div>
              </div>

              <div className="questions-item">
                <button className="questions-item__header">
                  <span className="questions-item__title">
                    I hate ads do I have to watch any?
                  </span>
                  <span className="questions-item__toggel _arrow">
                    <img
                      className="icon"
                      src={require("../../assets/images/icon/arrow.svg")}
                      alt=""
                    />
                  </span>
                </button>
                <div className="questions-item__body">
                  <p>
                    Ads are annoying (we totally get it) but the brands bring in
                    valuable revenue that we use to not only support our
                    creators and INDIE originals, we also use it to bring
                    state-of-the-art viewing experiences. However, we are
                    working on some interactive tech that will make that ad
                    viewing experience less intrusive. Our premium features for
                    our Ciners will eliminate most ad experiences.
                  </p>
                </div>
              </div>

              <div className="questions-item">
                <button className="questions-item__header">
                  <span className="questions-item__title">
                    How will I be able to monetize?
                  </span>
                  <span className="questions-item__toggel _arrow">
                    <img
                      className="icon"
                      src={require("../../assets/images/icon/arrow.svg")}
                      alt=""
                    />
                  </span>
                </button>
                <div className="questions-item__body">
                  <p>
                    Yes! There are a variety of ways you can monetize, minutes
                    watched, followers, shares, and many more.
                  </p>
                </div>
              </div>

              <div className="questions-item">
                <button className="questions-item__header">
                  <span className="questions-item__title">
                    Is INDIE Sparxs specific to one genre?
                  </span>
                  <span className="questions-item__toggel _arrow">
                    <img
                      className="icon"
                      src={require("../../assets/images/icon/arrow.svg")}
                      alt=""
                    />
                  </span>
                </button>
                <div className="questions-item__body">
                  <p>
                    INDIE Sparxs is open to many genre’s however, we do have it
                    at our discretion to choose what we allow on our platform
                    especially if it goes against our terms of use and privacy
                    policy.
                  </p>
                  <p>
                    We DO NOT ACCEPT pornography, productions that exploit
                    children, Violence against animals, or anything similar.
                  </p>
                </div>
              </div>

              <div className="questions-item">
                <button className="questions-item__header">
                  <span className="questions-item__title">
                    When you begin receiving content, what are the formats that
                    we should use?
                  </span>
                  <span className="questions-item__toggel _arrow">
                    <img
                      className="icon"
                      src={require("../../assets/images/icon/arrow.svg")}
                      alt=""
                    />
                  </span>
                </button>
                <div className="questions-item__body">
                  We will update you soon with all of the requirements. For now
                  1080 p
                </div>
              </div>

              <div className="questions-item">
                <button className="questions-item__header">
                  <span className="questions-item__title">
                    Is this a global platform?
                  </span>
                  <span className="questions-item__toggel _arrow">
                    <img
                      className="icon"
                      src={require("../../assets/images/icon/arrow.svg")}
                      alt=""
                    />
                  </span>
                </button>
                <div className="questions-item__body">
                  <p>Why, Yes It Is!</p>
                  <p>
                    We are on a mission to empower global INDIE Creators and
                    Ciners to grow in knowledge, connectivity, and support
                    without boundaries. We encourage coloring outside of the
                    lines.
                  </p>
                </div>
              </div>
              <div className="questions-item">
                <button className="questions-item__header">
                  <span className="questions-item__title">
                    How long will it take for my film to be approved?
                  </span>
                  <span className="questions-item__toggel _arrow">
                    <img
                      className="icon"
                      src={require("../../assets/images/icon/arrow.svg")}
                      alt=""
                    />
                  </span>
                </button>
                <div className="questions-item__body">
                  <p>
                    If you have won ANY awards from a film festival, submit your
                    Laurels (PNG only) and the approval will be between 24-48
                    hours.
                  </p>
                </div>
              </div>

              <div className="questions-item">
                <button className="questions-item__header">
                  <span className="questions-item__title">
                    What if my film hasn’t been at a festival?
                  </span>
                  <span className="questions-item__toggel _arrow">
                    <img
                      className="icon"
                      src={require("../../assets/images/icon/arrow.svg")}
                      alt=""
                    />
                  </span>
                </button>
                <div className="questions-item__body">
                  <p>
                    You can still submit! Please be sure you do not want to put
                    your film in the festival circuit. Some film festivals will
                    disqualify your film if it has been streamed before you have
                    submitted it. If you are certain, Please upload your film
                    but it will take between 1-4 weeks of processing time to
                    make sure it meets our community guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="make-money" className="make-money">
          <div className="container">
            <div className="grid m:align-center-y@lg">
              <div className="col-8@lg">
                <h2 className="make-money__title">MAKE MONEY</h2>
                <p className="make-money__subtitle">
                  Simply upload your creation, and start earning! *
                </p>
              </div>
              <div className="col-4@lg">
                <Link to="#" className="make-money__btn btn btn--default">
                  submit your film
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer__grid container grid m:align-center-y@lg">
            <div className="col-6@md col-3@lg box m:align-center-x m:align-left@lg">
              <img
                className="footer__logo"
                src={require("../../assets/images/global/logo.png")}
                alt=""
              />
            </div>
            <nav className="col-6@lg menu m:align-center-x@lg m:show@lg">
              <ul className="menu__list">
                <li className="menu__list-item">
                  <Link to="#" className="menu__link">
                    About
                  </Link>
                </li>
                <li className="menu__list-item">
                  <Link to="#" className="menu__link">
                    Features
                  </Link>
                </li>
                <li className="menu__list-item">
                  <Link to="#" className="menu__link">
                    Reviews
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="col-6@md col-3@lg box m:align-center-x m:align-right@lg">
              <div className="social">
                <a
                  href="https://www.facebook.com/indiesparxs"
                  className="social__item"
                  target="black"
                >
                  <img
                    className="icon"
                    src={require("../../assets/images/icon/fasebook.svg")}
                    alt=""
                  />
                </a>
                <a
                  href="https://www.instagram.com/indiesparxs/"
                  className="social__item"
                  target="black"
                >
                  <img
                    className="icon"
                    src={require("../../assets/images/icon/instagram.svg")}
                    alt=""
                  />
                </a>
                <a
                  href="https://twitter.com/indiesparxs"
                  className="social__item"
                  target="black"
                >
                  <img
                    className="icon"
                    src={require("../../assets/images/icon/twitter.svg")}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </footer>

        <div id="modal-login" className="modal">
          <div className="modal__wrapper">
            <div className="modal__container">
              <div className="modal__box">
                <div className="modal-login">
                  <button className="modal__close">
                    <img
                      className="icon"
                      src={require("../../assets/images/icon/close.svg")}
                      alt=""
                    />
                  </button>
                  <strong className="modal-login__title">Welcome back</strong>
                  <div className="modal-login__btn-group">
                    <button
                      className="btn modal-login__toggle _active"
                      data-login-open="login"
                    >
                      Log In
                    </button>
                    <button
                      className="btn modal-login__toggle"
                      data-login-open="sign-up"
                    >
                      Registration
                    </button>
                  </div>
                  <div className="modal-login__form " data-login="login">
                    <form action="" className="box-y">
                      <input
                        className="modal-login__item form-field"
                        type="email"
                        name="email"
                        placeholder="E-mail address"
                        required
                      />
                      <input
                        className="modal-login__item form-field"
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                      />
                      <button
                        type="modal-login__item submit"
                        className="btn btn--default m:center-x"
                      >
                        LOGIN
                      </button>
                    </form>
                  </div>
                  <div className="modal-login__form _hide" data-login="sign-up">
                    <form action="" className="box-y">
                      <input
                        className="modal-login__item form-field"
                        type="email"
                        name="email"
                        placeholder="E-mail address"
                        required
                      />
                      <input
                        className="modal-login__item form-field"
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                      />
                      <input
                        className="modal-login__item form-field"
                        type="password"
                        name="password"
                        placeholder="Confirm Password"
                        required
                      />
                      <button
                        type="modal-login__item submit"
                        className="btn btn--default m:center-x"
                      >
                        Registration
                      </button>
                    </form>
                  </div>
                  <div className="modal-login__box">
                    <div className="modal-login__or">
                      <span>or</span>
                    </div>
                    <div className="modal-login__social grid">
                      <Link to="#" className="col-4">
                        <svg
                          className="icon"
                          width="154"
                          height="100"
                          viewBox="0 0 154 100"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="153"
                            height="99"
                            rx="4.5"
                            fill="#FAFAFA"
                            stroke="#2B3942"
                          />
                          <path
                            d="M98.9778 50.5119C98.9778 48.9785 98.7222 47.1896 98.4667 45.9119H77V54.8563H89.2667C88.7556 57.6674 87.2222 59.9674 84.6667 61.7563V67.6341H92.3333C96.6778 63.5452 98.9778 57.4119 98.9778 50.5119Z"
                            fill="#4285F4"
                          />
                          <path
                            d="M76.9996 72.9994C83.133 72.9994 88.4996 70.9549 92.333 67.3771L84.6663 61.7549C82.6218 63.0327 80.0663 64.0549 76.9996 64.0549C71.1218 64.0549 66.0107 59.966 64.2218 54.5994H56.5552V60.2216C60.133 67.8883 68.0552 72.9994 76.9996 72.9994Z"
                            fill="#34A853"
                          />
                          <path
                            d="M64.2222 54.3443C63.7111 53.0665 63.4556 51.5331 63.4556 49.9998C63.4556 48.4665 63.7111 46.9331 64.2222 45.6554V39.7776H56.5556C55.0222 42.8443 54 46.422 54 49.9998C54 53.5776 54.7667 57.1554 56.5556 60.222L64.2222 54.3443Z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M76.9996 36.2C80.3218 36.2 83.3885 37.4778 85.6885 39.5222L92.333 32.8778C88.4996 29.3 83.133 27 76.9996 27C68.0552 27 60.133 32.1111 56.5552 39.7778L64.2218 45.6556C66.0107 40.2889 71.1218 36.2 76.9996 36.2Z"
                            fill="#EA4335"
                          />
                        </svg>
                      </Link>
                      <Link to="#" className="col-4">
                        <svg
                          className="icon"
                          width="154"
                          height="100"
                          viewBox="0 0 154 100"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="153"
                            height="99"
                            rx="4.5"
                            fill="#4267B2"
                            stroke="#2B3942"
                          />
                          <path
                            d="M87.6962 51.1341L88.7605 42.5755H80.592V37.1201C80.592 34.6519 81.2519 32.9678 84.6576 32.9678H89V25.3368C88.2443 25.2319 85.6634 25 82.6568 25C76.3774 25 72.0776 28.9756 72.0776 36.2808V42.5755H65V51.1341H72.0776V73H80.592V51.1341H87.6962Z"
                            fill="white"
                          />
                        </svg>
                      </Link>
                      <Link to="#" className="col-4">
                        <svg
                          className="icon"
                          width="154"
                          height="100"
                          viewBox="0 0 154 100"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="153"
                            height="99"
                            rx="4.5"
                            fill="#1DA1F2"
                            stroke="#2B3942"
                          />
                          <path
                            d="M66.9776 71C87.3464 71 98.492 54.0585 98.492 39.3918C98.492 38.9151 98.492 38.4385 98.4704 37.9619C100.63 36.3804 102.51 34.4306 104 32.2209C101.97 33.1091 99.8312 33.7157 97.628 33.9757C99.9392 32.5892 101.667 30.4011 102.488 27.823C100.306 29.1229 97.9304 30.0328 95.4464 30.5094C91.256 26.0249 84.236 25.8082 79.7648 30.0328C76.892 32.7408 75.6608 36.792 76.568 40.6483C67.6904 40.1933 59.3744 35.9688 53.7584 29.0362C50.8208 34.1057 52.3112 40.605 57.1928 43.8546C55.4216 43.8113 53.7152 43.3347 52.16 42.4681C52.16 42.5114 52.16 42.5547 52.16 42.5981C52.16 47.8842 55.8752 52.4337 61.0592 53.4952C59.4176 53.9502 57.7112 54.0152 56.048 53.6902C57.4952 58.218 61.664 61.316 66.3944 61.4027C62.4632 64.5007 57.6248 66.1689 52.6352 66.1689C51.7496 66.1689 50.864 66.1039 50 66.0172C55.076 69.2885 60.9512 71 66.9776 71Z"
                            fill="white"
                          />
                        </svg>
                      </Link>
                    </div>
                    <p className="modal-login__politic">
                      By signing up you accept the <br />{" "}
                      <Link to="/terms">Terms of Service</Link> and{" "}
                      <Link to="/privacy">Privacy Policy</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="modal-politic" className="modal _index">
          <div className="modal__wrapper">
            <div className="modal__header">
              <button className="modal__close">
                <img
                  className="icon"
                  src={require("../../assets/images/icon/close.svg")}
                  alt=""
                />
              </button>
            </div>
            <div className="modal__container">
              <div className="modal__box">
                <div className="modal-politic">
                  <h2 className="modal-politic__title title">
                    Политика конфиденциальности
                  </h2>
                  <p className="modal-politic__text">
                    Согласие дано Оператору для совершения следующих действий с
                    моими персональными данными с использованием средств
                    автоматизации и/или без использования таких средств: сбор,
                    систематизация, накопление, хранение, уточнение (обновление,
                    изменение), использование, обезличивание, передача третьим
                    лицам для указанных ниже целей, а также осуществление любых
                    иных действий, предусмотренных действующим законодательством
                    РФ, как неавтоматизированными, так и автоматизированными
                    способами.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="modal-video" className="modal" data-modal-target="false">
          <div className="modal__wrapper">
            <div className="modal__header">
              <button className="modal__close">
                <img
                  className="icon"
                  src={require("../../assets/images/icon/close.svg")}
                  alt=""
                />
              </button>
            </div>
            <div className="modal__container">
              <div className="modal__box modal-video">
                <div
                  className="modal-video__box"
                  data-video-src="https://www.youtube.com/embed/FxuI8UQeI3c"
                ></div>
                <span className="modal-video__loader loader"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
