import Click from './components/Click.tsx';
import NoteApp from './components/NoteApp.tsx';

const App = () => {
  return (
    <div className="flex min-h-screen bg-white border-r border-gray-300">
      {/* Left Half - Note App */}
      <div className="w-1/2 flex items-center justify-center">
        <NoteApp />
      </div>
      {/* Middle Border */}
      <div className="w-px bg-gray-300"></div>
      {/* Right Half - Click Component */}
      <div className="w-1/2 flex items-center justify-center">
        <Click />
      </div>
    </div>
  );
};

export default App;