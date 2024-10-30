import PropTypes from 'prop-types';
import bannerImage from '../assets/images/banner-main.png'
import './Banner.css';
const Banner = ({handelCoin}) => {
  let coin = 60000000;
    return (
        <div className='w-11/12 mx-auto py-5 mb-20'>
          <div
  className="hero min-h-screen bg-gray-900 bg-blend-screen rounded-xl banner">
  <div className=""></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="space-y-5">
        <img className='md:w-1/4 mx-auto' src={bannerImage} alt="" />
      <h1 className="mb-5 text-2xl md:text-5xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className="mb-5">
      Beyond Boundaries Beyond Limits
      </p>
      <div className='border py-2 w-1/5 md:w-1/6 mx-auto border-yellow-500 rounded-2xl'>
      <button 
      onClick={() => handelCoin(coin)}
      className="btn border-yellow-500 bg-yellow-500 text-black">Claim Free Credit</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

Banner.propTypes = {
    props: PropTypes,
    handelCoin: PropTypes.object,
    coin: PropTypes
    
};

export default Banner;