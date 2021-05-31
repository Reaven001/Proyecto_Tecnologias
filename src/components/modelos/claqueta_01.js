import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Claqueta(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/home_claqueta_01.gltf')
  return (
    <group ref={group} {...props} dispose={null} rotation={[0, -1.57, 0]} position={[11, -8, 0]}>
      <mesh geometry={nodes['claquetavox-0-claqueta_1'].geometry} material={materials['Material.002']} />
      <mesh geometry={nodes['claquetavox-0-claqueta_2'].geometry} material={materials['Material.006']} />
      <group position={[0.6, 3.96, 3.22]} rotation={[0.21, 0, 0]}>
        <mesh geometry={nodes['claquetavox-0-claqueta001_1'].geometry} material={materials['Material.003']} />
        <mesh geometry={nodes['claquetavox-0-claqueta001_2'].geometry} material={materials['Material.005']} />
      </group>
      <group position={[-0.05, 3.48, 3.02]}>
        <mesh geometry={nodes['claquetavox-0-claqueta002_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['claquetavox-0-claqueta002_2'].geometry} material={materials['Material.004']} />
      </group>
    </group>
  )
}

useGLTF.preload('/home_claqueta_01.gltf')