// import { ArrowRight, Shield, RefreshCcw, HeadsetIcon } from 'lucide-react';
// import Link from 'next/link';

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-[#002d6e] text-white">
//       {/* Hero Section */}
//       <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center gap-8 relative">
//         <h1 className="text-4xl md:text-6xl font-bold">
//           Welcome to Moniechoke
//         </h1>
//         <p className="text-xl text-white/80 max-w-2xl">
//           Experience modern banking with enterprise-grade security and reliability
//         </p>
//         <Link 
//           href="http://34.120.13.195"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block"
//         >
//           <button className="mt-8 px-8 py-4 bg-[#246df0] text-white rounded-full text-lg font-semibold hover:bg-[#246df0]/90 transition-colors flex items-center gap-2 group">
//             Access Your Account
//             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//           </button>
//         </Link>
//       </div>

//       {/* Features Section */}
//       <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="p-6 bg-white/10 rounded-lg shadow-lg border border-white/20 backdrop-blur-sm">
//           <Shield className="w-8 h-8 text-[#246df0] mb-4" />
//           <h3 className="text-xl font-semibold mb-4">Secure Banking</h3>
//           <p className="text-white/70">
//             Enterprise-grade security protocols to protect your financial data
//           </p>
//         </div>
//         <div className="p-6 bg-white/10 rounded-lg shadow-lg border border-white/20 backdrop-blur-sm">
//           <RefreshCcw className="w-8 h-8 text-[#246df0] mb-4" />
//           <h3 className="text-xl font-semibold mb-4">Easy Transfers</h3>
//           <p className="text-white/70">
//             Send and receive money instantly with zero hassle
//           </p>
//         </div>
//         <div className="p-6 bg-white/10 rounded-lg shadow-lg border border-white/20 backdrop-blur-sm">
//           <HeadsetIcon className="w-8 h-8 text-[#246df0] mb-4" />
//           <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
//           <p className="text-white/70">
//             Round-the-clock customer service for your banking needs
//           </p>
//         </div>
//       </div>

//       {/* Trust Section */}
//       <div className="container mx-auto px-4 py-16 text-center">
//         <h2 className="text-3xl font-bold mb-8">Trusted by Thousands</h2>
//         <div className="flex justify-center items-center gap-8 flex-wrap">
//           <div className="p-6 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
//             <p className="text-4xl font-bold text-[#246df0]">99.9%</p>
//             <p className="text-sm text-white/70">Uptime</p>
//           </div>
//           <div className="p-6 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
//             <p className="text-4xl font-bold text-[#246df0]">10K+</p>
//             <p className="text-sm text-white/70">Active Users</p>
//           </div>
//           <div className="p-6 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
//             <p className="text-4xl font-bold text-[#246df0]">$1M+</p>
//             <p className="text-sm text-white/70">Daily Transactions</p>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="container mx-auto px-4 py-8 mt-16 border-t border-white/20">
//         <div className="flex justify-between items-center flex-wrap gap-4">
//           <p className="text-sm text-white/70">
//             © 2024 Bank of Anthos. All rights reserved.
//           </p>
//           <div className="flex gap-4">
//             <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
//               Privacy Policy
//             </a>
//             <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
//               Terms of Service
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

import { ArrowRight, Shield, RefreshCcw, HeadsetIcon } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#002d6e] text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center gap-8 relative">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to Moniechoke Banking
        </h1>
        <p className="text-xl text-white/80 max-w-2xl">
          Experience modern banking with enterprise-grade security and reliability
        </p>
        <Link 
          href="http://34.9.39.47"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <button className="mt-8 px-8 py-4 bg-[#246df0] text-white rounded-full text-lg font-semibold hover:bg-[#246df0]/90 transition-colors flex items-center gap-2 group">
            Access Your Account
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white/10 rounded-lg shadow-lg border border-white/20 backdrop-blur-sm">
          <Shield className="w-8 h-8 text-[#246df0] mb-4" />
          <h3 className="text-xl font-semibold mb-4">Secure Banking</h3>
          <p className="text-white/70">
            Enterprise-grade security protocols to protect your financial data
          </p>
        </div>
        <div className="p-6 bg-white/10 rounded-lg shadow-lg border border-white/20 backdrop-blur-sm">
          <RefreshCcw className="w-8 h-8 text-[#246df0] mb-4" />
          <h3 className="text-xl font-semibold mb-4">Easy Transfers</h3>
          <p className="text-white/70">
            Send and receive money instantly with zero hassle
          </p>
        </div>
        <div className="p-6 bg-white/10 rounded-lg shadow-lg border border-white/20 backdrop-blur-sm">
          <HeadsetIcon className="w-8 h-8 text-[#246df0] mb-4" />
          <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
          <p className="text-white/70">
            Round-the-clock customer service for your banking needs
          </p>
        </div>
      </div>

      {/* Trust Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Trusted by Thousands</h2>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <div className="p-6 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
            <p className="text-4xl font-bold text-[#246df0]">99.9%</p>
            <p className="text-sm text-white/70">Uptime</p>
          </div>
          <div className="p-6 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
            <p className="text-4xl font-bold text-[#246df0]">10K+</p>
            <p className="text-sm text-white/70">Active Users</p>
          </div>
          <div className="p-6 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
            <p className="text-4xl font-bold text-[#246df0]">$1M+</p>
            <p className="text-sm text-white/70">Daily Transactions</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-white/20">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <p className="text-sm text-white/70">
            © 2025 Moniechoke. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}