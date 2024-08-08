import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 50px 15px;
    background: #363636;
    color: white;

    opacity: ${props => props.isVisible ? '1' : '0'};
    pointer-events: ${props => props.isVisible ? 'auto' : 'none'};
    transition: .5s;
    transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(100px)'};

    .icon-fechar {
        display: none;
    }

    
    @media screen and (max-width: 480px) {
        p {
            font-size: 25px;
        }

        .icon-fechar {
            display: block;
            position: absolute;
            top: 15px;
            right: 30px;
            font-size: 25px;
            transform: ${props => props.isVisible ? 'rotate(0deg)' : 'rotate(45deg)'};
            transition: .7s;
        }
    }
`

export const ContainerLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    padding-left: 8px;
    border-left: 4px solid #9758a6;
    border-radius: 2px;
`

export const ListLink = styled.a`
    
`