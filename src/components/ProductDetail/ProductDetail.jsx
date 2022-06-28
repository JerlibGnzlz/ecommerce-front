import Navbar from "../NavBar";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetail, reset } from "../Redux/action";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Detail.css"

// const product = {
//   name: "Basic Tee 6-Pack",
//   price: "$192",
//   href: "#",

//   images: [
//     {
//       src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
//       alt: "Two each of gray, white, and black shirts laying flat.",
//     },
//   ],
//   description:
//     'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',

//   details:
//     'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// };

export default function ProductDetail() {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.detail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductDetail(id));
    return()=>{
      dispatch(reset())
    }
  }, [dispatch, id]);

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
                className="detalle"
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
                <form classname=''>
                  <button
                    type="submit"
                    className="mt-10 w-full bg-primary border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
