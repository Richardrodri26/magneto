import { cn } from "@/lib/utils"
import { ChevronRightCircle } from "lucide-react"


export const SubmenuTaskInbox = () => {
  
  return (
    <div
        className='relative mt-3 flex h-[95%] w-[180px] flex-col items-start justify-start gap-2 border-r border-r-[#BABABA] py-4 pr-4 '>
        {/* SubNavigationItem */}

      

        <div  className={cn('absolute -right-[11px] top-1 z-[3] h-[22px] w-[22px] cursor-pointer bg-[#F2F2F2] transition-all')}>
          <ChevronRightCircle className='fill-[#8D8D8D] ' />
        </div>
      </div>
  )
}