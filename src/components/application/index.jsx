import { CardCharacter } from "../CardCharacters";
import { ContainerApp, ContentCharacters, HeaderApp } from "./style";

export function Aplication(){

    return(
        <ContainerApp>
            <HeaderApp>
                <h1>Rick and Morty</h1>
                <span>Nº de Personagens: 896</span>
            </HeaderApp>

            <ContentCharacters>
                <div>
                    <CardCharacter
                        image='https://rickandmortyapi.com/api/character/avatar/322.jpeg'
                        name='Rick Sanchez'
                        gender='Male'
                        specie='Human'
                    />
                </div>
                <button>Carregar Mais</button>
            </ContentCharacters>
        </ContainerApp>
    )
}