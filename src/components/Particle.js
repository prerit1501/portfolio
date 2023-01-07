import React from 'react'
import Particles from 'react-particles-js'
import ParticlesConfig from '../config/particle-config'

export default function ParticlesBackground() {
    return (
        <Particles params={ParticlesConfig}></Particles>
    )
}