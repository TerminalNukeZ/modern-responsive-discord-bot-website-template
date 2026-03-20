/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Shield, 
  Music, 
  Mic2, 
  Globe, 
  MessageSquare, 
  Gamepad2, 
  Bell, 
  Users, 
  Layers, 
  ArrowRight,
  ExternalLink,
  Search,
  Volume2,
  TrendingUp,
  Image as ImageIcon,
  Languages,
  MoreHorizontal,
  CheckCircle2,
  Layout,
  Lock,
  Eye,
  Plus,
  Minus,
  Link,
  Folder,
  Settings,
  Instagram,
  Twitch,
  Share2,
  ChevronDown,
  ChevronRight,
  BookOpen,
  HelpCircle,
  Terminal,
  Info
} from "lucide-react";

const INVITE_LINK = "https://discord.com/oauth2/authorize?client_id=1367519816792936479&scope=bot&permissions=8";
const SUPPORT_SERVER = "https://dsc.gg/furiouss";

const Navbar = ({ setView, currentView }: { setView: (v: string) => void, currentView: string }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
    <div className="flex items-center justify-between w-full max-w-6xl px-6 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full">
      <div 
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setView('home')}
      >
        <img src="/furious.gif" alt="Furious Logo" className="w-8 h-8 rounded-lg" referrerPolicy="no-referrer" />
        <span className="text-xl font-bold tracking-tight text-white">Furious</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
        <button 
          onClick={() => setView('home')}
          className={`hover:text-white transition-colors ${currentView === 'home' ? 'text-white' : ''}`}
        >
          Home
        </button>
        <button 
          onClick={() => setView('commands')}
          className={`hover:text-white transition-colors ${currentView === 'commands' ? 'text-white' : ''}`}
        >
          Commands
        </button>
        <a href={SUPPORT_SERVER} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Status</a>
        <button 
          onClick={() => setView('docs')}
          className={`hover:text-white transition-colors ${currentView === 'docs' ? 'text-white' : ''}`}
        >
          Docs
        </button>
        <button 
          onClick={() => setView('faq')}
          className={`hover:text-white transition-colors ${currentView === 'faq' ? 'text-white' : ''}`}
        >
          FAQ
        </button>
      </div>

      <a 
        href={INVITE_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-2 bg-[#5865F2] hover:bg-[#4752C4] text-white text-sm font-semibold rounded-full transition-all shadow-lg shadow-[#5865F2]/20"
      >
        <Layout className="w-4 h-4" />
        Dashboard
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-40 pb-20 px-6 overflow-hidden">
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-white leading-[0.9] mb-6">
          Furious is <br />
          Discord's <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
            premier all-in-one
          </span>
        </h1>
        <p className="text-xl text-white/50 max-w-md mb-10 leading-relaxed">
          Meet the leading bot for management and engagement. Built to elevate your community's experience and streamline server management.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href={INVITE_LINK}
            className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-2xl border border-white/10 transition-all"
          >
            <MessageSquare className="w-5 h-5" />
            Invite to Discord
          </a>
          <a 
            href="#"
            className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-2xl border border-white/10 transition-all"
          >
            <TrendingUp className="w-5 h-5" />
            Vote
          </a>
        </div>
      </motion.div>

      <div className="relative hidden lg:block">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10"
        >
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full" />
          
          <div className="space-y-4">
            <div className="flex justify-end">
              <div className="bg-[#1a1a1a] border border-white/10 p-4 rounded-2xl flex items-center gap-3 shadow-2xl transform hover:scale-105 transition-transform cursor-default">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Bell className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-white font-medium">Giveaways</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-[#1a1a1a] border border-white/10 p-4 rounded-2xl flex items-center gap-3 shadow-2xl transform hover:scale-105 transition-transform cursor-default">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Layers className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-white font-medium">And More...</span>
              </div>
            </div>
            <div className="flex justify-end pr-12">
              <div className="bg-[#1a1a1a] border border-white/10 p-4 rounded-2xl flex items-center gap-3 shadow-2xl transform hover:scale-105 transition-transform cursor-default">
                <div className="p-2 bg-indigo-500/20 rounded-lg">
                  <Settings className="w-5 h-5 text-indigo-400" />
                </div>
                <span className="text-white font-medium">Pagination</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-12 border-y border-white/5 bg-black/20">
    <div className="max-w-6xl mx-auto px-6">
      <p className="text-center text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-8">
        POWERING 30,000+ USERS ACROSS 534+ COMMUNITIES
      </p>
      <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
        {/* Mocking the server list from the screenshot */}
        {[
          { name: "Server Keren", members: "12,345" },
          { name: "Fanum Troupe", members: "71,529" },
          { name: "DeeBlock", members: "32,995" },
          { name: "LUCKI", members: "13,182" },
          { name: "IShowSpeed", members: "798,458" },
        ].map((server, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 overflow-hidden">
              <img src={`https://picsum.photos/seed/${server.name}/100/100`} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-none">{server.name}</p>
              <p className="text-[10px] text-white/50">{server.members} members</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description, children, className = "" }: any) => (
  <div className={`bg-[#0a0a0a] border border-white/5 rounded-[32px] p-8 overflow-hidden relative group ${className}`}>
    <div className="relative z-10">
      <div className="mb-4">
        <Icon className="w-8 h-8 text-purple-400" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/50 text-sm leading-relaxed mb-6">{description}</p>
      {children}
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>
);

const ModerationSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="p-4 bg-purple-500/10 rounded-2xl mb-6 border border-purple-500/20">
          <Lock className="w-8 h-8 text-purple-400" />
        </div>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">Premium Moderation and Security</h2>
        <p className="text-white/50 max-w-2xl">We provide you with the best tools, to keep your community clean and secure.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <FeatureCard 
          icon={Shield}
          title="Filters"
          description="Keep any chat clean with our many automated filtering system."
        >
          <div className="relative h-48 mt-8 flex items-center justify-center">
            <div className="absolute w-px h-full bg-white/10" />
            <div className="absolute h-px w-full bg-white/10" />
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="p-2 bg-black/60 border border-white/10 rounded-lg flex items-center gap-2 text-[10px] text-white/70">
                <Link className="w-3 h-3 text-purple-400" /> Links
              </div>
              <div className="p-2 bg-black/60 border border-white/10 rounded-lg flex items-center gap-2 text-[10px] text-white/70">
                <Users className="w-3 h-3 text-purple-400" /> @ Mass Mentions
              </div>
              <div className="p-2 bg-black/60 border border-white/10 rounded-lg flex items-center gap-2 text-[10px] text-white/70">
                <Eye className="w-3 h-3 text-purple-400" /> Spoilers
              </div>
              <div className="p-2 bg-black/60 border border-white/10 rounded-lg flex items-center gap-2 text-[10px] text-white/70">
                <MessageSquare className="w-3 h-3 text-purple-400" /> Invites
              </div>
            </div>
            <Plus className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 text-purple-400" />
          </div>
        </FeatureCard>

        <FeatureCard 
          icon={Shield}
          title="Fake Permissions"
          description="Remove all dangerous Discord permissions that can be used for malicious reasons through API."
        >
          <div className="mt-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-2xl absolute inset-0" />
              <div className="relative w-24 h-28 bg-[#1a1a1a] border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl">
                <Lock className="w-10 h-10 text-purple-400" />
              </div>
            </div>
          </div>
        </FeatureCard>

        <FeatureCard 
          icon={Shield}
          title="Anti-Nuke"
          description="Easily prevent your server from malicious attacks and griefing, with a customizable threshold set by you."
        >
          <div className="mt-8 relative h-40">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="absolute top-0 left-1/2 -translate-x-1/2 border border-white/10 rounded-full" 
                style={{ width: `${i * 60}px`, height: `${i * 60}px`, opacity: 1 - i * 0.2 }} 
              />
            ))}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.5)]" />
            <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-purple-500 rounded-full" />
            <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-purple-500 rounded-full" />
          </div>
        </FeatureCard>

        <FeatureCard 
          icon={Shield}
          title="Anti-Raid"
          description="Protect against targeted bot raids on your server, with our mass join, aware and account age anti-raid filters."
        >
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-600/20 to-transparent rounded-2xl border border-white/10 flex items-center justify-center">
              <div className="relative">
                <Users className="w-10 h-10 text-white/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-px bg-white/40 rotate-45" />
                </div>
              </div>
            </div>
          </div>
        </FeatureCard>
      </div>

      <div className="mt-12 flex justify-center">
        <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold rounded-2xl border border-white/10 transition-all">
          100+ more commands <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </section>
);

const Integrations = () => (
  <section className="py-24 px-6 bg-black/40">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">Integrations with your favorite Platforms</h2>
        <p className="text-white/50">Effortlessly track, view, search, play, notify updates and more from many platforms.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { name: "Twitch", color: "text-purple-400", desc: "Get stream notifications and status.", icon: Twitch },
          { name: "TikTok", color: "text-cyan-400", desc: "Search profile, Track Feeds and Get notification post.", icon: Share2 },
          { name: "Instagram", color: "text-pink-400", desc: "Search profile, Track Feeds and Get notification post and status.", icon: Instagram },
          { name: "Pinterest", color: "text-red-400", desc: "Find images And Get notification post image.", icon: ImageIcon },
        ].map((platform, i) => (
          <div key={i} className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-6 hover:border-white/10 transition-all group">
            <div className={`w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <platform.icon className={`w-6 h-6 ${platform.color}`} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
            <p className="text-white/40 text-xs leading-relaxed">{platform.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Voicemaster = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="p-4 bg-purple-500/10 rounded-2xl mb-6 border border-purple-500/20">
          <Volume2 className="w-8 h-8 text-purple-400" />
        </div>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">Personal channels with Voicemaster</h2>
        <p className="text-white/50">Temporary personalized voice channels for your community.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-3 bg-[#0a0a0a] border border-white/5 rounded-[32px] p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">Voicemaster Interface</h3>
            <p className="text-white/50 text-sm leading-relaxed">Powerful control for your personalized channel with an intuitive, built-in chat interface.</p>
          </div>
          <div className="grid grid-cols-5 gap-3">
            {[Lock, Folder, Eye, Link, Mic2, TrendingUp, Users, Plus, Minus].map((Icon, i) => (
              <div key={i} className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <Icon className="w-4 h-4 text-white/60" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0a0a0a] border border-white/5 rounded-[32px] p-8">
          <h3 className="text-2xl font-bold text-white mb-2">Easy Setup</h3>
          <p className="text-white/50 text-sm leading-relaxed mb-8">Spend seconds not hours. One command, it's ready to go.</p>
          <div className="space-y-6 relative">
            <div className="absolute left-3 top-3 bottom-3 w-px bg-white/10" />
            {[
              "voicemaster setup",
              "Configured server",
              "Configured channels",
              "Voicemaster Setup Complete"
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-4 relative z-10">
                <div className="w-6 h-6 rounded-full bg-black border border-purple-500 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-xs text-white/70 font-mono">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-[#0a0a0a] border border-white/5 rounded-[32px] p-8">
          <h3 className="text-2xl font-bold text-white mb-2">Roles</h3>
          <p className="text-white/50 text-sm leading-relaxed mb-8">Grant custom roles to members joined in your voice channel.</p>
          <div className="bg-black/40 border border-white/5 rounded-2xl p-6 font-mono text-xs text-white/40 space-y-3">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3" /> VOICE CHANNELS</div>
            <div className="pl-4">+ JOIN TO CREATE</div>
            <div className="pl-8 flex items-center gap-2"><Users className="w-3 h-3" /> VC ROOM CHANNEL</div>
            <div className="pl-12 flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-white/10" /> JANCHAN
            </div>
            <div className="pl-12 flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-white/10" /> PATRICK
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold rounded-2xl border border-white/10 transition-all">
          20+ more commands <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </section>
);

const MusicSection = () => (
  <section className="py-24 px-6 bg-black/40">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="p-4 bg-purple-500/10 rounded-2xl mb-6 border border-purple-500/20">
          <Music className="w-8 h-8 text-purple-400" />
        </div>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">Music features built For Everyone</h2>
        <p className="text-white/50">Premium audio quality and commands for a superior music experience.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <FeatureCard 
          title="Preset Filters"
          description="On-the-fly generation to transform any music into an immersive listening experience."
          icon={Music}
          className="h-full"
        >
          <div className="mt-12 flex items-end gap-1 h-24">
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.div 
                key={i}
                animate={{ height: [20, 60, 30, 80, 40] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.05 }}
                className="flex-1 bg-purple-500/40 rounded-full"
              />
            ))}
          </div>
        </FeatureCard>

        <div className="space-y-6">
          <FeatureCard 
            title="Queue"
            description="Listen to music after music, uninterrupted, all day."
            icon={Music}
          >
            <div className="mt-4 bg-black/60 border border-white/10 rounded-xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Music className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-white">Taken Boy</p>
                <p className="text-[10px] text-white/40">Avey Tare — Co...Hourglass Pond</p>
              </div>
              <div className="flex gap-2">
                <Minus className="w-4 h-4 text-white/40" />
                <Plus className="w-4 h-4 text-white/40" />
              </div>
            </div>
          </FeatureCard>

          <FeatureCard 
            title="Spotify"
            description="Fully integrated and capable, with Spotify."
            icon={Music}
          >
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                <Globe className="w-8 h-8 text-black" />
              </div>
            </div>
          </FeatureCard>
        </div>
      </div>
    </div>
  </section>
);

const MoreFeatures = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">Countless more Features</h2>
        <p className="text-white/50">Never worry about needing another bot for anything else, we've got all your needs covered.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Globe, title: "Google", desc: "Reverse search images, query images or search Google for any web result." },
          { icon: Volume2, title: "Text To Speech", desc: "Convert text into a generated voice audio file, or have bleed speak it in any channel. Over 80+ voices." },
          { icon: TrendingUp, title: "Levels", desc: "Leveling system for the users in your server to level up and track experience." },
          { icon: Search, title: "Snipe", desc: "Advanced sniping system to get images, videos, edits & reactions." },
          { icon: Bell, title: "Giveaways", desc: "Host giveaways fast and easily for your server's members." },
          { icon: Gamepad2, title: "Games", desc: "Play blackjack and tic-tac-toe with your friends." },
          { icon: MessageSquare, title: "Auto Responders", desc: "Set up automatic replies to messages that match a trigger." },
          { icon: Bell, title: "Bump Reminder", desc: "Get reminders to #bump your server on Disboard." },
          { icon: TrendingUp, title: "Counters", desc: "Create counter channels for simple server statistics." },
          { icon: ImageIcon, title: "Image Manipulation", desc: "Edit images, videos and GIFs into memes easily." },
          { icon: Languages, title: "Translation", desc: "Translate text quickly. Over 100+ languages." },
          { icon: MoreHorizontal, title: "More...", desc: "And many other features ready to be explored!" },
        ].map((feature, i) => (
          <div key={i} className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all group">
            <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20 group-hover:scale-110 transition-transform">
              <feature.icon className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center gap-6">
        <h3 className="text-3xl font-bold text-white">Over 800+ Commands</h3>
        <button className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-2xl border border-white/10 transition-all">
          All Commands <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 px-6 bg-black/40">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="p-4 bg-purple-500/10 rounded-2xl mb-6 border border-purple-500/20">
          <Users className="w-8 h-8 text-purple-400" />
        </div>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">Loved and Trusted by the largest Servers</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            name: "Adin's Planet",
            members: "235K members",
            text: "“I've used Furious for over 2 years, and it's been a game changer. It saves time, keeps our server safe, and is super easy to use. For managing roles, moderating chat, or adding fun, Furious always delivers. Highly recommend it for improving any Discord server.”",
            author: "Jace",
            role: "Server Owner"
          },
          {
            name: "Ken Carson",
            members: "45K members",
            text: "“Utilizing Furious has been essential for managing my official artist server. It is the sole bot I rely on, and for only $30, you can unlock a lifetime of its powerful functionality.”",
            author: "VBX",
            role: "Server Owner"
          },
          {
            name: "5STAR",
            members: "203K members",
            text: "“For it's price, Furious puts most other Discord bots to shame. Every server that utilizes the bot just means potential in the long run. The antinuke functionality has saved servers countless times. Furious has become a standard in servers I enjoy and I would recommend it to anyone who uses Discord.”",
            author: "tumpy",
            role: "Server Manager"
          }
        ].map((t, i) => (
          <div key={i} className="bg-[#0a0a0a] border border-white/5 rounded-[32px] p-8 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden">
                <img src={`https://picsum.photos/seed/${t.name}/100/100`} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <CheckCircle2 className="w-3 h-3 text-green-400" />
                </div>
                <p className="text-[10px] text-white/40">{t.members}</p>
              </div>
            </div>
            <p className="text-sm text-white/60 italic leading-relaxed mb-8 flex-1">{t.text}</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 overflow-hidden">
                <img src={`https://picsum.photos/seed/${t.author}/100/100`} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">{t.author}</p>
                <p className="text-[10px] text-white/40">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border border-white/10 rounded-[40px] p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm -z-10" />
        <p className="text-white/60 mb-4">Enhance your community's experience.</p>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-10">Get Furious in your server today.</h2>
        <a 
          href={INVITE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-purple-600/20"
        >
          Get started
        </a>
      </div>
    </div>
  </section>
);

const Footer = ({ setView }: { setView: (v: string) => void }) => (
  <footer className="py-20 px-6 border-t border-white/5">
    <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
      <div className="md:col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <img src="/furious.gif" alt="Furious Logo" className="w-10 h-10 rounded-xl" referrerPolicy="no-referrer" />
          <span className="text-2xl font-bold tracking-tight text-white">Furious</span>
        </div>
        <p className="text-white/40 text-sm max-w-xs leading-relaxed">
          Copyright © 2026 Furious. <br />
          All rights reserved.
        </p>
      </div>

      <div>
        <h4 className="text-white font-bold mb-6">Bot</h4>
        <ul className="space-y-4 text-sm text-white/40">
          <li><a href={INVITE_LINK} className="hover:text-white transition-colors">Invite</a></li>
          <li><button onClick={() => setView('docs')} className="hover:text-white transition-colors">Documentation</button></li>
          <li><a href={SUPPORT_SERVER} className="hover:text-white transition-colors">Support Server</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-6">Legal</h4>
        <ul className="space-y-4 text-sm text-white/40">
          <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
        </ul>
      </div>
    </div>
  </footer>
);

const CommandsPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "General", "Moderation", "Music", "Utility", "Fun", "Economy"];
  
  const commands = [
    { name: "help", desc: "Shows the help menu", category: "General", usage: ".help [command]" },
    { name: "ping", desc: "Check the bot's latency", category: "General", usage: ".ping" },
    { name: "invite", desc: "Get the bot's invite link", category: "General", usage: ".invite" },
    { name: "stats", desc: "View bot statistics", category: "General", usage: ".stats" },
    { name: "ban", desc: "Ban a user from the server", category: "Moderation", usage: ".ban @user [reason]" },
    { name: "kick", desc: "Kick a user from the server", category: "Moderation", usage: ".kick @user [reason]" },
    { name: "mute", desc: "Mute a user in the server", category: "Moderation", usage: ".mute @user [time] [reason]" },
    { name: "unmute", desc: "Unmute a user in the server", category: "Moderation", usage: ".unmute @user" },
    { name: "warn", desc: "Warn a user in the server", category: "Moderation", usage: ".warn @user [reason]" },
    { name: "play", desc: "Play music in a voice channel", category: "Music", usage: ".play [song/url]" },
    { name: "skip", desc: "Skip the current song", category: "Music", usage: ".skip" },
    { name: "queue", desc: "View the music queue", category: "Music", usage: ".queue" },
    { name: "volume", desc: "Change the music volume", category: "Music", usage: ".volume [0-100]" },
    { name: "userinfo", desc: "Get information about a user", category: "Utility", usage: ".userinfo [@user]" },
    { name: "serverinfo", desc: "Get information about the server", category: "Utility", usage: ".serverinfo" },
    { name: "avatar", desc: "Get a user's avatar", category: "Utility", usage: ".avatar [@user]" },
    { name: "prefix", desc: "Change the bot's prefix", category: "Utility", usage: ".prefix [new_prefix]" },
    { name: "8ball", desc: "Ask the magic 8ball a question", category: "Fun", usage: ".8ball [question]" },
    { name: "meme", desc: "Get a random meme", category: "Fun", usage: ".meme" },
    { name: "coinflip", desc: "Flip a coin", category: "Fun", usage: ".coinflip" },
    { name: "balance", desc: "Check your economy balance", category: "Economy", usage: ".balance" },
    { name: "work", desc: "Work to earn money", category: "Economy", usage: ".work" },
    { name: "daily", desc: "Claim your daily reward", category: "Economy", usage: ".daily" },
  ];

  const filteredCommands = commands.filter(cmd => 
    (activeCategory === "All" || cmd.category === activeCategory) &&
    (cmd.name.toLowerCase().includes(search.toLowerCase()) || cmd.desc.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">Commands</h1>
        <p className="text-white/50">Explore the extensive list of features Furious offers.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 space-y-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`w-full text-left px-4 py-2 rounded-xl transition-all ${activeCategory === cat ? 'bg-purple-600 text-white' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex-1 space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
            <input 
              type="text" 
              placeholder="Search commands..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-purple-500 transition-all"
            />
          </div>

          <div className="grid gap-4">
            {filteredCommands.map(cmd => (
              <div key={cmd.name} className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all group">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="text-purple-400">.</span>{cmd.name}
                  </h3>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white/20 bg-white/5 px-2 py-1 rounded">
                    {cmd.category}
                  </span>
                </div>
                <p className="text-white/50 text-sm mb-4">{cmd.desc}</p>
                <div className="bg-black/40 rounded-lg p-3 font-mono text-xs text-purple-400/70 border border-white/5">
                  {cmd.usage}
                </div>
              </div>
            ))}
            {filteredCommands.length === 0 && (
              <div className="text-center py-20 text-white/30">
                No commands found matching your search.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const DocsPage = () => {
  const [activeTab, setActiveTab] = useState("Introduction");

  const sections = [
    {
      title: "Getting Started",
      items: ["Introduction", "Installation", "Configuration"]
    },
    {
      title: "Modules",
      items: ["Moderation", "Security", "Music", "Utility", "Economy"]
    },
    {
      title: "Advanced",
      items: ["Webhooks", "Custom Commands", "API Access"]
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
      <div className="w-full md:w-64 space-y-8">
        {sections.map(sec => (
          <div key={sec.title}>
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-4 px-4">{sec.title}</h3>
            <div className="space-y-1">
              {sec.items.map(item => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`w-full text-left px-4 py-2 rounded-xl text-sm transition-all ${activeTab === item ? 'bg-purple-600/10 text-purple-400 border border-purple-600/20' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-white mb-6">{activeTab}</h1>
          <div className="text-white/60 space-y-6 leading-relaxed">
            {activeTab === "Introduction" && (
              <>
                <p>
                  Welcome to the official documentation for Furious Bot. This guide will help you understand how to set up and use the bot to its full potential.
                </p>
                <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 my-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Info className="w-5 h-5 text-purple-400" /> Quick Tip
                  </h3>
                  <p className="text-sm">
                    The default prefix for Furious is <span className="text-purple-400 font-mono">.</span> (dot). You can change this at any time using the <span className="font-mono">prefix</span> command.
                  </p>
                </div>
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Core Concepts</h2>
                <p>
                  Furious is designed to be a modular bot. This means you can enable or disable specific features based on your server's needs. Whether you're looking for advanced moderation, high-quality music, or fun engagement tools, Furious has you covered.
                </p>
              </>
            )}
            {activeTab === "Installation" && (
              <>
                <p>Installing Furious is a simple process that takes less than a minute.</p>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>Click the <a href={INVITE_LINK} className="text-purple-400 hover:underline">Invite Link</a> to add the bot to your server.</li>
                  <li>Select the server you want to add the bot to.</li>
                  <li>Authorize the bot with the required permissions.</li>
                  <li>Once added, use <span className="font-mono text-purple-400">.help</span> to see the list of available commands.</li>
                </ol>
              </>
            )}
            {activeTab === "Configuration" && (
              <>
                <p>Customize Furious to fit your server's unique needs.</p>
                <h3 className="text-xl font-bold text-white mt-8 mb-4">Changing the Prefix</h3>
                <p>Use the <span className="font-mono text-purple-400">.prefix [new_prefix]</span> command to set a custom prefix for your server.</p>
                <h3 className="text-xl font-bold text-white mt-8 mb-4">Setting up Logs</h3>
                <p>Keep track of everything happening in your server by setting up a logging channel with <span className="font-mono text-purple-400">.logs set #channel</span>.</p>
              </>
            )}
            {activeTab === "Moderation" && (
              <>
                <p>Keep your server safe with our advanced moderation tools.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Auto-mod:</strong> Automatically filter links, invites, and bad words.</li>
                  <li><strong>Logging:</strong> Detailed logs for deleted messages, edited messages, and member joins/leaves.</li>
                  <li><strong>Slowmode:</strong> Control the pace of conversation in any channel.</li>
                </ul>
              </>
            )}
            {/* Add more content for other tabs as needed */}
            {(activeTab !== "Introduction" && activeTab !== "Installation" && activeTab !== "Configuration" && activeTab !== "Moderation") && (
              <p>Documentation for {activeTab} is currently being updated. Please check back soon or join our support server for help.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I invite Furious to my server?",
      a: "You can invite Furious by clicking the 'Invite' button on our homepage or in the navigation bar. Make sure you have the 'Manage Server' permission in the server you want to add it to."
    },
    {
      q: "Is Furious free to use?",
      a: "Yes! Furious offers a wide range of free features. We also have a Premium version that unlocks advanced functionality like Anti-Nuke, higher quality music, and more."
    },
    {
      q: "How do I change the bot's prefix?",
      a: "You can change the prefix by using the command `.prefix [new_prefix]`. For example, `.prefix !` will change the prefix to an exclamation mark."
    },
    {
      q: "What should I do if the bot is offline?",
      a: "Check our status page or join our support server. We usually announce maintenance or downtime there. If it's only offline in your server, try re-inviting it."
    },
    {
      q: "How do I set up the Anti-Nuke system?",
      a: "The Anti-Nuke system is a premium feature. Once you have premium, you can use `,antinuke setup` to begin the interactive configuration process."
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
        <p className="text-white/50">Everything you need to know about Furious.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden transition-all">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-8 text-left hover:bg-white/5 transition-colors"
            >
              <span className="text-lg font-bold text-white">{faq.q}</span>
              <ChevronDown className={`w-5 h-5 text-white/40 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-8 pb-8 text-white/50 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30">
      <Navbar setView={setView} currentView={view} />
      <main>
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Hero />
              <Stats />
              <ModerationSection />
              <Integrations />
              <Voicemaster />
              <MusicSection />
              <MoreFeatures />
              <Testimonials />
              <CTA />
            </motion.div>
          )}
          {view === 'commands' && (
            <motion.div
              key="commands"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <CommandsPage />
            </motion.div>
          )}
          {view === 'docs' && (
            <motion.div
              key="docs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <DocsPage />
            </motion.div>
          )}
          {view === 'faq' && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <FAQPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer setView={setView} />
    </div>
  );
}
