'use client';

import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

export interface AnimatedCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  enableHover?: boolean;
}

/**
 * Reusable animated card component powered by motion/react.
 * Features a smooth fade-in + slide-up viewport entrance animation
 * and subtle hover/tap micro-interactions without disrupting parent layouts.
 */
export default function AnimatedCard({
  children,
  delay = 0,
  duration = 0.45,
  className = '',
  enableHover = true,
  ...props
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        enableHover
          ? {
              y: -4,
              transition: { duration: 0.2, ease: 'easeOut' },
            }
          : undefined
      }
      whileTap={
        enableHover
          ? {
              scale: 0.99,
              transition: { duration: 0.1, ease: 'easeOut' },
            }
          : undefined
      }
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface FadeInProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  direction = 'up',
  ...props
}: FadeInProps) {
  const initialOffset = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
    none: {},
  }[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export { AnimatedCard };
