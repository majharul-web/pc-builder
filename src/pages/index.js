import RootLayout from "@/components/Layouts/RootLayout";

const HomePage = () => {
  return (
    <div className='flex justify-center items-center'>
      <h3 className='text-purple-400'>This is home page</h3>
    </div>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
