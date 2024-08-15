// // // import React, { useState } from "react";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { Link } from "react-router-dom";
// // // import { FaTrashAlt } from "react-icons/fa";
// // // import { changeAmount, removeAll, removeProduct } from "../app/userslice";

// // // function Cart() {
// // //   const { calculator } = useSelector((state) => state.user);
// // //   const dispatch = useDispatch();
// // //   const [prises, setPrises] = useState(0);
// // //   if (calculator.products.length == 0) {
// // //     return (
// // //       <>
// // //         <div className="m-auto flex justify-center items-center h-[500px] max-w-[1220px]">
// // //           <div className="flex flex-col text-center justify-center items-center">
// // //             <img src="" alt="" />
// // //             <h1 className="font-semibold text-[34px]">
// // //               Your cart is empty and sad :{`(`}
// // //             </h1>
// // //             <p className="text-[16px] font-normal text-[#807D7E]">
// // //               Add something to make it happy!
// // //             </p>
// // //             <Link to="/">
// // //               <button className="mt-[50px] text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300 font-bold w-[250px] h-[61px] bg-[#8A33FD] rounded-[8px]">
// // //                 Continue Shopping
// // //               </button>
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       </>
// // //     );
// // //   } else {
// // //     return (
// // //       <div className="md:mx-48 mx-10 mt-10">
// // //         <h1 className="text-4xl ">Shopping Cart</h1>
// // //         <div className="grid md:grid-cols-2 grid-cols-1">
// // //           <div className="overflow-x-auto">
// // //             <table className="table">
// // //               <thead>
// // //                 <tr>
// // //                   <th>Name</th>
// // //                   <th>Job</th>
// // //                   <th>Favorite Color</th>
// // //                   <th></th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {calculator.products.map((product) => {
// // //                   return (
// // //                     <tr key={product.id}>
// // //                       <td>
// // //                         <div className="flex items-center gap-3">
// // //                           <div className="avatar">
// // //                             <div className="mask mask-squircle h-12 w-12">
// // //                               <img
// // //                                 src={product.images[0]}
// // //                                 alt="Avatar Tailwind CSS Component"
// // //                               />
// // //                             </div>
// // //                           </div>
// // //                         </div>
// // //                       </td>
// // //                       <td>
// // //                         <div className="w-40 text-xl">{product.title}</div>
// // //                         <div className="text-sm opacity-50">
// // //                           {product.prise}.000 so'm
// // //                         </div>
// // //                       </td>
// // //                       {/* {setPrises(prises + product.prise)} */}
// // //                       <td>
// // //                         <div className="flex items-center gap-2">
// // //                           <button
// // //                             className="px-2 text-indigo-950 border-indigo-950 border-2 rounded-full"
// // //                             onClick={() =>
// // //                               dispatch(
// // //                                 changeAmount({
// // //                                   id: product.id,
// // //                                   type: "increase",
// // //                                 })
// // //                               )
// // //                             }
// // //                           >
// // //                             +
// // //                           </button>
// // //                           <h1 className="px-2 text-indigo-950 bg-teal-100 py-1 rounded-md">
// // //                             {product.amount}
// // //                           </h1>
// // //                           <button
// // //                             className="px-2 text-indigo-950 border-indigo-950 border-2 rounded-full"
// // //                             onClick={() =>
// // //                               dispatch(
// // //                                 changeAmount({
// // //                                   id: product.id,
// // //                                   type: "decrease",
// // //                                 })
// // //                               )
// // //                             }
// // //                             disabled={product.amount == 1 ? true : false}
// // //                           >
// // //                             -
// // //                           </button>
// // //                         </div>
// // //                       </td>
// // //                       <th>
// // //                         <button
// // //                           onClick={() => dispatch(removeProduct(product.id))}
// // //                           className="btn btn-ghost btn-xs"
// // //                         >
// // //                           <FaTrashAlt className="h-5 w-4" />
// // //                         </button>
// // //                       </th>
// // //                     </tr>
// // //                   );
// // //                 })}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //           <div className="md:w-96 w-70 md:ml-40 ml-0">
// // //             <h3 className="text-xl">Order Summary</h3>
// // //             <div className="bg-teal-100 rounded-md gap-10 text-center py-2">
// // //               <input
// // //                 type="text"
// // //                 className="bg-teal-100 h-full mr-5"
// // //                 placeholder="Enter promo code..."
// // //               />
// // //               <button className="bg-indigo-950 btn text-white">Apply</button>
// // //             </div>
// // //             <div>
// // //               <div className="flex justify-between px-2 items-center py-2 mt-5 border-y-2 border-indigo-500">
// // //                 <h4 className="text-lg">Item {calculator.products.length}</h4>
// // //                 <h4>{calculator.price}.000 so'm</h4>
// // //               </div>
// // //               <div className="">
// // //                 <div className="flex justify-between items-center px-2 pt-2">
// // //                   <h5>Subtotal: </h5>
// // //                   <h4>{calculator.price}.000 so'm</h4>
// // //                 </div>
// // //                 <div className="flex justify-between items-center px-2  mt-5">
// // //                   <h2 className="text-lg">Total:</h2>
// // //                   <h4>{calculator.price}.000 so'm</h4>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             <button
// // //               className="btn w-full mt-2"
// // //               onClick={() => dispatch(removeAll())}
// // //             >
// // //               Check out
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }
// // // }

// // // export default Cart;

// // import React, { useState } from 'react';

// // const Cart = () => {
// //   const [products, setProducts] = useState([
// //     { id: 1, name: 'Product A', price: 50.00, quantity: 1 },
// //     { id: 2, name: 'Product B', price: 30.00, quantity: 2 }
// //   ]);

// //   const handleQuantityChange = (productId, newQuantity) => {
// //     const updatedProducts = products.map(product => {
// //       if (product.id === productId) {
// //         return { ...product, quantity: newQuantity };
// //       }
// //       return product;
// //     });
// //     setProducts(updatedProducts);
// //   };

// //   const handleDeleteProduct = (productId) => {
// //     const updatedProducts = products.filter(product => product.id !== productId);
// //     setProducts(updatedProducts);
// //   };

// //   return (
// //     <div className="container px-40 py-4">
// //       <div className="overflow-x-auto">
// //         <table className="table-auto w-full border-collapse border border-gray-200">
// //           <thead>
// //             <tr className="bg-gray-100">
// //               <th className="border border-gray-300 px-4 py-2"></th>
// //               <th className="border border-gray-300 px-4 py-2">Product</th>
// //               <th className="border border-gray-300 px-4 py-2">Price</th>
// //               <th className="border border-gray-300 px-4 py-2">Quantity</th>
// //               <th className="border border-gray-300 px-4 py-2">Total</th>
// //               <th className="border border-gray-300 px-4 py-2"></th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {products.map(product => (
// //               <tr key={product.id} className="text-center">
// //                 <td className="border border-gray-300 px-4 py-2">
// //                   <img
// //                     src="https://via.placeholder.com/50"
// //                     alt="Product Image"
// //                     className="w-12 h-12 object-cover rounded"
// //                   />
// //                 </td>
// //                 <td className="border border-gray-300 px-4 py-2">{product.name}</td>
// //                 <td className="border border-gray-300 px-4 py-2">${product.price.toFixed(2)}</td>
// //                 <td className="border border-gray-300 px-4 py-2">
// //                   <div className="flex items-center justify-center">
// //                     <button
// //                       onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
// //                       className="text-gray-500 focus:outline-none border border-gray-300 px-3 py-1 rounded-l"
// //                     >
// //                       <svg
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         className="h-4 w-4"
// //                         viewBox="0 0 20 20"
// //                         fill="currentColor"
// //                       >
// //                         <path
// //                           fillRule="evenodd"
// //                           d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
// //                           clipRule="evenodd"
// //                         />
// //                       </svg>
// //                     </button>
// //                     <input
// //                       type="text"
// //                       value={product.quantity}
// //                       className="w-10 text-center border-t border-b border-gray-300"
// //                       readOnly
// //                     />
// //                     <button
// //                       onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
// //                       className="text-gray-500 focus:outline-none border border-gray-300 px-3 py-1 rounded-r"
// //                     >
// //                       <svg
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         className="h-4 w-4"
// //                         viewBox="0 0 20 20"
// //                         fill="currentColor"
// //                       >
// //                         <path
// //                           fillRule="evenodd"
// //                           d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
// //                           clipRule="evenodd"
// //                         />
// //                       </svg>
// //                     </button>
// //                   </div>
// //                 </td>
// //                 <td className="border border-gray-300 px-4 py-2">${(product.price * product.quantity).toFixed(2)}</td>
// //                 <td className="border border-gray-300 px-4 py-2">
// //                   <button
// //                     onClick={() => handleDeleteProduct(product.id)}
// //                     className="text-red-600 focus:outline-none"
// //                   >
// //                     <img
// //                       src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png"
// //                       alt="Delete Icon"
// //                       className="h-6 w-6"
// //                     />
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cart;

// import React, { useState } from "react";
// import toast from "react-hot-toast";
// import { HiPlusSm, HiMinusSm, HiTrash } from "react-icons/hi"; // Heroicons ikonlarini import qilamiz

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: "Product 1",
//       price: 20,
//       quantity: 1,
//       imageURL: "https://picsum.photos/200/250",
//     },
//     {
//       id: 2,
//       name: "Product 2",
//       price: 30,
//       quantity: 1,
//       imageURL: "https://picsum.photos/200/250",
//     },
//     {
//       id: 3,
//       name: "Product 3",
//       price: 15,
//       quantity: 1,
//       imageURL: "https://picsum.photos/200/250",
//     },
//   ]);

//   const increaseQuantity = (id) => {
//     const updatedCart = cartItems.map((item) =>
//       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     setCartItems(updatedCart);
//   };

//   const decreaseQuantity = (id) => {
//     const updatedCart = cartItems.map((item) =>
//       item.id === id && item.quantity > 1
//         ? { ...item, quantity: item.quantity - 1 }
//         : item
//     );
//     setCartItems(updatedCart);
//   };

//   const removeItem = (id) => {
//     const updatedCart = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedCart);
//   };

//   const sotibolish = () => {
//     toast.success("sotib olindi");
//     setCartItems([]);
//   };

//   return (
//     <div className="container px-40 p-4">
//       <div className=" rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-bold mb-4">Savatchangiz</h2>

//         {cartItems.length === 0 ? (
//           <p className="text-gray-600">Savatchangiz bo'sh</p>
//         ) : (
//           <ul className="divide-y divide-gray-200">
//             {cartItems.map((item) => (
//               <li
//                 key={item.id}
//                 className="py-4 flex items-center justify-between"
//               >
//                 <div className="flex items-center justify-between gap-20">
//                   <img
//                     src={item.imageURL}
//                     alt={item.name}
//                     className="w-20 h-20 object-cover rounded"
//                   />
//                   <span className="font-medium text-2xl">{item.name}</span>
//                   <span className="text-gray-500 block">
//                     Price: ${item.price}
//                   </span>
//                   <span className="text-gray-500 block">
//                     Quantity: {item.quantity}
//                   </span>
//                 </div>
//                 <div className="flex space-x-7 items-center">
//                   <button
//                     onClick={() => increaseQuantity(item.id)}
//                     className="text-green-500 hover:text-green-600"
//                   >
//                     <HiPlusSm className="w-6 h-6" />
//                   </button>
//                   <button
//                     onClick={() => decreaseQuantity(item.id)}
//                     className="text-red-500 hover:text-red-600"
//                   >
//                     <HiMinusSm className="w-6 h-6" />
//                   </button>
//                   <button
//                     onClick={() => removeItem(item.id)}
//                     className="text-gray-500 hover:text-gray-600"
//                   >
//                     <HiTrash className="w-6 h-6" />
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}

//         <div className="flex justify-end mt-6">
//           <button
//             onClick={() => sotibolish()}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
//           >
//             Buyurtma berish
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;




import React from 'react'

function Cart() {
  return (
    <div>Cart</div>
  )
}

export default Cart