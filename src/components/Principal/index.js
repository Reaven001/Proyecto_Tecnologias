import React from 'react'
import Video from '../../assets/videos/video2.mp4'
import { PrincipalContainer, PrincipalBg, VideoBg, PrincipalContenido, TituloPrincipal } from './PrincipalElements'

const Principal = () => {
    return (
        <PrincipalContainer>
            <PrincipalBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </PrincipalBg>
            <PrincipalContenido>
                <TituloPrincipal>INGENIERÍA en MULTIMEDIA</TituloPrincipal>
            </PrincipalContenido>
            

        </PrincipalContainer>
    )
}

export default Principal