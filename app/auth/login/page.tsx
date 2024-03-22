import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ThemeProvider } from "@/app/components/theme-provider"



export default function Login() {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange

      >
        <div className="flex items-center min-h-screen px-4 sm:px-6 bg-gray-100 dark:bg-gray-800">
          <div className="w-full max-w-md mx-auto space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold">Login</h1>
              <p className="text-gray-500 dark:text-gray-400">Enter your email and password to continue</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="johndoe@example.com" required type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="*********" required type="password" />
              </div>
              <div className="  flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label className="text-sm cursor-pointer leading-none" htmlFor="remember">
                  Remember me
                </Label>
              </div>
              <Button className="w-full">Login</Button>
            </div>
            <div className=" cursor-default text-center text-sm space-x-1">
              <p className="text-gray-500 dark:text-gray-400">Don't have an account?</p>
              <p className="underline ">
                Contact a nearby admin
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>


    </>
  )
}
