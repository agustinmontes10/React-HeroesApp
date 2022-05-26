import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const [ formValues, handleInputChange ] =  useForm({
    searchText: q,
  });

  const {searchText} = formValues;

  const heroesFileted = useMemo( () => getHeroesByName(q), [q] );

  const handleSearch = (e) => {
      e.preventDefault();
      navigate(`?q=${ searchText }`)
  }

  return (
    <>
        <h1>Search</h1>
        <hr />

        <div className='row'>

            <div className='col-5'>
                <h4>Search</h4>
                <hr />

                <form onSubmit={ handleSearch }>
                    <input
                      type="text"
                      placeholder="Search a hero"
                      className="form-control"
                      name="searchText"
                      autoComplete="off"
                      value={searchText}
                      onChange = {handleInputChange}
                    />

                    <button type='submit' className='btn btn-outline-primary mt-3'>
                      Search..
                    </button>
                </form>
            </div>

            <div className='col-7'>
                <h4>Resultados</h4>
                <hr />

                {
                  (q === '')
                    ? <div className='alert alert-info'>Buscar un heroe</div>
                    : ( heroesFileted.length === 0 )
                      && <div className='alert alert-danger'>No hay resultados</div>
                }

                {
                  heroesFileted.map(hero => (
                    <HeroCard 
                      key={hero.id}
                      {...hero}
                    />
                  ))
                }

            </div>

        </div>
    </>
  )
}
