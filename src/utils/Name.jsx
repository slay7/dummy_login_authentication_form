import React from 'react'
import { useState } from 'react'

const Name = () => {
  const [name, setName] = useState('')

  return (
    <div className="w-[320px] flex flex-col items-start gap-1">
            <label className="font-semibold">Name</label>

            <input
                type="text"
                placeholder="enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full mt-0 px-4 py-1 border border-black border-[1px] rounded-lg focus:outline-none"
            />
        </div>
  )
}

export default Name