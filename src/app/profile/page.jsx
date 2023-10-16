import React from 'react'

const ProfilePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex lg:mb-6">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          WebSecurityProgramming&nbsp;
          <code className="font-mono font-bold">/ Profile</code>
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

      {/* 프사 + 간단 자기소개 */}
      <p className="text-center lg:max-w-7xl lg:w-full mx-auto lg:text-left text-4xl font-bold text-gray-900 flo">
        Profile.
      </p>
      <div className="lg:flex lg:flex-row lg:bg-none">
        <div className="lg:float-left">
          <img
            src="/image/white_gora.jpg"
            alt="프로필이미지"
            className="lg:mb-4 mt-4 lg:mr-8 mx-auto lg:w-2/6"
          />
        </div>

        <div className="lg:float-right mb-4 mt-4 text-center lg:max-w-5xl lg:w-full lg:mb-0 text-2xl lg:text-left  flex flex-col space-y-5">
          <h3>Name : 김건희</h3>
          <h3>Birth : 2000.XX.XX</h3>
          <h3>Phone : 010-XXXX-XXXX</h3>
          <h3>Email : abc123@gmail.com</h3>
          <h3>Study : Reversing, Develop</h3>
        </div>
      </div>

      {/* 프로필 밑  */}

      <div className="text-center lg:max-w-7xl lg:w-full text-2xl mx-auto">
        <p className="lg:text-left text-4xl font-bold text-gray-900 flo">
          Edu.
        </p>
        <p className="floa">2013.02 Neunggok Elementary School</p>
        <p className="floa">2016.02 Neunggok Middle School</p>
        <p className="floa">2019.02 Neunggok High School</p>
        <p className="floa">2020.03 JBU University</p>
      </div>
      <br />
      <br />
      <div className="text-center lg:max-w-7xl lg:w-full text-2xl mx-auto">
        <p className="lg:text-left text-4xl font-bold text-gray-900 flo">
          Career.
        </p>
        <p className="floa">2021.08 ~ 2023.03 SWC Cert</p>
        <p className="floa">2023.08 CodeGate Staff</p>
        <p className="floa">2023.09 ~ WhiteHat School</p>
      </div>
      <br />
      <br />

      {/* 하단바 */}
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="/profile"
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
export default ProfilePage
