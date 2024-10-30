import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Player from '../Player/Player';
import '../Aplayers/Aplayers.css';

const Aplayers = ({handelIsActive, isActive, handelChoose, choosePlayers}) => {
    const [availablePlayers, setAvailablePlayers] = useState([]);

    useEffect(() => {
        fetch ('players.json')
        .then(res => res.json())
        .then(data => setAvailablePlayers(data))
    } ,[])

    return (
        <div className='w-11/12 mx-auto py-5'>
            <div className='justify-between flex items-center text-center'>
                <h3 className="text-xl font-bold">{`${isActive.player? "Available Players" : `Selected Players ${choosePlayers.length} /6` }`}</h3>
                <div className='flex gap-2'>
                    <button 
                    onClick={() => handelIsActive("Available")}
                    className={`${isActive.player?" btn active": "btn"}`}>Available</button>
                    <button 
                    onClick={() => handelIsActive("Selected")}
                    className={`${isActive.player?" btn ": "btn active"}`}>Selected<span>{choosePlayers.length}</span></button>
                </div>
            </div>
            {/* fetch data load */}
           <div id='available-players' className={`grid grid-cols-1 md:grid-cols-3 mb-32 ${isActive.player?"": "hidden"}`}>
           {
                availablePlayers.map((player, idx) => <Player 
                key={idx} 
                handelChoose={handelChoose}
                player={player}
                ></Player>)
            }
           </div>
           

        </div>
    );
};

Aplayers.propTypes = {
    props: PropTypes,
    handelIsActive: PropTypes.object,
    isActive: PropTypes.object,
    handelChoose: PropTypes.func,
    choosePlayers: PropTypes.object,
};

export default Aplayers;