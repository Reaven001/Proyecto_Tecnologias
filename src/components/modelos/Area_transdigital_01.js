/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Digital(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/area_transdigital_01.gltf')
  return (
    <group ref={group} {...props} dispose={null} position={[0, 4, 0]} scale={1.4}>
      <mesh
        geometry={nodes.numeralblend.geometry}
        material={materials['Material.003']}
        position={[-0.19, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.numeralblend001.geometry}
        material={materials['Material.002']}
        position={[-0.19, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </group>
  )
}

useGLTF.preload('/area_transdigital_01.gltf')
