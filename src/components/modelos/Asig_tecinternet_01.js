/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Html5(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/asig_tecinternet_01.gltf')
  return (
    <group ref={group} {...props} dispose={null} position={[0,4,-0.3]} scale={1.1}>
      <mesh
        geometry={nodes['HTMLLL-0-html5'].geometry}
        material={materials['Material.011']}
        position={[7.05, 0, 0.04]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes['HTMLLL-0-html5001'].geometry}
        material={materials['Material.012']}
        position={[7.05, 0, 0.04]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes['hymltexto-0-html'].geometry}
        material={materials['Material.013']}
        position={[0.14, 3.19, 0.32]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.82, 0.82, 0.82]}
      />
    </group>
  )
}

useGLTF.preload('/asig_tecinternet_01.gltf')
