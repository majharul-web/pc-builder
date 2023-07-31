import Image from "next/image";
import Link from "next/link";

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

const Product = ({ product }) => {
  return (
    <div className='w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl'>
      <Link href={`/product/${product?._id}`}>
        <Image
          width={500}
          height={500}
          src={product?.image}
          alt='Product'
          className='h-80 w-72 object-cover rounded-t-xl'
        />
        {/* <img src={product?.image} alt='Product' className='h-80 w-72 object-cover rounded-t-xl' /> */}
        <div className='px-4 py-3 w-72'>
          <div className='flex items-center'>
            <span className='text-gray-400 mr-3 uppercase text-xs'>{product?.category}</span>
            <span
              className={`mr-3 uppercase text-xs ml-auto font-bold ${
                product?.status === "In Stock" ? "text-green-600" : "text-red-500"
              }`}
            >
              {product?.status}
            </span>
          </div>
          <p className='text-lg font-bold text-black truncate block capitalize'>{product?.product_name}</p>
          <div className='flex items-center'>
            <p className='text-lg font-semibold text-black cursor-auto my-3'>৳ {product?.price}</p>

            <div className='ml-auto my-3'>
              <div className='flex'>
                <span className='flex items-center'>
                  {generateRatingStars(product?.average_rating)}
                  <span className='text-gray-600 ml-3'>{product?.average_rating}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
