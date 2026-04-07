
import React from 'react'

function LeftControl() {
  return (
    <div className="w-24 h-[280px] bg-cyan-400 rounded-l-[30px] p-3 flex flex-col items-center justify-between pointer-events-none select-none">
      <button className="w-12 h-12 rounded-full bg-zinc-900 text-white text-lg">L</button>

      <div className="grid grid-cols-3 gap-1">
        <div className="w-7 h-7"></div>
        <button className="w-7 h-7 rounded bg-zinc-800 text-white">^</button>
        <div className="w-7 h-7"></div>
        <button className="w-7 h-7 rounded bg-zinc-800 text-white">&lt;</button>
        <button className="w-7 h-7 rounded bg-zinc-800 text-white">o</button>
        <button className="w-7 h-7 rounded bg-zinc-800 text-white">&gt;</button>
        <div className="w-7 h-7"></div>
        <button className="w-7 h-7 rounded bg-zinc-800 text-white">v</button>
        <div className="w-7 h-7"></div>
      </div>

      <button className="w-6 h-6 rounded-full bg-zinc-900 text-white text-xs">-</button>
    </div>
  )
}

export default LeftControl
