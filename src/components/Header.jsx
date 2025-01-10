import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
React

const Header = ({insideHome}) => {
  const userCart = useSelector(state=>state.cartReducer)
  const userWishList = useSelector(state => state.wishlistReducer)
  return (
    <nav className='flex bg-violet-700 p-5 w-full text-white fixed'>
        <Link className='text-2xl font-bold'to={'/'}><i className="fa-solid fa-truck"></i> E-Cart</Link>
        <ul className='flex-1 text-right'>

            { insideHome &&
            
            <li className='list-none inline-block px-5'><input style={{width:'300px'}} className='rounded p-2' type="text" placeholder='Search Products Here' /></li>

            }

            <li className='list-none inline-block px-5'><Link to={'/wishlist'}><i className="fa-solid fa-heart text-red-600"></i> Wishlist <span className='bg-black text-white rounded p-1'>{ userWishList?.length}</span></Link></li>

            <li className='list-none inline-block px-5'><Link to={'/cart'}><i className="fa-solid fa-cart-shopping text-black"></i> Cart <span className='bg-black text-white rounded p-1'>{userCart?.length}</span></Link></li>

        </ul>
    </nav>
  )
}

export default Header