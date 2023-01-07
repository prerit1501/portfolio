import React from 'react'
import ParticlesBackground from './Particle'
import '../css/Starter.css'

export default function Starter() {
    return (
        <div className='particles main'>
            <ParticlesBackground className='dots' />
            <CenterTitle />
        </div>
    )
    function CenterTitle() {
        return (
            <div className='main'>
                <h1 className='custom-subTitle Heading'>
                    <span className='heading-1'>Hi,👋</span>
                    <span className='heading-2'>I'm Prerit Singh</span>
                </h1>
            </div>
        )
    }
}
 