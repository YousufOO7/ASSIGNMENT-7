import PropTypes from 'prop-types';
import './Splayer.css'

const Splayer = ({splayer, handelDelete, isActive}) => {
    const {image, name,  batting_style, price, id} = splayer;
    return (
       <div className='pb-4'>
         <div className={`bg-base-100 w-full shadow-xl ${isActive.splayer? "hidden": ""}`}>
  <div className="flex justify-between items-center p-4">
    <div className=' flex gap-2'>
        <img className='image-container rounded-3xl' src={image} alt="" />
        <div className='space-y-1'>
            <h3 className='font-semibold text-lg'>{name}</h3>
            <h3 className='text-gray-500 text-xs'>{batting_style}</h3>
            <h3 className='text-gray-500 text-xs'>Price: {price}$</h3>
        </div>
    </div>
   
    <button 
            onClick={() => handelDelete(id)}
            className='btn text-red-500'><i className="fa-solid fa-trash"></i></button>
  </div>

        </div>
        
       </div>
    );
};

Splayer.propTypes = {
    splayer: PropTypes,
    handelDelete: PropTypes.func,
    isActive: PropTypes
};

export default Splayer;