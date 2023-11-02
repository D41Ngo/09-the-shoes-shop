import * as S from "./style";
import { useRef } from "react";

export type CarouselRef = {
  goTo: (slide: number, dontAnimate?: boolean) => void;
  next: () => void;
  prev: () => void;
};

export function Slider() {
  const refCarousel = useRef<CarouselRef>();

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <>
      <button
        onClick={() => {
          if (refCarousel.current) {
            refCarousel.current.prev();
          }
        }}
      >
        Prev
      </button>

      <button
        onClick={() => {
          refCarousel.current?.next();
        }}
      >
        Next
      </button>

      <S.MyCarousel
        ref={refCarousel}
        afterChange={onChange}
        dots={{ className: "custom-dots" }}
      >
        <div>
          <S.CarouselItem>1</S.CarouselItem>
        </div>
        <div>
          <S.CarouselItem>2</S.CarouselItem>
        </div>
        <div>
          <S.CarouselItem>3</S.CarouselItem>
        </div>
        <div>
          <S.CarouselItem>4</S.CarouselItem>
        </div>
      </S.MyCarousel>
    </>
  );
}
