import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div className='flex justify-center items-center'>
      <div className='container'>
        <Navbar />
        <div className='h-screen'>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
