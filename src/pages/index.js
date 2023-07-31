import RootLayout from "@/components/Layouts/RootLayout";
import Category from "@/components/UI/Category";
import Hero from "@/components/UI/Hero";
import Product from "@/components/UI/Product";
import useRandomProducts from "@/hooks/useRandomProducts ";
import { categories } from "@/utils/helper";
import Head from "next/head";

const HomePage = ({ products }) => {
  const randomProducts = useRandomProducts(products);

  return (
    <div>
      <Head>
        <title>Pc builder</title>
        <meta name='description' content='This is pc builder website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />

      {/* products */}

      <div className='text-center pt-10'>
        <h1 className='font-bold text-4xl '>Featured Products</h1>
      </div>

      <section className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 my-10 '>
        {randomProducts?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>

      {/* category */}

      <div className='text-center pt-10'>
        <h1 className='font-bold text-4xl '>Featured Categories</h1>
      </div>

      <section className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 my-10 '>
        {categories?.map((cat, i) => (
          <Category key={i} category={cat} />
        ))}
      </section>
    </div>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.BASE_API_URL}/products`);
  const data = await res.json();
  return {
    props: {
      products: data?.data,
    },
    revalidate: 30,
  };
};
