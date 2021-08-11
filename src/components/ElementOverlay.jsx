import React from 'react'
import { Transition } from 'react-transition-group'
import ElementCard from './ElementCard'
import ElementIcon from './ElementIcon'

const ElementOverlay = (props) => {
    const duration = 200;

    const defaultStyle = {
        transition: `all ${duration}ms linear`,
        position: 'absolute',
        top: '-50%',
    };

    const overlayTransition = {
        entered: { transform: 'translateY(150%)' },
        // entered: {transform: 'translate(50%, 50%)'},
        exiting: { transform: 'translateY(-150%)'},
        //exited: { transform: 'translate(-50%, -50%)'}
    };

    return (
        <div className={`absolute ${props.cardState ? 'top-0' : '-top-full'} left-0 w-full h-full overflow-hidden`}>

            <Transition in={props.cardState} timeout={duration}>
                {(state) => (
                    <div style={{...defaultStyle, ...overlayTransition[state]}} className="flex flex-row justify-center items-center w-full h-96 space-x-10">
                        <div className="h-full">
                            <ElementIcon {...props} cardState={props.cardState} />
                        </div>
                        <ElementCard {...props} cardState={props.cardState} />
                    </div>
                )}
            </Transition>
        </div>
    )
}

export default ElementOverlay
