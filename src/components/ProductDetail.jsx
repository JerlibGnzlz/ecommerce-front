import Navbar from "../components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetail } from "./Redux/action";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


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
    dispatch(getProductDetail(id))
  }, [dispatch]);

  return (
    <>
      <Navbar />
      {
        <div className="pt-6">
          {/* Image gallery */}
          <div className="mt-14 max-w-2xl mb-20 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
              <img
                src={productDetail[0] && productDetail[0].image[0]}
                alt={productDetail[0] && productDetail[0].image[0]}
                className="w-full h-full object-center object-cover"
              />
            </div>
            

            {/* Product info */}
            <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8  lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
              <div className="lg:col-span-5 lg:pr-10 ">
                <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 capitalize ">
                  {productDetail[0] && productDetail[0].name}
                </h1>
              </div>

              {/* Description and details */}
              <div className=" mt-10 py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Description</h3>
                  <div className="space-y-6">
                    <p className="text-xl text-gray-900">
                      {productDetail[0] && productDetail[0].description.charAt(0).toUpperCase() + productDetail[0].description.slice(1)}
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <h2 className="text-xl font-bold text-gray-900">Category</h2>

                  <div className="space-y-6">
                    <p className="text-xl text-gray-600 capitalize">{productDetail[0] && productDetail[0].genre}</p>
                  </div>
                </div>

              {/* Sustituir el 4 por productDetail[0].rating */}
              <h3 className="text-xl mt-7 font-bold text-gray-900">Score</h3>
              <div className="flex ">
              {Array(4)
              .fill()
              .map((_, i)=>(
                <p className="text-2xl">&#9733;</p>
              ))}
              </div>

              </div>

              {/* Options */}
              <div className="mt-4 lg:mt-0 lg:row-span-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl text-gray-900">Price:  ${productDetail[0] && productDetail[0].price}</p>

                <form className="mt-10">
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
        </div>
      } 
    </>
  );
}
