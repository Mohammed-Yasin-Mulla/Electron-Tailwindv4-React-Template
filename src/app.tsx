import { createRoot } from "react-dom/client";
import React, { useState } from "react";

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Electron + React + Tailwind CSS
        </h1>
        <p className="text-gray-600 mb-4">
          Welcome to your Electron application with React and Tailwind CSS!
        </p>
        <div className="space-y-2">
          <div className="bg-blue-100 p-3 rounded">
            <span className="text-blue-800 font-medium">✅ React 19</span>
          </div>
          <div className="bg-green-100 p-3 rounded">
            <span className="text-green-800 font-medium">
              ✅ Tailwind CSS v4
            </span>
          </div>
          <div className="bg-purple-100 p-3 rounded">
            <span className="text-purple-800 font-medium">✅ TypeScript</span>
          </div>
        </div>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Click me! Count value {count}
        </button>
      </div>
    </div>
  );
};

export default App;

const root = createRoot(document.body);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
