import React from "react"

const DocsPage = () => {
  return (
    <div className="py-10 min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white mb-8">
          Documentation
        </h1>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Hello! Im Kartik, a passionate Full Stack Developer with a strong
            foundation in both front-end and back-end technologies. I specialize
            in building scalable, maintainable, and reliable applications.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-4">
            About My Project
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My project is a full-stack web application that allows users to
            authenticate, interact with dynamic content, and enjoy a smooth user
            experience. Im using the MERN stack and Next.js to create a modern,
            dynamic web app.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-4">
            Technologies Used
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-600 dark:text-gray-400 space-y-2">
            <li>
              <strong>Next.js</strong>: A powerful React framework for building
              dynamic, fast, and SEO-friendly applications.
            </li>
            <li>
              <strong>Tailwind CSS</strong>: A utility-first CSS framework used
              for styling components and ensuring a responsive design.
            </li>
            <li>
              <strong>MongoDB</strong>: A NoSQL database for storing application
              data.
            </li>
            <li>
              <strong>Express</strong>: A backend web framework for building
              APIs.
            </li>
            <li>
              <strong>React</strong>: A JavaScript library for building user
              interfaces with a component-based architecture.
            </li>
            <li>
              <strong>Prisma</strong>: An ORM for handling database queries in a
              type-safe manner.
            </li>
            <li>
              <strong>JWT</strong>: JSON Web Tokens for authentication and
              session management.
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default DocsPage
