import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import GroupGoalCards from "./components/GroupGoalCards"
import PersonalGoals from "./components/PersonalGoals"


export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <SignedOut>     
        <h1>Welcome to ProductiveTogether!</h1>
        <p>To start login and begin planning your day</p>
        <Link href="./signIn">Sign In</Link>
        {/* I think I need to link to a page that renders the signIn element */}
      </SignedOut>
      <SignedIn>
        <div className="fixed top-1 right-5">
          <UserButton />
        </div>
        <PersonalGoals />
        <GroupGoalCards />
      </SignedIn>
    </main>
  )
}
