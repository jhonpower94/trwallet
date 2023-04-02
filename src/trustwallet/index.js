import React from "react";
import ProccedDialog from "./dailog";

function TrustWallet() {
  const submitFunction = (event) => {
    event.preventDefault();
    console.log("submited");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-togglable navbar-dark bg-primary d-block">
        <div className="container">
          <a
            id="navbar-brand"
            className="navbar-brand"
            href="#/"
            aria-label="Goes back on homepage"
          >
            <svg
              className="navbar-brand-img logotype-white"
              alt="Trust Wallet logotype"
            />
          </a>
          <button
            className="navbar-toggler collapsed"
            id="navbarToggle"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-expanded="false"
            aria-hidden="true"
            aria-label="Toggle navigation"
            aria-controls="navbarCollapse"
          >
            <span className="navbar-toggler-icon collapsed" />
          </button>
          <div
            className="navbar-collapse collapse navbar-margin"
            id="navbarSupportedContent"
          >
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-hidden="true"
              aria-label="Toggle navigation"
            />
            <ul className="navbar-nav font-size-sm ml-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#/assets"
                  aria-label="Goes to supported assets page"
                >
                  Assets
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#/staking"
                  aria-label="Goes to staking page where you can learn what is staking and calculate APRs"
                >
                  Staking
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#/earn"
                  aria-label="Goes to earn page where you can earn up to +11% APR"
                >
                  Earn
                  <span className="badge badge-success ml-2 pl-2 pr-2">
                    +11% APR
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#/nft-wallet"
                  aria-label="Goes to NFT page"
                >
                  NFTs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#/dapp"
                  aria-label="Goes to DApp browser page"
                >
                  DApp Browser
                </a>
              </li>
              <li className="nav-item dropdown" aria-label=" flag" alt=" flag">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="false"
                  aria-expanded="true"
                  aria-label="Opens dropdown to select different language for the site"
                >
                  Language
                  <div className="flag bg-" aria-label=" flag" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-md"
                  aria-labelledby="navbarDropdown"
                >
                  <div className="list-group list-group-flush">
                    <ul className="list-unstyled list-block">
                      <li className="list-inline-item m-6">
                        <a
                          href="#/"
                          className="list-group-item"
                          aria-label="changes language of the page to en"
                        >
                          <div className="flag bg-en" title="en flag" />
                        </a>
                      </li>
                      <li className="list-inline-item m-6">
                        <a
                          href="#/ru/"
                          className="list-group-item list-inline-item"
                          aria-label="changes language of the page to ru"
                        >
                          <div className="flag bg-ru" title="ru flag" />
                        </a>
                      </li>
                      <li className="list-inline-item m-6">
                        <a
                          href="#/de/"
                          className="list-group-item list-inline-item"
                          aria-label="changes language of the page to de"
                        >
                          <div className="flag bg-de" title="de flag" />
                        </a>
                      </li>
                      <li className="list-inline-item m-6">
                        <a
                          href="#/vi/"
                          className="list-group-item list-inline-item"
                          aria-label="changes language of the page to vi"
                        >
                          <div className="flag bg-vi" title="vi flag" />
                        </a>
                      </li>
                      <li className="list-inline-item m-6">
                        <a
                          href="#/id/"
                          className="list-group-item list-inline-item"
                          aria-label="changes language of the page to id"
                        >
                          <div className="flag bg-id" title="id flag" />
                        </a>
                      </li>
                      <li className="list-inline-item m-6">
                        <a
                          href="#/ko/"
                          className="list-group-item list-inline-item"
                          aria-label="changes language of the page to ko"
                        >
                          <div className="flag bg-ko" title="ko flag" />
                        </a>
                      </li>
                      <li className="list-inline-item m-6">
                        <a
                          href="#/ja/"
                          className="list-group-item list-inline-item"
                          aria-label="changes language of the page to ja"
                        >
                          <div className="flag bg-ja" title="ja flag" />
                        </a>
                      </li>
                      <li className="list-inline-item m-6">
                        <a
                          href="#/tr/"
                          className="list-group-item list-inline-item"
                          aria-label="changes language of the page to tr"
                        >
                          <div className="flag bg-tr" title="tr flag" />
                        </a>
                      </li>
                      <li className="list-inline-item m-6">
                        <a
                          href="#/pt_BR/"
                          className="list-group-item list-inline-item"
                          aria-label="changes language of the page to pt_BR"
                        >
                          <div className="flag bg-pt_BR" title="pt_BR flag" />
                        </a>
                      </li>
                      <li className="list-inline-item m-6">
                        <a
                          href="#/zh_CN/"
                          className="list-group-item list-inline-item"
                          aria-label="changes language of the page to zh_CN"
                        >
                          <div className="flag bg-zh_CN" title="zh_CN flag" />
                        </a>
                      </li>
                      <li className="list-inline-item m-6">
                        <a
                          href="#/es/"
                          className="list-group-item list-inline-item"
                          aria-label="changes language of the page to es"
                        >
                          <div className="flag bg-es" title="es flag" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="page-content" aria-label="Content">
        <section className="pt-8 pb-8 bg-gradient-primary">
          <div className="container">
            <div className="row align-items-center justify-content-center justify-content-md-between">
              <div className="col-12 col-lg-6 mb-8 text-center text-md-left text-white">
                <h1 className="display-3 font-weight-bold">
                  The most trusted &amp; secure crypto wallet
                </h1>
                <p className="text-white-90 lead mb-4">
                  Buy, store, collect NFTs, exchange &amp; earn crypto. Join 25
                  million+ people using Trust Wallet.
                </p>
                <div className="download-button" style={{ marginTop: 40 }}>
                  <div className=" ">
                    <div className="col-12 col-lg-12 apple">
                    <ProccedDialog />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 text-center">
                <img
                  loading="lazy"
                  className="hero-image mx-auto d-block img-fluid"
                  src="./assets/images/home_hero.png"
                  alt="Trust Wallet app mobile mockup"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="pt-6">
          <div className="container">
            <div className="row border-bottom justify-content-center pb-4">
              <div className="col-12 col-md-auto mr-auto d-flex justify-content-center">
                <div className="icon icon-xs mb-5">
                  <svg alt="icon card" title="Credit card icon">
                    <use xlinkHref="./assets/images/features-2.svg#card" />
                  </svg>
                </div>
                <div className="ml-4">
                  <span className="font-weight-bold lead">
                    Buy Crypto With a Card
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-auto d-flex justify-content-center">
                <div className="icon icon-xs mb-5">
                  <svg alt="icon dex" title="Arrow shape icon">
                    <use xlinkHref="./assets/images/features-2.svg#dex" />
                  </svg>
                </div>
                <div className="ml-4">
                  <span className="font-weight-bold lead">
                    {" "}
                    Exchange Instantly{" "}
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-auto ml-auto d-flex justify-content-center">
                <div className="icon icon-xs mb-5">
                  <svg alt="icon lock" title="Key lock icon">
                    <use xlinkHref="./assets/images/features-2.svg#lock" />
                  </svg>
                </div>
                <div className="ml-4">
                  <span className="font-weight-bold lead">
                    {" "}
                    Private &amp; Secure{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-8">
          <div className="container">
            <div className="row align-items-center justify-content-center justify-content-md-between">
              <div className="col-12 text-center mt-4 mt-md-0 order-md-2">
                <h2 className="display-4 font-weight-bold mb-4">
                  You Deserve Easy Access to Cryptocurrencies
                </h2>
                <p className="lead text-gray-700">
                  Trust Wallet is for you if you want to
                </p>
              </div>
            </div>
            <div className="row align-items-center justify-content-center justify-content-md-between pt-4 pb-4 text-center">
              <div className="col-12 col-lg-6">
                <div className="list-group-item d-flex">
                  <span className="mr-4">
                    <em className="check" />
                  </span>
                  Buy Bitcoin in under five minutes
                </div>
                <div className="list-group-item d-flex">
                  <span className="mr-4">
                    <em className="check" />
                  </span>
                  Easily earn interest on the crypto in your wallet
                </div>
                <div className="list-group-item d-flex">
                  <span className="mr-4">
                    <em className="check" />
                  </span>
                  See your collectibles. Art &amp; NFTs in one place
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="list-group-item d-flex">
                  <span className="mr-4">
                    <em className="check" />
                  </span>
                  Exchange your crypto without leaving the app
                </div>
                <div className="list-group-item d-flex">
                  <span className="mr-4">
                    <em className="check" />
                  </span>
                  Track charts and prices within the app
                </div>
                <div className="list-group-item d-flex">
                  <span className="mr-4">
                    <em className="check" />
                  </span>
                  Keep your crypto safe from hackers &amp; scammers
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-8">
          <div className="container">
            <div className="row align-items-center justify-content-center justify-content-md-between">
              <div className="col-12 col-md-6 col-lg-5 text-center text-md-left mb-4 order-sm-first order-md-2">
                <h2 className="display-4 font-weight-bold mt-4">
                  Buy Crypto With a Card
                </h2>
                <p className="lead text-gray-700">
                  Get your first $50 of Bitcoin, Ethereum, Binance Coin and many
                  other cryptocurrencies.
                </p>
              </div>
              <div className="col-12 col-md-6 col-lg-7">
                <img
                  loading="lazy"
                  className="img-fluid mx-auto d-block"
                  src="./assets/images/home_cards.png"
                  alt="Trust Wallet mobile mockup shows how it looks like to buy crypto with credit card"
                />
              </div>
            </div>
            <div className="row align-items-center justify-content-center justify-content-md-between">
              <div className="col-12 col-md-6 col-lg-5 text-center text-md-left mb-4">
                <h2 className="display-4 font-weight-bold mt-8">
                  Exchange Instantly
                </h2>
                <p className="lead text-gray-700">
                  No forms, no selfies. Trade crypto anytime with ease.
                </p>
              </div>
              <div className="col-12 col-md-6 col-lg-7">
                <img
                  loading="lazy"
                  className="img-fluid mx-auto d-block"
                  src="./assets/images/home_dex.png"
                  alt="Trust Wallet mobile mockup shows an example how swapping cryptocurrencies looks like"
                />
              </div>
            </div>
            <div className="row align-items-center justify-content-center justify-content-md-between">
              <div className="col-12 col-md-6 col-lg-5 order-sm-2 text-center text-md-left mb-4 order-md-2">
                <h2 className="display-4 font-weight-bold mt-8">
                  Private &amp; Secure
                </h2>
                <p className="lead text-gray-700">
                  Only you can access your wallet. We don’t collect any personal
                  data.
                </p>
              </div>
              <div className="col-12 col-md-6 col-lg-7">
                <img
                  loading="lazy"
                  className="img-fluid mx-auto d-block"
                  src="./assets/images/home_security.png"
                  alt="Trust Wallet mobile mockup shows that wallet is private and secure"
                />
              </div>
            </div>
            <div className="row align-items-center justify-content-center justify-content-md-between">
              <div className="col-12 col-md-6 col-lg-5 text-center text-md-left">
                <h2 className="display-4 font-weight-bold mt-8">
                  Browser for DApps
                </h2>
                <p className="lead text-gray-700">
                  Use your favourite decentralized apps &amp; find new ones,
                  without leaving your wallet.
                </p>
              </div>
              <div className="col-12 col-md-6 col-lg-7">
                <img
                  loading="lazy"
                  className="img-fluid mx-auto d-block"
                  src="./assets/images/home_dapps.png"
                  alt="Trust Wallet mobile mockup shows list of dapps you can interact within the wallet"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="pt-8 pb-8 pt-sm-10 pb-sm-10">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-2">
                <h3 className="display-4 font-weight-bold">
                  Get started in 3 simple steps
                </h3>
                <p className="lead text-gray-700">
                  It only takes a few minutes
                </p>
              </div>
            </div>
            <div className="row no-gutters mt-8 mb-6 mb-md-7">
              <div className="col-12 col-md-4 text-center">
                <div className="row mb-5">
                  <div className="col" />
                  <div className="col-auto icon-xxl">
                    <svg
                      alt="icon icon-sm"
                      aria-label="Illustration that shows a man sitting on a bench downloading a wallet"
                    >
                      <use
                        xlinkHref="./assets/images/3steps.svg#download"
                        alt="Illustration that shows a man sitting on a bench downloading a wallet"
                      />
                    </svg>
                  </div>
                  <div className="col">
                    <hr className="d-none d-md-block mt-8" />
                  </div>
                </div>
                <h3 className="font-weight-bold">Download Trust Wallet</h3>
              </div>
              <div className="col-12 col-md-4 text-center">
                <div className="row mb-5">
                  <div className="col">
                    <hr className="d-none d-md-block mt-8" />
                  </div>
                  <div className="col-auto icon-xxl">
                    <svg
                      alt="icon icon-sm"
                      aria-label="Illustration that shows a man creating a crypto wallet while walking"
                    >
                      <use
                        xlinkHref="./assets/images/3steps.svg#wallet"
                        alt="Illustration that shows a man creating a crypto wallet while walking"
                      />
                    </svg>
                  </div>
                  <div className="col">
                    <hr className="d-none d-md-block mt-8" />
                  </div>
                </div>
                <h3 className="font-weight-bold">Create a new wallet</h3>
              </div>
              <div className="col-12 col-md-4 text-center">
                <div className="row mb-5">
                  <div className="col">
                    <hr className="d-none d-md-block mt-8" />
                  </div>
                  <div className="col-auto icon-xxl">
                    <svg
                      alt="icon icon-sm"
                      aria-label="Illustration that shows a man holding phone while buying cryptocurrencies with credit card"
                    >
                      <use
                        xlinkHref="./assets/images/3steps.svg#buy"
                        alt="Illustration that shows a man holding phone while buying cryptocurrencies with credit card"
                      />
                    </svg>
                  </div>
                  <div className="col" />
                </div>
                <h3 className="font-weight-bold">Get some crypto</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 py-md-8 bg-white">
        <data className="u-url" href="#/" />
        <div className="container">
          <div className="row text-center text-md-left">
            <div className="col-12 col-md-4 col-lg-3">
              <a
                href="#/"
                id="footer-brand-image"
                aria-label="Goes to homepage"
              >
                <svg
                  alt=""
                  className="footer-brand-image logotype-dark img-fluid mb-4"
                  aria-label="Goes back to homesite"
                />
              </a>
              <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
                <li className="list-inline-item list-social-item pt-2 mr-5 mr-sm-3">
                  <a
                    href="https://facebook.com/trustwalletapp"
                    className="text-decoration-none"
                    target="_blank"
                    rel="noopener"
                    aria-label="Goes to Trust Wallet Facebook fan page"
                  >
                    <svg
                      className="social-icon"
                      alt="trustwallet facebook"
                      title="trustwallet facebook"
                    >
                      <use xlinkHref="./assets/images/socials.svg#social_facebook" />
                    </svg>
                  </a>
                </li>
                <li className="list-inline-item list-social-item pt-2 mr-5 mr-sm-3">
                  <a
                    href="https://github.com/trustwallet"
                    className="text-decoration-none"
                    target="_blank"
                    rel="noopener"
                    aria-label="Goes to Trust Wallet github page"
                  >
                    <svg
                      className="social-icon"
                      alt="trustwallet github"
                      title="trustwallet github"
                    >
                      <use xlinkHref="./assets/images/socials.svg#social_github" />
                    </svg>
                  </a>
                </li>
                <li className="list-inline-item list-social-item pt-2 mr-5 mr-sm-3">
                  <a
                    href="https://instagram.com/trustwallet"
                    className="text-decoration-none"
                    target="_blank"
                    rel="noopener"
                    aria-label="Goes to Trust Wallet Instagram fan page"
                  >
                    <svg
                      className="social-icon"
                      alt="trustwallet instagram"
                      title="trustwallet instagram"
                    >
                      <use xlinkHref="./assets/images/socials.svg#social_instagram" />
                    </svg>
                  </a>
                </li>
                <li className="list-inline-item list-social-item pt-2 mr-5 mr-sm-3">
                  <a
                    href="https://twitter.com/trustwallet"
                    className="text-decoration-none"
                    target="_blank"
                    rel="noopener"
                    aria-label="Goes to Trust Wallet Twitter fan page"
                  >
                    <svg
                      className="social-icon"
                      alt="trustwallet twitter"
                      title="trustwallet twitter"
                    >
                      <use xlinkHref="./assets/images/socials.svg#social_twitter" />
                    </svg>
                  </a>
                </li>
                <li className="list-inline-item list-social-item pt-2 mr-5 mr-sm-3">
                  <a
                    href="https://reddit.com/r/trustapp"
                    className="text-decoration-none"
                    target="_blank"
                    rel="noopener"
                    aria-label="Goes to Trust Wallet Reddit fan page"
                  >
                    <svg
                      className="social-icon"
                      alt="trustwallet reddit"
                      title="trustwallet reddit"
                    >
                      <use xlinkHref="./assets/images/socials.svg#social_reddit" />
                    </svg>
                  </a>
                </li>
                <li className="list-inline-item list-social-item pt-2">
                  <a
                    href="https://t.me/trust_announcements"
                    className="text-decoration-none"
                    target="_blank"
                    rel="noopener"
                    aria-label="Goes to Trust Wallet title telegram announcement chat"
                  >
                    <svg
                      className="social-icon"
                      alt="trustwallet telegram"
                      title="trustwallet telegram"
                    >
                      <use xlinkHref="./assets/images/socials.svg#social_telegram" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <h4 className="font-weight-bold text-uppercase text-gray-700">
                Trust Wallet
              </h4>
              <ul className="list-unstyled text-gray-700 mb-6 mb-md-8 mb-lg-0">
                <li className="mb-3">
                  <a
                    href="./assets"
                    className="text-reset"
                    aria-label="Goes to assets page"
                  >
                    Assets
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/dapp"
                    className="text-reset"
                    aria-label="Goes to dapp browser page"
                  >
                    DApp Browser
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/stablecoins"
                    className="text-reset"
                    aria-label="Goes to stablecoin page"
                  >
                    Stablecoins
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/beta"
                    className="text-reset"
                    aria-label="Goes Trust Wallet Beta page"
                  >
                    Beta
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/nft-wallet"
                    className="text-reset"
                    aria-label="Goes to collectible page"
                  >
                    NFTs
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/el-salvador-wallet"
                    className="text-reset"
                    aria-label="Goes to el salvador wallet"
                  >
                    El Salvador Wallet
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="https://apps.apple.com/app/apple-store/id1288339409?mt=8"
                    rel="noopener"
                    target="_blank"
                    className="text-reset"
                    aria-label="Opens AppStore page to download Trust Wallet for iphones"
                  >
                    Crypto Wallet for iOS
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp&referrer=utm_source%3Dwebsite"
                    rel="noopener"
                    target="_blank"
                    className="text-reset"
                    aria-label="Opens Google Play page to download Trust Wallet for androids"
                  >
                    Crypto Wallet for Android
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-2">
              <h4 className="font-weight-bold text-uppercase text-gray-700">
                Information
              </h4>
              <ul className="list-unstyled text-gray-700 mb-0">
                <li className="mb-3">
                  <a
                    href="https://community.trustwallet.com"
                    target="_blank"
                    className="text-reset"
                    aria-label="Opens Trust Wallet community page"
                  >
                    Community
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="https://community.trustwallet.com/c/helpcenter"
                    target="_blank"
                    className="text-reset"
                    aria-label="Opens help Ccnter page"
                  >
                    Help Center
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="https://support.trustwallet.com/"
                    rel="noopener"
                    target="_blank"
                    className="text-reset"
                    aria-label="Opens support page"
                  >
                    Support
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/blog"
                    rel="noopener"
                    className="text-reset"
                    aria-label="Opens Trust Wallet blog page"
                  >
                    DApp Journey
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/developer"
                    className="text-reset"
                    aria-label="Opens Developer page"
                  >
                    Developers
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/submit-dapp"
                    className="text-reset"
                    aria-label="Opens a page with form to submit a dapp for Trust Wallet listing"
                  >
                    Submit DApp
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/press"
                    className="text-reset"
                    aria-label="Opens a page with brand kit with Trust Wallet logos, icons and many more"
                  >
                    Press Kit
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/terms-of-services"
                    className="text-reset"
                    aria-label="Opens a page with terms of services"
                  >
                    Terms Of Service
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/privacy-policy"
                    className="text-reset"
                    aria-label="Opens a page with privacy and policy"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 offset-md-4 col-lg-2 offset-lg-0">
              <h4 className="font-weight-bold text-uppercase text-gray-700">
                Use Crypto
              </h4>
              <ul className="list-unstyled text-gray-700 mb-6 mb-md-8 mb-lg-0">
                <li className="mb-3">
                  <a
                    href="#/buy-bitcoin"
                    className="text-reset"
                    aria-label="opens a bitcoin page"
                  >
                    Buy Bitcoin with a credit card
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/buy-ethereum"
                    className="text-reset"
                    aria-label="opens a ethereum page where you can learn how to buy it"
                  >
                    Buy Ethereum
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/buy-bnb"
                    className="text-reset"
                    aria-label="opens a binance coin page where you can learn how to buy it"
                  >
                    Buy BNB
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/buy-litecoin"
                    className="text-reset"
                    aria-label="opens a litecoin page where you can learn how to buy it"
                  >
                    Buy Litecoin
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/buy-tron"
                    className="text-reset"
                    aria-label="opens a bitcoin tron where you can learn how to buy it"
                  >
                    Buy TRON
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/buy-xrp"
                    className="text-reset"
                    aria-label="opens a xrp page where you can learn how to buy it"
                  >
                    Buy XRP
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/buy-bitcoincash"
                    className="text-reset"
                    aria-label="opens a bitcoin cash page where you can learn how to buy it"
                  >
                    Buy Bitcoin Cash
                  </a>
                </li>
                <hr />
                <li className="mb-3">
                  <a
                    href="#/earn-bitcoin"
                    className="text-reset"
                    aria-label="opens a bitcoin page where you can learn how to earn it"
                  >
                    Earn Bitcoin
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/earn-ethereum"
                    className="text-reset"
                    aria-label="opens a ethereum page where you can learn how to earn it"
                  >
                    Earn Ethereum
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/earn-binance-coin"
                    className="text-reset"
                    aria-label="opens a binance coin page where you can learn how to earn it"
                  >
                    Earn Binance Coin
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/earn-cake"
                    className="text-reset"
                    aria-label="opens a cake page where you can learn how to earn it"
                  >
                    Earn Cake
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-2">
              <h4 className="font-weight-bold text-uppercase text-gray-700">
                Assets
              </h4>
              <ul className="list-unstyled text-gray-700 mb-6 mb-md-8 mb-lg-0">
                <li className="mb-3">
                  <a
                    href="#/bitcoin-wallet"
                    className="text-gray-700"
                    aria-label="Goes to the page of  (BTC) where you can learn more about it"
                  >
                    Bitcoin (BTC)
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/ethereum-wallet"
                    className="text-gray-700"
                    aria-label="Goes to the page of  (ETH) where you can learn more about it"
                  >
                    Ethereum (ETH)
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/binance-coin-wallet"
                    className="text-gray-700"
                    aria-label="Goes to the page of  (BNB) where you can learn more about it"
                  >
                    Binance Coin (BNB)
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/litecoin-wallet"
                    className="text-gray-700"
                    aria-label="Goes to the page of  (LTC) where you can learn more about it"
                  >
                    Litecoin (LTC)
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/xrp-wallet"
                    className="text-gray-700"
                    aria-label="Goes to the page of  (XRP) where you can learn more about it"
                  >
                    Ripple (XRP)
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/dogecoin-wallet"
                    className="text-gray-700"
                    aria-label="Goes to the page of  (DOGE) where you can learn more about it"
                  >
                    Dogecoin (DOGE)
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/polkadot-wallet"
                    className="text-gray-700"
                    aria-label="Goes to the page of  (DOT) where you can learn more about it"
                  >
                    Polkadot (DOT)
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/smart-chain-wallet"
                    className="text-gray-700"
                    aria-label="Goes to the page of  (BNB) where you can learn more about it"
                  >
                    Smartchain (BNB)
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/dash-wallet"
                    className="text-gray-700"
                    aria-label="Goes to the page of  (DASH) where you can learn more about it"
                  >
                    Dash (DASH)
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/tron-wallet"
                    className="text-gray-700"
                    aria-label="Goes to the page of  (TRX) where you can learn more about it"
                  >
                    TRON (TRX)
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/tezos-wallet"
                    className="text-gray-700"
                    aria-label="Goes to the page of  (XTZ) where you can learn more about it"
                  >
                    Tezos (XTZ)
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/cosmos-wallet"
                    className="text-gray-700"
                    aria-label="Goes to the page of  (ATOM) where you can learn more about it"
                  >
                    Cosmos (ATOM)
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/stellar-wallet"
                    className="text-gray-700"
                    aria-label="Goes to the page of  (XLM) where you can learn more about it"
                  >
                    Stellar (XLM)
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#/kava-wallet"
                    className="text-gray-700"
                    aria-label="Goes to the page of  (KAVA) where you can learn more about it"
                  >
                    Kava (KAVA)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default TrustWallet;
