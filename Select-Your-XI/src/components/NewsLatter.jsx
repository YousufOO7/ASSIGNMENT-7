import PropTypes from 'prop-types';
import './NewsLatter.css';
// z-10 absolute bottom-[-2800px] ml-44
const NewsLatter = () => {
    return (
        <div className='md:w-9/12 mx-auto absolute z-40 ml-44 mt-[-150px] border border-white p-5 rounded-xl '>
            <div className="hero news-image h-[300px] rounded-xl">
  <div className="hero-content text-center space-y-5">
    <div className="">
      <h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
      <p className="pt-5 text-sm text-gray-500">Get the latest updates and news right in your inbox!
      </p>
      <div className='py-5 space-x-2'>
      <input type="text" placeholder="Enter your email" className="input input-bordered w-4/6" />
      <button className='btn bg-gradient-to-r from-pink-400 to-orange-500 text-white font-semibold rounded-lg'>Subscribe</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

NewsLatter.propTypes = {
    props: PropTypes
};

export default NewsLatter;