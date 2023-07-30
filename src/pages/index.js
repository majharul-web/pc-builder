import RootLayout from "@/components/Layouts/RootLayout";
import Hero from "@/components/UI/Hero";
import Product from "@/components/UI/Product";
import useRandomProducts from "@/hooks/useRandomProducts ";

const HomePage = ({ products }) => {
  const randomProducts = useRandomProducts(products);

  return (
    <div className=''>
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
    </div>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  return {
    props: {
      products: data?.data,
    },
    revalidate: 30,
  };
};
