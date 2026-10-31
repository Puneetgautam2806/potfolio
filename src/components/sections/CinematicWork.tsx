'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, ExternalLink, Database, Server, CheckCircle2, Copy, Check, Code, FileJson, Layers } from 'lucide-react'

export default function CinematicWork() {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<'json' | 'controller' | 'schema'>('json')

  const sampleApiResponse = `{
  "status": "success",
  "meta": {
    "latency_ms": 38,
    "cached": true,
    "auth": "Bearer Sanctum_9f8d...a3"
  },
  "data": [
    {
      "listing_id": "JCT-2026-8910",
      "model": "Toyota Land Cruiser Prado",
      "year": 2024,
      "transmission": "AT",
      "mileage_km": 14200,
      "pricing_usd": 48500,
      "dealer_verified": true,
      "images_count": 28
    }
  ]
}`

  const controllerSnippet = `namespace App\\Http\\Controllers\\Api\\V2;

use App\\Models\\VehicleListing;
use App\\Http\\Resources\\VehicleResource;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Cache;

class VehicleController extends Controller
{
    public function search(Request $request)
    {
        $cacheKey = 'vehicles_search_' . md5(json_encode($request->all()));

        return Cache::remember($cacheKey, 60, function () use ($request) {
            return VehicleResource::collection(
                VehicleListing::query()
                    ->with(['dealer:id,company_name,country', 'media'])
                    ->filterByParams($request->validated())
                    ->where('status', 'active')
                    ->paginate(25)
            );
        });
    }
}`

  const schemaSnippet = `Schema::create('vehicle_listings', function (Blueprint $table) {
    $table->id();
    $table->foreignId('dealer_id')->constrained()->cascadeOnDelete();
    $table->string('vin', 17)->unique();
    $table->string('make', 50)->index();
    $table->string('model', 50)->index();
    $table->unsignedSmallInteger('year')->index();
    $table->decimal('price_usd', 10, 2)->index();
    $table->enum('status', ['draft', 'active', 'sold', 'archived'])->default('active')->index();
    $table->timestamps();

    // Composite Index for Ultra-Fast Parametric Search (<40ms)
    $table->index(['make', 'model', 'year', 'status'], 'idx_vehicle_search');
});`

  const activeContent = activeTab === 'json' 
    ? sampleApiResponse 
    : activeTab === 'controller' 
      ? controllerSnippet 
      : schemaSnippet

  const copyPayload = () => {
    navigator.clipboard.writeText(activeContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="work" className="relative py-28 md:py-36 bg-[#08080a] border-t border-white/[0.06]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-red-500 font-semibold mb-3">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
              <span>// 02 &bull; Production Systems</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
              Selected Work &amp; <br />
              <span className="text-zinc-500">Architecture Case Studies</span>
            </h2>
          </div>

          <p className="max-w-md font-mono text-xs text-zinc-400 leading-relaxed border-l border-red-500/30 pl-4">
            Production backends running high-traffic international commerce, mission-critical inventory pipelines, and resilient microservices.
          </p>
        </div>

        {/* Flagship Project 1: JapaneseCarTrade.com */}
        <div className="rounded-sm bg-[#0a0d13] border border-white/[0.1] p-6 md:p-12 mb-16 relative overflow-hidden group">
          {/* Subtle grid and ambient red aura */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-950/15 blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
            {/* Left: Project Details & Metrics (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 font-mono text-xs text-red-400 mb-4">
                  <span className="px-2 py-0.5 rounded-xs bg-red-950/50 border border-red-500/30 font-bold uppercase tracking-wider">
                    FLAGSHIP SYSTEM
                  </span>
                  <span>AUG 2023 &bull; PRESENT</span>
                </div>

                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
                  JapaneseCarTrade.com
                </h3>

                <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-6 font-normal">
                  Engineered and maintained the Laravel backend for an international automobile trading platform handling 
                  <strong className="text-white"> 500+ daily vehicle listings</strong> for <strong className="text-white">10,000+ monthly active users</strong> across global export corridors. Built and delivered 
                  <strong className="text-white"> 20+ RESTful APIs</strong> with Sanctum/JWT authentication, tuned MySQL queries cutting response times by <strong className="text-white">40%</strong>, and implemented Laravel Queues for 1,000+ daily asynchronous jobs.
                </p>

                {/* Key Technical Highlights */}
                <div className="space-y-2.5 font-mono text-xs text-zinc-300 mb-8">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span>500+ daily vehicle listings ingestion &amp; search handling 10,000+ MAU</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span>20+ production RESTful APIs with Sanctum/JWT (cut integration time by 30%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span>40% query response time reduction via MySQL indexing &amp; schema tuning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span>Laravel Queues/Jobs processing 1,000+ daily transactional notifications</span>
                  </div>
                </div>
              </div>

              {/* Stack Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.08] font-mono text-[11px]">
                {['Laravel 10+', 'PHP 8+', 'RESTful APIs', 'Sanctum Auth', 'MySQL', 'Redis Queues', 'Postman'].map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-xs bg-[#121520] border border-white/10 text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Live Interactive Multi-Tab Code & API Terminal (6 cols) */}
            <div className="lg:col-span-6 rounded-sm bg-[#06080b] border border-white/[0.12] overflow-hidden shadow-2xl">
              {/* Terminal Title Bar */}
              <div className="px-4 py-2.5 bg-[#0e1118] border-b border-white/[0.08] flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-zinc-400 text-[11px]">
                    {activeTab === 'json' ? 'GET /api/v2/inventory/search' : activeTab === 'controller' ? 'VehicleController.php' : '2026_create_vehicles.php'}
                  </span>
                </div>

                <button
                  onClick={copyPayload}
                  className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors text-[10px] cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Snippet</span>
                    </>
                  )}
                </button>
              </div>

              {/* Interactive Inspector Tabs */}
              <div className="flex items-center border-b border-white/[0.08] bg-[#090c12] font-mono text-[10px]">
                <button
                  onClick={() => setActiveTab('json')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 border-r border-white/[0.06] transition-colors cursor-pointer ${
                    activeTab === 'json' ? 'bg-[#151926] text-red-400 border-b-2 border-b-red-500 font-bold' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <FileJson className="w-3 h-3" />
                  <span>API Response (JSON)</span>
                </button>

                <button
                  onClick={() => setActiveTab('controller')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 border-r border-white/[0.06] transition-colors cursor-pointer ${
                    activeTab === 'controller' ? 'bg-[#151926] text-red-400 border-b-2 border-b-red-500 font-bold' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <Code className="w-3 h-3" />
                  <span>Laravel Controller</span>
                </button>

                <button
                  onClick={() => setActiveTab('schema')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 transition-colors cursor-pointer ${
                    activeTab === 'schema' ? 'bg-[#151926] text-red-400 border-b-2 border-b-red-500 font-bold' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <Database className="w-3 h-3" />
                  <span>MySQL Schema Index</span>
                </button>
              </div>

              {/* Terminal Code Body */}
              <div className="p-4 font-mono text-[11px] leading-relaxed text-zinc-300 overflow-x-auto max-h-[380px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-zinc-500 mb-2">
                      {activeTab === 'json' && '// 200 OK &bull; Response Time: 38ms &bull; SSL TLS_1.3 &bull; Sanctum Auth Guard'}
                      {activeTab === 'controller' && '// Clean Architecture: Dependency Injection & Eager-Loaded Redis Caching'}
                      {activeTab === 'schema' && '// Normalized InnoDB Schema: Composite B-Tree Indices for Sub-45ms Latency'}
                    </div>
                    <pre className="text-red-400/95 whitespace-pre font-mono">
                      {activeContent}
                    </pre>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Terminal Footer Telemetry */}
              <div className="px-4 py-2 bg-[#090c12] border-t border-white/[0.06] flex items-center justify-between font-mono text-[10px] text-zinc-500">
                <span>PROTOCOL: HTTP/2.0</span>
                <span>STATUS: 200 OK</span>
                <span className="text-emerald-400">CACHE: HIT (REDIS)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Case Studies Grid (2 Asymmetric Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-mono">
          {/* Case 2: Gradient Softech */}
          <div className="p-8 rounded-sm bg-[#0a0d13] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between relative group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-600 to-transparent" />
            <div>
              <div className="text-xs text-red-500 mb-2 font-semibold tracking-wider uppercase">
                // 02 &bull; ENTERPRISE PLATFORMS
              </div>
              <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-3">
                Gradient Softech Web Platforms
              </h4>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-sans mb-6">
                Delivered 5+ end-to-end client web applications including e-commerce platforms and CMS systems.
                Managed the complete development lifecycle from schema architecture to production server deployment,
                payment gateway integration, and performance benchmarking.
              </p>

              <div className="space-y-2 text-xs text-zinc-300 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span>5+ Production Client Applications Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span>Integrated Third-Party Payment Gateways &amp; Webhooks</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span>Linux Server Deployment &amp; Performance Hardening</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06] text-[10px]">
              {['PHP 8', 'MySQL', 'Linux Server', 'E-Commerce', 'Payment Gateways', 'Ajax'].map((tag, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded-xs bg-[#121520] border border-white/10 text-zinc-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Case 3: Vehicle Marketplace Inventory & Search Workflow */}
          <div className="p-8 rounded-sm bg-[#0a0d13] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between relative group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-600 to-transparent" />
            <div>
              <div className="text-xs text-red-500 mb-2 font-semibold tracking-wider uppercase">
                // 03 &bull; CORE SEARCH & FILTER ENGINE
              </div>
              <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-3">
                Automotive Listing &amp; Search Engine
              </h4>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-sans mb-6">
                Engineered core PHP &amp; Laravel modules for vehicle listing management and parametric search workflows,
                serving 10,000+ monthly active international dealers. Integrated multi-parameter filters across 
                makes, models, years, price points, and shipping destinations.
              </p>

              <div className="space-y-2 text-xs text-zinc-300 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span>Parametric Multi-Filter Query Optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span>10,000+ Monthly Active Users Supported</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span>Third-Party Payment Gateway Integration</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06] text-[10px]">
              {['PHP 8+', 'Laravel', 'Scrum', 'Query Optimization', 'REST APIs', 'MySQL'].map((tag, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded-xs bg-[#121520] border border-white/10 text-zinc-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
