// LIBS
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

// COMPONENTS
import { List, Power, User, X } from "@phosphor-icons/react";
import { IconButton } from "../Buttons/IconButton";

// STYLES
import * as Style from "./styles";
import { useAuthContext } from "@/context/Auth/UseAuthContext";
import { theme } from "../../styles/theme";
import { img } from "@/assets/img";

export interface ISidebarContent {
  icon: React.ReactNode;
  url: string;
}

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(true);
  const { signOut } = useAuthContext();

  const iconColor = theme.color.white;
  const iconSize = theme.size.md;

  const sidebarContent: ISidebarContent[] = [
    { icon: <User color={iconColor} size={iconSize} />, url: "/users" },
  ];

  const handleSidebar = () => {
    setAnimate(false);
    setTimeout(() => {
      setOpenSidebar(false);
    }, 125);
  };

  const handleSignOut = () => {
    signOut();
    navigate("/login");
  };

  useEffect(() => {
    if (location.pathname === "/") navigate("/home");
    if (location.pathname === "/" && !localStorage.getItem("authToken"))
      navigate("/login");
  }, []);

  return (
    <Style.Background>
      <Style.SidebarBodyMobile>
        <IconButton
          labelPos="bottom"
          icon={<List />}
          onClick={() => {
            setAnimate(true);
            setOpenSidebar(true);
          }}
        />
        <Style.ImageMobile>
          <img src={img.react} alt="Logo" />
        </Style.ImageMobile>
      </Style.SidebarBodyMobile>

      <Style.SidebarBody $openSidebar={openSidebar}>
        <Style.CloseButtonMobile>
          <IconButton
            icon={<X />}
            onClick={() => {
              setAnimate(false);
              setTimeout(() => {
                setOpenSidebar(false);
              }, 125);
            }}
          />
        </Style.CloseButtonMobile>

        <Style.ImageContainer>
          <img src={img.react} alt="Logo" />
        </Style.ImageContainer>

        <Style.Hr />

        <Style.SidebarContent>
          {sidebarContent.map((element, i: number) => (
            <React.Fragment key={element.url}>
              <Style.SidebarButton
                $selected={window.location.pathname.startsWith(element.url)}
                to={element.url}
                onClick={handleSidebar}
              >
                {element.icon}
              </Style.SidebarButton>

              {i === sidebarContent.length - 1 && (
                <>
                  <Style.Spacer />

                  <IconButton
                    gap="0"
                    opacity="0.4"
                    color={theme.color.primary}
                    className="p10"
                    labelPos="bottom"
                    icon={<Power color={iconColor} size={iconSize} />}
                    onClick={handleSignOut}
                  />
                </>
              )}
            </React.Fragment>
          ))}
        </Style.SidebarContent>
      </Style.SidebarBody>

      {openSidebar && (
        <Style.MobileBackground $animate={animate} onClick={handleSidebar} />
      )}

      <Style.AppContent>
        <Outlet />
      </Style.AppContent>
    </Style.Background>
  );
};
