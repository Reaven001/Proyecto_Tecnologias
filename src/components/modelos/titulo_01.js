import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Titulo(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/home_titulo_01.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={2.5}>
      <mesh
        geometry={nodes.Text.geometry}
        material={materials['Material.001']}
        position={[0, 0.98, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Text002.geometry}
        material={materials['Material.002']}
        position={[-0.09, 0.03, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Text003.geometry}
        material={materials['Material.004']}
        position={[0, 0.98, -0.1]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Text004.geometry}
        material={materials['Material.006']}
        position={[-0.09, 0.03, -0.1]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Text005.geometry}
        material={materials['Material.005']}
        position={[0, 0.67, -0.09]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.6, 0.39, 0.6]}
      />
      <mesh
        geometry={nodes.Text006.geometry}
        material={materials['Material.003']}
        position={[0, 0.67, -0.09]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.6, 0.33, 0.6]}
      />
    </group>
  )
}

useGLTF.preload('/home_titulo_01.gltf')