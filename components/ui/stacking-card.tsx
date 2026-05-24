'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ProjectData {
  title: string;
  description: string;
  link: string;
  color: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card = ({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0'
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] h-[450px] w-[70%] rounded-lg p-10 origin-top shadow-2xl`}
      >
        <h2 className='text-3xl text-left font-bold text-white mb-2'>{title}</h2>
        <div className={`flex h-full mt-3 gap-10`}>
          <div className={`w-[40%] relative top-[5%] flex flex-col justify-start`}>
            <p className='text-base text-white leading-relaxed font-medium'>{description}</p>
          </div>

          <div
            className={`relative w-[60%] h-full rounded-lg overflow-hidden`}
          >
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <img src={url} alt={title} className='absolute inset-0 w-full h-full object-cover' />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ComponentRootProps {
  projects: ProjectData[];
  title?: string;
}

const Component = forwardRef<HTMLSection, ComponentRootProps>(({ projects, title }, ref) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <section className='bg-white' ref={ref}>
        <>
          <section className='text-black h-[50vh] w-full bg-white grid place-content-center' ref={container}>
            <h1 className='2xl:text-7xl text-5xl px-8 font-bold text-center tracking-tight leading-[120%]'>
              {title || 'Why Choose Us?'}
            </h1>
          </section>
        </>

        <section className='text-white w-full bg-white'>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </section>
    </ReactLenis>
  );
});

Component.displayName = 'StackingCardComponent';

export default Component;
