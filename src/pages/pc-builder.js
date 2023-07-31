import RootLayout from "@/components/Layouts/RootLayout";
import PcComponents from "@/components/UI/PcComponents";
import { clearPcb } from "@/redux/features/pc-builder/pcbSlice";
import { categories, getTotalProductPrice } from "@/utils/helper";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";

const PcBuilder = () => {
  const pcbProducts = useSelector((state) => state.pcb.pcb);
  const dispatch = useDispatch();
  const handleComplete = () => {
    window.my_modal_1.showModal();
    dispatch(clearPcb());
  };

  return (
    <>
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
              <span className='lg:text-xl text-red-400'>
                <span className='text-red-600'>PC Builder</span> - Build Your Own Computer
              </span>
              <div className='py-1 px-3 bg-red-600 text-white rounded-md text-center'>
                <p className='text-xl'>{getTotalProductPrice(pcbProducts)} ৳</p>
                <p className='text-sm'>{pcbProducts.length} items</p>
              </div>
            </div>

            {categories.map((cat, i) => (
              <PcComponents category={cat} key={i} pcbProducts={pcbProducts} />
            ))}

            <div className='text-center py-10'>
              <button
                onClick={() => handleComplete()}
                className='btn btn-outline btn-success'
                disabled={pcbProducts.length < 5}
              >
                Complete Build
              </button>
            </div>
          </div>
        </div>
      </div>

      <dialog id='my_modal_1' className='modal'>
        <form method='dialog' className='modal-box'>
          <h3 className='font-bold text-lg text-red-600'>Congratulations!</h3>
          <p className='py-4 text-green-600'>Your pc build was successfully completed ! </p>
          <div className='modal-action'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-outline btn-error'>Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
