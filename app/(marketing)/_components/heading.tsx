"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";


export const Heading = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text5l md:text6xl font-bold">
                Your Ideas, Documents, & Plans. Unified. Welcome to <span className="underline">
                    Noter
                </span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Noter is the workplace where <br/>
                your idea comes to life, and your ink flows. 
            </h3>
            {isLoading &&(
                <div className="w-full flex items-center justify-center">
                    <Spinner size="lg" />
                </div>
            )}
            {isAuthenticated && !isLoading &&(
                <Button asChild>
                    <Link href="/documents">
                     Enter Noter
                     <ArrowRight className="h-4 w-4 ml-2"/>
                    </Link>
                </Button>
            )}
            {!isAuthenticated && !isLoading &&(
                <SignInButton mode="modal">
                    <Button>
                        Become a Noter
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                </SignInButton>
            )}
        </div>
    )
}