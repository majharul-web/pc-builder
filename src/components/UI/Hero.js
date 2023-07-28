import desktopImg from "@/assets/images/build3.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className='hero bg-base-200 py-10'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <Image src={desktopImg} height={500} width={500} alt='Build' />

        <div>
          <h1 className='text-5xl font-bold text-error'>Gaming Desktop Pc Build!</h1>
          <p className='py-6'>
            The gaming industry has witnessed significant growth in Bangladesh, leading to increased demand
            for gaming PCs. This article provides an overview of gaming PC prices in Bangladesh.
          </p>
          <button className='btn btn-outline btn-error btn-sm'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
