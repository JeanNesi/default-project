// UI
import { X } from "@phosphor-icons/react";
import * as Style from "./styles";

// TYPES
import { IModal } from "./types";
import { theme } from "../../styles/theme";
import { IconButton } from "../Buttons/IconButton";
import { ImageComponent } from "../ImageComponent";

export const Modal = ({
  children,
  setModal,
  title,
  bodyWidth,
  titleIcon,
}: IModal) => (
  <Style.Background
    id="background"
    onMouseDown={(evt: any) => {
      if (evt.target.id === "background") setModal(false);
    }}
  >
    <Style.Body $bodyWidth={bodyWidth}>
      <Style.Header>
        <Style.HeaderLeftSide>
          {titleIcon && (
            <ImageComponent src={titleIcon} alt="Icone do modal" size="24px" />
          )}
          <h2>{title}</h2>
        </Style.HeaderLeftSide>
        <IconButton
          icon={<X />}
          color={theme.color.primary}
          onClick={() => {
            setModal(false);
          }}
        />
      </Style.Header>
      {children}
    </Style.Body>
  </Style.Background>
);
