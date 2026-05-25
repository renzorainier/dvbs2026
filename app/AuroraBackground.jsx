// AuroraBackground.jsx
import React, { useEffect, useMemo } from "react";

const AURORA_KEYFRAMES = `
@keyframes aurora-drift-1 {
  0%   { transform: translate3d(0%, 0%, 0) scaleX(1) rotate(-3deg); opacity: 0.75; }
  30%  { transform: translate3d(0%, -6%, 0) scaleX(1.05) rotate(-1deg); opacity: 0.9; }
  60%  { transform: translate3d(0%, -12%, 0) scaleX(0.97) rotate(-5deg); opacity: 0.7; }
  100% { transform: translate3d(0%, 0%, 0) scaleX(1) rotate(-3deg); opacity: 0.75; }
}
@keyframes aurora-drift-2 {
  0%   { transform: translate3d(0%, 0%, 0) scaleX(1) rotate(2deg); opacity: 0.65; }
  40%  { transform: translate3d(0%, 8%, 0) scaleX(1.08) rotate(4deg); opacity: 0.85; }
  70%  { transform: translate3d(0%, 3%, 0) scaleX(0.95) rotate(1deg); opacity: 0.6; }
  100% { transform: translate3d(0%, 0%, 0) scaleX(1) rotate(2deg); opacity: 0.65; }
}
@keyframes aurora-drift-3 {
  0%   { transform: translate3d(0%, 0%, 0) scaleX(1) rotate(-6deg); opacity: 0.8; }
  50%  { transform: translate3d(0%, -10%, 0) scaleX(1.1) rotate(-2deg); opacity: 0.95; }
  100% { transform: translate3d(0%, 0%, 0) scaleX(1) rotate(-6deg); opacity: 0.8; }
}
@keyframes aurora-drift-4 {
  0%   { transform: translate3d(0%, 0%, 0) scaleX(1) rotate(5deg); opacity: 0.55; }
  35%  { transform: translate3d(0%, 6%, 0) scaleX(1.06) rotate(8deg); opacity: 0.75; }
  65%  { transform: translate3d(0%, -4%, 0) scaleX(0.98) rotate(3deg); opacity: 0.5; }
  100% { transform: translate3d(0%, 0%, 0) scaleX(1) rotate(5deg); opacity: 0.55; }
}
@keyframes aurora-drift-5 {
  0%   { transform: translate3d(0%, 0%, 0) scaleX(1) rotate(-1deg); opacity: 0.7; }
  45%  { transform: translate3d(0%, -8%, 0) scaleX(1.04) rotate(1deg); opacity: 0.88; }
  100% { transform: translate3d(0%, 0%, 0) scaleX(1) rotate(-1deg); opacity: 0.7; }
}
@keyframes star-pulse-1 { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
@keyframes star-pulse-2 { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
@keyframes star-pulse-3 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0.4; } }
`;

// OPTIMIZATION: Replaced linear gradients + heavy CSS blur with inherently soft radial gradients.
const ribbons = [
  { 
    id: 1, left: "-10%", width: "60%", height: "130%", top: "-15%", 
    gradient: "radial-gradient(ellipse at 50% 50%, rgba(0, 230, 118, 0.45) 0%, transparent 60%)", 
    animation: "aurora-drift-1 14s ease-in-out infinite", 
  },
  { 
    id: 2, left: "20%", width: "60%", height: "130%", top: "-20%", 
    gradient: "radial-gradient(ellipse at 50% 50%, rgba(0, 229, 255, 0.5) 0%, transparent 60%)", 
    animation: "aurora-drift-3 10s ease-in-out infinite", 
  },
  { 
    id: 3, left: "30%", width: "60%", height: "120%", top: "-10%", 
    gradient: "radial-gradient(ellipse at 50% 50%, rgba(29, 233, 182, 0.45) 0%, transparent 60%)", 
    animation: "aurora-drift-2 17s ease-in-out infinite", 
  },
  { 
    id: 4, left: "-20%", width: "70%", height: "120%", top: "-8%",  
    gradient: "radial-gradient(ellipse at 50% 50%, rgba(156, 39, 176, 0.35) 0%, transparent 65%)", 
    animation: "aurora-drift-4 20s ease-in-out infinite", 
  },
  { 
    id: 5, left: "40%", width: "70%", height: "120%", top: "-5%",  
    gradient: "radial-gradient(ellipse at 50% 50%, rgba(124, 77, 255, 0.35) 0%, transparent 65%)", 
    animation: "aurora-drift-5 15s ease-in-out infinite", 
  },
];

const snowHills = [
  { id: 1, left: "-25%", right: "auto", bottom: "-25%", width: "90%", height: "45%", background: "linear-gradient(180deg, #b3e5fc 0%, #1565c0 70%, #0d2b6e 100%)", boxShadow: "inset 0 22px 22px -14px rgba(230, 248, 255, 0.85)", zIndex: 10 },
  { id: 2, left: "auto", right: "-20%", bottom: "-20%", width: "80%", height: "40%", background: "linear-gradient(180deg, #e0f7fa 0%, #1976d2 65%, #0a237a 100%)", boxShadow: "inset 0 20px 20px -14px rgba(255, 255, 255, 0.75)", zIndex: 11 },
  { id: 3, left: "-10%", right: "-10%", bottom: "-15%", width: "120%", height: "30%", background: "linear-gradient(180deg, #f0f9ff 0%, #bbdefb 30%, #1e40af 100%)", boxShadow: "inset 0 28px 28px -14px rgba(255, 255, 255, 1)", zIndex: 12 },
];

const createRandom = (seed) => () => (seed = (seed * 16807) % 2147483647) / 2147483647;

// OPTIMIZATION: Reduced star count to lower the painting cost of massive box-shadow strings
const generateStarField = (count, size, seed) => {
  const random = createRandom(seed);
  let shadows = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(random() * 100);
    const y = Math.floor(random() * 70);
    shadows.push(`${x}vw ${y}vh #ffffff`);
  }
  return shadows.join(", ");
};

const AuroraBackground = () => {
  useEffect(() => {
    if (document.getElementById("aurora-keyframes")) return;
    const style = document.createElement("style");
    style.id = "aurora-keyframes";
    style.textContent = AURORA_KEYFRAMES;
    document.head.appendChild(style);
    return () => {
      const el = document.getElementById("aurora-keyframes");
      if (el) el.remove();
    };
  }, []);

  const starLayers = useMemo(() => [
    { size: 1, shadow: generateStarField(60, 1, 123), animation: "star-pulse-1 4s infinite" },
    { size: 2, shadow: generateStarField(30, 2, 456), animation: "star-pulse-2 5s infinite" },
    { size: 3, shadow: generateStarField(10, 3, 789), animation: "star-pulse-3 6s infinite" }
  ], []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        background: `
          radial-gradient(circle at 50% 100%, rgba(248, 187, 208, 0.4) 0%, transparent 50%),
          linear-gradient(180deg, #090b14 0%, #1a237e 45%, #7986cb 80%, #ce93d8 100%)
        `,
        zIndex: 0,
      }}
    >
      {starLayers.map((layer, i) => (
        <div
          key={`star-layer-${i}`}
          style={{
            position: "absolute",
            width: `${layer.size}px`,
            height: `${layer.size}px`,
            borderRadius: "50%",
            background: "transparent",
            boxShadow: layer.shadow,
            animation: layer.animation,
            willChange: "opacity"
          }}
        />
      ))}

      {[{ x: 16, y: 19 }, { x: 37, y: 6 }, { x: 70, y: 15 }, { x: 82, y: 39 }].map((s, i) => (
        <div
          key={`spark-${i}`}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: "8px",
            height: "8px",
            animation: `star-pulse-1 ${3 + (i % 3)}s ${i * 0.4}s ease-in-out infinite`,
          }}
        >
          <div style={{ position: "absolute", left: "50%", top: 0, transform: "translateX(-50%)", width: "1.5px", height: "100%", background: "white", boxShadow: "0 0 3px 1px rgba(255,255,255,0.8)" }} />
          <div style={{ position: "absolute", top: "50%", left: 0, transform: "translateY(-50%)", width: "100%", height: "1.5px", background: "white", boxShadow: "0 0 3px 1px rgba(255,255,255,0.8)" }} />
        </div>
      ))}

      {ribbons.map((r) => (
        <div
          key={r.id}
          style={{
            position: "absolute",
            left: r.left,
            top: r.top,
            width: r.width,
            height: r.height,
            background: r.gradient,
            // REMOVED: filter: blur() and mixBlendMode: 'screen'
            animation: r.animation,
            transformOrigin: "50% 80%",
            borderRadius: "50%",
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            WebkitFontSmoothing: "subpixel-antialiased"
          }}
        />
      ))}

      {snowHills.map((hill) => (
        <div
          key={`hill-${hill.id}`}
          style={{
            position: "absolute",
            left: hill.left,
            right: hill.right,
            bottom: hill.bottom,
            width: hill.width,
            height: hill.height,
            borderRadius: "50%",
            background: hill.background,
            boxShadow: hill.boxShadow,
            zIndex: hill.zIndex,
          }}
        />
      ))}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, rgba(6, 8, 24, 0.45) 100%)",
          pointerEvents: "none",
          zIndex: 20,
        }}
      />
    </div>
  );
};

export default AuroraBackground;