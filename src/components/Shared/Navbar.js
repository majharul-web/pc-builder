import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/images/logo.png";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <div className='flex justify-center items-center bg-black'>
      <div className='container '>
        <div className='navbar '>
          <div className='navbar-start'>
            <div className='dropdown'>
              <label tabIndex={0} className='btn btn-sm btn-error lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
              >
                <li>
                  <button onClick={() => router.push("/pc-builder")} className='my-1 btn btn-sm btn-error'>
                    PC Builder{" "}
                  </button>
                </li>

                {session?.user ? (
                  <li>
                    <button onClick={() => signOut()} className='my-1 btn btn-sm btn-outline btn-error'>
                      Logout
                    </button>
                  </li>
                ) : (
                  <li>
                    <Link href='/login'>
                      <button className='mx-1 btn btn-sm btn-outline btn-error'>Login</button>
                    </Link>
                  </li>
                )}

                <li>
                  <ul className='menu menu-horizontal'>
                    <li>
                      <details>
                        <summary className='text-error hover:text-white' tabIndex={1}>
                          Categories
                        </summary>
                        <ul className='p-2' tabIndex={1} style={{ zIndex: "1" }}>
                          <li>
                            <a>CPU / Processor</a>
                          </li>
                          <li>
                            <a>Motherboard</a>
                          </li>
                          <li>
                            <a>Motherboard</a>
                          </li>
                          <li>
                            <a>RAM</a>
                          </li>
                          <li>Power Supply Unit</li>
                          <li>
                            <a>Storage Device</a>
                          </li>
                          <li>
                            <a>Monitor</a>
                          </li>
                          <li>
                            <a>Others</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <Link className='hidden lg:flex' href='/'>
              <Image src={logoImg} width={70} height={70} alt='PCB' style={{ objectFit: "contain" }} />
            </Link>
          </div>

          <div className='navbar-end'>
            <Link className='lg:hidden' href='/'>
              <Image src={logoImg} width={70} height={70} alt='PCB' style={{ objectFit: "contain" }} />
            </Link>
            <div className='hidden lg:flex items-center'>
              <ul className='menu menu-horizontal'>
                <li>
                  <details>
                    <summary className='text-white hover:text-error' tabIndex={2}>
                      Categories
                    </summary>
                    <ul className='p-2' tabIndex={2} style={{ zIndex: "1" }}>
                      <li>
                        <a>CPU / Processor</a>
                      </li>
                      <li>
                        <a>Motherboard</a>
                      </li>
                      <li>
                        <a>Motherboard</a>
                      </li>
                      <li>
                        <a>RAM</a>
                      </li>
                      <li>Power Supply Unit</li>
                      <li>
                        <a>Storage Device</a>
                      </li>
                      <li>
                        <a>Monitor</a>
                      </li>
                      <li>
                        <a>Others</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>

              <Link href='/pc-builder'>
                <button className='my-1 btn btn-sm btn-error'>PC Builder </button>
              </Link>

              {session?.user ? (
                <button onClick={() => signOut()} className='mx-1 btn btn-sm btn-outline btn-error'>
                  Logout
                </button>
              ) : (
                <Link href='/login'>
                  <button className='mx-1 btn btn-sm btn-outline btn-error'>Login</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
