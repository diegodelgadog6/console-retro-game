
import React from 'react'

function RightControl({ handleSelection, handleBackSelection }) {
  const actionButtonClass = 'w-7 h-7 rounded-full bg-zinc-900 text-white active:scale-95 transition-transform shadow-[inset_0_-2px_0_rgba(255,255,255,0.15)]'

  return (
    <div className="w-28 h-[320px] bg-[linear-gradient(160deg,_#ff6f91,_#ef476f_55%,_#cb3558)] rounded-r-[36px] px-3 py-4 flex flex-col items-center justify-between select-none border-y-4 border-r-4 border-rose-200 shadow-[inset_0_0_12px_rgba(255,255,255,0.28),0_12px_20px_rgba(0,0,0,0.35)]">
      <button onClick={() => console.log('Click en +')} className="w-6 h-6 rounded-full bg-zinc-900 text-white text-xs active:scale-95 transition-transform shadow-[inset_0_-2px_0_rgba(255,255,255,0.15)]">+</button>

      <div className="grid grid-cols-3 gap-1 bg-black/10 p-2 rounded-xl border border-white/20">
        <div className="w-7 h-7"></div>
        <button className={actionButtonClass}>x</button>
        <div className="w-7 h-7"></div>
        <button className={actionButtonClass}>y</button>
        <button className={actionButtonClass}>o</button>
        <button onClick={handleSelection} className={actionButtonClass}>a</button>
        <div className="w-7 h-7"></div>
        <button onClick={handleBackSelection} className={actionButtonClass}>b</button>
        <div className="w-7 h-7"></div>
      </div>

      <button className="w-12 h-12 rounded-full bg-zinc-900 text-white text-lg active:scale-95 transition-transform shadow-[inset_0_-3px_0_rgba(255,255,255,0.15)]">R</button>
    </div>
  )
}

export default RightControl
