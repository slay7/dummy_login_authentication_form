import React, {useState} from 'react'


const Password = (props) => {
    const [password, setPassword] = useState("");
  return (
    <div className="w-[320px] flex flex-col items-start gap-1">
            <label className="font-semibold">{props.label}</label>

            <input
                type="password"
                placeholder="enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete='current-password'
                className="w-full mt-0 px-4 py-1 border border-black border-[1px] rounded-lg focus:outline-none"
            />
    </div>
  )
}

export default Password