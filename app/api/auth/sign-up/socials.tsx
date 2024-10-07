import { Button } from "@/components/ui/button"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useSession } from "next-auth/react"
export default function Socials() {

const [isLoading, setIsLoading] = useState<boolean>(false)

const session = useSession()
const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: '/assesment' });
    }

const handleGithubSignIn = () => {
    signIn('github', { callbackUrl: '/' });
}

const handleTwitterSignIn = () => {
    signIn('twitter', { callbackUrl: '/' });
}

const handleLinkedinSignIn = () => {
    signIn('linkedin', { callbackUrl: '/' });
}

    return (
        <div>
          <div className="grid gap-2">
                <Button variant="outline" className="bg-black text-white hover:bg-gray-800" disabled={isLoading} onClick={handleGithubSignIn}>
                  <Github className="mr-2 h-4 w-4" />
                  Github
                </Button>
                <Button variant="outline" className="bg-[#1DA1F2] text-white hover:bg-[#1a8cd8]" disabled={isLoading} onClick={handleTwitterSignIn}>
                  <Twitter className="mr-2 h-4 w-4" />
                  Twitter
                </Button>
                <Button variant="outline" className="bg-[#0A66C2] text-white hover:bg-[#094c8f]" disabled={isLoading} onClick={handleLinkedinSignIn}>
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
                <Button variant="outline" className="bg-[#EA4335] text-white hover:bg-[#d33828]" disabled={isLoading} onClick={handleGoogleSignIn}>
                  <Mail className="mr-2 h-4 w-4" />
                  Google
                </Button>
          </div>
        </div>
    )
}