import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import React from 'react'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import useSignUpForm from './hooks/use-sign-up-form';

const SignUp = () => {
  
  const {form, handleSignUpSubmit, pending} = useSignUpForm();

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSignUpSubmit)} className='w-full mt-8 space-y-4'>

          <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} className='h-10' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Your Email ID" {...field} className='h-10' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          
          <FormField control={form.control} name="password" render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Your Password" {...field} className='h-10' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <Button type="submit" className='w-full h-10 mt-4' aria-label='Create a new account' disabled={pending}>
            Create New Account
          </Button>
        </form>
      </Form>

      <div className='flex items-center justify-center gap-2 mt-4'>
        <span className='text-sm text-gray-500'>Already have an account?</span>
        <a href="/auth/signin" className='text-sm font-semibold text-blue-500 hover:underline'>Sign In</a>
      </div>
    </>
  )
}

export default SignUp

