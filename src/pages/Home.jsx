import React from "react"
function Home()
{
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
          <tr>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">Jaggery Powder</td>
            <td className="border px-4 py-2">₹120</td>
            <td className="border px-4 py-2">Food</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">2</td>
            <td className="border px-4 py-2">Pickle Mango</td>
            <td className="border px-4 py-2">₹200</td>
            <td className="border px-4 py-2">Food</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">3</td>
            <td className="border px-4 py-2">Honey</td>
            <td className="border px-4 py-2">₹150</td>
            <td className="border px-4 py-2">Food</td>
          </tr>
        </tbody>
      </table>
    </div>
        </>
    )
}
export default Home