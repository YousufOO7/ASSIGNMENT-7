import PropTypes from 'prop-types';

const Player = ({player, handelChoose, }) => {
    const {image, name, country, all_rounder, rating, batting_style, bowling_style, price} = player;
    return (
        <div className='w-11/12 mx-auto py-5'>
           <div className="card card-compact p-5 border-2">
  <figure>
    <img
    className='h-[200px] w-full bg-cover rounded-xl'
      src={image}
      alt="Player" />
  </figure>
  <div className="space-y-2">
    <h2 className="card-title mt-4"> <i className="fa-solid fa-user"></i> {name}</h2>
    <div className='flex justify-between items-center mb-2'>
    <p className='text-gray-400 gap-2'><i className="fa-solid fa-flag"></i> {country}</p>
    <button className='text-xs btn'>{`${all_rounder ? 'All rounder' : 'Not all rounder'}`}</button>
    </div>
    <p className=' font-bold'>{rating}</p>
    <div className='flex justify-between'>
    <p className='text-xs'>{batting_style}</p>
    <p className='text-xs  text-gray-500'>{bowling_style}</p>
    </div>
    <div className="flex justify-between items-center">
    <p className='font-semibold'>Price ${price}</p>
      <button 
      onClick={() => handelChoose(player)}
      className="btn hover:bg-yellow-500 hover:text-white">Choose Player</button>
    </div>
  </div>
</div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object,
    handelChoose: PropTypes.func,
};

export default Player;