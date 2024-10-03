import styled from "styled-components";

export const ContainerApp = styled.div`
    width: 100%;
    max-width: 124.6rem;
    margin: 0 auto;
    padding: 4rem 1.5rem;

`;

export const HeaderApp = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.6rem;
    margin-bottom: 1.6rem;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    h1{
        font-size: 3.2rem;
    }
    span{
        font-size: 1.6rem;
        opacity: 0.6;
    }
`

export const ContentCharacters = styled.div`
    & > div{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.6rem;
    }
`