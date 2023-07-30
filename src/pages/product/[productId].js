import RootLayout from "@/components/Layouts/RootLayout";
import { generateRatingStars } from "@/utils/generateRatingStars";
import Image from "next/image";
import { useRouter } from "next/router";

const SingleProduct = ({ product }) => {
  const router = useRouter();

  return (
    <div style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
      <div className='container px-5 py-24 mx-auto' style={{ cursor: "auto" }}>
        <div className='lg:w-4/5 mx-auto flex flex-wrap'>
          <Image
            width={500}
            height={500}
            src={product?.image}
            alt='Product'
            className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded'
          />

          <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0' style={{ cursor: "auto" }}>
            <div className='flex items-center'>
              <h2
                className='text-sm uppercase title-font text-gray-500 tracking-widest'
                style={{ cursor: "auto" }}
              >
                {product?.category}
              </h2>
              <h2
                className={`text-sm  title-font uppercase tracking-widest ml-auto ${
                  product.status === "In Stock" ? "text-green-600" : "text-red-500"
                }`}
                style={{ cursor: "auto" }}
              >
                {product?.status}
              </h2>
            </div>

            <h1 className='text-gray-900 text-3xl title-font font-medium mb-1' style={{ cursor: "auto" }}>
              Blue Dress v2
            </h1>

            <p className='leading-relaxed'>{product?.description}</p>
            <div className='mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5'>
              <h2
                className='font-bold text-sm uppercase title-font text-gray-500 tracking-widest'
                style={{ cursor: "auto" }}
              >
                Key features
              </h2>
              <ul className='ml-10'>
                {Object.entries(product?.key_features).map(([key, value]) => (
                  <li className='list-item list-disc' key={key}>
                    <span className='font-bold'>{key}: </span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex'>
              <span className='title-font font-medium text-2xl text-gray-900'>৳ {product?.price}</span>
              <button className='flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'>
                Buy
              </button>
              {/* <button className='rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4'>
                <svg
                  fill='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'></path>
                </svg>
              </button> */}
            </div>

            <div className='flex mb-4'>
              <span class='flex items-center'>
                {generateRatingStars(product?.average_rating)}
                <span class='text-gray-600 mx-1 text-sm'>({product?.average_rating})</span>
              </span>
            </div>

            {/* Reviews Section */}
            {product.reviews && product.reviews.length > 0 && (
              <div className='py-3'>
                <h2 className='font-semibold text-lg'>
                  Reviews <span className='text-sm'>({product?.individual_rating})</span>
                </h2>
                {product.reviews.map((review, index) => (
                  <div key={index} className='border-t border-gray-300 py-2'>
                    <div className='flex items-center mb-1'>
                      <span className='font-semibold'>{review.user}</span>
                      <div className='flex items-center ml-auto'>{generateRatingStars(review.rating)}</div>
                    </div>
                    <p>{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

SingleProduct.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  console.log("res data", data);
  const paths = data.data.map((product) => {
    return {
      params: { productId: product._id.toString() },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/product/${params.productId}`);
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};
