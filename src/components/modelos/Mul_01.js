/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Mul(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/mul_01.gltf')
  return (
    <group ref={group} {...props} dispose={null} position={[0,7, 0]} rotation={[0.4, -7 , 0.2]} scale={0.9}>
      <mesh geometry={nodes['mmulv-0-mmult_1'].geometry} material={materials['Material.001']} />
      <mesh geometry={nodes['mmulv-0-mmult_2'].geometry} material={materials['Material.002']} />
      <mesh geometry={nodes['mmulv-0-mmult_3'].geometry} material={materials['Material.003']} />
      <mesh geometry={nodes['mmulv-0-mmult_4'].geometry} material={materials['Material.004']} />
      <mesh geometry={nodes['mmulv-0-mmult_5'].geometry} material={materials['Material.005']} />
    </group>
  )
}

useGLTF.preload('/mul_01.gltf')
