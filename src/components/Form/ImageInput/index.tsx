// COMPONENTS
import {
  ChangeEvent,
  ForwardRefRenderFunction,
  forwardRef,
  useState,
} from "react";
import { PencilSimple } from "@phosphor-icons/react";
import { ImageComponent } from "../../ImageComponent";

// TYPES
import { IUploader } from "./types";

// COMPONENTS
import * as Style from "./styles";
import { img } from "@/assets/img";
import { IconWrapper } from "@/components/IconWrapper";
import { theme } from "@/styles/theme";

const FormImageInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  IUploader
> = ({ label, error, defaultImage, ...rest }, ref) => {
  const [previewImage, setPreviewImage] = useState<string>(defaultImage || "");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Style.BackgroundSection>
      <h6>{label}</h6>
      <Style.Container>
        <Style.ImageWrapper>
          <IconWrapper>
            <PencilSimple color={theme.color.white} />
          </IconWrapper>
          <ImageComponent
            src={previewImage || img.imageBackplate}
            size="80px"
            radius="100%"
          />
          <input
            {...rest}
            ref={ref}
            type="file"
            onChange={handleImageChange}
            accept=".jpg, .jpeg, .png, .svg"
            style={{
              position: "absolute",
              cursor: "pointer",
              height: "80px",
              width: "80px",
              top: 20,
              left: 0,
              borderRadius: "100%",
              opacity: 0,
            }}
          />
          <Style.ErrorMessage>
            {!!error && <p className="p3">{error}</p>}
          </Style.ErrorMessage>
        </Style.ImageWrapper>
        <p className="p5">JPG, JPEG ou PNG. Tamanho máximo de 5 MB.</p>
      </Style.Container>
    </Style.BackgroundSection>
  );
};

export const FormImageInput = forwardRef(FormImageInputBase);
