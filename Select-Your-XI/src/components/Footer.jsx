import PropTypes from 'prop-types';
import footerImage from '../assets/images/logo-footer.png'

const Footer = () => {
    return (
      <div className='relative'>
              {/* footer information */}

       <div className=' bg-black p-32 pt-52 pb-0 '>
            
            <div className='py-2'>
                <img className='mx-auto mb-5' src={footerImage} alt="" />
            </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center'>
            <div className='space-y-2'>
                <h3 className='text-lg text-white'>About Us</h3>
                <p className='text-sm text-gray-400'>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
            </div>
            <div className='space-y-2'>
                <h3 className='text-lg text-white'>Quick Links</h3>
                <ul className='text-sm text-gray-400'>
                <li><a>Home</a></li>
      <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      <li><a>Schedules</a></li>
                </ul>
            </div>
            <div className='space-y-2'>
                <h3 className='text-lg text-white'>Subscribe</h3>
                <p className='text-sm text-gray-400'>Subscribe to our newsletter for the latest updates.</p>
                <div className='flex items-center'>
                    <input 
                    className='px-4 py-2 border border-gray-300 w-full rounded-l-lg' 
                    type="text" name="" id="" placeholder='Enter your email' />
                    <button 
                    className='px-4 py-2 bg-gradient-to-r from-pink-400 to-orange-500 text-white font-semibold'
                    >Search</button>
                </div>            
            </div>
        </div>

        <div className='mt-20'><hr className='border' /></div>
        <div><p className='py-5 text-center text-gray-400'>@2024 Your Company All Rights Reserved.</p></div>
    </div>
      </div>

        

    );
};

Footer.propTypes = {
    props: PropTypes
};

export default Footer;