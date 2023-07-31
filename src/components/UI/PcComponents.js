/* eslint-disable @next/next/no-img-element */
import { removeFromPcb } from "@/redux/features/pc-builder/pcbSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const PcComponents = ({ category, pcbProducts }) => {
  const dispatch = useDispatch();
  const selectedProduct = pcbProducts.find((product) => product.category == category.name);

  return (
    <div className='card bg-base-100 my-3 rounded-none'>
      <div className='card-body'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <figure>
              <img src={category.image} style={{ maxWidth: "80px" }} alt='Album' />
            </figure>
            <div className='ml-2 lg:ml-10'>
              {category.required && <p className='bg-base-200 text-xs px-1 rounded inline-block'>Required</p>}
              <p className='uppercase text-sm'>{category.name}</p>
            </div>
          </div>
          <div>
            <Link href={`pc-builder/${category.name}`} className='btn btn-sm btn-outline btn-error'>
              Choose
            </Link>
          </div>
        </div>

        {selectedProduct && (
          <div className='mt-5 ml-5'>
            <div>
              <hr />
              <div className='flex justify-between items-center mt-5 '>
                <div className='flex items-center'>
                  <figure>
                    <img src={selectedProduct?.image} style={{ maxWidth: "80px" }} alt='Album' />
                  </figure>
                  <div className='ml-2 lg:ml-10'>
                    <p className='uppercase text-sm'>{selectedProduct.product_name}</p>
                    <p className='text-sm'>৳ {selectedProduct?.price}</p>
                  </div>
                </div>
                <div>
                  <Link
                    href={`pc-builder/${category.name}`}
                    className='btn btn-sm btn-outline btn-success mx-2'
                  >
                    Re-Chose
                  </Link>
                  <button
                    onClick={() => dispatch(removeFromPcb(selectedProduct._id))}
                    className='btn btn-sm btn-outline btn-warning mx-2'
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <hr />
    </div>
  );
};

export default PcComponents;
