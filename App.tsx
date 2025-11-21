import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Chat from './pages/Chat';
import CharacterList from './pages/CharacterList';
import Dashboard from './pages/Dashboard';
import Creator from './pages/Creator';
import Subscription from './pages/Subscription';
import { VoiceCall, VideoCall } from './pages/PlaceholderPages';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/chat/:characterId" element={<Chat />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/creator" element={<Creator />} />
          <Route path="/subscribe" element={<Subscription />} />
          <Route path="/voice" element={<VoiceCall />} />
          <Route path="/video" element={<VideoCall />} />
          {/* SEO Redirects */}
          <Route path="/lia-ai-girlfriend" element={<Navigate to="/chat/1" replace />} />
          <Route path="/aria-dominant-ai" element={<Navigate to="/chat/2" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;