import { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import NavDashboard from "../components/NavDashboard/NavDashboard";
import { useForm } from "react-hook-form";
import { useClient } from "../context/ClientContext";
import { useBranch } from "../context/BranchContext";
import SearchList from "../components/SearchList/SearchList";
import { useProduct } from "../context/ProductContext";
import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

const NewSale = () => {

    const { register, handleSubmit, formState: { errors }, getValues, setValue } = useForm();
    const { setClients, searchClient, suggestionsClient, handleSearchClients, handleSelectSuggestionClient} = useClient();
    const { searchBranch, suggestionsBranch, currency, handleSearchBranch, handleSelectSuggestionBranch} = useBranch();
    const { searchProduct, suggestionsProduct, price, quantity, subTotal, handleSearchProduct, handleSelectSuggestionProduct, handleQuantity } = useProduct();

    useSEO({title: 'Dashboard New Sale'});

    const onSubmit = handleSubmit(data => {
        console.log(data);
    })

    const handleButtonClick = () => {
        const inputValue = getValues("client");
        if (inputValue.trim() === "") {
            Swal.fire({
              title: "Error",
              text: "Please enter a valid client name.",
              icon: "error",
              confirmButtonText: "OK"
            });
            return;
          }
        setClients(prevClients => [...prevClients, {id: uuidv4(), name: inputValue}])
        Swal.fire({
            title: "Success",
            text: "The client has been created.",
            icon: "success",
            confirmButtonText: "OK"
        }).then(() => setValue("client", ""))
        
    }

    const [fragments, setFragments] = useState([
        // <section className="flex justify-between mt-5">
        //     <Input width="96"/>
        //     <Input width="40"/>
        //     <Input width="40"/>
        //     <div className="flex items-end">
        //         <Input width="40"/>
        //         <Button text="x"/>
        //     </div>
        // </section>
    ]);

    const removeFragment = (indexRemove) => {
        setFragments((prevFragments) => prevFragments.filter((_, index) => index !== indexRemove))
    }

    const addFragment = (e) => {
        e.preventDefault();
        const index = fragments.length;
        const newFragment = (
          <section key={index} className="flex justify-between mt-5">
            <Input register={register} name={`name_${index}`} errors={errors} value={searchProduct} onChange={handleSearchProduct} width="96" readOnly=""/>
            <Input register={register} name={`quantity_${index}`} errors={errors} width="40" value={quantity} onChange={handleQuantity} readOnly=""/>
            <Input register={register} name={`price_${index}`} errors={errors} value={price} onChange={handleSearchProduct} width="40" readOnly={true}/>
            <div className="flex items-end">
              <Input register={register} name={`subtotal_${index}`} errors={errors} width="40" value={subTotal} onChange={handleQuantity} readOnly={true}/>
              <Button text="x" func={() => removeFragment(index)} type="button"/>
            </div>
          </section>
        );
    
        setFragments((prevFragments) => [...prevFragments, newFragment]);
        
      };
    
    return(
        <section className="flex">
            <NavDashboard />
            <section className="flex flex-col flex-grow p-24 bg-gray-100">
                <div className="flex items-center">
                    <img src="../img/img-3.png" alt="img-3" className="w-20 mr-4"/>
                    <h2 className="font-bold text-4xl border-b-4 border-gray-300 h-min flex-grow text-left">New Sale</h2>
                </div>
                <form onSubmit={onSubmit}>
                    <h3 className="border-b-2 border-gray-300 h-min text-left text-2xl mt-8">Document</h3>
                    <section className="flex justify-between">
                        <div className="flex items-end">
                            <div>
                                <Input register={register} value={searchClient} onChange={handleSearchClients} name="client" errors={errors}  label="Client" width="96" readOnly=""/>
                                <SearchList suggestions={suggestionsClient} func={handleSelectSuggestionClient} property="name"/>
                            </div>
                            <Button text="+" type="button" func={() => handleButtonClick()}/>
                        </div>
                        <div>
                            <Input register={register} name="branch" errors={errors} value={searchBranch} onChange={handleSearchBranch}  label="Branch Office" width="96" readOnly=""/>
                            <SearchList suggestions={suggestionsBranch} func={handleSelectSuggestionBranch} property="branch"/>
                        </div>
                        <Input register={register} name="currency" errors={''} value={currency} onChange={handleSearchBranch}label="Currency" width="40" readOnly={true}/>
                    </section>
                    <h3 className="border-b-2 border-gray-300 h-min text-left text-2xl mt-8">Details</h3>
                    <section className="flex justify-between">
                        <div>
                            <Input register={register} name="name" label="Name" errors={errors} value={searchProduct} onChange={handleSearchProduct} required="true" width="96" readOnly=""/>
                            <SearchList suggestions={suggestionsProduct} func={handleSelectSuggestionProduct} property="name"/>
                        </div>
                        <Input register={register} name="quantity" label="Quantity" errors={errors} value={quantity} onChange={handleQuantity} required="true" width="40" readOnly=""/>
                        <Input register={register} name="price" label="Price" errors={''} value={price} onChange={handleSearchProduct} width="40" readOnly={true}/>
                        <div className="flex items-end">
                            <Input register={register} name="subtotal" errors={''} label="Subtotal" value={subTotal} onChange={handleQuantity} width="40" readOnly={true}/>
                            <Button text="x" func={() => removeFragment} type="button"/>
                        </div>
                    </section>

                    {
                        fragments.map((fragment) => fragment)
                    }

                    <section className="flex justify-between mt-5">
                        <Button text="Add" width="40" ml="0" func={addFragment}/>
                    </section>
                    <section className="flex float-end pr-10">
                        <Input register={register} name="total" errors={''} label="Total" onChange={handleQuantity} value={subTotal} width="40" flex="flex-row" readOnly={true}/>
                    </section>
                    <section className="flex items-end justify-end border-t-2 border-gray-300 mt-10 pt-5">
                        <Link to={'/'} className="px-2 text-black font-semibold text-sm hover:underline hover:text-gray-500 transition duration-300 ease-in-out">Go to home</Link>
                        <Link to={'/sales'} className="px-2 text-black font-semibold text-sm hover:underline hover:text-gray-500 transition duration-300 ease-in-out">Go to sales</Link>
                        <Button text="Save" width="40" ml="auto" type="submit"/>
                    </section>
                </form>
            </section>
        </section>
    )
}

export default NewSale;