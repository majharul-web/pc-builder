import RootLayout from "@/components/Layouts/RootLayout";
import { RxAvatar } from "react-icons/rx";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
const StarIcon = () => (
  <svg
    fill='currentColor'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='2'
    className='w-4 h-4 text-yellow-500'
    viewBox='0 0 24 24'
  >
    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
  </svg>
);

export const generateRatingStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<StarIcon key={`star-full-${i}`} />);
    } else if (hasHalfStar && i === fullStars) {
      stars.push(
        <svg
          key={`star-half`}
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          className='w-4 h-4 text-yellow-500'
          viewBox='0 0 24 24'
        >
          <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
        </svg>
      );
    } else {
      stars.push(<StarIcon key={`star-empty-${i}`} />);
    }
  }

  return stars;
};

const SingleProduct = ({ product }) => {
  const router = useRouter();

  if (!product || !product.status) {
    return <div>Loading...</div>; // Or show an appropriate loading/error message
  }

  return (
    <div style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
      <Head>
        <title>Pc builder</title>
        <meta name='description' content='This is pc builder website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
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
                  product?.status === "In Stock" ? "text-green-600" : "text-red-500"
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
            <div className='flex items-center justify-between'>
              <span className='title-font font-medium text-2xl text-gray-900'>৳ {product?.price}</span>

              <span className='flex items-center '>
                {generateRatingStars(product?.average_rating)}
                <span className='text-gray-600 mx-1 text-sm'>({product?.average_rating})</span>
              </span>
            </div>

            {/* Reviews Section */}
            {product?.reviews && product.reviews.length > 0 && (
              <div className='py-3'>
                <h2 className='font-semibold text-lg'>
                  Reviews <span className='text-sm'>({product?.individual_rating})</span>
                </h2>
                {product?.reviews.map((review, index) => (
                  <div key={index} className='border-t border-gray-300 py-2'>
                    <div className='flex items-center mb-1'>
                      <span className='mr-1 text-green-600'>
                        <RxAvatar size={20} />
                      </span>
                      <span className='font-semibold text-green-600'>{review.user}</span>
                      <div className='flex items-center ml-auto'>{generateRatingStars(review?.rating)}</div>
                    </div>
                    <p className='italic'>"{review.comment}"</p>
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
  const res = await fetch(`${process.env.BASE_API_URL}/products`);
  const data = await res.json();

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
  const res = await fetch(`${process.env.BASE_API_URL}/product/${params.productId}`);
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};
