import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/images/footer-logo.png";
import { signIn } from "next-auth/react";

const login = () => {
  return (
    <div>
      <section class='bg-base-200'>
        <div class='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <Link href='/' className='py-10'>
            <Image src={logoImg} width={100} height={100} alt='PCB' style={{ objectFit: "contain" }} />
          </Link>
          <div class='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0'>
            <div class='p-6 space-y-4 md:space-y-6 sm:p-8 text-center '>
              <h3 class='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl '>
                Sign in to your account
              </h3>
              <button
                onClick={() => signIn("github", { callbackUrl: "http://localhost:3000/" })}
                className=' btn btn-sm btn-error'
              >
                Sign with Github
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default login;
