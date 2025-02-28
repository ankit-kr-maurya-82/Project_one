import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type= 'text',
    className= '',
    ...props
}, ref){
    const id = useId()
    return (
    <div className='w-full'>
        {
            label && <label
            className='inline-block mb-1 pl-1'
            htmlFor={id}>
                {label}
            </label>
        }
        <input
        type={type}
        className={`px-4 py-2 rounded-lg bg-amber-50 text-black${className}`}
        ref={ref}
        {...props}
        id={id}
        />
    </div>
)
})

export default Input
