'use client'

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  // Convert .splinecode URL to viewer URL
  const viewerUrl = scene.replace('prod.spline.design', 'my.spline.design').replace('/scene.splinecode', '/');

  return (
    <div className={className}>
      <iframe 
        src={viewerUrl} 
        frameBorder="0" 
        width="100%" 
        height="100%" 
        title="Spline 3D Scene"
        className="w-full h-full border-0"
      ></iframe>
    </div>
  )
}
