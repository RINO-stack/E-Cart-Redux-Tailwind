import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementByQuantity, emptyCart, incrementByQuantity, removeCartItem } from '../redux/slices/cartSlice'

React

const Cart = () => {
  const navigate = useNavigate()

  const [cartTotal , setCartTotal] = useState(0)
  const userCart = useSelector(state=>state.cartReducer)

  const dispatch = useDispatch()

 useEffect(()=>{
     if(userCart?.length>0){
      setCartTotal(userCart?.map(item=>item.totalPrice).reduce((a1,a2)=>a1+a2))
     }
 },[userCart])

 const handleDecrementQuantity = (product)=>{

  if(product?.quantity>1){
    dispatch(decrementByQuantity(product.id))
  }else{
    dispatch(removeCartItem(product.id))
  }
 }

 const checkOut = ()=>{
  dispatch(emptyCart())
  alert('Order Confirmed! Keep Shopping with Us..!')
  navigate('/')
 }

  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='px-5'>
        {
          userCart?.length>0?
          <>
        <h1 className='text-4xl font-bold text-blue-700'>Cart Summary</h1>
        <div className='grid grid-cols-3 gap-4 mt-5'>
          <div className='col-span-2 border rounded shadow'>
            <table className='table-auto w-full'>
              <thead>
                <tr>
                  <td className='font-semibold'>#</td>
                  <td className='font-semibold'>Name</td>
                  <td className='font-semibold'>Image</td>
                  <td className='font-semibold'>Quantity</td>
                  <td className='font-semibold'>Price</td>
                  <td className='font-semibold'>...</td>
                </tr>
              </thead>
              <tbody>
               {
                userCart?.map((product,index)=>(
                  <tr key={product?.id}>
                  <td>{index+1}</td>
                  <td>{product?.title}</td>
                  <td><img width={'70px'} height={'70px'} src={product?.thumbnail} alt="" /></td>
                  <td>
                    <div>
                      <button onClick={()=>handleDecrementQuantity(product)} className='font-bold'>-</button>
                      <input style={{width:'40px'}} type="text" className='border p-1 rounded mx-1' value={product?.quantity} readOnly/>
                      <button onClick={()=>dispatch(incrementByQuantity(product?.id))} className='font-bold'>+</button>
                    </div>
                  </td>
                  <td>$ {product?.totalPrice}</td>
                  <td><button onClick={()=>dispatch(removeCartItem(product?.id))} className='text-red-700'><i className='fa-solid fa-trash'></i></button></td>
                </tr>

                ))
               }
              </tbody>
            </table>
            <div className='float-right mt-5 p-3'>
              <button onClick={()=>dispatch(emptyCart())} className='bg-red-600 rounded p-2 text-white'>Empty Cart</button>
              <Link to={'/'} className='bg-blue-600 ms-3 rounded p-2'>Shop More...</Link>
            </div>
          </div>
          <div className='col-span-1'>
              <div className='border rounded shadow p-5'>
                   <h2 className='text-2xl font-bold my-4'>Total Amount : <span className='text-red-600'>$ {cartTotal}</span></h2>
                   <hr />
                   <button onClick={checkOut} className='bg-green-600 rounded p-2 text-white w-full mt-4'>Check Out</button>
              </div>
          </div>
        </div>
        </>
        :
        <div className='flex justify-center items-center h-screen'>
            <img src="https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif" alt="" />
            <h2 className='text-3xl text-red-600'>Your Cart Is Empty</h2>
        </div>

        }
    </div>
    
    </>
  )
}

export default Cart