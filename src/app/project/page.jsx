import React from 'react'

const ProjectPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          WebSecurityProgramming&nbsp;
          <code className="font-mono font-bold">/ Project Team</code>
        </p>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            rel="noopener noreferrer"
          >
            Made by G0r4ni8
          </a>
        </div>
      </div>

      <div className=" flex items-center justify-center ">
        <div className="max-w-md space-y-4 pt-10">
          <div className="max-w-md">
            <img
              src="/image/projectweb.jpg"
              alt="Portfolio Image"
              className="w-full h-auto"
            />
          </div>
          <h1 className="items-center justify-center flex text-center pt-10 text-4xl font-bold text-gray-900">
            Welcome to our Project{' '}
          </h1>
          <p className="text-xl text-gray-600 text-left float-left">
            Introduce our team proect.
          </p>
          <button className="bg-blue-200 text-white px-4 py-2 float-right rounded-md hover:bg-dark-700 focus:outline-none">
            Project Pages
          </button>
        </div>
      </div>

      <div>
        <p className="items-center justify-center text-center text-4xl font-bold text-gray-900 pt-10">
          Project
        </p>
        <div className=" text-center flex flex-col items-center justify-center py-2 text-2xl">
          <p>중고 거래 플렛폼</p>
        </div>
      </div>

      <div>
        <p className="text-center text-4xl font-bold text-gray-900 pt-10">
          Project Team
        </p>
        <div className="text-center flex flex-col items-center justify-center py-2 text-2xl">
          <p>92015075 김평안</p>
          <p>92014966 김건희</p>
          <p>92015154 박준형</p>
          <p>92015192 신건훈</p>
        </div>
      </div>

      {/* 밑 메뉴 */}
      <div className="pt-10 mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            G0r4ni8{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Introducing G0r4ni8
          </p>
        </a>

        <a
          href="/project"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Project Team{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Introducing our Project Team
          </p>
        </a>

        <a
          href="https://hi-bald-person.tistory.com/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Blog{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Connect G0r4ni8's Blog page
          </p>
        </a>

        <a
          href="https://github.com/kigma00"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Github{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Connect G0r4ni8's github page
          </p>
        </a>
      </div>
    </main>
  )
}
export default ProjectPage
