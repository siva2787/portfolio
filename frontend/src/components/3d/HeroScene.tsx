import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface HeroSceneProps {
  isDark: boolean;
  isSpeaking: boolean;
  audioLevel: number;
}

export const HeroScene: React.FC<HeroSceneProps> = ({ isDark, isSpeaking, audioLevel }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGLSupported, setWebGLSupported] = useState<boolean>(true);
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    coreGroup: THREE.Group;
    particles: THREE.Points;
    outerRing: THREE.Mesh;
    innerCore: THREE.Mesh;
    pointLight: THREE.PointLight;
    reqId: number;
  } | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLSupported(false);
        return;
      }
    } catch {
      setWebGLSupported(false);
      return;
    }

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Inner core: glowing crystalline icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x6366f1 : 0x3b5bf5,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const innerCore = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(innerCore);

    // 2. Solid floating nucleus
    const nucGeo = new THREE.SphereGeometry(0.7, 32, 32);
    const nucMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x818cf8 : 0x2563eb,
      roughness: 0.3,
      metalness: 0.6,
      emissive: isDark ? 0x312e81 : 0x1d4ed8,
      emissiveIntensity: 0.4,
    });
    const nucleus = new THREE.Mesh(nucGeo, nucMat);
    coreGroup.add(nucleus);

    // 3. Elegant orbital ring
    const ringGeo = new THREE.TorusGeometry(2.3, 0.025, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x38bdf8 : 0x0284c7,
      transparent: true,
      opacity: 0.4,
    });
    const outerRing = new THREE.Mesh(ringGeo, ringMat);
    outerRing.rotation.x = Math.PI / 3;
    coreGroup.add(outerRing);

    // 4. Second orbital ring with complementary tilt
    const ringGeo2 = new THREE.TorusGeometry(2.0, 0.018, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: isDark ? 0xa855f7 : 0x7c3aed,
      transparent: true,
      opacity: 0.35,
    });
    const outerRing2 = new THREE.Mesh(ringGeo2, ringMat2);
    outerRing2.rotation.y = Math.PI / 3.5;
    outerRing2.rotation.z = Math.PI / 4;
    coreGroup.add(outerRing2);

    // 5. Surrounding cosmic particle cloud
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 2.5 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePos[i] = radius * Math.sin(phi) * Math.cos(theta);
      particlePos[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePos[i + 2] = radius * Math.cos(phi);
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.035,
      color: isDark ? 0x93c5fd : 0x3b82f6,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.7 : 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, isDark ? 1.4 : 1.8);
    dirLight.position.set(5, 8, 6);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(isDark ? 0x6366f1 : 0x3b5bf5, 2.5, 12);
    pointLight.position.set(0, 0, 1);
    scene.add(pointLight);

    // Mouse parallax tracking
    let targetRotX = 0;
    let targetRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      targetRotY = x * 0.45;
      targetRotX = y * 0.35;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Window resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let reqId = 0;

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Smooth rotation with mouse dampening
      coreGroup.rotation.y += (targetRotY - coreGroup.rotation.y) * 0.05 + 0.003;
      coreGroup.rotation.x += (targetRotX - coreGroup.rotation.x) * 0.05 + 0.002;

      // Rotate orbital rings
      outerRing.rotation.z = elapsed * 0.15;
      outerRing2.rotation.x = elapsed * -0.12;

      // Slow particle field drift
      particles.rotation.y = elapsed * 0.03;
      particles.rotation.x = elapsed * 0.015;

      renderer.render(scene, camera);
      reqId = requestAnimationFrame(animate);
    };

    reqId = requestAnimationFrame(animate);

    sceneRef.current = {
      renderer,
      scene,
      camera,
      coreGroup,
      particles,
      outerRing,
      innerCore,
      pointLight,
      reqId,
    };

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      nucGeo.dispose();
      nucMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // React to theme updates
  useEffect(() => {
    if (!sceneRef.current) return;
    const { innerCore, pointLight } = sceneRef.current;
    const coreMat = innerCore.material as THREE.MeshStandardMaterial;
    coreMat.color.setHex(isDark ? 0x6366f1 : 0x3b5bf5);
    pointLight.color.setHex(isDark ? 0x818cf8 : 0x3b82f6);
  }, [isDark]);

  // React to speaking audio levels
  useEffect(() => {
    if (!sceneRef.current) return;
    const { pointLight, coreGroup } = sceneRef.current;
    if (isSpeaking) {
      const scale = 1 + audioLevel * 0.15;
      coreGroup.scale.set(scale, scale, scale);
      pointLight.intensity = 2.5 + audioLevel * 3.5;
    } else {
      coreGroup.scale.set(1, 1, 1);
      pointLight.intensity = 2.2;
    }
  }, [isSpeaking, audioLevel]);

  if (!webGLSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center p-6" aria-hidden="true">
        <div className="relative w-64 h-64 rounded-full border border-primary-500/20 flex items-center justify-center animate-spin-slow">
          <div className="w-48 h-48 rounded-full border border-primary-500/30" />
          <div className="w-32 h-32 rounded-full border border-accent-cyan/40" />
          <div className="absolute w-16 h-16 rounded-full bg-primary-600/20 blur-md" />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-90 transition-opacity duration-700"
      aria-label="Interactive 3D procedural neural core visualization"
    />
  );
};
