import { addToPcb } from "@/redux/features/pc-builder/pcbSlice";
import { generateRatingStars } from "@/utils/generateRatingStars";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const ChoseProduct = ({ product }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleChoseProduct = () => {
    dispatch(addToPcb(product));

    router.push("/pc-builder");
  };
  return (
    <div className='w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl'>
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

        <div className='text-center'>
          <button onClick={() => handleChoseProduct()} className='btn btn-sm btn-outline btn-error'>
            Add To Builder
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChoseProduct;
