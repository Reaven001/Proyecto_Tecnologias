/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Render(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/asig_render_01.gltf')
  
  return (
    <group ref={group} {...props} dispose={null} position={[0, 6.8, 0]} scale={0.8}>
      <mesh geometry={nodes.voxlamp001_1.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.voxlamp001_2.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.voxlamp001_3.geometry} material={materials['Material.003']} />
    </group>
  )
}

useGLTF.preload('/asig_render_01.gltf')
