import { Link } from "react-router-dom";

const Section = () => {
    return(
        <section className="flex items-center justify-center space-x-64">
            <div className="flex flex-col w-1/4 p-2 items-start">
                <h1 className="text-5xl font-bold text-left">Lorem ipsum Desing</h1>
                <p className="text-left text-gray-400 mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, expedita consequuntur beatae hic impedit possimus cumque Provident!</p>
                <Link to={'/login'} className="px-10 py-3 bg-blue-500 text-white font-bold mt-16 hover:bg-blue-600 transition duration-300 ease-in-out">LOGIN</Link>
            </div>
            <img src="../img/img-1.png" alt="img" className="w-124 h-124"/>
        </section>
    )
}

export default Section;