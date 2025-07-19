import React from 'react'

const Card = ({username="Not provided",post="Not provided",no}) => {
  return (
    <div className="flex items-center gap-6 bg-[#0B0D12] text-white p-6 rounded-bl-xl rounded-br-xl w-full max-w-2xl">
      
      {/* Album Art + Label */}
      <div className="relative w-40 h-40 shrink-0 rounded-md overflow-hidden shadow-lg">
        <img
          src="https://imgs.search.brave.com/fM1Yxc6cAKA_UsGdW3zWMCEbvSPzPCZxcnWsULvpPGs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9iaW9s/b2d5LWxhYm9yYXRv/cnktbmF0dXJlLXNj/aWVuY2UtcGxhbnRz/LWJpb2NoZW1pc3Ry/eS1zdHJ1Y3R1cmUt/Z3JlZW4tYmFja2dy/b3VuZC0xNjIwMTk3/NTMuanBn"
          alt="album"
          className="object-cover w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full flex justify-between items-center px-3 py-1 text-xs font-semibold bg-black bg-opacity-80 text-white">
          <span>Nature-Patterns</span>
          <span>No. {no}</span>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center items-start gap-1">
        <h2 className="text-2xl font-semibold">{username}</h2>
        <p className="text-sky-500 font-medium">{post}</p>
        <p className="text-gray-400 font-medium flex items-center gap-2 text-sm">
          <span>No. {no}</span>
          <span>•</span>
          <span>2025</span>
        </p>
      </div>
    </div>
  )
}

export default Card