
import React from 'react'

function RightControl() {
  return (
    <div className="w-24 h-[280px] bg-rose-500 rounded-r-[30px] p-3 flex flex-col items-center justify-between pointer-events-none select-none">
      <button className="w-6 h-6 rounded-full bg-zinc-900 text-white text-xs">+</button>

      <div className="grid grid-cols-3 gap-1">
        <div className="w-7 h-7"></div>
        <button className="w-7 h-7 rounded-full bg-zinc-900 text-white">x</button>
        <div className="w-7 h-7"></div>
        <button className="w-7 h-7 rounded-full bg-zinc-900 text-white">y</button>
        <button className="w-7 h-7 rounded-full bg-zinc-900 text-white">o</button>
        <button className="w-7 h-7 rounded-full bg-zinc-900 text-white">a</button>
        <div className="w-7 h-7"></div>
        <button className="w-7 h-7 rounded-full bg-zinc-900 text-white">b</button>
        <div className="w-7 h-7"></div>
      </div>

      <button className="w-12 h-12 rounded-full bg-zinc-900 text-white text-lg">R</button>
    </div>
  )
}

export default RightControl
