import styled from 'styled-components';


export const Nav = styled.nav`
    
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-intems: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    transition: 0.8s all aese;

`;



export const MobileIcon = styled.div`
    display: none;

        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
`;



