import React, { useEffect } from 'react'
import Image from 'next/image'
import Router from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import { submitHubspotForm } from '../lib/hubspot'

type Input = {
  email: string;
  firstName: string;
  lastName: string;
  msg: string;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    reset,
    formState
  } = useForm<Input>({
    criteriaMode: "all",
    shouldFocusError: false,
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      msg: ''
    }
  })
  const router = Router
  useEffect(() => {},[formState]);

  const onSubmit: SubmitHandler<Input> = async(data) => {
    const hubspot_reaponse = await submitHubspotForm(data.email, data.firstName, data.lastName, data.msg)
    const isSubmitSuccessful = formState.isSubmitSuccessful

    if (isSubmitSuccessful) {
      reset({
        email: '',
        firstName: '',
        lastName: '',
        msg: ''
      })
      router.push('/thanks')
    } else {
      alert(hubspot_reaponse.message) // error message
    }
  }

  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="table mx-autow-16 mt-28">
          <h1 className="font-mono text-3xl font-medium table">Contact Us</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white shadow-md rounded-lg">
            <div className="flex flex-wrap mb-5 -mx-3">
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label className="text-base leading-7 text-blueGray-500">First name</label>
                <input 
                  className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                  id="firstName"
                  type='text'
                  placeholder="First name"
                  {...register("firstName", {
                    required: true
                  })}
                />
                <p className="text-xs text-red-600 pt-2">{formState.errors.firstName && "A first name is required."}</p>
              </div>
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label className="text-base leading-7 text-blueGray-500">Last name</label>
                <input
                  className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                  id="lastName"
                  type='text'
                  placeholder="Last name"
                  {...register("lastName", {
                    required: true
                  })}
                />
                <p className="text-xs text-red-600 pt-2">{formState.errors.lastName && "A last name is required."}</p>
              </div>
            </div>
            <div className="flex flex-wrap mb-5 -mx-3">
              <div className="w-full px-3">
                <label className="text-base leading-7 text-blueGray-500">Message</label>
                <textarea
                  className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 apearance-none autoexpand"
                  id="msg"
                  {...register("msg", {
                    required: true
                  })}
                />
                <p className="text-xs text-red-600 pt-2">{formState.errors.msg && "A message is required."}</p>
              </div>
            </div>
            <div className="flex flex-wrap mb-2 -mx-3">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="text-base leading-7 text-blueGray-500">Email</label>
                <input 
                  className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                  id="email"
                  placeholder="email@example.com"
                  {...register("email", {
                    required: true
                  })}
                />
                <p className="text-xs text-red-600 pt-2">{formState.errors.email && "A email is required."}</p>
              </div>
            </div>
            <div className="flex items-center w-full pt-4">
              <button
                className="w-full py-3 text-base font-semibold text-white transition duration-500 ease-in-out transform bg-gray-600 border-gray-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-gray-800" type="submit" value="Submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="mt-14 sm:mt-28">
          <Image 
            src="/images/mcycle2.jpg"
            width={1142}
            height={726}
            className="object-cover w-full h-62 rounded shadow-lg sm:h-98"
            sizes={"100vh"}
            quality={80}
            unoptimized={false}
            objectFit={"cover"}
          />
        </div>
      </div>
    </div>
  )
}
