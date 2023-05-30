import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function
    () {
    
    return (
        <div className={`cursor-pointer w-5/6`}  >
            <FontAwesomeIcon icon={faAngleLeft} size="2xl" className={`h-12 text-white hover:text-gray-200`} />
        </div>
    )
}
