"use client"
import Link from "next/link";
import Image from 'next/image'
import { OrganizationSwitcher, SignedIn, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import {dark} from '@clerk/themes';


function Topbar(){

    const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
      await signOut(); // Ensure sign-out completes
      router.push("/sign-in"); // Redirect after sign-out
  };
    
return (
    <nav className="topbar">
        <Link href='/' className="flex items-center gap-4">
        <Image src='/assets/logo.svg' alt="logo" width={28} height={28}/> 
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
        </Link>

        <div className="flex items-center gap-1 bg-blue-400">
            <div className="block md:hidden">
                <SignedIn>
                        <div className="flex cursor-pointer" onClick={handleSignOut}>
                            <Image
                            src='/assets/logout.svg'
                            alt="logout"
                            width={24}
                            height={24}
                            />
                        </div>
                </SignedIn>
            </div>
            <OrganizationSwitcher
            appearance={{
                elements:{
                    baseTheme: dark,
                    organizationSwitcherTrigger:
                    "py-2 px-4"
                }
            }}
            />
        </div>

    </nav>
)
 }
export default Topbar;