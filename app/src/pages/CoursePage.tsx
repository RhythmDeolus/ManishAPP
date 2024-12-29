export default function CoursePage() {
  return (
    <>
      <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img className="w-full dark:hidden" src="/mit.png" alt="" />
              <img className="w-full hidden dark:block" src="/mit.png" alt="" />
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                Master of Computer Science
              </h1>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
              MIT (USA)
              </p>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                  $15,000/year
                </p>
              </div>

              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Start Date: September 1, 2024
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Apply By: June 30, 2024
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Duration: 2 years
                  </p>
                </div>
              </div>

              <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

              <p className="mb-6 text-gray-500 dark:text-gray-400">
                This program provides a comprehensive foundation in computer science, with a focus on software development, data structures, algorithms, and system design.
              </p>

              <p className="text-gray-500 dark:text-gray-400">
                Graduates will be prepared for careers in software engineering, data science, and other technology-related fields.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
