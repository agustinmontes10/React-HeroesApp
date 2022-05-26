import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';


export const HeroScreen = () => {

  const { heroId } = useParams();
  const hero = useMemo( () => getHeroById(heroId), [heroId] );

  const imagePath = `/assets/${hero.id}.jpg`;

  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  }


  if(!hero) {
    return  <Navigate to='/'/>
  }

  return (
    <div className='row mt-5'>
        <div className='col-4 animate__animated animate__fadeIn'>
          <img src={ imagePath } alt={hero.superhero}  className='img-thumbnail'/>
        </div>

        <div className='col-8 animate__animated animate__fadeIn'>
            <h3>{ hero.superhero }</h3>

            <ul className='list-group list-group-flush'>
                <li className='list-group-item' ><b>Alter ego:</b> { hero.alter_ego }</li>
                <li className='list-group-item' ><b>publisher:</b> { hero.publisher }</li>
                <li className='list-group-item' ><b>Firts Appearance:</b> { hero.first_appearance }</li>
            </ul>

            <h5 className='mt-3'>Characters</h5>
            <p>{ hero.characters }</p>

            <button className='btn btn-outline-info' onClick={ handleReturn }>Regresar</button>

        </div>

    </div>
  )
}