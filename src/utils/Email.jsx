import React from 'react'
import { useState } from 'react'

const Email = () => {
    const [email, setEmail] = useState("");
    return (
        <div className="w-[320px] flex flex-col items-start gap-1">
            <label className="font-semibold">Email</label>

            <input
                type="email"
                placeholder="example@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full mt-0 px-4 py-1 border border-black border-[1px] rounded-lg focus:outline-none"
            />
        </div>
    )
}

export default Email