import React from "react";
import './Home.css';
import bulbasor from '../../imagenes/bulbasor.png';
import ivisor from '../../imagenes/ivisor.png';
import venusaur from '../../imagenes/venusaur.png';
import squirtle from '../../imagenes/squirtle.png';
import wartortle from '../../imagenes/wartortle.png';
import blastoise from '../../imagenes/blastoise.png';
import charmander from '../../imagenes/charmander.png';
import charmeleon from '../../imagenes/charmeleon.png';
import charizard from '../../imagenes/charizard.png';
import caterpie from '../../imagenes/caterpie.png';
import metapod from '../../imagenes/metapod.png';
import butterfree from '../../imagenes/butterfree.png';
import pikachu from '../../imagenes/pikachu.png';
import raichu from '../../imagenes/raichu.png';
import sandshrew from '../../imagenes/sandshrew.png';
import Card from "../card/Card";

const pokemons = [
    {
        "nombre" : "bulbasor",
        "imagen" : bulbasor,
        "tipo" : "planta"
    },
    {
        "nombre" : "ivisor",
        "imagen" : ivisor,
        "tipo" : "planta"
    },
    {
        "nombre" : "venusaur",
        "imagen" : venusaur,
        "tipo" : "planta"
    },
    {
        "nombre": "squirtle",
        "imagen" : squirtle,
        "tipo" : "agua"
    },
    {
        "nombre": "wartortle",
        "imagen" : wartortle,
        "tipo" : "agua"
    },
    {
        "nombre": "blastoise",
        "imagen" : blastoise,
        "tipo" : "agua"
    },
    {
        "nombre": "charmander",
        "imagen" : charmander,
        "tipo" : "fuego"
    },
    {
        "nombre": "charmeleon",
        "imagen" : charmeleon,
        "tipo" : "fuego"
    },
    {
        "nombre": "charizard",
        "imagen" : charizard,
        "tipo" : "fuego"
    },
    {
        "nombre": "caterpie",
        "imagen" : caterpie,
        "tipo" : "bicho"
    },
    {
        "nombre": "metapod",
        "imagen" : metapod,
        "tipo" : "bicho"
    },
    {
        "nombre": "butterfree",
        "imagen" : butterfree,
        "tipo" : "bicho"
    },
    {
        "nombre": "pikachu",
        "imagen" : pikachu,
        "tipo" : "electrico"
    },
    {
        "nombre": "raichu",
        "imagen" : raichu,
        "tipo" : "electrico"
    },
    {
        "nombre": "sandshrew",
        "imagen" : sandshrew,
        "tipo" : "tierra"
    }
    
]
const Home = ()=> {
    return(
        <>
            <header>
                <h1>Pokémon</h1>
            </header>
            <section>
                <div className="container">
                {
                    pokemons.map((item)=>{
                        return(
                            <Card img={item.imagen} nombre={item.nombre} tipo={item.tipo} key={item.nombre} />
                        )
                    })
                }   
                </div>      
            </section>
        </>
    )
}
export default Home