import React from 'react'

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-16 sm:py-24 mx-auto sm:px-6 lg:px-8">
          
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            
            <h2 className="text-4xl font-bold sm:text-5xl">
              Download Now
              <span className="hidden sm:block text-4xl">
                Lorem Ipsum
              </span>
            </h2>

            <a
              href="/"
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011-.473-.271-.748-.768-.723-1.289l.531-10.842z" />
              </svg>

              <span className="ml-2">Download now</span>
            </a>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
          <img
  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  alt="Remote 1"
/>
        </div>
      </aside>

      <div className="grid place-items-center sm:mt-20">
       <img
  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  alt="Remote 2"
/>
      </div>

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Lorem Ipsum Yojo
      </h1>
    </div>
  );
}