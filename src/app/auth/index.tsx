import AuthLayout from '@/components/layout/auth.layout'
import React from 'react'
import SignIn from './signin'
import SignUp from './signup'

const SignInPage = () => {
  return (
    <AuthLayout title={"Sign In"} description="Welcome back! Please sign in to your account.">
        <SignIn/>
    </AuthLayout>
  )
}

const SignUpPage = () => {
    return (
      <AuthLayout title={"Sign Up"} description="Create a new account to get started.">
          <SignUp/>
      </AuthLayout>
    )
}


export {SignInPage, SignUpPage};
 