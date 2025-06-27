import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [output, setOutput] = useState('');
  const [settings, setSettings] = useState('');
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)',
        fontFamily: 'Segoe UI, Arial, sans-serif',
      }}
    >
      <h1 style={{ color: '#2d3748', marginBottom: 24 }}>Sample React App</h1>
      <div style={{
        background: '#fff',
        padding: 32,
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: 320,
        gap: 16
      }}>
        {/* Shared selector for cross-page scenario */}
        <input
          id="shared-input"
          type="text"
          placeholder="Shared input on home"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          style={{
            padding: '8px 12px',
            borderRadius: 6,
            border: '1px solid #cbd5e1',
            marginBottom: 8,
            width: 220
          }}
        />
        <input
          id="my-input"
          type="text"
          placeholder="Type something..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          style={{
            padding: '8px 12px',
            borderRadius: 6,
            border: '1px solid #cbd5e1',
            marginBottom: 8,
            width: 220
          }}
        />
        <button
          id="my-button"
          onClick={() => setOutput(`You typed: ${inputValue}`)}
          style={{
            background: '#2563eb',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            padding: '8px 18px',
            cursor: 'pointer',
            marginBottom: 8
          }}
        >
          Click Me
        </button>
        <button
          id="clear-button"
          onClick={() => { setInputValue(''); setOutput(''); }}
          style={{
            background: '#e11d48',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            padding: '8px 18px',
            cursor: 'pointer',
            marginBottom: 8
          }}
        >
          Clear
        </button>
        <div id="output" style={{
          minHeight: 24,
          color: '#334155',
          fontWeight: 500
        }}>{output}</div>
        {/* Class-based selector for automation testing */}
        <div className="copilot-bot" style={{
          background: '#f1f5f9',
          borderRadius: 8,
          padding: '8px 16px',
          color: '#0f172a',
          marginTop: 8,
          fontStyle: 'italic'
        }}>
          Hello, There!
        </div>
        <hr style={{ width: '100%', margin: '24px 0', border: 'none', borderTop: '1px solid #e2e8f0' }} />
        <button
          id="settings-toggle"
          onClick={() => setShowSettings(s => !s)}
          style={{
            background: '#0ea5e9',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            padding: '8px 18px',
            cursor: 'pointer',
            marginBottom: 8
          }}
        >
          {showSettings ? 'Hide Settings' : 'Show Settings'}
        </button>
        {showSettings && (
          <div id="settings-panel" style={{
            background: '#f9fafb',
            borderRadius: 10,
            padding: 20,
            marginTop: 8,
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            width: 260,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10
          }}>
            <h2 style={{ color: '#2563eb', marginBottom: 10 }}>Settings</h2>
            <input
              id="settings-input"
              type="text"
              placeholder="Settings input"
              value={settings}
              onChange={e => setSettings(e.target.value)}
              style={{
                padding: '8px 12px',
                borderRadius: 6,
                border: '1px solid #cbd5e1',
                marginBottom: 8,
                width: 180
              }}
            />
            <button
              id="settings_save"
              onClick={() => setOutput(`Settings saved: ${settings}`)}
              style={{
                background: '#22c55e',
                color: '#fff',
                border: 'none',
                borderRadius: 6,
                padding: '8px 18px',
                cursor: 'pointer'
              }}
            >
              Save Settings
            </button>
            <div id="settings-status" style={{
              color: '#64748b',
              marginTop: 6
            }}>{settings && `Current: ${settings}`}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;