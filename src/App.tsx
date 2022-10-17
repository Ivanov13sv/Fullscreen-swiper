import { useState } from 'react';
import { About } from 'components/About';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Home } from 'components/Home';
import { Product } from 'components/Product';
import { CarouselItem, Swiper } from 'components/Swiper';
import React from 'react';

function App() {
    
    const [activeSlide, setActiveSlide] = useState(0);

    const goHome = () => setActiveSlide(0)

    const goNextSlide = () => setActiveSlide(prev => prev + 1);

    return (
        <div>
            <Header goHome={goHome}/>
            <Swiper activeSlide={activeSlide} setActiveSlide={setActiveSlide}>
                <CarouselItem>
                    <Home goNextSlide={goNextSlide}/>
                </CarouselItem>
                <CarouselItem>
                    <About onScreen={activeSlide === 1}/>
                </CarouselItem>
                <CarouselItem>
                    <Product onScreen={activeSlide === 2}/>
                </CarouselItem>
            </Swiper>
            <Footer />
        </div>
    );
}

export default App;

// try to delete carouselItem
// remove router dom
