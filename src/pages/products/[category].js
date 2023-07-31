import RootLayout from "@/components/Layouts/RootLayout";
import Product from "@/components/UI/Product";
import { useRouter } from "next/router";
import noDataImg from "@/assets/images/no-data.gif";
import Image from "next/image";
import Head from "next/head";

const Products = ({ products }) => {
  const router = useRouter();
  const category = router.query.category;
  const categoryProducts = products?.filter(
    (cat) => cat.category.toLowerCase() === category.toLocaleLowerCase()
  );

  return (
    <div>
      <Head>
        <title>Pc builder</title>
        <meta name='description' content='This is pc builder website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='text-center pt-10'>
        <h1 className='font-bold text-4xl uppercase'>{category}</h1>
      </div>

      {categoryProducts ? (
        <section className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 my-10 '>
          {categoryProducts?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </section>
      ) : (
        <div>
          <Image src={noDataImg} alt='Not Found' width={500} height={500} />
        </div>
      )}
    </div>
  );
};

export default Products;

Products.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.BASE_API_URL}/products`);
  const data = await res.json();

  const paths = data.data.map((product) => {
    return {
      params: { category: product.category.toString() },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.BASE_API_URL}/products`);
  const data = await res.json();
  return {
    props: {
      products: data?.data,
    },
  };
};
