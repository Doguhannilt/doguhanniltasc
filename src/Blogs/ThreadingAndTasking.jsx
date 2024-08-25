import React from 'react';

const ThreadingAndTasking = () => {
  return (
    <div className="font-mono text-gray-300  p-6 rounded-lg shadow-md">
      <h1 className="text-green-400 text-2xl font-bold mb-6">Multitasking vs Multithreading</h1>
      
      <h2 className="text-green-300 text-xl font-semibold mb-4">Multitasking Examples:</h2>
      <ul className="list-disc pl-6 space-y-4">
        <li className="text-gray-200">
          <strong className="text-green-400">Office Computer Usage:</strong>
          <p className="mt-2">
            <strong>Situation:</strong> On a typical office computer, you might be running several applications simultaneously. For example, you could have a word processor open for document editing, and an email client open for managing your emails. You might also have a web browser open for researching or browsing the internet.
          </p>
          <p className="mt-2">
            <strong>Operation:</strong> The operating system manages these applications using multitasking. It allocates CPU time to each application in small slices, creating the illusion of simultaneous execution. This allows you to switch between tasks smoothly.
          </p>
          <p className="mt-2 text-red-400">
            <strong>Potential Issue:</strong> If too many applications are running, it can cause the system to slow down or become unresponsive due to excessive context switching and resource contention.
          </p>
        </li>
        <li className="text-gray-200">
          <strong className="text-green-400">Server Operations:</strong>
          <p className="mt-2">
            <strong>Situation:</strong> A single physical server may host multiple virtual servers, each handling different services such as web requests, database queries, and file storage.
          </p>
          <p className="mt-2">
            <strong>Operation:</strong> Multitasking ensures each virtual server gets adequate CPU time and resources. The OS uses techniques like virtual memory and process isolation to manage resources effectively.
          </p>
          <p className="mt-2 text-red-400">
            <strong>Potential Issue:</strong> Mismanagement of resources or high demand can lead to performance degradation if the OS fails to balance loads properly.
          </p>
        </li>
      </ul>
      
      <h2 className="text-green-300 text-xl font-semibold mt-6 mb-4">Multithreading Examples:</h2>
      <ul className="list-disc pl-6 space-y-4">
        <li className="text-gray-200">
          <strong className="text-green-400">Web Browser Tabs:</strong>
          <p className="mt-2">
            <strong>Situation:</strong> Modern web browsers allow multiple tabs to be open at once, each running different web pages and handling various tasks.
          </p>
          <p className="mt-2">
            <strong>Operation:</strong> Multithreading enables the browser to run each tab in its own thread or process, improving performance and stability. Each thread handles tasks like rendering content and processing user inputs independently.
          </p>
          <p className="mt-2 text-red-400">
            <strong>Potential Issue:</strong> If a tab or thread experiences issues, it might affect performance, but process isolation can help mitigate this risk.
          </p>
        </li>
        <li className="text-gray-200">
          <strong className="text-green-400">Game Application:</strong>
          <p className="mt-2">
            <strong>Situation:</strong> Video games often perform multiple complex tasks simultaneously, such as rendering graphics, processing inputs, and running game logic.
          </p>
          <p className="mt-2">
            <strong>Operation:</strong> Multithreading allows games to handle these tasks in parallel, improving performance and reducing lag. Separate threads manage different aspects of the game to ensure a smooth experience.
          </p>
          <p className="mt-2 text-red-400">
            <strong>Potential Issue:</strong> Poorly managed threads or synchronization issues can lead to performance bottlenecks or inconsistencies in the game.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default ThreadingAndTasking;
