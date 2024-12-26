declare module 'react-typewriter-effect' {
    import { CSSProperties } from 'react';
  
    export interface TypewriterProps {
      textStyle?: CSSProperties;
      startDelay?: number;
      cursorColor?: string;
      multiText?: string[];
      multiTextDelay?: number;
      typeSpeed?: number;
      multiTextLoop?: boolean;
    }
  
    const Typewriter: React.FC<TypewriterProps>;
  
    export default Typewriter;
  }
  