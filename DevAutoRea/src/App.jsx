import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [output, setOutput] = useState('');
  const [settings, setSettings] = useState('');
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div>
      <h1>Sample React App</h1>
      {/* Shared selector for cross-page scenario */}
      <input
        id="shared-input"
        type="text"
        placeholder="Shared input on home"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <input
        id="my-input"
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button
        id="my-button"
        onClick={() => setOutput(`You typed: ${inputValue}`)}
      >
        Click Me
      </button>
      <div id="output">{output}</div>
      {/* Class-based selector for automation testing */}
      <div className="copilot-bot">Hello, I am GitHub Copilot, your AI assistant!</div>

      <hr />

      <button id="settings_toggle" onClick={() => setShowSettings(s => !s)}>
        {showSettings ? 'Hide Settings' : 'Show Settings'}
      </button>
      {showSettings && (
        <div id="settings_panel">
          <h2>Settings</h2>
          <input
            id="settings_input"
            type="text"
            placeholder="Settings input"
            value={settings}
            onChange={e => setSettings(e.target.value)}
          />
          <button
            id="settings-save"
            onClick={() => setOutput(`Settings saved: ${settings}`)}
          >
            Save Settings
          </button>
          <div id="settings-status">{settings && `Current: ${settings}`}</div>
        </div>
      )}
    </div>
  );
}

export default App;
