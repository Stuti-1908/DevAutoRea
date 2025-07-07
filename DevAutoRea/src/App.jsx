import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [output, setOutput] = useState('');
  const [settings, setSettings] = useState('');
  const [showSettings, setShowSettings] = useState(true);

  const cardStyle = {
    background: '#fff',
    padding: '30px 20px',
    borderRadius: 14,
    boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '280px',
    flex: '1 1 400px',
    maxWidth: '500px',
    gap: 18,
    width: '100%',
  };

  const inputStyle = {
    padding: '10px 14px',
    borderRadius: 8,
    border: '1px solid #cbd5e1',
    background: '#f1f5f9',
    width: '100%',
    fontSize: 14,
    outline: 'none',
    color: '#0f172a',
  };

  const buttonStyle = {
    border: 'none',
    borderRadius: 6,
    padding: '10px 14px',
    fontWeight: 600,
    cursor: 'pointer',
    width: '100%',
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      backgroundColor: '#f8fafc',
      margin: 0,
      padding: 0,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#1e3a8a',
        padding: '20px 10px',
        textAlign: 'center',
        color: '#fff',
        fontSize: 'clamp(20px, 4vw, 28px)',
        fontWeight: 700,
        letterSpacing: 1,
        width: '100%',
        boxSizing: 'border-box',
      }}>
        Selvenza UI Tester
      </div>

      {/* Main Content */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        gap: '30px',
        flexWrap: 'wrap',
        width: '100%',
        minHeight: 'calc(100vh - 100px)',
        boxSizing: 'border-box',
        backgroundColor: '#f8fafc',
      }}>
        {/* === Left Section === */}
        <div style={cardStyle}>
          <input
            id="my-input"
            type="text"
            placeholder="Type something..."
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            style={inputStyle}
          />

          <button
            id="my-button"
            onClick={() => setOutput(`You typed: ${inputValue}`)}
            style={{
              ...buttonStyle,
              background: '#2563eb',
              color: '#fff'
            }}
          >
            Click Me
          </button>

          <button
            id="clear-button"
            onClick={() => {
              setInputValue('');
              setOutput('');
            }}
            style={{
              ...buttonStyle,
              background: '#e11d48',
              color: '#fff'
            }}
          >
            Clear
          </button>

          {output && (
            <div id="output" style={{
              color: '#0f172a',
              fontSize: 14
            }}>{output}</div>
          )}

          {/* Copilot bot message */}
          <div className="copilot-bot" style={{
            background: '#f1f5f9',
            borderRadius: 8,
            padding: '10px 16px',
            color: '#0f172a',
            marginTop: 8,
            fontStyle: 'italic',
            width: '100%',
            textAlign: 'left'
          }}>
            Hello, There!
          </div>
        </div>

        {/* === Right Section (Settings) === */}
        <div style={cardStyle}>
          <button
            id="settings-toggle"
            onClick={() => setShowSettings(!showSettings)}
            style={{
              ...buttonStyle,
              background: '#0ea5e9',
              color: '#fff'
            }}
          >
            {showSettings ? 'Hide Settings' : 'Show Settings'}
          </button>

          {showSettings && (
            <>
              <h2 style={{ color: '#2563eb', alignSelf: 'flex-start', margin: 0 }}>Settings</h2>

              <input
                id="settings-input"
                type="text"
                placeholder="Enter setting..."
                value={settings}
                onChange={e => setSettings(e.target.value)}
                style={inputStyle}
              />

              <button
                id="settings-save"
                onClick={() => setOutput(`Settings saved: ${settings}`)}
                style={{
                  ...buttonStyle,
                  background: '#22c55e',
                  color: '#fff'
                }}
              >
                Save Settings
              </button>

              <div id="settings-status" style={{
                color: '#334155',
                fontSize: 14,
                alignSelf: 'flex-start'
              }}>
                {settings && `Current: ${settings}`}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;