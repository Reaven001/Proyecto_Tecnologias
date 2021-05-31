import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Mando(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/home_mando_01.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[11, 7, 0]} >
        <mesh geometry={nodes['MANDOV2-0-mandoxd_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['MANDOV2-0-mandoxd_2'].geometry} material={materials['Material.002']} />
        <mesh geometry={nodes['MANDOV2-0-mandoxd_3'].geometry} material={materials['Material.004']} />
        <mesh geometry={nodes['MANDOV2-0-mandoxd_4'].geometry} material={materials['Material.003']} />
        <mesh geometry={nodes['MANDOV2-0-mandoxd_5'].geometry} material={materials['Material.005']} />
        <mesh geometry={nodes['MANDOV2-0-mandoxd_6'].geometry} material={materials['Material.006']} />
        <mesh geometry={nodes['MANDOV2-0-mandoxd_7'].geometry} material={materials['Material.007']} />
      </group>
    </group>
  )
}

useGLTF.preload('/home_mando_01.gltf')