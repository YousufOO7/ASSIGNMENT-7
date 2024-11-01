import PropTypes from 'prop-types';
import navbarCoinImage from '../assets/images/coin.png'
import navbarLogoImage from '../assets/images/logo.png'

const Navbar = ({coinAmount}) => {
    return (
        <div className='sticky top-0 z-10 backdrop-blur-xl'>
          <div className='mx-16 py-5'>
            <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
      <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      <li><a>Schedules</a></li>
      </ul>
    </div>
    <a className="text-xl"><img src={navbarLogoImage} alt="" /></a>
  </div>
  <div className="navbar-end text-sm">
  <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      <li><a>Schedules</a></li>
    </ul>
    <a className="btn"><span id='coin-amount'>{coinAmount}</span>Coin <img src={navbarCoinImage} alt="" /> </a>
  </div>
</div>
        </div>
        </div>
    );
};

Navbar.propTypes = {
    props: PropTypes.object,
    coinAmount: PropTypes.object,
};

export default Navbar;