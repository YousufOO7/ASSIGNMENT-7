import PropTypes from 'prop-types';
import Splayer from '../Splayer/Splayer';

const Splayers = ({choosePlayers, handelDelete, addPlayer, isActive}) => {
    return (
        <div id='selected-players' className='w-11/12 mx-auto py-5 mb-40'>
            {
                choosePlayers.map((splayer, idx) => <Splayer 
                key={idx} 
                splayer={splayer}
                isActive={isActive}
                handelDelete={handelDelete}
                ></Splayer>)
            }
            <div id='add-more' className='border border-black w-[170px] h-[60px] rounded-2xl hidden'>
        <button 
        onClick={() => addPlayer()}
        className="btn border-yellow-500 bg-yellow-500 mt-1 ml-2 text-black">Add More Player</button>
        </div>
        </div>
    );
};

Splayers.propTypes = {
    choosePlayers: PropTypes,
    handelDelete: PropTypes.func,
    addPlayer: PropTypes.func,
    isActive: PropTypes.object
};

export default Splayers;