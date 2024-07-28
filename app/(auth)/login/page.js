import Link from "next/link"
import { redirect } from "next/navigation"
import { auth } from "@/lib/appwrite/auth"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default async function Login() {
  let user = await auth.getUser();

  if (user) {
    redirect("/");
  }
  
  async function loginAction(formData) {
    "use server"
    // let data = Object.fromEntries(formData)
    // console.log({data})
    // const res = await signupUser(data)
    const res = await auth.createSession(formData)
    console.log({ res: res })
  }

  return (
    <div className="container flex h-[100vH] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-1 lg:px-0">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <form action={loginAction}>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center my-1">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/forgot-password" className="ml-auto inline-block text-sm underline">
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" name="password" type="password" required />
              </div>
              <Button type="submit" className="w-full my-4">
                Login
              </Button>
            </form>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
