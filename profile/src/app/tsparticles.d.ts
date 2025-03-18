// Add this to your global.d.ts or a new tsparticles.d.ts file
declare module "@tsparticles/react" {
    import type { Engine } from "@tsparticles/engine";
    import type { ComponentProps } from "react";
    
    export interface IParticlesProps extends ComponentProps<"div"> {
      id?: string;
      width?: string;
      height?: string;
      options?: unknown;
      init?: (engine: Engine) => Promise<void>;
    }
    
    const Particles: React.FC<IParticlesProps>;
    export default Particles;
  }
  