import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Wand2 } from "lucide-react"
import { signIn } from "next-auth/react"

export default function MagicLink() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [magicLinkSent, setMagicLinkSent] = useState<boolean>(false)
    const [email, setEmail] = useState<string>("")

    const onMagicLinkSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        
        try {
            const result = await signIn('email', {
                email,
                callbackUrl: "/", // Adjust this as needed
                redirect: false,
            })

            if (result?.error) {
                console.error("Error sending magic link:", result.error)
                // Handle error (e.g., show error message to user)
            } else {
                setMagicLinkSent(true)
            }
        } catch (error) {
            console.error("Error sending magic link:", error)
            // Handle error (e.g., show error message to user)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={onMagicLinkSubmit}>
            <div className="grid gap-2">
              <div className="grid gap-1">
                <Label className="sr-only" htmlFor="magic-email">
                  Email
                </Label>
                <Input
                  id="magic-email"
                  placeholder="name@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  disabled={isLoading || magicLinkSent}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button disabled={isLoading || magicLinkSent}>
                {isLoading && (
                  <Wand2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {magicLinkSent ? "Magic Link Sent!" : "Send Magic Link"}
              </Button>
            </div>
            {magicLinkSent && (
            <p className="mt-2 text-sm text-gray-500">
              Check your email for the magic link to sign in.
            </p>
          )}
          </form>
    )
}