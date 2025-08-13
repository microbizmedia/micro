declare module 'jos-animation' {
  interface JOSOptions {
    passive?: boolean;
    once?: boolean;
    animation?: string;
    timingFunction?: string;
    threshold?: number;
    delay?: number;
    duration?: number;
    scrollDirection?: 'up' | 'down' | 'both';
    rootMargin?: string;
  }

  interface JOSStatic {
    init: (options?: JOSOptions) => void;
    refresh: () => void;
  }

  const JOS: JOSStatic;
  export default JOS;
}
