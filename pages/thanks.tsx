import React from 'react'
import Link from 'next/link'

export default function Thanks() {
  return (
    <div className="px-4 py-20 mx-auto md:px-24 lg:px-8 lg:py-80">
      <div className="max-w-2xl sm:text-center sm:mx-auto">
        <h1 className="mb-6 font-mono text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-32 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="6b0188f3-b7a1-4e9b-b95e-cad916bb3042"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#6b0188f3-b7a1-4e9b-b95e-cad916bb3042)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative bg-white">Thank</span>
          </span>{' '}
          you!
        </h1>
        <p className="text-base text-gray-700 md:text-lg">
          We have received your message.<br/>We&apos;ll reach you out immediately!
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