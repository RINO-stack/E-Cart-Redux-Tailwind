import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import {removeFromWishlist} from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'
React

const Wishlist = () => {
  const userWishList = useSelector(state => state.wishlistReducer)
  const dispatch = useDispatch()
  const userCart = useSelector(state=>state.cartReducer)

  const handleCart =(product,id)=>{
      dispatch(removeFromWishlist(product.id))
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
    <Header/>
    <div style={{paddingTop:'100px'}} className='px-5'>
        {
          userWishList?.length>0?
           <>
           <h1 className='text-4xl font-bold text-red-600'>My Wishlist</h1>
           <div className='grid grid-cols-4 gap-4'>
             {
              userWishList?.map(product=>(
                <div key={product?.id} className='rounded border p-2 shadow'>
              <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
              <div className='text-center'>
               <h3 className='text-xl font-bold'>{product?.title}</h3>
               <div className='flex justify-evenly mt-3'>
                   <button onClick={()=>dispatch(removeFromWishlist(product.id))}  className='text-xl'><i className="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
                   <button onClick={()=>dispatch(handleCart(product))} className='text-xl'><i className="fa-solid fa-cart-plus text-green-600"></i></button>
               </div>
              </div>
             </div>
              ))
             }
           </div>
           </>
           :
           <div className='flex justify-center items-center h-screen'>
            <img src="https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif" alt="" />
            <h2 className='text-3xl text-red-600'>Your Wishlist Is Empty</h2>
           </div>
        }
    </div>
    </>
  )
}

export default Wishlist