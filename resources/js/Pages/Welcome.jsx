import React, { useState } from 'react';
import { Head } from '@inertiajs/react';

import portfolioData from '../data.json';

export default function Welcome() {
    const [activeTab, setActiveTab] = useState('projects');
    const data = portfolioData;

    return (
        <div className="bg-[#0f0f0f] text-white min-h-screen font-sans overflow-x-hidden">
            <Head title="Portfolio" />

            <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative animate-gradient">
                <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
                <div className="z-10 flex flex-col items-center">
                    <div className="flex gap-8 mb-8" data-aos="fade-down">
                        <span className="text-thistle/60 hover:text-thistle transition-all duration-500 transform hover:scale-125 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                        </span>
                        <span className="text-thistle/60 hover:text-thistle transition-all duration-500 transform hover:scale-125 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </span>
                        <span className="text-thistle/60 hover:text-thistle transition-all duration-500 transform hover:scale-125 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </span>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="200">
                        <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter text-white">
                            Welcome To My <br />
                            <span className="text-transparent text-5xl md:text-8xl bg-clip-text bg-gradient-to-r from-thistle via-indigo-400 to-indigo_custom">
                                Portfolio Website
                            </span>
                        </h1>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="400" className="mt-6 opacity-80">
                        <span className="text-white font-light tracking-[0.8em] uppercase text-[10px] md:text-[12px]">
                            {data.profile.name}
                        </span>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
            </section>

            <section className="relative container mx-auto px-6 py-32 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
                <div className="md:w-1/2" data-aos="fade-up">
                    <h2 className="text-thistle text-5xl font-black mb-2 tracking-tighter">{data.profile.title}</h2>
                    <h3 className="text-xl text-gray-400 mb-6 font-medium">{data.profile.sub_title}</h3>
                    <p className="text-gray-400 text-lg mb-8 max-w-md italic border-l-2 border-thistle/30 pl-4">"{data.profile.motto}"</p>
                    <div className="flex gap-4">
                        <a href="https://instagram.com/az.saputra_" target="_blank" className="group relative flex items-center gap-3 bg-white/5 border border-thistle/20 px-6 py-3 rounded-xl font-bold overflow-hidden transition-all duration-300 hover:border-thistle/50">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo_custom to-thistle opacity-0 group-hover:opacity-10 transition-opacity"></div><span className="text-sm tracking-wider">Instagram</span></a>
                        <a href="https://github.com/AjiSmith" target="_blank" className="group relative flex items-center gap-3 bg-white/5 border border-thistle/20 px-6 py-3 rounded-xl font-bold overflow-hidden transition-all duration-300 hover:border-thistle/50">
                            <div className="absolute inset-0 bg-gradient-to-r from-thistle to-indigo_custom opacity-0 group-hover:opacity-10 transition-opacity"></div><span className="text-sm tracking-wider">Github</span></a>
                    </div>
                </div>

                <div className="md:w-1/2 flex flex-col items-center" data-aos="fade-left">
                    <div className="relative group">
                        <div className="w-64 h-64 bg-gradient-to-br from-thistle to-indigo_custom rounded-3xl rotate-3 flex items-center justify-center overflow-hidden transition-transform group-hover:rotate-0 duration-500">
                            <div className="w-full h-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-6xl">🚀</div>
                        </div>
                        <div className="absolute -inset-4 bg-thistle/20 blur-2xl -z-10 group-hover:bg-indigo_custom/30 transition-colors"></div>
                    </div>
                    <p className="mt-8 text-2xl font-black tracking-[0.2em] uppercase text-thistle/50">The Developer</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#151515] to-transparent"></div>
            </section>

            <section className="bg-[#151515] py-32 relative">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16" data-aos="fade-up">
                    <div className="md:w-1/2">
                        <h2 className="text-6xl font-black mb-4 tracking-tighter">About Me</h2>
                        <p className="text-thistle italic mb-8 opacity-60">"{data.profile.motto}"</p>
                        <p className="from-thistle via-indigo-400 to-indigo_custom leading-relaxed mb-10 text-6x1">Hi!, I'm</p>
                        <p className="from-thistle via-indigo-700 to-indigo_custom leading-relaxed mb-10 text-4x1">Azimas Perwata Saputra</p>
                        <p className="text-gray-400 leading-relaxed mb-10 text-lg">{data.profile.about_me}</p>

                        <div className="grid grid-cols-3 gap-4">
                            {data.profile.stats.map((stat, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-black/20 border border-white/5 hover:border-thistle/50 transition-all group">
                                    <h4 className="text-3xl font-black group-hover:text-thistle transition-colors">{stat.value}</h4>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:w-1/2 relative group">
                        <div className="relative z-10 w-full aspect-square bg-neutral-900 rounded-2xl overflow-hidden border border-white/10 group-hover:border-thistle/30 transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-t from-indigo_custom/40 to-transparent"></div>
                            <div className="w-full h-full flex items-center justify-center text-8xl grayscale opacity-30 group-hover:opacity-60 transition-opacity">👨‍💻</div>
                        </div>
                        <div className="absolute -inset-2 bg-gradient-to-r from-thistle to-indigo_custom blur-xl opacity-10 group-hover:opacity-25 -z-10 transition-opacity"></div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
            </section>

            <section className="container mx-auto px-6 py-32" data-aos="fade-up">
                <div className="text-center mb-20">
                    <span className="text-transparent text-5xl font-black bg-clip-text bg-gradient-to-r from-thistle via-indigo-400 to-indigo_custom">
                        Portfolio Website
                    </span>
                    <div className="h-1 w-20 bg-gradient-to-r from-thistle to-indigo_custom mx-auto rounded-full"></div>
                </div>

                <div className="flex justify-center gap-12 mb-16 border-b border-white/5">
                    {['projects', 'certificates', 'tech stack'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-4 px-2 uppercase text-[12px] font-black tracking-[0.2em] transition-all duration-300 relative group ${activeTab === tab ? 'text-thistle' : 'text-gray-500 hover:text-white'
                                }`}
                        >
                            {tab}
                            <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-thistle to-indigo_custom transition-transform duration-500 origin-left ${activeTab === tab ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                }`}></span>
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {activeTab === 'projects' && data.projects.map((p, i) => (
                        <div key={i} className="bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] hover:bg-white/[0.05] transition-all duration-500 group" data-aos="fade-up" data-aos-delay={i * 100}>
                            <div className="h-48 bg-gradient-to-br from-indigo_custom/20 to-thistle/10 rounded-2xl mb-6 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform text-4xl">📁</div>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                            <p className="text-gray-500 text-sm mb-8 leading-relaxed">{p.desc}</p>
                            <button className="text-thistle font-black text-xs tracking-widest uppercase border-b-2 border-thistle/20 pb-1 hover:border-thistle transition-all">Live Demo —&gt;</button>
                        </div>
                    ))}

                    {activeTab === 'certificates' && [1, 2, 3].map((item) => (
                        <div key={item} className="group cursor-pointer" data-aos="zoom-in">
                            <div className="relative aspect-[4/3] bg-neutral-900 rounded-xl overflow-hidden border border-white/10 group-hover:border-thistle/50 transition-all shadow-2xl">
                                <img
                                    src={`https://placehold.co/600x400/1a1a1a/D8BFD8?text=Certificate+${item}`}
                                    alt="Certificate"
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <span className="text-xs font-bold tracking-widest uppercase text-thistle">View Certificate</span>
                                </div>
                            </div>
                        </div>
                    ))}

                    {activeTab === 'tech stack' && (
                        <div className="col-span-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {[
                                { name: 'HTML', icon: 'html5' },
                                { name: 'CSS', icon: 'css3' },
                                { name: 'JavaScript', icon: 'javascript' },
                                { name: 'TailwindCSS', icon: 'tailwindcss' },
                                { name: 'ReactJS', icon: 'react' },
                                { name: 'Vite', icon: 'vitejs' },
                                { name: 'NodeJS', icon: 'nodejs' },
                                { name: 'Bootstrap', icon: 'bootstrap' },
                                { name: 'MongoDB', icon: 'mongodb' },
                                { name: 'Vercel', icon: 'vercel' },
                                { name: 'MaterialUI', icon: 'materialui' },
                            ].map((tech, i) => (
                                <div key={i} className="flex flex-col items-center p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-thistle/30 transition-all group" data-aos="fade-up" data-aos-delay={i * 50}>
                                    <img
                                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                                        alt={tech.name}
                                        className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform grayscale group-hover:grayscale-0"
                                        onError={(e) => e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'}
                                    />
                                    <span className="text-[10px] font-black tracking-widest uppercase text-gray-500 group-hover:text-thistle transition-colors">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <footer className="py-16 border-t border-white/5 text-center">
                <div className="text-thistle font-black tracking-widest mb-4 opacity-50 uppercase text-[10px]">Smithbondz Portfolio</div>
                <p className="text-gray-600 text-xs">© {new Date().getFullYear()} — All rights reserved</p>
            </footer>
        </div>
    );
}