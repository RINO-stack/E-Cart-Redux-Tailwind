import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";
React;

const View = () => {
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const userWishList = useSelector(state=>state.wishlistReducer)
  const [product , setProduct] = useState({})
  const {id} = useParams()
  console.log(id);
  console.log(product);
  

  const { allProducts } = useSelector(
    (state) => state.productReducer
  );
  console.log(allProducts);

  useEffect(()=>{
    if(sessionStorage.getItem("allproducts")){
      const allProducts = JSON.parse(sessionStorage.getItem("allproducts"));
      console.log(allProducts.find(item=>item.id==id));
      setProduct(allProducts.find(item=>item.id==id))
    }
     
  },[])
  
  const handleWishList =()=>{
    const existingProduct = userWishList?.find(item=>item?.id==id)
    if(existingProduct){
      alert('This product is already in your wishlist')
      }else{
        dispatch(addToWishlist(product))
      }
  }

  const handleCart =()=>{
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item=>item?.id==id)
    if(existingProduct){
      alert('Product Quantity is Increased!')
      }else{
        alert('Product added to your Cart')
      }
  }

  return (
    <>
      <Header />
      <div style={{ paddingTop: "100px" }} className="px-5">
        <>
          <div className="flex flex-col mx-5">
            <div className="grid grid-cols-2 item-center h-screen">
              <img
                width={"450px"}
                height={"200px"}
                src={product?.thumbnail}
                alt=""
              />
              <div className="mt-24">
                <h3 className="font-bold">PID : {product?.id}</h3>
                <h1 className="text-4xl font-bold"> {product?.title}</h1>
                <h4 className="text-2xl font-bold text-red-600">$ {product?.price}</h4>
                <h4 className="font-bold">BRAND : {product?.brand}</h4>
                <h4 className="font-bold">CATEGORY : {product?.category}</h4>
                <p className="mt-2">
                  <span className="font-bold">Description : </span>{product?.description}
                  <div className="flex justify-between mt-5">
                    <button onClick={handleWishList} className="bg-blue-600 text-white p-3 rounded">
                      ADD TO WISHLIST
                    </button>
                    <button onClick={handleCart} className="bg-green-600 p-3 text-white rounded">
                      ADD TO CART
                    </button>
                  </div>
                </p>
                 <h3 className="font-bold mt-5">Product Reviews</h3>
                {
                  product?.reviews?.length>0?
                  product?.reviews.map(item=>(
                    <div key={item?.date} className="shadow-border p-2 mb-2">
                      <h5>
                        <span className="font-bold">{item?.reviewerName}</span> : <span>{item?.comment}</span>
                      </h5>
                      <p>Rating : {item?.rating} <i className="fa-solid fa-star text-yellow-400"></i></p>
                    </div>
                  ))
                  :
                  <div className="font-bold text-red-600">No Reviews Yet!!</div>
                }
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default View;
