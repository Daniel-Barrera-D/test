import { Link } from "react-router-dom";
import { useSale } from "../context/SaleContext";
import useSEO from "../hooks/useSEO";

const Sales = () => {

    const {sales} = useSale();

    useSEO({title: 'List Sales'});

    return(
        <div className="text-center mt-10">
            <h2 className="mt-4 mb-8 text-3xl font-bold">List Sales</h2>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-min truncate">
                    ID
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Client
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="bg-blue-50 divide-y divide-blue-200">
                {sales.map((item) => (
                  <tr key={item.id} className="hover:bg-blue-100">
                    <td className="px-6 py-4 whitespace-nowrap w-min truncate">{item.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.client}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.product}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link to='/dashboard/new-sale' className="font-semibold hover:underline hover:text-gray-500 transition duration-300 ease-in-out">Back</Link>
        </div>
    )
}

export default Sales;