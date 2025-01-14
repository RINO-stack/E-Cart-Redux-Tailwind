import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
React;

const Home = () => {
  const dispatch = useDispatch();

  const { allProducts, loading, errorMsg } = useSelector(
    (state) => state.productReducer
  );
  console.log(allProducts, loading, errorMsg);

  useEffect(() => {
    dispatch(fetchProducts());
  },[]);

  const [currentPage , setCurrentPage] = useState(1)
  const productsPerPage = 8
  const numberOfPages = Math.ceil(allProducts?.length/productsPerPage)
  const currentPageProductLastIndex = currentPage * productsPerPage
  const currentPageProductFirstIndex = currentPageProductLastIndex-productsPerPage
  const visibleAllProducts = allProducts?.slice(currentPageProductFirstIndex,currentPageProductLastIndex)

  console.log(setCurrentPage , numberOfPages ,visibleAllProducts);

  const navigateToNextPage =()=>{
    if(currentPage!=numberOfPages){
      setCurrentPage(currentPage+1)
    }
  }

  const navigateToPrevPage =()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }
  

  return (
    <>
      <Header insideHome={true} />
      <div style={{ paddingTop: "100px" }} className="container px-4 mx-auto">
        {loading ? 
          <div className="flex justify-center items-center my-5">
            <img
              width={"70px"}
              height={"70px"}
              src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif"
              alt=""
            />
          </div>
         : 
          <>
            <div className="grid grid-cols-4 gap-4">
              {
                allProducts?.length>0? 

                visibleAllProducts.map(product=>(

                  <div key={product?.id} className="rounded border p-2 shadow">
                  <img
                    width={"100%"}
                    height={"200px"}
                    src={product?.thumbnail}
                    alt="no image"
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-bold">{product?.title}</h3>
                    <Link
                      to={`/${product?.id}/view`}
                      className="bg-violet-700 p-2 mt-3 text-white inline-block rounded"
                    >
                      View more
                    </Link>
                  </div>
                </div>
                ))

              :
              <div className="flex justify-center items-center font-bold text-red-700 my-5 text-lg">
                Product Not Found!
              </div>
              } 
            </div>
            <div className="text-2xl text-center font-bold mt-20">
              <span onClick={navigateToPrevPage} className="cursor-pointer"><i className="fa-solid fa-backward me-5"></i></span>
              <span>{currentPage} of {numberOfPages}</span>
              <span onClick={navigateToNextPage} className="cursor-pointer"><i className="fa-solid fa-forward ms-5"></i></span>
            </div>
          </>
        }
      </div>
    </>
  );
};

export default Home;
