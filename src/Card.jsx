import PropTypes from 'prop-types';

const Card = ({player, blance, remain}) => {
  
    console.log(remain);

    return (
        <div>
            <h3 className='text-2xl font-bold'>Player information: </h3>
            <h3 className='py-3'><span className='font-semibold'>Avalable Blance: ${remain} million</span> </h3>
            <h3 className='py-3'><span className='font-semibold'>Total Cost: ${blance} million</span> </h3>
            { 
            player.map(player => <div className='bg-slate-300 mb-4 p-6 rounded-lg' key={player.jerseyNumber}>
                <li>{player.name}</li>
                <h2 className='pl-6'><span className='font-semibold'>Price: {player.value} Lakh</span> </h2>
            </div>)
            }
        </div>
    );
};

Card.propTypes = {
    player: PropTypes.array,
    blance: PropTypes.number,
    remain: PropTypes.number,
    
};

export default Card;