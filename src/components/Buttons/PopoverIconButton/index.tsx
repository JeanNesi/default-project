import { useState } from "react";
import { ArrowContainer, Popover } from "react-tiny-popover";
import { X } from "@phosphor-icons/react";
import { IconButton } from "../IconButton";
import * as Style from "./styles";
import { Button } from "../Button";
import { IPopoverButton } from "./types";
import { theme } from "../../../styles/theme";

export const PopoverIconButton = ({
  label = "",
  actionButtonBgColor,
  actionButtonClick,
  disabled = false,
  message = {
    title: "Title",
    content: "Message Title",
    contentColor: theme.color.gray4,
  },
  buttonIcon,
  fontWeight,
  hiddenIconButtonLabel,
  hideLabelOnMedia,
  iconButtonClassName,
  iconButtonColor,
  labelPos,
}: IPopoverButton) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);

  function getArrowStyle(position: string | undefined, arrowSize: number) {
    switch (position) {
      case "top":
        return {
          bottom: 3,
          borderTop: `${arrowSize}px solid white`,
          zIndex: 1,
        };
      case "bottom":
        return {
          top: 3,
          borderBottom: `${arrowSize}px solid white`,
          zIndex: 1,
        };
      case "right":
        return {
          left: 3,
          borderRight: `${arrowSize}px solid white`,
          zIndex: 1,
        };
      default:
        return {
          right: 3,
          borderLeft: `${arrowSize}px solid white`,
          zIndex: 1,
        };
    }
  }

  const togglePopOver = () => {
    setIsPopoverOpen((prev) => !prev);
  };

  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={["left", "top", "bottom", "right"]}
      padding={1}
      onClickOutside={() => {
        setIsPopoverOpen(false);
      }}
      containerStyle={{ zIndex: "1001" }}
      // eslint-disable-next-line react/no-unstable-nested-components
      content={({ position, childRect, popoverRect }) => {
        const arrowSize = 10;
        return (
          <Style.AnimationDiv>
            <ArrowContainer
              position={position}
              childRect={childRect}
              popoverRect={popoverRect}
              arrowColor={theme.color.gray3}
              arrowSize={arrowSize}
            >
              <ArrowContainer
                position={position}
                childRect={childRect}
                popoverRect={popoverRect}
                arrowSize={arrowSize}
                arrowColor={theme.color.gray3}
                style={{
                  paddingLeft: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  paddingRight: 0,
                }}
                arrowStyle={getArrowStyle(position, arrowSize)}
              >
                <Style.PopoverBackground>
                  <Style.PopoverBody
                    $contentColor={message.contentColor ?? theme.color.gray4}
                  >
                    <h5>
                      {label}
                      <IconButton
                        onClick={() => {
                          setIsPopoverOpen(false);
                        }}
                        icon={<X />}
                      />
                    </h5>
                    <Style.Hr />
                    <p className="p3">{message.title}</p>
                    <p className="p4">{message.content}</p>
                    <Style.Hr />
                    <Style.ActionButtonContainer>
                      <Button
                        type="button"
                        bgColor={actionButtonBgColor}
                        onClick={() => {
                          actionButtonClick();
                          togglePopOver();
                        }}
                      >
                        {label}
                      </Button>
                    </Style.ActionButtonContainer>
                  </Style.PopoverBody>
                </Style.PopoverBackground>
              </ArrowContainer>
            </ArrowContainer>
          </Style.AnimationDiv>
        );
      }}
    >
      <Style.ButtonContainer>
        <IconButton
          disabled={disabled}
          hideLabelOnMedia={hideLabelOnMedia}
          className={iconButtonClassName}
          label={hiddenIconButtonLabel ? "" : label}
          color={iconButtonColor}
          icon={buttonIcon}
          onClick={togglePopOver}
          labelPos={labelPos}
          fontWeight={fontWeight}
        />
      </Style.ButtonContainer>
    </Popover>
  );
};
