import RootLayout from "@/components/Layouts/RootLayout";
import PcComponents from "@/components/UI/PcComponents";
import { categories } from "@/utils/helper";
import Head from "next/head";

const PcBuilder = () => {
  return (
    <div className='flex justify-center items-center '>
      <Head>
        <title>Pc builder</title>
        <meta name='description' content='This is pc builder website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container'>
        <div className='border border-gray-200 rounded p-3 m-3 lg:p-5 lg:m-5'>
          <div className='flex justify-between items-center flex-wrap bg-base-200 p-3 rounded '>
            <span className='lg:text-xl'>PC Builder - Build Your Own Computer</span>
            <div className='py-1 px-3 bg-blue-600 text-white rounded-md text-center'>
              <p className='text-xl'>0 taka</p>
              <p className='text-sm'>0 items</p>
            </div>
          </div>

          {categories.map((cat, i) => (
            <PcComponents category={cat} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
