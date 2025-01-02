import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { MailOpen } from "lucide-react";
export default function Home() {
  return (
    <div>
      <ModeToggle />
      <SignedOut>
        <SignInButton mode="modal">
          <Button>
            <MailOpen />
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
