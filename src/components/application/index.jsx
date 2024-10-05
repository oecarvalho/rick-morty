import { useEffect, useState } from "react";
import { CardCharacter } from "../CardCharacters";
import { ContainerApp, ContentCharacters, HeaderApp, Loader } from "./style";
import IconLoader from '../../assets/loader.gif'
import axios from "axios";

export function Aplication(){

    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [countPages, setCountPages] = useState();
    const [qntCharacters, setQntCharacters] = useState();
    const [isLoader, setIsLoader] = useState(true);

    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(response => {
            const array = [...characters, ...response.data.results]
            setCharacters(array)
            setCountPages(response.data.info.pages)
            setQntCharacters(response.data.info.count)
            setIsLoader(false)
        })
    }, [page])

    return(

        <>
        {
            isLoader && (
                <Loader>
                    <img src={IconLoader} alt="" />
                </Loader> 
            )
        }
        <ContainerApp> 
            
            <HeaderApp>
                <h1>Rick and Morty</h1>
                <span>Nº de Personagens: {qntCharacters}</span>
            </HeaderApp>

            <ContentCharacters>
                <div>
                    {
                      characters && characters.map(({image, name, species, gender}) => {
                       return(
                        <CardCharacter
                            image={image}
                            name={name}
                            gender={species}
                            specie={gender} 
                        />
                       )
                      })
                    }
                    
                </div>

                {
                    (!(page == countPages)) && <button onClick={()=> setPage(page + 1)}>Carregar Mais</button>
                }
                
            </ContentCharacters>
        </ContainerApp>
        </>

    )
}