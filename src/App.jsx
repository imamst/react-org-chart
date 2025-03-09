import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // design reference: https://dribbble.com/shots/25289248-HR-Management-Organization-chart
    <div>
      <div class="flex justify-center items-center min-h-screen bg-gray-100">

        <div class="relative bg-white shadow-md rounded-lg px-4 pt-4 pb-6 flex items-center space-x-4 w-80">
          <img src="./profile.jpg" alt="Profile Picture" class="w-12 h-12 rounded-full object-cover" />

          <div class="flex-1">
            <h2 class="text-gray-900 font-semibold">Mike Perkins</h2>
            <div class="flex items-center space-x-2">
              <p class="text-gray-500 text-sm">Head of Sales</p>
              <p class="text-red-600 text-sm flex items-center">
                <span class="w-2 h-2 bg-red-600 rounded-full mr-1"></span> Sales
              </p>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <button
              className="text-2xl p-2 bg-transparent border-none cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              &#8942;
            </button>
            {isOpen && (
              <div className="absolute top-10 left-0 bg-white rounded-lg shadow-lg w-40">
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100" onClick={() => alert('Action 1')}>Action 1</button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100" onClick={() => alert('Action 2')}>Action 2</button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100" onClick={() => alert('Action 3')}>Action 3</button>
              </div>
            )}
          </div>

          <div class="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
            <button class="bg-white text-gray-700 px-3 py-1 rounded-full text-xs flex items-center drop-shadow-md cursor-pointer">
              +8 <span class="ml-2">▼</span>
            </button>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center h-screen bg-gray-100">
        <div class="max-w-sm w-full bg-white rounded-xl shadow-lg border border-orange-300">
          <div class="flex items-center justify-between p-4 bg-orange-50 rounded-t-xl">
            <div class="flex items-center space-x-3">
              <img src="./profile.jpg" alt="Profile" class="w-10 h-10 rounded-full" />
              <div>
                <p class="text-gray-900 font-semibold">Susan Smith</p>
                <p class="text-gray-500 text-sm">UI Team Lead • <span class="text-orange-500">Design</span></p>
              </div>
            </div>
            <a href="#" class="text-blue-500 text-sm font-medium">View ↗</a>
          </div>

          <div class="p-4 space-y-3">
            <div class="flex items-center space-x-3 text-gray-700">
              <span class="text-lg">📧</span>
              <p class="text-sm">susan.smith@gmail.com</p>
            </div>
            <div class="flex items-center space-x-3 text-gray-700">
              <span class="text-lg">📱</span>
              <p class="text-sm">+45 63 81 04 92</p>
            </div>
            <div class="flex items-center space-x-3 text-gray-700">
              <span class="text-lg">🌍</span>
              <p class="text-sm">Copenhagen, Denmark</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
