// App.tsx
import React from 'react';
import ContentGenerator from './components/ContentGenerator'; 
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Welcome to the AI Content Generator</h1>
      <ContentGenerator /> {/* Menampilkan komponen ContentGenerator */}
    </div>
  );
}

export default App;
