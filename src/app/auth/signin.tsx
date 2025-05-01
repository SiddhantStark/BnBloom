import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import React, { useState } from 'react'
import { set, useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const SignIn = () => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);  
  }

  const handleHidePassword = (e) => {
    e.preventDefault();
    setShowPassword(prev => !prev);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-full mt-8 space-y-4'>

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
                <div className='flex items-center justify-between'>
                <Input type={showPassword ? "text" : "password"} placeholder="Your Password" {...field} className='h-10 rounded flex-1'/>
                <Button onClick={(e) => handleHidePassword()}>
                    <Icon icon="eye" />
                </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <Button type="submit" className='w-full h-10 mt-4' aria-label='Create a new account'>
            Login In
          </Button>
        </form>
      </Form>

      <div className='flex items-center justify-center gap-2 mt-4'>
        <span className='text-sm text-gray-500'>Don't have an account?</span>
        <a href="/auth/signin" className='text-sm font-semibold text-blue-500 hover:underline'>Sign Up</a>
      </div>
    </>
  )
}

export default SignIn
