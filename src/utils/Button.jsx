import React from 'react'

const Button = (props) => {
  return (
    <div className="w-[320px] flex flex-col items-start gap-1">
        <button className="w-full py-1 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            {props.label}
        </button>
    </div>
  )
}

export default Button