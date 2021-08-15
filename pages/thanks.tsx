import React from 'react'
import Link from 'next/link'

export default function Thanks() {
  return (
    <div className="px-4 py-20 mx-auto md:px-24 lg:px-8 lg:py-80">
      <div className="max-w-2xl sm:text-center sm:mx-auto">
        <h1 className="mb-6 font-mono text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">Thank you!</h1>
        <p className="text-base text-gray-700 md:text-lg">
          We have received your message.<br/>We'll reach you out immediately!
        </p>
        <div className="flex items-center mt-10 sm:justify-center">
          <Link href="/">
            <a className="w-full max-w-sm py-3 text-center font-semibold text-white transition duration-500 ease-in-out transform bg-gray-600 border-gray-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-gray-800">Back to home</a>
          </Link>
        </div>
      </div>
    </div>
  )
}