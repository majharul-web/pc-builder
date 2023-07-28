import ErrorImg from "@/assets/images/404_Error_Page.png";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
const NotFoundPage = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 3000);

  return (
    <div className='text-center'>
      <Head>
        <title>Pc builder Not Found</title>
        <meta name='description' content='This is pc builder website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className=''>
        <div className='h-screen flex justify-center items-center flex-col'>
          <Image
            src={ErrorImg}
            width={700}
            alt='error_image'
            style={{ display: "flex", margin: "50px auto" }}
          />
          <Link href='/'>
            <button className='btn-sm btn btn-error'>Back To Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
