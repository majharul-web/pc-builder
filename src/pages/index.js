import RootLayout from "@/components/Layouts/RootLayout";
import Hero from "@/components/UI/Hero";

const HomePage = () => {
  return (
    <div className='flex justify-center items-center'>
      <Hero />
    </div>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
