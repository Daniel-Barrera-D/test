import { useContext } from "react";
import CardContentTwo from "../CardContentTwo/CardContentTwo";
import { RefContext } from "../../context/RefContext";

const ContentTwo = () => {

    const { contentTwoRef } = useContext(RefContext);

    return(
        <section ref={contentTwoRef}>
            <section className="flex flex-col justify-end items-end pr-28 mt-10 bg-blue-50" >
                <div className="flex flex-col w-1/4 p-2 items-end ml-16">
                    <h2 className="text-5xl font-bold text-right">Content 2</h2>
                    <p className="text-right text-gray-400 mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, expedita consequuntur beatae hic impedit possimus cumque Provident!</p>
                </div>
            </section>
            <section>
                <div className="pt-10 pb-16 flex justify-center space-x-40 flex-wrap bg-blue-50">
                    <CardContentTwo />
                    <CardContentTwo />
                    <CardContentTwo />
                </div>
            </section>
        </section>
    )
}

export default ContentTwo;