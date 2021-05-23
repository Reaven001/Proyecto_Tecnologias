/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Interfa(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/asig_intefaz_01.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={0.8} rotation={[0, 1.4 , 0]}>
      <group position={[0, 8.5, 0]}>
        <mesh geometry={nodes['PHONE-0-celular_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['PHONE-0-celular_2'].geometry} material={materials['Material.002']} />
        <mesh geometry={nodes['PHONE-0-celular_3'].geometry} material={materials['Material.003']} />
        <mesh geometry={nodes['PHONE-0-celular_4'].geometry} material={materials['Material.004']} />
        <mesh geometry={nodes['PHONE-0-celular_5'].geometry} material={materials['Material.005']} />
        <mesh geometry={nodes['PHONE-0-celular_6'].geometry} material={materials['Material.006']} />
        <mesh geometry={nodes['PHONE-0-celular_7'].geometry} material={materials['Material.007']} />
        <mesh geometry={nodes['PHONE-0-celular_8'].geometry} material={materials['Material.008']} />
      </group>
    </group>
  )
}

useGLTF.preload('/asig_intefaz_01.gltf')
