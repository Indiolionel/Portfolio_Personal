import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function
    () {

    return (
        <div className={`cursor-pointer text-start w-5/6`} >
            <FontAwesomeIcon icon={faAngleRight} size="2xl" className={`h-12 text-white hover:text-gray-200`} />
        </div>
    )
}
