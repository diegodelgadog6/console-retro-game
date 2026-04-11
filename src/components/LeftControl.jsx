
import React from 'react'

function LeftControl({ handleDirection }) {
  return (
    <div className="w-28 h-[320px] bg-[linear-gradient(160deg,_#3dd5f3,_#17a7c7_55%,_#0d7f9c)] rounded-l-[36px] px-3 py-4 flex flex-col items-center justify-between select-none border-y-4 border-l-4 border-cyan-100 shadow-[inset_0_0_12px_rgba(255,255,255,0.3),0_12px_20px_rgba(0,0,0,0.35)]">
      <button className="w-12 h-12 rounded-full bg-zinc-900 text-white text-lg active:scale-95 transition-transform shadow-[inset_0_-3px_0_rgba(255,255,255,0.15)]">L</button>

      <div className="grid grid-cols-3 gap-1 bg-black/10 p-2 rounded-xl border border-white/20">
        <div className="w-7 h-7"></div>
        <button onClick={() => handleDirection('up')} className="w-7 h-7 rounded bg-zinc-800 text-white active:scale-95 transition-transform shadow-[inset_0_-2px_0_rgba(255,255,255,0.15)]">^</button>
        <div className="w-7 h-7"></div>
        <button onClick={() => handleDirection('left')} className="w-7 h-7 rounded bg-zinc-800 text-white active:scale-95 transition-transform shadow-[inset_0_-2px_0_rgba(255,255,255,0.15)]">&lt;</button>
        <button className="w-7 h-7 rounded bg-zinc-900 text-zinc-300 shadow-[inset_0_-2px_0_rgba(255,255,255,0.1)]">o</button>
        <button onClick={() => handleDirection('right')} className="w-7 h-7 rounded bg-zinc-800 text-white active:scale-95 transition-transform shadow-[inset_0_-2px_0_rgba(255,255,255,0.15)]">&gt;</button>
        <div className="w-7 h-7"></div>
        <button onClick={() => handleDirection('down')} className="w-7 h-7 rounded bg-zinc-800 text-white active:scale-95 transition-transform shadow-[inset_0_-2px_0_rgba(255,255,255,0.15)]">v</button>
        <div className="w-7 h-7"></div>
      </div>

      <button className="w-6 h-6 rounded-full bg-zinc-900 text-white text-xs shadow-[inset_0_-2px_0_rgba(255,255,255,0.15)]">-</button>
    </div>
  )
}

export default LeftControl
