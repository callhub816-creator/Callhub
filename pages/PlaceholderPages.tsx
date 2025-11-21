import React from 'react';
import { Mic, Video, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const VoiceCall: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-neon-purple/5 pointer-events-none animate-pulse"></div>
      
      <div className="w-48 h-48 rounded-full bg-gradient-to-br from-neon-pink to-purple-900 p-1 animate-pulse mb-8 shadow-[0_0_50px_rgba(255,0,255,0.4)] relative">
         <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
            <img src="https://picsum.photos/seed/lia/400/400" className="opacity-50 w-full h-full object-cover" />
            <Mic className="absolute text-white w-16 h-16 z-10" />
         </div>
         {/* Wave animation rings */}
         <div className="absolute inset-0 border-4 border-neon-pink rounded-full animate-[ping_2s_linear_infinite]"></div>
      </div>

      <h1 className="text-3xl font-display font-bold mb-2">Voice Call</h1>
      <p className="text-gray-400 mb-8">Connecting to secure neural line...</p>
      
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 hover:text-white">
        <ArrowLeft size={20} /> End Call
      </button>
    </div>
  );
};

export const VideoCall: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
       <div className="relative w-full max-w-sm aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden border border-neon-blue shadow-2xl mb-6">
          <img src="https://picsum.photos/seed/lia/400/600" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="bg-black/60 backdrop-blur p-6 rounded-xl border border-white/10">
                <Video className="w-12 h-12 text-neon-blue mx-auto mb-2" />
                <h3 className="font-bold">Video Feed Inactive</h3>
                <p className="text-xs text-gray-400 mt-2">Upgrade to Ultra Plan to enable realtime video generation.</p>
             </div>
          </div>
          {/* UI Overlay */}
          <div className="absolute bottom-0 inset-x-0 p-6 flex justify-around bg-gradient-to-t from-black to-transparent">
             <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center cursor-pointer" onClick={() => navigate(-1)}>
                <Video size={20} className="text-white" />
             </div>
          </div>
       </div>
       <p className="text-gray-500 text-sm">CallHub.in Beta Video Protocol</p>
    </div>
  );
};