import React from "react";

export default function NewsLetter() {
  return (
    <>
      <section className="content flex flex-col items-center justify-center mb-10 min-h-[70vh] font-display">
        <div className="flex flex-col items-center text-center mb-6 gap-4">
          <h3 className="text-center text-4xl font-semibold text-[#0253AE]">
            Subscribe to our Newsletter
          </h3>
          <p className="text-gray-600 max-w-[70%] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum
            laudantium, ab velit asperiores harum similique a quos aliquam enim
            est temporibus dolore non, quam ipsam animi, iure veritatis
            molestiae quo repellat! Tenetur
          </p>
        </div>
        <div className="flex">
          <form action="">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-r-md px-4 py-2 hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
