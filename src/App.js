import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

function App() {
  const [readme, setReadme] = useState('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/yanivpaz/noa3/main/README.md')
      .then(response => response.text())
      .then(text => setReadme(text))
      .catch(error => console.error('Error fetching README:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Noa3 README Viewer</h1>
      </header>
      <main className="App-content">
        <div className="markdown-content">
          <ReactMarkdown>{readme}</ReactMarkdown>
        </div>
      </main>
    </div>
  );
}

export default App;