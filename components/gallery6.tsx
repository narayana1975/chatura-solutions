'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { useEffect, useState } from 'react'

interface GalleryItem {
  id: string
  title: string
  summary: string
  url: string
  image: string
}

interface Gallery6Props {
  heading?: string
  demoUrl?: string
  items?: GalleryItem[]
}

const Gallery6 = ({
  heading = 'Gallery',
  demoUrl = 'https://www.shadcnblocks.com',
  items = [
    {
      id: 'item-1',
      title: 'Build Modern UIs',
      summary:
        'Create stunning user interfaces with our comprehensive design system.',
      url: '#',
      image: '/images/block/placeholder-dark-1.svg',
    },
    {
      id: 'item-2',
      title: 'Computer Vision Technology',
      summary:
        'Powerful image recognition and processing capabilities that allow AI systems to analyze, understand, and interpret visual information from the world.',
      url: '#',
      image: '/images/block/placeholder-dark-1.svg',
    },
    {
      id: 'item-3',
      title: 'Machine Learning Automation',
      summary:
        'Self-improving algorithms that learn from data patterns to automate complex tasks and make intelligent decisions with minimal human intervention.',
      url: '#',
      image: '/images/block/placeholder-dark-1.svg',
    },
    {
      id: 'item-4',
      title: 'Predictive Analytics',
      summary:
        'Advanced forecasting capabilities that analyze historical data to predict future trends and outcomes, helping businesses make data-driven decisions.',
      url: '#',
      image: '/images/block/placeholder-dark-1.svg',
    },
    {
      id: 'item-5',
      title: 'Neural Network Architecture',
      summary:
        'Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.',
      url: '#',
      image: '/images/block/placeholder-dark-1.svg',
    },
  ],
}: Gallery6Props) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const ServiceCard = ({ item }: { item: GalleryItem }) => (
    <a
      href={item.url}
      className="group flex flex-col justify-between"
    >
      <div>
        <div className="flex aspect-[3/2] overflow-clip rounded-xl">
          <div className="flex-1">
            <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-2 pt-3 sm:pt-4 text-base sm:text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl break-words whitespace-normal">
        {item.title}
      </div>
      <div className="mb-4 sm:mb-8 line-clamp-2 text-xs sm:text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9">
        {item.summary}
      </div>
    </a>
  )

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col items-center justify-center text-center md:mb-14 lg:mb-16">
          <h2 className="mb-3 text-2xl sm:text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            {heading}
          </h2>
        </div>
      </div>
      <div className="flex justify-center px-4 sm:px-6 lg:px-8">
        {isMobile ? (
          <div className="w-full max-w-7xl grid grid-cols-1 gap-4 sm:gap-6">
            {items.map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <Carousel
            opts={{
              breakpoints: {
                '(max-width: 640px)': {
                  dragFree: true,
                },
              },
            }}
            className="w-full max-w-7xl"
          >
            <CarouselContent className="ml-0 flex gap-2 sm:gap-4 md:gap-6">
              {items.map((item) => (
                <CarouselItem key={item.id} className="basis-full sm:basis-1/2 lg:basis-1/3 pl-0 overflow-visible">
                  <ServiceCard item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
      </div>
    </section>
  )
}

export { Gallery6 }
