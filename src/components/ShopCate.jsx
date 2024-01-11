import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addTocart } from "../features/ProductSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase";
import { collection, getDocs, query } from "firebase/firestore";

function ShopCate() {
  const [point, setPoint] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [products, setproducts] = useState([]);
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "PRODUCTS"));
        const querySnapshot = await getDocs(q);
        const shopdata = [];
        querySnapshot.forEach((doc) => {
          console.log(doc?.data());
          shopdata.push(doc?.data());
        });
        setproducts(shopdata);

        const docRef = collection(db, "CATEGORIES");
        const snap = await getDocs(docRef);
        setCat(snap.docs.map((doc) => doc.data().Name));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, []);

  console.log(cat);

  return (
    <>
      <div className="flex flex-col items-center gap-10 px-5 py-10 space-y-4 md:px-12 lg:px-24 md:flex-row">
        <div className="">
          <button className="bg-[#b8daff] pl-6 py-3 rounded-t transition duration-300 ease-in-out  font-bold border w-72 text-left">
            Category
          </button>
          {cat?.map((item, index) => {
            return (
              <div key={index}>
                <button
                  className="pl-6 py-3 hover:text-[#007bff] transition duration-300 ease-in-out text-[#777777] text-sm border w-72 text-left"
                  key={index}
                  onClick={() => setPoint(index)}
                >
                  {item}
                </button>
              </div>
            );
          })}
        </div>
        <div className="px-5">
          {products.map((item, index) => {
            return (
              <div
                key={index}
                className="px-4 py-6 space-y-6 rounded-lg shadow-lg"
              >
                <img
                  className="max-w-[15rem]"
                  src={item?.image1}
                  alt={item?.image1}
                />
                <p
                  className="text-sm font-semibold text-center cursor-pointer hover:text-[#ff5e15] transition duration-300 ease-in-out"
                  onClick={() => {
                    if (item?.Tittle?.toUpperCase() !== "") {
                      navigate(`/detail/${item.Tittle}`, {
                        state: {
                          name: item?.Tittle,
                          image1: item?.image1,
                          image2: item?.image2,
                          image3: item?.image3,
                          image4: item?.image4,
                          desc: item?.Description,
                          Price: item?.Dealprice,
                        },
                      });
                    } else {
                      return;
                    }
                  }}
                >
                  {item?.Tittle?.toUpperCase() === "" ? (
                    <p className="text-lg font-semibold text-red-600">
                      No Products Found
                    </p>
                  ) : (
                    item?.Tittle?.toUpperCase()
                  )}
                </p>
                <button
                  onClick={() => {
                    if (item?.Tittle?.toUpperCase() !== "") {
                      dispatch(addTocart(item));
                      Swal.fire({
                        title: "Sucess",
                        text: " Added to Cart sucessfully",
                        icon: "success",
                        confirmButtonText: "OK",
                      });
                    } else {
                      alert("No item Found");
                    }
                  }}
                  className="flex items-center gap-5 px-6 py-1 mx-auto font-semibold text-white duration-500 ease-in-out bg-black rounded-md hover:bg-orange-500"
                >
                  <h1>Add to Cart</h1>
                  <AiOutlineShoppingCart size={24} color="white" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ShopCate;
