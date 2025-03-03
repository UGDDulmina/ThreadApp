import { Inter } from "next/font/google"
import {ClerkProvider,
        SignInButton,
        SignedIn,
        SignedOut,
        UserButton
} from '@clerk/nextjs'
import '../globals.css'

export const metadata = {
    title: "Threads",
    description: 'A Next.js 13 Meta Threads Application'
}

//-----------Use Fonts--------------------
const inter = Inter({ subsets: ["latin"]})
//////////////////////////////////////////

export default function RootLayout({
    children
}:{
    children: React.ReactNode
}){
    return(
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>
                <SignedOut>
                <SignInButton />
                </SignedOut>
                <SignedIn>
                <UserButton />
                </SignedIn>
          {children}
                </body>
            </html>

        </ClerkProvider>
    )
}