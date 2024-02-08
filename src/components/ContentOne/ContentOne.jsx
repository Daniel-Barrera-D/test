import { useContext } from "react";
import CardContentOne from "../CardContentOne/CardContentOne";
import { RefContext } from "../../context/RefContext";

const ContentOne = () => {

    const { contentOneRef } = useContext(RefContext);

    return(
        <section className="flex flex-col justify-start" ref={contentOneRef}>
            <div className="flex flex-col w-1/4 p-2 items-start ml-16">
                <h2 className="text-5xl font-bold text-left">Content 1</h2>
                <p className="text-left text-gray-400 mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, expedita consequuntur beatae hic impedit possimus cumque Provident!</p>
            </div>
            <div className="mt-10 flex flex-wrap">
                <CardContentOne />
                <CardContentOne />
                <CardContentOne />
                <CardContentOne />
                <CardContentOne />
                <CardContentOne />
            </div>
        </section>
    )
}

export default ContentOne;