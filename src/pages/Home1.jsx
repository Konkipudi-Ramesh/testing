import React from "react"
function Home1()
{
     const products = [
    { id: 1, name: "Jaggery Powder", price: 120, category: "Food" },
    { id: 2, name: "Pickle Mango", price: 200, category: "Food" },
    { id: 3, name: "Honey", price: 150, category: "Food" },
    { id: 4, name: "Organic Tea", price: 250, category: "Beverages" },
    { id: 5, name: "Millet Flour", price: 300, category: "Grains" },
  ];

    return(
        <>
        <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products List</h1>
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Category</th>
          </tr>
        </thead>
        <tbody>
           {products.map((product) => (
            <tr key={product.id}>
              <td className="border px-4 py-2">{product.id}</td>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">₹{product.price}</td>
              <td className="border px-4 py-2">{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </>
    )
}
export default Home1