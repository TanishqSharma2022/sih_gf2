'use client'

import { useState } from "react"
import Countup from "react-countup"
import ScrollTrigger  from 'react-scroll-trigger'



export default function Number({n}){
    const [counter, setCounter] = useState(false);
    return(
        <>
        <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)} >

            {counter && <Countup start={0} end={n} duration={2} delay={0} />}

            </ScrollTrigger>
        </>
    )
}













// import { useSpring, animated } from "@react-spring/web"

// export default function Number({n}){
//     const {number} = useSpring({
//         from: {number: 0},
//         number: n, 
//         delay: 200,
//         config: {mass: 1, tension: 20, friction: 10}
//     });
//     return(
//        <animated.div>
//         {number.to(n => n.toFixed(0))}
//        </animated.div>
//     )
// }