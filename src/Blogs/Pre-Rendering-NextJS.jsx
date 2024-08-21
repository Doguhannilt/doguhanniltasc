import React from "react";

const PreRenderingMethods = () => {
  return (
    <div className="container mx-auto p-8 font-mono text-white">
      <h1 className="text-4xl font-bold mb-6">Pre-Rendering in Next.js</h1>

      {/* Static Generation (SG) Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Static Generation (SG)</h2>
        <p className="text-lg mb-4">
          Static Generation is a pre-rendering method where the HTML of a page
          is generated at build time. Once generated, the HTML is served to
          users on request, making it highly efficient for pages that don’t need
          frequent updates.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <span className="font-semibold">Build-Time Generation:</span> Pages
            are generated when the site is built, not when the user requests the
            page.
          </li>
          <li>
            <span className="font-semibold">Static Assets:</span> Generated
            HTML and assets are stored as static files and served quickly.
          </li>
          <li>
            <span className="font-semibold">Incremental Static Regeneration:</span> Allows updates to static pages after deployment by regenerating them in the background.
          </li>
        </ul>
        <h3 className="text-2xl font-semibold mb-2">When to Use SG:</h3>
        <ul className="list-disc list-inside">
          <li>Content that doesn’t change often, like blog posts or portfolios.</li>
          <li>SEO-focused pages that require fast load times.</li>
        </ul>
      </section>

      {/* Server-Side Rendering (SSR) Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Server-Side Rendering (SSR)</h2>
        <p className="text-lg mb-4">
          Server-Side Rendering is a method where the HTML is generated on each
          request. This is useful when the content of the page needs to change
          frequently or is specific to the user.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <span className="font-semibold">Dynamic Content:</span> HTML is generated on the server for each request.
          </li>
          <li>
            <span className="font-semibold">Personalized Pages:</span> Ideal for pages that display user-specific data, such as dashboards.
          </li>
          <li>
            <span className="font-semibold">Real-Time Data:</span> Used for pages that need up-to-date information, like news feeds.
          </li>
        </ul>
        <h3 className="text-2xl font-semibold mb-2">When to Use SSR:</h3>
        <ul className="list-disc list-inside">
          <li>Pages that require frequently updated or user-specific content.</li>
          <li>E-commerce product pages that show real-time stock or price information.</li>
        </ul>
          </section>
          <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Static Generation vs. Server-Side Rendering</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Static Generation Section */}
        <div className="p-6 rounded-lg shadow-md text-white">
          <h2 className="text-3xl font-semibold mb-4 text-blue-800">Static Generation (SG)</h2>
          <p className="text-lg mb-4">
            Static Generation pre-renders the page at build time. The generated HTML is served to the user on each request.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <span className="font-semibold">Build-Time Rendering:</span> HTML is generated during the build process and served as a static file.
            </li>
            <li>
              <span className="font-semibold">Performance:</span> Pages are served quickly from a CDN or static server, reducing server load.
            </li>
            <li>
              <span className="font-semibold">Use Case:</span> Ideal for pages with content that doesn’t change frequently, like blogs or portfolios.
            </li>
          </ul>
          <p className="text-gray-700">
            <strong>Example Use Case:</strong> A blog where new posts are added occasionally. The content is pre-rendered and updated periodically using Incremental Static Regeneration (ISR).
          </p>
        </div>

        {/* Server-Side Rendering Section */}
        <div className="p-6 rounded-lg shadow-md text-white">
          <h2 className="text-3xl font-semibold mb-4 text-green-800">Server-Side Rendering (SSR)</h2>
          <p className="text-lg mb-4">
            Server-Side Rendering generates the HTML on each request. The server creates the page dynamically based on the request's context.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <span className="font-semibold">Request-Time Rendering:</span> HTML is generated on-the-fly for each request, allowing for dynamic content.
            </li>
            <li>
              <span className="font-semibold">Performance:</span> Can be slower than SG due to on-the-fly rendering and server load. Caching strategies can help.
            </li>
            <li>
              <span className="font-semibold">Use Case:</span> Ideal for pages that need to reflect real-time data or user-specific content, like dashboards or personalized user pages.
            </li>
          </ul>
          <p className="text-gray-700">
            <strong>Example Use Case:</strong> A user dashboard displaying real-time data. The content is generated on each request to ensure it is up-to-date with the latest information.
          </p>
        </div>
      </div>
    </div>
      </div>
      
  );
};

export default PreRenderingMethods;
