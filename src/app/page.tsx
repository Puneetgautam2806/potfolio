import CinematicNav from "@/components/ui/CinematicNav"
import CinematicHero from "@/components/sections/CinematicHero"
import CinematicManifesto from "@/components/sections/CinematicManifesto"
import LiveSystemSimulator from "@/components/sections/LiveSystemSimulator"
import ExplodedViewSection from "@/components/sections/ExplodedViewSection"
import CinematicWork from "@/components/sections/CinematicWork"
import CinematicRoadmap from "@/components/sections/CinematicRoadmap"
import CinematicSpecs from "@/components/sections/CinematicSpecs"
import CinematicContact from "@/components/sections/CinematicContact"
import CustomCursor from "@/components/ui/CustomCursor"
import CommandPalette from "@/components/ui/CommandPalette"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08080a] text-[#f8fafc] overflow-x-hidden selection:bg-[#dc2626] selection:text-white">
      <CustomCursor />
      <CinematicNav />
      <CinematicHero />
      <CinematicManifesto />
      <LiveSystemSimulator />
      <ExplodedViewSection />
      <CinematicWork />
      <CinematicRoadmap />
      <CinematicSpecs />
      <CinematicContact />
      <CommandPalette />
    </main>
  )
}
