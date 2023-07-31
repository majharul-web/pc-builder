import Link from "next/link";
import React from "react";

const Category = ({ category }) => {
  return (
    <div className='card w-75 bg-base-100 shadow-xl'>
      <Link href={`products/${category.name}`}>
        <figure className='px-10 pt-10'>
          <img
            src={category.image}
            alt='Shoes'
            className='rounded-xl'
          />
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>{category.name}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Category;
