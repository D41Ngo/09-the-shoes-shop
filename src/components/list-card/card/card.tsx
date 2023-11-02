import * as S from "./style";

export function Card() {
  return (
    <S.Wrapper>
      <div className="center">
        <S.Image src="https://i.pravatar.cc?img=1" alt=".." />
      </div>
      <div className="content">
        <S.Name>Adias</S.Name>
        <S.Desc>Lorem ipsum dolor sit amet.</S.Desc>
      </div>

      <div className="action">
        <S.Button variant={"buy"}>Buy</S.Button>
        <S.Button variant={"waring"}>$50</S.Button>
      </div>
    </S.Wrapper>
  );
}
