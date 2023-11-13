/*import React, { useState, useEffect } from 'react';

const PokemonList = () => {
    const [generations, setGenerations] = useState([]);
    const [selectedGeneration, setSelectedGeneration] = useState('');
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/generation/')
            .then(response => response.json())
            .then(data => setGenerations(data.results))
            .catch(error => console.error('Error fetching generations:', error));
    }, []);

    useEffect(() => {
        const fetchPokemonForGeneration = async () => {
            if (selectedGeneration) {
                try {
                    const response = await fetch(
                        `https://pokeapi.co/api/v2/generation/${selectedGeneration.toLowerCase()}/`
                    );
                    const data = await response.json();
                    setPokemonList(data.pokemon_species.map(pokemon => pokemon.name));
                } catch (error) {
                    console.error(`Error fetching Pokemon for ${selectedGeneration} generation:`, error);
                }
            }
        };

        fetchPokemonForGeneration();
    }, [selectedGeneration]);

    const handleGenerationChange = (event) => {
        setSelectedGeneration(event.target.value);
    };

    return (
        <div>
            <center>
            <h1>Pokemon List</h1>
            <label htmlFor="generationSelect">Select a Generation:</label>
            <select id="generationSelect" onChange={handleGenerationChange} value={selectedGeneration}>
                <option value="">Select Generation</option>
                {generations.map(generation => (
                    <option key={generation.name} value={generation.name}>
                        {generation.name}
                    </option>
                ))}
            </select>
            {selectedGeneration && (
                <div>
                    <h2>{selectedGeneration}</h2>
                    <ul>
                        {pokemonList.map(pokemon => (
                            <li key={pokemon}>{pokemon}</li>
                        ))}
                    </ul>
                </div>
            )}
            </center>
        </div>
    );
};

export default PokemonList;*/
// PokemonList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGenerations, setSelectedGeneration, setPokemonList } from './actions';

const PokemonList = () => {
    const dispatch = useDispatch();
    const generations = useSelector((state) => state.generations);
    const selectedGeneration = useSelector((state) => state.selectedGeneration);
    const pokemonList = useSelector((state) => state.pokemonList);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/generation/')
            .then(response => response.json())
            .then(data => dispatch(setGenerations(data.results)))
            .catch(error => console.error('Error fetching generations:', error));
    }, [dispatch]);

    useEffect(() => {
        const fetchPokemonForGeneration = async () => {
            const response = await fetch(
                `https://pokeapi.co/api/v2/generation/${selectedGeneration.toLowerCase()}/`
            );
            const data = await response.json();
            dispatch(setPokemonList(data.pokemon_species.map(pokemon => pokemon.name)));
        };
        fetchPokemonForGeneration();
    }, [selectedGeneration, dispatch]);

    const handleGenerationChange = (event) => {
        dispatch(setSelectedGeneration(event.target.value));
    };

    return (
        <div>
            <center>
            <h1>Pokemon List</h1>
            <label htmlFor="generationSelect">Select a Generation:</label>
            <select id="generationSelect" onChange={handleGenerationChange} value={selectedGeneration}>
                <option value="">Select Generation</option>
                {generations.map(generation => (
                    <option key={generation.name} value={generation.name}>
                        {generation.name}
                    </option>
                ))}
            </select>
            {selectedGeneration && (
                <div>
                    <h2>{selectedGeneration}</h2>
                    <ul>
                        {pokemonList.map(pokemon => (
                            <li key={pokemon}>{pokemon}</li>
                        ))}
                    </ul>
                </div>
            )}
            </center>
        </div>
    );
};

export default PokemonList;
