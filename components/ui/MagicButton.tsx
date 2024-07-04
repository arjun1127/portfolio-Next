import React from 'react'

const MagicButton = (
    {title,icon,position,handelClick,otherClasses}:
    {
        title:string;
        icon:React.ReactNode;
        position:string;
        handelClick?:()=>void;otherClasses?:string;
    }
) => {
  return (
    
        // Button code
        <button className={`inline-flex h-12 animate-shimmer items-center 
        justify-center rounded-md border border-purple-500
        bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
        bg-[length:200%_100%] px-6 font-medium text-violet-500 transition-colors
        focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
        focus:ring-offset-slate-50 ${otherClasses}`} onClick={handelClick} >
            {position === 'right' && icon}
            <span className="mx-2">{title}</span>
            {position !== 'right' && icon}

            </button>
        
  )
}

export default MagicButton