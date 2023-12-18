'use client'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {PulseLoader} from 'react-spinners'

export default function Loading(){
    return(
        <>
            <div className='w-full h-[80vh] grid place-items-center'>
                <PulseLoader color="#36d7b7" />
            </div>
        </>

    )
}