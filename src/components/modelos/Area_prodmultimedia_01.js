/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Audios(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/area_prodmultimedia_01.gltf')
  return (
    <group ref={group} {...props} dispose={null} position={[0, 4.5, 0]} scale={0.9} rotation={[0, -0.1 , 0]}>
      <mesh
        geometry={nodes['BOXAUDIFONOS-0-AUDIFONOIS'].geometry}
        material={materials['Material.003']}
        position={[-8.9, 0, -2.76]}
      />
      <mesh
        geometry={nodes['BOXAUDIFONOS-0-AUDIFONOIS001'].geometry}
        material={nodes['BOXAUDIFONOS-0-AUDIFONOIS001'].material}
        position={[-0.03, 1.73, 0.19]}
      />
      <mesh
        geometry={nodes['BOXAUDIFONOS-0-AUDIFONOIS002'].geometry}
        material={materials['Material.002']}
        position={[-0.05, 1.66, 0.02]}
      />
      <mesh
        geometry={nodes['BOXAUDIFONOS-0-AUDIFONOIS003'].geometry}
        material={nodes['BOXAUDIFONOS-0-AUDIFONOIS003'].material}
        position={[-0.04, 4.53, -0.07]}
      />
      <mesh
        geometry={nodes['lateralaudios-0'].geometry}
        material={materials['Material.006']}
        position={[-2.57, 1.83, 0.15]}
      />
      <mesh
        geometry={nodes['lateralaudios-0001'].geometry}
        material={materials['Material.005']}
        position={[0.21, -1.27, -0.07]}
      />
      <mesh
        geometry={nodes['VALOGO-0-valo'].geometry}
        material={materials['Material.007']}
        position={[-2.72, 1.65, 0.16]}
        rotation={[Math.PI, -1.56, Math.PI]}
        scale={[0.61, 0.61, 0.61]}
      />
      <mesh
        geometry={nodes['VALOGO-0-valo001'].geometry}
        material={materials['Material.008']}
        position={[2.62, 1.65, 0.16]}
        rotation={[Math.PI, -1.56, Math.PI]}
        scale={[0.61, 0.61, -0.61]}
      />
    </group>
  )
}

useGLTF.preload('/area_prodmultimedia_01.gltf')
