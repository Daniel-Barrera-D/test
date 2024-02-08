const Input = ( { width, label, flex, register, name, errors, value, onChange, readOnly} ) => {

    const widthClass = width ? `w-${width}` : 'w-full';
    const flexClass = flex ? `${flex}`: 'flex-col'
    return(
        <div className={`flex ${flexClass}`}>
            <label htmlFor="" className="flex text-left text-gray-400 mr-2">{label}{errors.name ? <p className='text-red-500 ml-3'>{name} is required</p> : <></>}</label>
            <input {...register(name, {required: true})} value={value} name={name} onChange={onChange} className={`${widthClass} outline-none h-7 `} autoComplete="off" readOnly={readOnly}/>
        </div>
    )
}

export default Input;