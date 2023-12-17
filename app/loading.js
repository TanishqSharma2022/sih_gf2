import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading(){
    return(
        <>
<div className='p-12 h-[100vh]'>
    <p className='w-full h-[10vh] rounded-[30px] grid grid-rows-5'>
      <Skeleton count={10}  className='h-[10vh] rounded-[30px] ' />
    </p>
    </div>
        </>
    )
}