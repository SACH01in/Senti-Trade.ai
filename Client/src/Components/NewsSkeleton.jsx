import React from 'react'

const NewsSkeleton = () => {
  return (
    <div className="w-full p-4 bg-[#0a0a0a] border-l-4 border-zinc-800 animate-pulse">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-8 h-8 rounded bg-zinc-900" />
      <div className="space-y-1">
        <div className="h-2 w-20 bg-zinc-900 rounded" />
        <div className="h-2 w-12 bg-zinc-800 rounded" />
      </div>
    </div>
    <div className="h-3 w-full bg-zinc-900 rounded mb-2" />
    <div className="h-3 w-3/4 bg-zinc-900 rounded" />
  </div>
  )
}

export default NewsSkeleton