"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket } from "lucide-react"
import Link from "next/link"
import Socials from "../../api/auth/sign-up/socials"
import MagicLink from "../../api/auth/sign-up/magic-link"

export default function AuthPage() {
 
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      
      <Card className="w-[350px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Welcome to Seezo</CardTitle>
          <CardDescription>
            Choose your preferred sign in method
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Tabs defaultValue="magic" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
             
              <TabsTrigger value="magic">Magic Link</TabsTrigger>
              <TabsTrigger value="social">Social</TabsTrigger>
            </TabsList>
            <TabsContent value="magic">
              <MagicLink />
            </TabsContent>
            <TabsContent value="social">
              <Socials />
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-gray-500 text-center">
            By signing in, you agree to our{" "}
            <Link href="#" className="underline underline-offset-4 hover:text-primary">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline underline-offset-4 hover:text-primary">
              Privacy Policy
            </Link>
            .
          </div>
          <div className="text-sm text-gray-500 text-center">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline underline-offset-4 hover:text-primary">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}