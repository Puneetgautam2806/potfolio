'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Database, Cpu, Shield, Zap, Play, CheckCircle2, AlertTriangle, ArrowRight, Gauge, Activity } from 'lucide-react'

type SimulationMode = 'indexing' | 'queues' | 'security'

export default function LiveSystemSimulator() {
  const [activeMode, setActiveMode] = useState<SimulationMode>('indexing')
  const [isOptimized, setIsOptimized] = useState(true)
  const [isRunning, setIsRunning] = useState(false)
  const [latencyVal, setLatencyVal] = useState(34)

  const handleToggleOptimization = (optimized: boolean) => {
    setIsRunning(true)
    setIsOptimized(optimized)
    setTimeout(() => {
      setIsRunning(false)
      setLatencyVal(optimized ? (activeMode === 'indexing' ? 34 : activeMode === 'queues' ? 22 : 9) : (activeMode === 'indexing' ? 1240 : activeMode === 'queues' ? 4680 : 380))
    }, 400)
  }

  const handleTabChange = (mode: SimulationMode) => {
    setActiveMode(mode)
    setIsOptimized(true)
    setLatencyVal(mode === 'indexing' ? 34 : mode === 'queues' ? 22 : 9)
  }

  return (
    <section id="simulator" className="relative py-28 md:py-36 bg-[#06080b] border-t border-white/[0.08] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[400px] bg-red-950/20 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-red-500 font-semibold mb-3">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              <span>// 02 &bull; Interactive Engineering Sandbox</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
              Live Systems Simulator &amp; <br />
              <span className="text-zinc-500">Performance Optimizer</span>
            </h2>
          </div>

          <p className="max-w-md font-mono text-xs text-zinc-400 leading-relaxed border-l-2 border-red-500/40 pl-4">
            Interact with real-world architecture scenarios inspired by <strong className="text-white">JapaneseCarTrade.com</strong>. Toggle between unoptimized code and tuned production architecture to observe latency telemetry in real-time.
          </p>
        </div>

        {/* Simulator Chassis */}
        <div className="rounded-sm bg-[#0a0d14] border border-white/[0.12] overflow-hidden shadow-2xl">
          
          {/* Top Control Bar */}
          <div className="px-4 py-3 bg-[#0d1018] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            {/* Mode Tabs */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleTabChange('indexing')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xs transition-all cursor-pointer ${
                  activeMode === 'indexing'
                    ? 'bg-red-600 text-white font-bold shadow-[0_0_12px_rgba(220,38,38,0.4)]'
                    : 'bg-white/[0.04] text-zinc-400 hover:text-white'
                }`}
              >
                <Database className="w-3.5 h-3.5" />
                <span>01: MySQL Index Optimization</span>
              </button>

              <button
                onClick={() => handleTabChange('queues')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xs transition-all cursor-pointer ${
                  activeMode === 'queues'
                    ? 'bg-red-600 text-white font-bold shadow-[0_0_12px_rgba(220,38,38,0.4)]'
                    : 'bg-white/[0.04] text-zinc-400 hover:text-white'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>02: Async Redis Queues</span>
              </button>

              <button
                onClick={() => handleTabChange('security')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xs transition-all cursor-pointer ${
                  activeMode === 'security'
                    ? 'bg-red-600 text-white font-bold shadow-[0_0_12px_rgba(220,38,38,0.4)]'
                    : 'bg-white/[0.04] text-zinc-400 hover:text-white'
                }`}
              >
                <Shield className="w-3.5 h-3.5" />
                <span>03: Sanctum JWT Guard</span>
              </button>
            </div>

            {/* Architecture State Switcher */}
            <div className="flex items-center gap-2 bg-[#06080b] p-1 rounded-xs border border-white/[0.08]">
              <span className="text-[10px] text-zinc-500 uppercase px-2">State:</span>
              <button
                onClick={() => handleToggleOptimization(false)}
                className={`px-3 py-1 rounded-xs transition-all text-[11px] cursor-pointer ${
                  !isOptimized
                    ? 'bg-red-950/80 text-red-300 border border-red-500/50 font-bold'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                Unindexed / Synchronous
              </button>
              <button
                onClick={() => handleToggleOptimization(true)}
                className={`px-3 py-1 rounded-xs transition-all text-[11px] cursor-pointer ${
                  isOptimized
                    ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/50 font-bold'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                Tuned Production Architecture
              </button>
            </div>
          </div>

          {/* Interactive Workbench Grid */}
          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Real-Time Telemetry & Metric Gauges (5 cols) */}
            <div className="lg:col-span-5 space-y-6 font-mono">
              {/* Telemetry Dial */}
              <div className="p-6 rounded-sm bg-[#06080b] border border-white/[0.08] relative overflow-hidden">
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-4">
                  <span className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                    <span>ROUND-TRIP LATENCY</span>
                  </span>
                  <span className="text-[10px] uppercase">
                    {isRunning ? 'CALCULATING...' : 'AUDITED SPEED'}
                  </span>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className={`text-5xl md:text-6xl font-black font-mono transition-all ${
                    isOptimized ? 'text-emerald-400' : 'text-red-500'
                  }`}>
                    {isRunning ? '...' : `${latencyVal}ms`}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-zinc-500">
                    {isOptimized ? 'Target Achieved' : 'High Saturation'}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mt-4 h-2 w-full bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    animate={{ width: isOptimized ? '12%' : '94%' }}
                    transition={{ duration: 0.4 }}
                    className={`h-full ${isOptimized ? 'bg-emerald-400' : 'bg-red-500'}`}
                  />
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
                  <span className="text-zinc-500">THROUGHPUT IMPACT:</span>
                  <span className={isOptimized ? 'text-emerald-400 font-bold' : 'text-red-400 font-bold'}>
                    {isOptimized ? '+97.2% SPEED RECOVERY' : '-84% ENGINE DEGRADATION'}
                  </span>
                </div>
              </div>

              {/* Execution Diagnostics */}
              <div className="p-5 rounded-sm bg-[#06080b] border border-white/[0.08] space-y-2.5 text-xs">
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest pb-2 border-b border-white/[0.06]">
                  // Execution Diagnostics
                </div>

                {activeMode === 'indexing' && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Catalogue Size:</span>
                      <span className="text-white font-bold">500,000+ Vehicles</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Rows Scanned:</span>
                      <span className={isOptimized ? 'text-emerald-400 font-bold' : 'text-red-400 font-bold'}>
                        {isOptimized ? '14 Rows (B-Tree Seek)' : '512,400 Rows (Full Scan)'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">MySQL Index Key:</span>
                      <span className="text-zinc-300">
                        {isOptimized ? 'idx_status_make_created' : 'NONE (Using Filesort)'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Database CPU Load:</span>
                      <span className={isOptimized ? 'text-emerald-400' : 'text-red-400 font-bold'}>
                        {isOptimized ? '3.2% (Nominal)' : '98.4% (Critical)'}
                      </span>
                    </div>
                  </>
                )}

                {activeMode === 'queues' && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Daily Queue Volume:</span>
                      <span className="text-white font-bold">1,000+ Tasks/Day</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Client Block Time:</span>
                      <span className={isOptimized ? 'text-emerald-400 font-bold' : 'text-red-400 font-bold'}>
                        {isOptimized ? '0ms (Async Redis Drop)' : '4,680ms (SMTP Hang)'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Worker Architecture:</span>
                      <span className="text-zinc-300">
                        {isOptimized ? 'Laravel Horizon + Redis' : 'Synchronous in-process'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Gateway Timeout Risk:</span>
                      <span className={isOptimized ? 'text-emerald-400' : 'text-red-400 font-bold'}>
                        {isOptimized ? '0.00% (Isolated)' : 'High (HTTP 504 Danger)'}
                      </span>
                    </div>
                  </>
                )}

                {activeMode === 'security' && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Token Protocol:</span>
                      <span className="text-white font-bold">Laravel Sanctum SHA-256</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Auth Validation:</span>
                      <span className="text-emerald-400 font-bold">8.4ms Sub-millisecond</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Rate Limit Policy:</span>
                      <span className="text-zinc-300">60 Requests / Minute</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Session Hijack Shield:</span>
                      <span className="text-emerald-400">Strict CSRF + SameSite</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Right Column: Interactive Code & Execution Trace (7 cols) */}
            <div className="lg:col-span-7 rounded-sm bg-[#06080b] border border-white/[0.08] overflow-hidden">
              <div className="px-4 py-2.5 bg-[#0e1118] border-b border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">
                  {activeMode === 'indexing' 
                    ? 'database/migrations/2026_optimize_vehicle_indices.sql' 
                    : activeMode === 'queues' 
                      ? 'app/Jobs/DispatchVehicleNotification.php' 
                      : 'app/Http/Middleware/SanctumApiGuard.php'}
                </span>
                <span className={`text-[10px] px-2 py-0.5 rounded-xs ${
                  isOptimized ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30' : 'bg-red-950 text-red-400 border border-red-500/30'
                }`}>
                  {isOptimized ? 'MODE: OPTIMIZED' : 'MODE: UNTUNED'}
                </span>
              </div>

              {/* Code Display */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-zinc-300 bg-[#040608]">
                {activeMode === 'indexing' && (
                  isOptimized ? (
                    <pre className="text-emerald-300">
{`-- [PRODUCTION TUNED] Composite B-Tree Index Strategy
ALTER TABLE vehicle_listings 
  ADD INDEX idx_status_make_created (status, make, created_at DESC);

-- Query Execution Plan via EXPLAIN:
-- id: 1 | select_type: SIMPLE | table: vehicle_listings
-- type: ref | key: idx_status_make_created | key_len: 130
-- rows: 14 | filtered: 100.00 | Extra: Backward index scan; Using index condition
-- RESULT: 34ms execution across 500,000+ automotive records.`}
                    </pre>
                  ) : (
                    <pre className="text-red-400">
{`-- [UNTUNED LEGACY] Missing compound indices
SELECT * FROM vehicle_listings 
WHERE status = 'live' 
  AND make = 'Toyota' 
ORDER BY created_at DESC 
LIMIT 20;

-- Query Execution Plan via EXPLAIN:
-- type: ALL (TABLE SCAN) | rows: 512,400
-- Extra: Using where; Using filesort
-- WARNING: 1,240ms latency - CPU core saturation at 98.4%`}
                    </pre>
                  )
                )}

                {activeMode === 'queues' && (
                  isOptimized ? (
                    <pre className="text-emerald-300">
{`// [ASYNC DISPATCH] Laravel Queues + Redis Daemon
public function storeListing(VehicleRequest $request)
{
    $listing = Vehicle::create($request->validated());

    // Non-blocking asynchronous dispatch to Redis queue:
    SendDealerNotificationJob::dispatch($listing)->onQueue('emails');
    SyncExportCorridorJob::dispatch($listing)->onQueue('inventory-sync');

    // Instant response back to client in 22ms:
    return response()->json(['status' => 'ingested', 'id' => $listing->id], 201);
}`}
                    </pre>
                  ) : (
                    <pre className="text-red-400">
{`// [BLOCKING SYNCHRONOUS] Request waits for external connections
public function storeListing(VehicleRequest $request)
{
    $listing = Vehicle::create($request->validated());

    // Blocking SMTP email connection:
    Mail::to($dealer)->send(new DealerNotification($listing)); // ~3,200ms
    ThirdPartyExportApi::sync($listing);                       // ~1,400ms

    // Client waits 4,600ms+ before receiving HTTP response!
    return response()->json(['status' => 'ingested'], 201);
}`}
                    </pre>
                  )
                )}

                {activeMode === 'security' && (
                  <pre className="text-cyan-300">
{`// [STATEFUL & TOKEN GUARD] Laravel Sanctum Middleware
Route::middleware(['auth:sanctum', 'throttle:60,1'])->group(function () {
    Route::get('/inventory/export/catalog', [ExportApiController::class, 'index']);
    Route::post('/inventory/listing/mutate', [VehicleController::class, 'upsert']);
});

// SHA-256 hashed token lookup in memory: ~8.4ms
// Rate limit header: X-RateLimit-Remaining: 59`}
                  </pre>
                )}
              </div>

              {/* Bottom Insight Strip */}
              <div className="p-4 bg-[#0a0d14] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
                  <span className="text-zinc-400">Implemented in production at JapaneseCarTrade.com</span>
                </div>
                <span className="text-red-400 font-semibold">PUNEET GAUTAM ARCHITECTURE</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
