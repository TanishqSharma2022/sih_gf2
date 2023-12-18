'use client'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {PulseLoader} from 'react-spinners'

export default function Loading(){
    return(
        <>
            <div className='w-full h-[80vh] flex items-center justify-center'>
                <PulseLoader color="#294dff" />
            </div>
        </>

    )
}