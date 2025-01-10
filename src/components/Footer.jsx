import React from 'react'
import { Link } from 'react-router-dom'
React

const Footer = () => {
  return (
    <div style={{height:'250px', marginTop:'100px'}} className='w-full mt-5 bg-violet-700 text-white p-4'>
      <div className='flex justify-between p-4'>
        
       <div style={{width:'400px'}} className='intro'>
        <h5 className='text-xl font-bold'><i className="fa-solid fa-truck"></i> E-Cart</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus repudiandae doloribus.</p>
        <p>Code licensed by Luminar, Docs CC by 3.0</p>
        <p>Currently V5.3.2</p>
       </div>
       <div className='flex flex-col'>
           <h5 className='text-xl font-bold'>Links</h5>
           <Link style={{textDecoration:'none'}} to={'/'}>Landing Page</Link>
           <Link style={{textDecoration:'none'}} to={'/'}>Home Page</Link>
           <Link style={{textDecoration:'none'}} to={'/'}>History Page</Link>
       </div>
       <div className='d-flex flex-col'>
            <h5 className='text-xl font-bold'>Guides</h5>
            <a href="https://react.dev/" style={{textDecoration:'none',color:'white'}} target='-blank'>React</a><br />
            <a href="https://react-bootstrap.netlify.app/" style={{textDecoration:'none',color:'white'}} target='-blank'>React Bootsrap</a><br />
            <a href="https://reactrouter.com/" style={{textDecoration:'none',color:'white'}} target='-blank'>React Router</a>
        </div>
        <div className='d-flex flex-column'>
            <h5 className='text-xl font-bold'>Contacts</h5>
            <div className='d-flex'>
              <input type="text" placeholder='Enter Your Email Here' className='form-control me-2'/>
              <button className='btn bg-black text-white p-2'><i className="fa-solid fa-arrow-right"></i></button>
            </div>
             <div className='flex justify-between mt-3'>
              <a href="https://www.instagram.com/" style={{textDecoration:'none',color:'white'}} target='-blank'><i className="fa-brands fa-instagram"></i></a>
              <a href="https://x.com/?lang=en" style={{textDecoration:'none',color:'white'}} target='-blank'><i className="fa-brands fa-x-twitter"></i></a>
              <a href="https://www.facebook.com/" style={{textDecoration:'none',color:'white'}} target='-blank'><i className="fa-brands fa-facebook"></i></a>
              <a href="https://in.linkedin.com/" style={{textDecoration:'none',color:'white'}} target='-blank'><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://github.com/" style={{textDecoration:'none',color:'white'}} target='-blank'><i className="fa-brands fa-github"></i></a>
              <a href="https://www.truecaller.com/" style={{textDecoration:'none',color:'white'}} target='-blank'><i className="fa-solid fa-phone"></i></a>
             </div>
           </div>
       </div>
       
      <p className='text-center mt-3'>Copyright &copy; May 2024.Media player.Built with React</p>
    </div>
  )
}

export default Footer