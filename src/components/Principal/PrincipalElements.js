import styled from 'styled-components';

export const PrincipalContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 920px;
    position: relative;
    z-index: 1; 
`;

export const PrincipalBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const PrincipalContenido = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TituloPrincipal = styled.h1`
    color: #E1FF00;
    font-size: 48px;
    text-align: center;
    font-family: 'Fredoka One', cursive;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 768px) {
        font-size: 32px;
    }
`;