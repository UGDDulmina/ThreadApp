"use client"
import{sidebarLinks} from '@/constants'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { SignedIn, SignOutButton, useClerk } from '@clerk/nextjs';


function LeftSidebar(){
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
      await signOut(); // Ensure sign-out completes
      router.push("/sign-in"); // Redirect after sign-out
  };

    const pathname = usePathname();

    return(
         <section className="custom-scrollbar leftsidebar">
            <div className="flex w-full flex-1 flex-col gap-6 px-6">
             {sidebarLinks.map((link) =>{
             const isActive = (pathname.includes(link.route) && link.route.length > 1 )|| pathname === link.route;
             
             return(
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link  ${isActive && 'bg-primary-500'}`}
            >
            <Image
              src={link.imgURL}
              alt={link.label}
              width={24}
              height={24}
            />

            <p className='text-light-1 max-lg:hidden'>{link.label}</p>
            </Link>
            

             )})}

            </div>
            <div className="mt-10 px-6">
            {/* <SignedIn>
                    <div onClick={()=> router.push('/sign-in')} className="flex cursor-pointer gap-4 p-4">
                        <SignOutButton>
                            <div className="flex cursor-pointer gap-4 p-4">
                                <Image
                                src='/assets/logout.svg'
                                alt="logout"
                                width={24}
                                height={24}
                                />
                            </div>
                        </SignOutButton>
                        <p className='text-light-2 max-lg:hidden '>Logout</p>
                    </div>
              </SignedIn> */}
              <SignedIn>
                   <div onClick={handleSignOut} className="flex cursor-pointer gap-4 p-4">
                     <Image
                         src='/assets/logout.svg'
                         alt="logout"
                         width={24}
                         height={24}
                      />
                   <p className='text-light-2 max-lg:hidden'>Logout</p>
                  </div>
              </SignedIn>

            </div>
         </section>
    )
    }
export default LeftSidebar;