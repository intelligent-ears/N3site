import { Shield, Terminal, Code, Zap, CheckCircle, Github, BookOpen, Download, ArrowRight, AlertTriangle, Lock, Search, FileCode, BarChart3, ExternalLink, Sparkles, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('cli');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNDgsIDIyNywgMjU1LCAwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50 pointer-events-none" />
      
      {/* Floating Orbs */}
      <div className="fixed top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="fixed bottom-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float [animation-delay:1s] pointer-events-none" />
      <div className="fixed top-1/2 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float [animation-delay:2s] pointer-events-none" />

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 border-b border-cyan-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-40 group-hover:opacity-100 transition-all duration-500" />
                <Shield className="w-10 h-10 text-cyan-400 relative group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              </div>
              <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent tracking-tight">
                N3
              </span>
              <span className="hidden sm:block px-3 py-1 text-xs font-bold bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-full border border-cyan-500/40 shadow-lg shadow-cyan-500/20 animate-pulse">
                Beta
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-semibold hover:text-cyan-400 transition-all duration-300 relative group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#quickstart" className="text-sm font-semibold hover:text-cyan-400 transition-all duration-300 relative group">
                Quick Start
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#docs" className="text-sm font-semibold hover:text-cyan-400 transition-all duration-300 relative group">
                Docs
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105 shadow-lg hover:shadow-cyan-500/20">
                <Github className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-sm font-semibold">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 sm:pt-40 pb-24 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/40 rounded-full text-cyan-400 text-sm mb-10 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg shadow-cyan-500/20 animate-fadeInUp">
            <Sparkles className="w-4 h-4 animate-glow" />
            <span className="font-bold">Built for ETHOnline 2025</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9] tracking-tighter animate-fadeInUp">
            <div className="relative inline-block">
              <span className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 blur-3xl opacity-40 animate-glow" />
              <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-gradient">
                Nuclei for Web3
              </span>
            </div>
          </h1>

          <p className="text-xl sm:text-2xl md:text-4xl text-slate-300 mb-5 max-w-4xl mx-auto font-medium animate-fadeInUp">
            Template-Based Security Scanner
          </p>

          <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-14 max-w-2xl mx-auto font-light animate-fadeInUp">
            From Development to Deployment - Continuous Security at Every Stage
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20 animate-fadeInUp">
            <a href="#quickstart" className="group relative w-full sm:w-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-all duration-500 animate-glow" />
              <div className="relative flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </a>
            <a href="#docs" className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/20">
              <BookOpen className="w-5 h-5" />
              Documentation
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-8 max-w-5xl mx-auto animate-fadeInUp">
            {[
              { value: '7+', label: 'CVE Templates', icon: Shield },
              { value: '5+', label: 'Security Checks', icon: Search },
              { value: '3', label: 'Report Formats', icon: FileCode },
              { value: '100%', label: 'Open Source', icon: Award }
            ].map((stat, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative p-6 sm:p-8 bg-slate-800/60 backdrop-blur-md rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-cyan-500/20">
                  <stat.icon className="w-7 h-7 text-cyan-400 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl sm:text-4xl font-black text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-slate-400 font-semibold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Why Choose N3?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl">
              Comprehensive security scanning with the flexibility of template-based detection
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileCode,
                title: 'Template-Based Detection',
                desc: 'Extensible YAML templates for defining custom security checks. Add your own rules without touching core code.',
                color: 'cyan'
              },
              {
                icon: Code,
                title: 'Smart Contract Analysis',
                desc: 'Deep Solidity analysis detecting reentrancy, access control, oracle manipulation, and more vulnerabilities.',
                color: 'blue'
              },
              {
                icon: Search,
                title: 'CVE Infrastructure Scanning',
                desc: 'HTTP-based vulnerability detection with Nuclei-style templates for deployed infrastructure.',
                color: 'cyan'
              },
              {
                icon: Terminal,
                title: 'Auto-Generated Tests',
                desc: 'Generate Hardhat security tests automatically from vulnerability findings for CI/CD.',
                color: 'blue'
              },
              {
                icon: BarChart3,
                title: 'Coverage Analysis',
                desc: 'Track security template coverage with detailed metrics by severity and category.',
                color: 'cyan'
              },
              {
                icon: Lock,
                title: 'Multi-Format Reports',
                desc: 'Export comprehensive security audits in HTML, JSON, or Markdown with visual dashboards.',
                color: 'blue'
              }
            ].map((feature, i) => (
              <div key={i} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color === 'cyan' ? 'from-cyan-500 to-blue-500' : 'from-blue-500 to-cyan-500'} rounded-3xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500`} />
                <div className="relative h-full p-8 bg-slate-800/80 backdrop-blur-md rounded-3xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-cyan-500/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <feature.icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-100 transition-colors">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-30 animate-glow" />
            <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-cyan-500/40 rounded-3xl p-8 sm:p-12 shadow-2xl">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                N3 vs Traditional Tools
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700/70">
                      <th className="text-left py-5 px-6 text-slate-300 font-bold text-lg">Feature</th>
                      <th className="text-center py-5 px-6 text-cyan-400 font-bold text-lg">N3</th>
                      <th className="text-center py-5 px-6 text-slate-400 font-bold text-lg">Others</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm sm:text-base">
                    {[
                      { name: 'Template-Based', n3: true, others: false },
                      { name: 'Smart Contract Scanning', n3: true, others: 'partial' },
                      { name: 'CVE Detection', n3: true, others: false },
                      { name: 'Auto-Generated Tests', n3: true, others: false },
                      { name: 'Coverage Analysis', n3: true, others: false },
                      { name: 'Multi-Format Reports', n3: true, others: 'partial' }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-800/50 hover:bg-cyan-500/5 transition-all duration-300">
                        <td className="py-5 px-6 font-semibold">{row.name}</td>
                        <td className="text-center py-5 px-6">
                          <div className="flex justify-center">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full flex items-center justify-center shadow-lg shadow-green-500/20 hover:scale-110 transition-transform duration-300">
                              <CheckCircle className="w-6 h-6 text-green-400" />
                            </div>
                          </div>
                        </td>
                        <td className="text-center py-5 px-6">
                          {row.others === true ? (
                            <div className="flex justify-center">
                              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/20">
                                <CheckCircle className="w-6 h-6 text-yellow-400" />
                              </div>
                            </div>
                          ) : row.others === 'partial' ? (
                            <div className="flex justify-center">
                              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/20">
                                <CheckCircle className="w-6 h-6 text-yellow-400" />
                              </div>
                            </div>
                          ) : (
                            <span className="text-slate-600 text-xs font-medium">Not included</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quickstart" className="py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-900/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Quick Start Guide
            </h2>
            <p className="text-slate-400 text-lg md:text-xl">Get up and running in minutes</p>
          </div>

          <div className="flex gap-4 justify-center flex-wrap mb-10">
            {['CLI Usage', 'Hardhat Plugin', 'CVE Scanning'].map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(['cli', 'hardhat', 'cve'][i])}
                className={`relative px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 ${
                  activeTab === ['cli', 'hardhat', 'cve'][i]
                    ? 'text-white scale-105'
                    : 'text-slate-400 hover:text-white hover:scale-105'
                }`}
              >
                {activeTab === ['cli', 'hardhat', 'cve'][i] && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/30" />
                )}
                {activeTab !== ['cli', 'hardhat', 'cve'][i] && (
                  <div className="absolute inset-0 bg-slate-800/60 border border-slate-700 rounded-xl hover:border-cyan-500/50 transition-all duration-300" />
                )}
                <span className="relative">{tab}</span>
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {activeTab === 'cli' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
                    <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-6 py-5 border-b border-slate-700/50 flex items-center gap-3">
                      <Terminal className="w-5 h-5 text-cyan-400" />
                      <span className="font-bold text-white text-lg">Installation</span>
                    </div>
                    <div className="p-6">
                      <pre className="text-sm text-slate-300 overflow-x-auto leading-relaxed">
{`# Install dependencies
npm install

# Build all packages
npm run build

# Make n3 globally available
mkdir -p ~/bin
ln -sf $(pwd)/bin/n3 ~/bin/n3
export PATH="$PATH:$HOME/bin"`}
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
                    <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-6 py-5 border-b border-slate-700/50 flex items-center gap-3">
                      <Zap className="w-5 h-5 text-cyan-400" />
                      <span className="font-bold text-white text-lg">Basic Scanning</span>
                    </div>
                    <div className="p-6">
                      <pre className="text-sm text-slate-300 overflow-x-auto leading-relaxed">
{`# Scan a single contract
n3 contracts/MyContract.sol

# Scan with debug output
n3 contracts/MyContract.sol -d

# Scan with specific templates
n3 contracts/MyContract.sol -t reentrancy,access

# Filter by severity
n3 contracts/MyContract.sol -s critical,high

# Export results
n3 contracts/MyContract.sol -o report.json -f json`}
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="relative bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/40 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <CheckCircle className="w-7 h-7 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-4 text-xl">Output Example</h4>
                      <pre className="text-sm text-slate-300 bg-slate-950/60 rounded-xl p-5 overflow-x-auto border border-slate-800 leading-relaxed">
{`🔍 Scanning VulnerableBank.sol...
📊 Found 7 vulnerabilities
🔥 Risk Score: 87.35/100 (CRITICAL)

🔴 Critical: 2 issues
🟠 High: 2 issues
✅ Scan completed in 2ms`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'hardhat' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-6 py-4 border-b border-slate-700/50 flex items-center gap-3">
                      <Download className="w-5 h-5 text-cyan-400" />
                      <span className="font-bold text-white">Installation</span>
                    </div>
                    <div className="p-6">
                      <pre className="text-sm text-slate-300">
{`npm install --save-dev @n3/hardhat-plugin`}
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-6 py-4 border-b border-slate-700/50 flex items-center gap-3">
                      <FileCode className="w-5 h-5 text-cyan-400" />
                      <span className="font-bold text-white">Configuration</span>
                    </div>
                    <div className="p-6">
                      <pre className="text-sm text-slate-300 overflow-x-auto">
{`require("@n3/hardhat-plugin");

module.exports = {
  solidity: "0.8.20",
  n3: {
    templates: "./n3-templates",
    severity: ["critical", "high", "medium"],
    failOnCritical: true
  }
};`}
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-6 py-4 border-b border-slate-700/50 flex items-center gap-3">
                      <Terminal className="w-5 h-5 text-cyan-400" />
                      <span className="font-bold text-white">Available Tasks</span>
                    </div>
                    <div className="p-6">
                      <pre className="text-sm text-slate-300 overflow-x-auto">
{`# Scan your contracts
npx hardhat n3:scan

# Generate security tests
npx hardhat n3:test --generate

# Run security tests
npx hardhat n3:test --run

# Comprehensive audit
npx hardhat n3:audit --output audit.html --format html

# Check coverage
npx hardhat n3:coverage --threshold 80`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'cve' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-6 py-4 border-b border-slate-700/50 flex items-center gap-3">
                      <AlertTriangle className="w-5 h-5 text-cyan-400" />
                      <span className="font-bold text-white">CVE Infrastructure Scanning</span>
                    </div>
                    <div className="p-6">
                      <pre className="text-sm text-slate-300 overflow-x-auto">
{`# Basic CVE scan
n3 cve http://example.com

# Scan with severity filtering
n3 cve http://example.com --severity critical,high

# Filter by tags
n3 cve http://example.com --tags exposure,keys

# Save results
n3 cve http://example.com --save report.json`}
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-6 py-4 border-b border-slate-700/50 flex items-center gap-3">
                      <Shield className="w-5 h-5 text-cyan-400" />
                      <span className="font-bold text-white">Included CVE Templates</span>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        { severity: 'HIGH', name: 'CVE-2022-40769', desc: 'Profanity weak cryptography detection', color: 'orange' },
                        { severity: 'CRITICAL', name: 'CVE-2023-PRIVATE-KEY', desc: 'Exposed Ethereum private keys', color: 'red' },
                        { severity: 'MEDIUM', name: 'CVE-2023-ETHERSCAN', desc: 'Exposed Etherscan API keys', color: 'yellow' }
                      ].map((cve, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-slate-950/50 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
                          <span className={`px-3 py-1 bg-${cve.color}-500/20 text-${cve.color}-400 text-xs font-bold rounded-lg border border-${cve.color}-500/30`}>
                            {cve.severity}
                          </span>
                          <div className="flex-1">
                            <div className="font-bold text-white mb-1">{cve.name}</div>
                            <div className="text-sm text-slate-400">{cve.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="docs" className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Documentation
            </h2>
            <p className="text-slate-400 text-lg md:text-xl">Comprehensive guides and references</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: 'CLI Guide', desc: 'Complete command-line interface usage' },
              { icon: Terminal, title: 'Hardhat Tasks', desc: 'Advanced task documentation' },
              { icon: AlertTriangle, title: 'CVE Testing', desc: 'CVE scanner setup guide' },
              { icon: FileCode, title: 'Template Creation', desc: 'Create custom security templates' },
              { icon: Code, title: 'API Reference', desc: 'Complete API documentation' },
              { icon: Github, title: 'Contributing', desc: 'Help improve N3' }
            ].map((doc, i) => (
              <a key={i} href="#" className="group relative block">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500" />
                <div className="relative h-full p-8 bg-slate-800/80 backdrop-blur-md rounded-3xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-cyan-500/20">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <doc.icon className="w-7 h-7 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-100 transition-colors">{doc.title}</h3>
                  <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{doc.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900/60 to-slate-950/60 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-30 animate-glow" />
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent leading-tight">
                Ready to Secure Your Web3 Project?
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 mb-10 font-light">
                Start scanning your smart contracts and infrastructure today
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <a href="#quickstart" className="group relative w-full sm:w-auto">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-all duration-500 animate-glow" />
                  <div className="relative flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
                    Get Started Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-white/5 border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/20">
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 px-4 sm:px-6 border-t border-slate-800/70 bg-slate-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-40" />
                <Shield className="w-8 h-8 text-cyan-400 relative" />
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">N3</span>
            </div>
            <div className="text-sm text-slate-500 font-medium">
              Built with <span className="text-red-400 animate-pulse">❤️</span> for ETHOnline 2025
            </div>
            <div className="flex items-center gap-8 text-sm text-slate-400 font-medium">
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">MIT License</a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Documentation</a>
              <a href="https://github.com" className="hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
