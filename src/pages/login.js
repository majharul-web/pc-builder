import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/images/footer-logo.png";
import { signIn } from "next-auth/react";
import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";

const Login = () => {
  return (
    <div>
      <Head>
        <title>Pc builder login</title>
        <meta name='description' content='This is pc builder website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
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
                onClick={() => signIn("github", { callbackUrl: "https://pc-builder-neon.vercel.app/" })}
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

export default Login;

Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
