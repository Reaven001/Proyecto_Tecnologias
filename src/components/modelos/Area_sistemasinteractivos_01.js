/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Bombillo(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/area_sistemasinteractivos_01.gltf')
  return (
    <group ref={group} {...props} dispose={null} position={[0,2.8,0]} scale={1}>
      <mesh
        geometry={nodes['bombillobox-0-Bombillo'].geometry}
        material={materials['Material.001']}
        position={[0.07, 4.08, 0.13]}
      />
      <mesh
        geometry={nodes['bombillobox-0-Bombillo001'].geometry}
        material={materials['Material.002']}
        position={[0.07, 2.43, 0.12]}
      />
    </group>
  )
}

useGLTF.preload('/area_sistemasinteractivos_01.gltf')
