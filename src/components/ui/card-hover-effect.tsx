"use client"
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const renderText = (str: string) => {
    const regex = /{(.*?)}/g; // Matches text inside curly braces
    const parts = str.split(regex);

    return parts.map((part, index) =>
      regex.test(`{${part}}`) ? (
        <span key={index}>{part}</span>
      ) : (
        <strong key={index}>{part}</strong>
      )
    );
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200/[0.5] block rounded-sm"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.1 },
                }}
                exit={{
                  opacity: 1,
                  transition: { duration: 0.1, delay: 0.15 },
                }}
              />
            )}
          </AnimatePresence>
          {/* <div>{item.title}</div> */}
          <Card>
            <CardTitle>{renderText(item.title)}</CardTitle>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "",
        className
      )}
    >
      <div className="relative z-20">
        <div className="p-1">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("tracking-wide text-black", className)}>
      {children}
    </h4>
  );
};