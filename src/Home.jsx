import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Player from './Player';
import Card from './Card';

import Swal from 'sweetalert2'

const Home = () => {

    // --------------------------------setBudget--------------------------------------
    const budged = 60;

    const [players, setPlayers] = useState([]);
    const [card, setCard] = useState([]);
    const [blance, setBlance] = useState(0);
    const [remain, setRemain] = useState(budged);

    useEffect(() => {
        fetch('cricketerData.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, []);

    const handleCard = (player) => {
        const isExist = card.find(play => play === player);
        console.log(isExist);

        let count = player.value;


        if (isExist) {
            return (
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Player Already Added!',
                    confirmButtonText: 'Back'
                })
            )
        }
        else {
            card.forEach((temp) => {
                count = count + temp.value;
            });

            const totalRemain = budged - count;

            if (budged < count) {
                return (
                    Swal.fire('insufficient balance')
                )
            }
            else {
                setBlance(count);
                setRemain(totalRemain);
                setCard([...card, player]);
            }


        }
    }
    console.log(card);

    return (
        <div className=' w-5/6 mx-auto '>
            <div>
                <h3 className='text-center text-4xl font-bold py-8'>Make Your Dream 11 within <span className='text-rose-600'>${budged}</span> million</h3>
            </div>
            <div className='py-5 flex gap-6'>
                <div className='grid grid-cols-3 justify-between gap-5 w-3/4'>
                    {
                        players.map(player => <Player
                            player={player}
                            handleCard={handleCard}
                            key={player.jerseyNumber}
                        ></Player>)
                    }
                </div>
                <div className=''>
                    <Card
                        blance={blance}
                        remain={remain}
                        player={card}
                        budged={budged}
                    ></Card>
                </div>
            </div>
        </div>
    );
};

Home.propTypes = {
    Home: PropTypes.func,
};

export default Home;