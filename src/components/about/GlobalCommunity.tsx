"use client";

import { useMemo, useState } from "react";
import { geoEqualEarth, geoPath, geoGraticule } from "d3-geo";
import { feature } from "topojson-client";
import worldData from "@/data/world-110m.json";
import { globalCommunityContent } from "@/lib/constants";

const WIDTH = 1000;
const HEIGHT = 500;
const DRESDEN: [number, number] = [13.74, 51.05];

type Pin = { name: string; x: number; y: number };
type Arc = { name: string; d: string };

function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export default function GlobalCommunity() {
  const { eyebrow, heading, tagline, countries } = globalCommunityContent;
  const [active, setActive] = useState<string | null>(null);

  const { landPath, graticulePath, spherePath, pins, dresden, arcs, stars } =
    useMemo(() => {
      const projection = geoEqualEarth()
        .scale(180)
        .translate([WIDTH / 2, HEIGHT / 2 + 8]);

      const path = geoPath(projection);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const world = worldData as any;

      const land = feature(world, world.objects.land);
      const landPath = path(land) || "";
      const graticulePath = path(geoGraticule().step([20, 20])()) || "";
      const spherePath = path({ type: "Sphere" }) || "";

      const pins: Pin[] = countries
        .map((c) => {
          const p = projection([c.lon, c.lat]);
          return p ? { name: c.name, x: p[0], y: p[1] } : null;
        })
        .filter((x): x is Pin => x !== null);

      const dresden = projection(DRESDEN);

      const arcs: Arc[] = countries.map((c) => ({
        name: c.name,
        d:
          path({
            type: "LineString",
            coordinates: [DRESDEN, [c.lon, c.lat]],
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } as any) || "",
      }));

      const rand = seeded(17);
      const stars = Array.from({ length: 60 }, (_, i) => ({
        id: i,
        x: rand() * WIDTH,
        y: rand() * HEIGHT,
        r: 0.35 + rand() * 0.75,
        dur: 2 + rand() * 4,
        delay: rand() * 4,
        base: 0.25 + rand() * 0.5,
      }));

      return { landPath, graticulePath, spherePath, pins, dresden, arcs, stars };
    }, [countries]);

  if (!dresden) return null;

  const activePin = active ? pins.find((p) => p.name === active) : null;

  return (
    <section className="relative bg-[#13100d] py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[900px] opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(226,114,91,0.20) 0%, rgba(226,114,91,0.06) 35%, transparent 62%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-60 -left-40 w-[700px] h-[700px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(226,114,91,0.12) 0%, transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-35"
        style={{
          background:
            "radial-gradient(circle, rgba(255,215,179,0.10) 0%, transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.09] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[var(--color-primary)]" />
            <p className="text-[var(--color-primary)] uppercase tracking-[0.4em] font-bold text-[10px]">
              {eyebrow}
            </p>
            <span className="h-px w-10 bg-[var(--color-primary)]" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-serif)] mb-4 text-[var(--color-paper-white)] leading-[1.05]">
            {heading}
          </h2>
          <p className="text-lg md:text-xl font-[var(--font-serif-alt)] italic text-[var(--color-paper-white)]/60">
            {tagline}
          </p>
        </div>

        {/* Map frame */}
        <div className="relative">
          <CornerOrnament className="absolute -top-2 -left-2 md:-top-3 md:-left-3 rotate-0" />
          <CornerOrnament className="absolute -top-2 -right-2 md:-top-3 md:-right-3 rotate-90" />
          <CornerOrnament className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 rotate-180" />
          <CornerOrnament className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 -rotate-90" />

          {/* Cartouche */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex items-center gap-3 text-[var(--color-paper-white)]/40 font-[var(--font-serif-alt)]">
            <span className="h-px w-8 bg-[var(--color-paper-white)]/20" />
            <span className="italic text-[11px] tracking-[0.45em] uppercase">
              Weltkarte · MMXXVI
            </span>
            <span className="h-px w-8 bg-[var(--color-paper-white)]/20" />
          </div>

          {/* Origin card */}
          <div className="hidden md:flex absolute top-4 right-6 z-20 flex-col items-end gap-0.5 text-[var(--color-paper-white)]/45 font-[var(--font-serif-alt)] pointer-events-none">
            <span className="text-[9px] uppercase tracking-[0.35em] text-[var(--color-primary)]/80">
              Origin
            </span>
            <span className="italic text-[13px] leading-none">51.05° N 13.74° E</span>
            <span className="text-[9px] uppercase tracking-[0.3em] mt-0.5">
              Dresden · DE
            </span>
          </div>

          {/* SVG */}
          <svg
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            className="relative w-full h-auto block"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label={`World map showing ${countries.length} countries where Decode German students live, connected by arcs from Dresden`}
          >
            <defs>
              <pattern
                id="stipple"
                width="5.5"
                height="5.5"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="2.75"
                  cy="2.75"
                  r="0.85"
                  fill="#f4ebe6"
                  fillOpacity="0.42"
                />
              </pattern>

              <radialGradient id="pin-halo">
                <stop offset="0%" stopColor="#e2725b" stopOpacity="0.55" />
                <stop offset="50%" stopColor="#e2725b" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#e2725b" stopOpacity="0" />
              </radialGradient>

              <radialGradient id="origin-halo">
                <stop offset="0%" stopColor="#ffd7b3" stopOpacity="0.85" />
                <stop offset="30%" stopColor="#e2725b" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#e2725b" stopOpacity="0" />
              </radialGradient>

              <filter id="soft-glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="1.6" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="origin-glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="3" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter
                id="particle-glow"
                x="-200%"
                y="-200%"
                width="500%"
                height="500%"
              >
                <feGaussianBlur stdDeviation="1.2" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <clipPath id="sphere-clip">
                <path d={spherePath} />
              </clipPath>
            </defs>

            {/* Starfield */}
            <g>
              {stars.map((s) => (
                <circle
                  key={s.id}
                  cx={s.x}
                  cy={s.y}
                  r={s.r}
                  fill="#f4ebe6"
                  opacity={s.base}
                >
                  <animate
                    attributeName="opacity"
                    values={`${s.base * 0.3};${Math.min(s.base * 1.8, 0.95)};${s.base * 0.3}`}
                    dur={`${s.dur}s`}
                    begin={`${s.delay}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
            </g>

            {/* Sphere */}
            <path
              d={spherePath}
              fill="#0c0a08"
              stroke="#f4ebe6"
              strokeOpacity="0.09"
              strokeWidth="0.7"
            />

            {/* Graticule */}
            <path
              d={graticulePath}
              fill="none"
              stroke="#f4ebe6"
              strokeOpacity="0.05"
              strokeWidth="0.4"
            />

            {/* Equator */}
            <line
              x1={0}
              y1={HEIGHT / 2 + 8}
              x2={WIDTH}
              y2={HEIGHT / 2 + 8}
              stroke="#e2725b"
              strokeOpacity="0.1"
              strokeWidth="0.5"
              strokeDasharray="3 6"
            />

            {/* Land */}
            <path d={landPath} fill="url(#stipple)" />
            <path
              d={landPath}
              fill="none"
              stroke="#f4ebe6"
              strokeOpacity="0.18"
              strokeWidth="0.35"
            />

            {/* Arcs */}
            <g>
              {arcs.map((arc, i) => {
                const isActive = active === arc.name;
                const delay = (i * 0.17) % 3.5;
                return (
                  <path
                    key={arc.name}
                    d={arc.d}
                    fill="none"
                    stroke="#e2725b"
                    strokeOpacity={isActive ? 0.95 : 0.22}
                    strokeWidth={isActive ? 1.4 : 0.5}
                    strokeDasharray="2 4"
                    strokeLinecap="round"
                    className="transition-all duration-300"
                    style={{ filter: isActive ? "url(#soft-glow)" : undefined }}
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="-6"
                      dur="3s"
                      begin={`${delay}s`}
                      repeatCount="indefinite"
                    />
                  </path>
                );
              })}
            </g>

            {/* Shooting particles */}
            <g clipPath="url(#sphere-clip)">
              {arcs.map((arc, i) => {
                const delay = (i * 0.29) % 4.2;
                return (
                  <circle
                    key={`p-${arc.name}`}
                    r="1.7"
                    fill="#ffe4d1"
                    filter="url(#particle-glow)"
                    opacity="0"
                  >
                    <animateMotion
                      dur="4.2s"
                      begin={`${delay}s`}
                      repeatCount="indefinite"
                      path={arc.d}
                      rotate="auto"
                    />
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      keyTimes="0;0.15;0.85;1"
                      dur="4.2s"
                      begin={`${delay}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                );
              })}
            </g>

            {/* Country pins */}
            {pins.map((p, i) => {
              const isActive = active === p.name;
              const delay = (i * 0.13) % 2.6;
              return (
                <g
                  key={p.name}
                  transform={`translate(${p.x}, ${p.y})`}
                  onMouseEnter={() => setActive(p.name)}
                  onMouseLeave={() => setActive(null)}
                  className="cursor-pointer"
                >
                  <circle r="12" fill="url(#pin-halo)" />
                  <circle r="2" fill="none" stroke="#e2725b" strokeWidth="0.9">
                    <animate
                      attributeName="r"
                      from="2"
                      to="10"
                      dur="2.4s"
                      begin={`${delay}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.85"
                      to="0"
                      dur="2.4s"
                      begin={`${delay}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  {isActive && (
                    <circle r="8" fill="none" stroke="#e2725b" strokeWidth="1.2" />
                  )}
                  <circle
                    r={isActive ? 3.4 : 2.1}
                    fill="#e2725b"
                    filter="url(#soft-glow)"
                    className="transition-all duration-200"
                  />
                  <circle r="0.9" fill="#ffe4d1" />
                  {/* Hover target */}
                  <circle r="12" fill="transparent" />
                </g>
              );
            })}

            {/* Dresden origin */}
            <g
              transform={`translate(${dresden[0]}, ${dresden[1]})`}
              className="pointer-events-none"
            >
              <g>
                <circle
                  r="16"
                  fill="none"
                  stroke="#e2725b"
                  strokeOpacity="0.5"
                  strokeWidth="0.6"
                  strokeDasharray="2 3"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0"
                    to="360"
                    dur="28s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
              <g>
                <circle
                  r="10.5"
                  fill="none"
                  stroke="#ffd7b3"
                  strokeOpacity="0.4"
                  strokeWidth="0.4"
                  strokeDasharray="1 2"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="360"
                    to="0"
                    dur="18s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
              <circle r="24" fill="url(#origin-halo)" />
              <circle r="12" fill="url(#origin-halo)" />
              <g filter="url(#origin-glow)">
                <path
                  d="M 0,-8 L 1.5,-1.5 L 8,0 L 1.5,1.5 L 0,8 L -1.5,1.5 L -8,0 L -1.5,-1.5 Z"
                  fill="#ffd7b3"
                />
              </g>
              <circle r="2.2" fill="#fff" />
              <text
                y="-22"
                textAnchor="middle"
                fill="#ffd7b3"
                fontSize="9"
                fontFamily="var(--font-display)"
                letterSpacing="0.35em"
                style={{ textTransform: "uppercase", fontWeight: 700 }}
              >
                Dresden
              </text>
            </g>
          </svg>

          {/* Hover label — only thing that names countries */}
          {activePin && (
            <div
              className="absolute z-10 pointer-events-none"
              style={{
                left: `${(activePin.x / WIDTH) * 100}%`,
                top: `${(activePin.y / HEIGHT) * 100}%`,
                transform: "translate(-50%, calc(-100% - 20px))",
              }}
            >
              <div className="relative px-3 py-1.5 bg-[#f4ebe6] text-[#15110e] text-[10px] md:text-[11px] uppercase tracking-[0.28em] font-bold whitespace-nowrap shadow-[0_8px_24px_rgba(0,0,0,0.5)]">
                {active}
                <span className="absolute left-1/2 -bottom-[4px] -translate-x-1/2 w-2 h-2 bg-[#f4ebe6] rotate-45" />
              </div>
            </div>
          )}

          {/* Compass rose */}
          <div className="absolute bottom-2 right-3 md:bottom-4 md:right-5 opacity-35 pointer-events-none">
            <svg viewBox="0 0 40 40" className="w-9 h-9 md:w-11 md:h-11 text-[#f4ebe6]">
              <circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="20" cy="20" r="9" fill="none" stroke="currentColor" strokeWidth="0.4" />
              <path d="M20 4 L22 20 L20 36 L18 20 Z" fill="currentColor" />
              <path d="M4 20 L20 22 L36 20 L20 18 Z" fill="currentColor" fillOpacity="0.45" />
              <circle cx="20" cy="20" r="1.3" fill="#e2725b" />
              <text x="20" y="3" textAnchor="middle" fontSize="3.5" fill="currentColor" fontFamily="var(--font-serif)">N</text>
            </svg>
          </div>

          {/* Scale bar */}
          <div className="absolute bottom-3 left-4 md:bottom-5 md:left-6 opacity-35 pointer-events-none flex flex-col items-start gap-1">
            <div className="flex items-center">
              <span className="h-[5px] w-8 bg-[#f4ebe6]" />
              <span className="h-[5px] w-8 border border-[#f4ebe6]" />
            </div>
            <span className="text-[8px] tracking-[0.3em] uppercase text-[#f4ebe6]/80 font-[var(--font-serif)]">
              Equal Earth
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={`pointer-events-none w-5 h-5 md:w-7 md:h-7 text-[var(--color-primary)]/45 ${className}`}
    >
      <path
        d="M0 0 L20 0 M0 0 L0 20"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <circle cx="0" cy="0" r="2" fill="currentColor" />
      <circle cx="20" cy="0" r="1" fill="currentColor" />
      <circle cx="0" cy="20" r="1" fill="currentColor" />
    </svg>
  );
}
