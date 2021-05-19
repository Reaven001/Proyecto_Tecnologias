/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Diseño(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/asig_diseño_01.gltf')
  return (
    <group ref={group} {...props} dispose={null} position={[0,4,4.3]} scale={0.8}>
      <group position={[-0.53, 3.46, -6.13]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.libretavox_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.libretavox_2.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.libretavox_3.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.libretavox_4.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.libretavox_5.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.libretavox_6.geometry} material={materials['Material.010']} />
      </group>
      <group position={[-0.31, 0.14, -4.34]} rotation={[0, 0, -0.43]} scale={[1.11, 0.91, 0.85]}>
        <mesh geometry={nodes['lapizvox-0-DISEÑOLAPIZ_1'].geometry} material={materials['Material.005']} />
        <mesh geometry={nodes['lapizvox-0-DISEÑOLAPIZ_2'].geometry} material={materials['Material.006']} />
        <mesh geometry={nodes['lapizvox-0-DISEÑOLAPIZ_3'].geometry} material={materials['Material.007']} />
        <mesh geometry={nodes['lapizvox-0-DISEÑOLAPIZ_4'].geometry} material={materials['Material.008']} />
      </group>
    </group>
  )
}

useGLTF.preload('/asig_diseño_01.gltf')
