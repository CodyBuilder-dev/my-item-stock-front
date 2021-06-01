import {useState} from "react";
import {Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem} from "reactstrap";

import "../css/carousel.css";

import img1 from '../img/antonio-pereda-1280.jpg';
import img2 from '../img/edwin-landseer-1280.jpg';
import img3 from '../img/waterfall-1280.jpg';


const items = [
    {
        src: img1,
        altText: "",
        caption: "내돈주고 내가 산 물건, 이제는 잊지 말고 관리하세요",
        header: "내돈내산"
    },
    {
        src: img2,
        altText: "",
        caption: "내가 등록한 물건을 카테고리별로 정리해서 보여줍니다",
        header: "물건 목록을 한눈에"
    },
    {
        src: img3,
        altText: "",
        caption: "어떤 종류의 물건을 얼마나 가지고 있는지 통계로 확인할 수 있습니다",
        header: "통계"
    }
]

function MainCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex: any) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                className="carousel-item"
                tag="div"
                key={item.src}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <img className={"carousel-img"} src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.header} />
            </CarouselItem>
        );
    });

    return (
        <div id={"main-carousel"}>
            <Carousel activeIndex={activeIndex}
                      next={next}
                      previous={previous}
                      slide={true}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
            <a href={"/main"}>
                <button>메인 페이지로</button>
            </a>
        </div>
    )
}

export default MainCarousel;
