import { img } from "@/assets/img";
import { ImageComponent } from "../ImageComponent";
import * as Style from "./styles";

export const ErrorFallback = () => (
  <Style.Background>
    <ImageComponent src={img.react} alt="Logo" height="120px" width="130px" />
    <Style.Content>
      <h2>Oops! Encontramos um problema.</h2>
    </Style.Content>
    <button
      type="button"
      onClick={() => {
        window.location.replace(window.location.pathname);
      }}
    >
      Tentar novamente
    </button>
  </Style.Background>
);
