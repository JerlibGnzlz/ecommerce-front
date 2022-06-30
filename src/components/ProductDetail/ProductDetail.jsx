import Navbar from "../NavBar";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetail, reset } from "../Redux/action";
import { useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Detail.css"



export default function ProductDetail() {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.detail);
  const { id } = useParams();
  const [cart, setCart] = useState([]);


  console.log(productDetail, "prodDetail")
  useEffect(() => {
    dispatch(getProductDetail(id));
    return()=>{
      dispatch(reset())
    }
  }, [dispatch, id]);


  useEffect(() => {
    cart.length && localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const cart2=localStorage.getItem("cart")
  const objCart2=JSON.parse(cart2)
  
  
  
  function handleAddToCart() {
 
    productDetail[0].cantidad=1
    if (!objCart2.some((p) => p.name.includes(productDetail[0].name))) {
      setCart([...objCart2,productDetail[0]]);
      console.log("entre al if")
    }
  
  }
  





  return (
    <>
      <Navbar />
      {
        <div className="pt-4">
          {/* Image gallery */}
          <div className="mt-10 max-w-2xl mb-20 mx-auto sm:px-6 lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-2">
            <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
              <img
                src={productDetail[0] && productDetail[0].image[0]}
                alt={productDetail[0] && productDetail[0].image[0]}
                className="object-contain h-96 w-96 detalle"
              />
            </div>

            {/* Product name */}
            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-xl lg:pt-5 lg:px-8 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
              <div className="lg:col-span-5 lg:pr-10 ">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 capitalize ">
                  {productDetail[0] && productDetail[0].name}
                </h1>
              </div>

              {/* Product Description & category */}
              <div className=" mt-2 py-10 lg:pt-6 lg:pb-6 lg:col-start-1 lg:col-span-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Description
                  </h3>
                  <div className="space-y-6">
                    <p className="text-xl text-gray-900">
                      {productDetail[0] &&
                        productDetail[0].description.charAt(0).toUpperCase() +
                          productDetail[0].description.slice(1)}
                    </p>
                  </div>
                </div>

                <div className="mt-2">
                  <h2 className="text-xl font-bold text-gray-900">Category</h2>

                  <div className="space-y-6">
                    <p className="text-xl text-gray-600 capitalize">
                      {productDetail[0] && productDetail[0].genre}
                    </p>
                  </div>
                </div>

                {/* Product Score */}
                {/* Sustituir el 4 por productDetail[0].rating */}
                <h3 className=" mt-2 text-xl font-bold text-gray-900">Score</h3>
                <div className="flex ">
                  {Array(4)
                    .fill()
                    .map((_, i) => (
                      <p className="text-2xl">&#9733;</p>
                    ))}
                </div>
              </div>

              {/* Product price */}
              <div className="mt-4 lg:mt-0 lg:row-span-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl font-bold text-gray-900">
                  ${productDetail[0] && productDetail[0].price}
                </p>

                {/* Product bottom cart */}
                <form className=''>
                  <button
                    type="submit"
                    className="mt-10 w-full bg-primary border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                   onClick={(e)=> handleAddToCart(e)}
                   
                   >
                    Add to cart
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Back */}
          <div className='w-full h-16 fixed bottom-0 mt-28 bg-primary'>
          <Link to={"/products"}> 
          <p className="text-center mt-5 text-white hover:text-tertiary">Go to Back</p>
          </Link>
          </div>


        </div>
      }
    </>
  );
}
