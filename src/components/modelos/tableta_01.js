import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/home_tableta_01.gltf')
  return (
    <group ref={group} {...props} dispose={null} position={[-5, -4, 4]}>
      <group position={[-5.31, -0.18, -2.12]} rotation={[3.02, 1.11, -2.19]} scale={[0.47, 0.47, 0.47]}>
        <mesh geometry={nodes['LAPIXVOX-0-lapiz_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['LAPIXVOX-0-lapiz_2'].geometry} material={materials['Material.007']} />
      </group>
      <group position={[-7.13, -0.94, -5.16]} rotation={[0.93, -0.13, 0.28]}>
        <mesh geometry={nodes['tabletavsvoc-0-tabletaobj_1'].geometry} material={materials['Material.004']} />
        <mesh geometry={nodes['tabletavsvoc-0-tabletaobj_2'].geometry} material={materials['Material.005']} />
        <mesh geometry={nodes['tabletavsvoc-0-tabletaobj_3'].geometry} material={materials['Material.006']} />
      </group>
    </group>
  )
}

useGLTF.preload('/home_tableta_01.gltf')