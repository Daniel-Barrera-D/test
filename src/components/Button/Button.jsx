const Button = ({text, width, ml, func, type}) => {

    const widthClass = width ? `w-${width}` : 'w-full';
    const mlClass = ml ? `ml-${ml}` : 'ml-4';

    return(
        <button onClick={func} type={type} className={`${widthClass} ${mlClass} bg-blue-500 text-white font-bold px-2 text-center h-7 hover:bg-blue-700 transition duration-300`}>{text}</button>
    )
}

export default Button;