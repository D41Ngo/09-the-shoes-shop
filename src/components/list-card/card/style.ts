import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 40rem;
  box-shadow: 0 0.4rem 0.4rem 0 #00000040;

  height: 40rem;

  .center {
    display: flex;
    justify-content: center;
  }

  .content {
    margin: 4rem;
  }

  .action {
  }
`;

export const Image = styled.img`
  width: 21rem;
  height: 17rem;

  object-fit: cover;
`;

export const Name = styled.p`
  font-family: Inter;
  font-size: 2.4rem;
  font-weight: 300;
`;

export const Desc = styled.p`
  font-family: Inter;
  font-size: 2rem;
  font-weight: 300;
  color: #cbc9c9;
`;

// strategy pattern
type TVariant = "buy" | "dollar" | "waring";

const variant: Record<TVariant, string> = {
  buy: "#9DE167",
  dollar: "#DEDDDC",
  waring: "red",
};

export const Button = styled.button<{ variant: TVariant }>`
  background-color: ${(props) => {
    return variant[props.variant];

    switch (props.variant) {
      case "buy":
        return "#9DE167";
      case "dollar":
        return "#DEDDDC";
      default:
        return "";
    }
  }};
`;
