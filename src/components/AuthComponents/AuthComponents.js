import React from 'react'
import {Container ,Footer ,Body ,Image ,CarouselDiv ,CarouselContainer ,} from './style'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function AuthComponents({children}) {
    return (
        <>
        <Container>
            <Body>
                <Image>
                    <img src="https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png" />
                    <CarouselContainer>
                        <Carousel labels={false} showArrows={false} showIndicators={false} showThumbs={false} infiniteLoop={true} autoFocus={true} autoPlay={true} >
                        <CarouselDiv>
                        <img src="https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg" />
                        </CarouselDiv>
                        <CarouselDiv>
                            <img src="https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg" />
                        </CarouselDiv>
                        <CarouselDiv>
                            <img src="https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg" />
                        </CarouselDiv>
                    </Carousel>
                    </CarouselContainer>
                </Image> 
                    {children}
            </Body>
            <Footer/>   
        </Container>
        </>
    )
}

export default AuthComponents
