import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Camara(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/home_camara_01.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-10, 7.5, 0]}>
        <mesh geometry={nodes.voxcamrav3_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.voxcamrav3_2.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.voxcamrav3_3.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.voxcamrav3_4.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.voxcamrav3_5.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.voxcamrav3_6.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.voxcamrav3_7.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.voxcamrav3_8.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.voxcamrav3_9.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.voxcamrav3_10.geometry} material={materials['Material.010']} />
      </group>
    </group>
  )
}

useGLTF.preload('/home_camara_01.gltf')