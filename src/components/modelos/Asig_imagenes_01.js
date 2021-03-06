/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Imagenes(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/asig_imagenes_01.gltf')
  return (
    <group ref={group} {...props} dispose={null} position={[0, 4.3, 0]} scale={1.2}>
      <mesh geometry={nodes['cara-0-Cara_de_Helios'].geometry} material={materials['Material.002']} />
    </group>
  )
}

useGLTF.preload('/asig_imagenes_01.gltf')
