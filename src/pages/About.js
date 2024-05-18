import React from "react";

function About() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4">
        {/* Hiring Banner */}
        <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
          <div className="space-y-6">
            <p className="text-sm font-semibold md:text-base">
              About Me &rarr;
            </p>
            <p className="text-3xl font-bold md:text-4xl">Godspower Jennifer</p>
            <p className="text-base text-gray-600 md:text-lg">
              Jennifer is a hard-working girl who is passionate about coding and
              constantly seeks to improve her skills in programming. Her
              dedication and interest in technology drive her to tackle
              challenging projects and continuously learn new coding techniques.
            </p>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Thank You
            </button>
          </div>
          <div className="md:mt-o mt-10 w-full">
            <img
              src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              alt="Getting Started"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
