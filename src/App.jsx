import { useState } from 'react';

function App() {
  const [color, setColor] = useState('');

  const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    const green = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    const blue = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    const newColor = `#${red}${green}${blue}`;
    setColor(newColor);
  };

  return (
    <div className="flex items-center justify-center h-screen px-6" style={{ backgroundColor: color }}>
      <div className="text-center">
        <button
          onClick={generateRandomColor}
          className="px-4 py-2 text-2xl font-bold text-white bg-black rounded-lg"
        >
          Generate Color
        </button>
        <p className="mt-4 text-xl font-medium">Current Color: {color}</p>
      </div>
    </div>
  );
}

export default App;

