import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'

function Signs() {
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn></>
  )
}

export default Signs