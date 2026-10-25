import { navigateTo } from '../utils/navigation';

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-[#070f1a] text-white flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm tracking-widest text-white/40 mb-4">THE JIMMY LAB</p>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Coming Soon.</h1>
      <p className="text-white/60 max-w-md mb-8">This section is being prepared and will be live soon. In the meantime, you can start a project with us from the home page.</p>
      <button onClick={() => navigateTo('/')} className="px-6 py-3 border border-white/35 hover:bg-white hover:text-black transition-colors font-mono text-sm tracking-wider">BACK TO HOME</button>
    </div>
  );
}
