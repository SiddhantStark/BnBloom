import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const PropertyViewCard = ({images}) => {
  return (
    <section>
        <Carousel 
        className='overflow-hidden rounded-lg'
        opts={{
            breakpoints: {
                '(min-width: 1024px)' : {slidesToScroll : 2}
            }
        }}
        >
            <CarouselContent className='-ml-0.5'>
                {
                    images?.map((image, index) => {
                        return (
                            <CarouselItem key={index} className='lg:basis-1/2'> 
                            <img className='h-96 w-full object-cover' src={image} alt={`Image index: ${index}`} />
                            </CarouselItem>
                        )
                    })
                }
            </CarouselContent>
            <CarouselPrevious className='left-1 shadow-lg'/>
            <CarouselNext className='right-1 shadow-lg'/>
        </Carousel>
    </section>
  )
}

export default PropertyViewCard
