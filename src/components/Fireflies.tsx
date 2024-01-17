import { Sparkles } from "@react-three/drei";

export default function Fireflies() {
  return (
    <Sparkles
      size={6}
      scale={[4, 4, 4]}
      position-y={2}
      speed={0.2}
      count={80}
      color={0xffcc00}
    />
  );
}
