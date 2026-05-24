'use client'

import React from "react";
import { motion } from "framer-motion";

interface BounceCardFeatureProps {
  title: string;
  description: string;
  gradient: string;
  textColor: string;
}

export const BouncyCardsFeatures = ({ features }: { features: BounceCardFeatureProps[] }) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-4 md:py-6 text-foreground">
      <div className="mb-6 flex flex-col items-center justify-center text-center">
        <h2 className="max-w-2xl text-4xl font-bold md:text-5xl">
          Why Choose Chatura?
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>{features[0]?.title}</CardTitle>
          <div className={`absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl ${features[0]?.gradient} p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]`}>
            <span className={`block text-center font-semibold ${features[0]?.textColor}`}>
              {features[0]?.description}
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>{features[1]?.title}</CardTitle>
          <div className={`absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl ${features[1]?.gradient} p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]`}>
            <span className={`block text-center font-semibold ${features[1]?.textColor}`}>
              {features[1]?.description}
            </span>
          </div>
        </BounceCard>
      </div>
      <div className="mt-2 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>{features[2]?.title}</CardTitle>
          <div className={`absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl ${features[2]?.gradient} p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]`}>
            <span className={`block text-center font-semibold ${features[2]?.textColor}`}>
              {features[2]?.description}
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>{features[3]?.title}</CardTitle>
          <div className={`absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl ${features[3]?.gradient} p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]`}>
            <span className={`block text-center font-semibold ${features[3]?.textColor}`}>
              {features[3]?.description}
            </span>
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({ className, children }: { className: string; children: React.ReactNode }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-muted p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};
