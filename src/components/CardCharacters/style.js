import styled from "styled-components";

export const ContainerCard = styled.div`
    width: 100%;
    background-color: #151020;
    border-radius: 4px;
    padding: 2rem;

    .image{
        width: 100%;
        height: 23.4rem;
        overflow: hidden;
        border-radius: 4px;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .info{
        margin-top: 1.6rem;

        h3{
            font-size: 1.8rem;
            margin-bottom: 0.8rem;
        }

        ul{
            list-style: none;
            display: flex;

            li{
                display: block;
                font-size: 1.4rem;

                &:last-child{
                    &::before{
                        content: "";
                        height: 4px;
                        width: 4px;
                        display: inline-block;
                        vertical-align: middle;
                        background-color: #fff;
                        opacity: 0.4;
                        border-radius: 50%;
                        margin: 0.8rem;   
                    }
                }
            }
        }
    }
`;