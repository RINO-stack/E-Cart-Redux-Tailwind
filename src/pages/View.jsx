import React from "react";
import Header from "../components/Header";
React;

const View = () => {
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
                src="https://img.freepik.com/free-vector/shopping-supermarket-cart-with-grocery-pictogram_1284-11697.jpg?semt=ais_hybrid"
                alt=""
              />
              <div className="mt-24">
                <h3 className="font-bold">PID : id</h3>
                <h1 className="text-4xl font-bold">Product Name</h1>
                <h4 className="text-2xl font-bold text-red-600">$250</h4>
                <h4>BRAND : brand</h4>
                <h4>CATEGORY : category</h4>
                <p className="mt-2">
                  <span className="font-bold">Description : </span>Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Velit animi enim,
                  nobis minus perferendis tempore, ipsam debitis expedita, ab
                  omnis maiores obcaecati neque necessitatibus eveniet ratione
                  consequuntur maxime accusamus fugiat.
                  <div className="flex justify-between mt-5">
                    <button className="bg-blue-600 text-white p-3 rounded">
                      ADD TO WISHLIST
                    </button>
                    <button className="bg-green-600 p-3 text-white rounded">
                      ADD TO CART
                    </button>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default View;
