import PropTypes from 'prop-types';

const Player = ({ player, handleCard }) => {
    const {name, image, value} = player;
    return (
        <div className='flex justify-center'>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-[300px] pt-3 object-contain h-[200px]' src={image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{player.details}</p>
                    <h2 className="card-title">Price: ${value} million</h2>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleCard(player)} className="btn btn-success font-bold">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleCard: PropTypes.func,
};

export default Player;