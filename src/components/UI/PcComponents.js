import Link from "next/link";
import React from "react";

const PcComponents = ({ category }) => {
  return (
    <div className='card bg-base-100 my-3 rounded-none'>
      <div className='card-body'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <figure>
              <img src={category.image} alt='Album' />
            </figure>
            <div className='ml-2 lg:ml-10'>
              {category.required && <p className='bg-base-200 text-xs px-1 rounded inline-block'>Required</p>}
              <p className='uppercase text-sm'>{category.name}</p>
            </div>
          </div>
          <div>
            <Link href={`pc-builder/${category.name}`} className='btn btn-sm btn-success'>
              Choose
            </Link>
          </div>
        </div>

        <div className='mt-5 ml-5'>
          <div>
            <hr />
            <div className='flex justify-between items-center mt-5 '>
              <div className='flex items-center'>
                <figure>
                  <img src={category.image} alt='Album' />
                </figure>
                <div className='ml-2 lg:ml-10'>
                  <p className='uppercase text-sm'>{category.name}</p>
                </div>
              </div>
              <div>
                <Link href={`pc-builder/${category.name}`} className='btn btn-sm btn-success mx-2'>
                  Retry
                </Link>
                <Link href={`pc-builder/${category.name}`} className='btn btn-sm btn-error mx-2'>
                  Remove
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default PcComponents;
