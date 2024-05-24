/* eslint-disable no-alert */
import { useState } from "react";
import { PencilSimple, Plus, TrashSimple } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import {
  DotSpinLoading,
  IconButton,
  LoadingWrapper,
  Pagination,
  SearchInput,
  DefaultTable,
  DefaultTableContent,
  ImageComponent,
  PopoverIconButton,
} from "@/components";
import { theme } from "@/styles/theme";
import { dateTimeFormatter } from "@/utils/functions";
import * as Style from "./styles";
import { NotFoundRegisters } from "@/components/NotFoundRegisters";
import { ModalCreateUser } from "./utils/ModalCreateUser";
import { ModalEditUser } from "./utils/ModalEditUser";
import { requestUsersList } from "@/services/user";
import { IUser } from "@/services/user/types";
import { IconWrapper } from "@/components/IconWrapper";

export const Users = () => {
  const [selectedUser, setSelectedUser] = useState<IUser>();

  const [modalCreateUserIsOpen, setModalCreateUserIsOpen] = useState(false);
  const [modalEditUserIsOpen, setModalEditUserIsOpen] = useState(false);

  // #region pagination
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const take = 20;
  // #endregion

  // #region requests
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["usersList", { page, search }],
    queryFn: () => requestUsersList(),
  });

  // #endregion

  return (
    <>
      {modalCreateUserIsOpen && (
        <ModalCreateUser
          setModal={setModalCreateUserIsOpen}
          onSave={() => refetch()}
        />
      )}

      {modalEditUserIsOpen && selectedUser && (
        <ModalEditUser
          setModal={setModalEditUserIsOpen}
          userInfos={selectedUser}
          onSave={() => refetch()}
        />
      )}

      <Style.Container>
        <Style.Header>
          <Style.HeaderLeftSide>
            <h2>Usuários</h2>
            <SearchInput
              onClickIcon={() => {
                setPage(1);
                refetch();
              }}
              onChange={(evt) => {
                setSearch(evt.target.value);
                if (!evt.target.value.length) setPage(1);
              }}
              onKeyUp={(evt) => {
                if (evt.key === "Enter") {
                  setPage(1);
                  refetch();
                }
              }}
            />
          </Style.HeaderLeftSide>

          <IconButton
            label="Novo usuário"
            hideLabelOnMedia
            icon={
              <IconWrapper>
                <Plus color={theme.color.white} />
              </IconWrapper>
            }
            onClick={() => setModalCreateUserIsOpen(true)}
          />
        </Style.Header>

        {isLoading && (
          <LoadingWrapper>
            <DotSpinLoading />
          </LoadingWrapper>
        )}

        {!isLoading && !!data?.users.length && (
          <>
            <DefaultTable
              colsHeader={[
                {
                  label: "",
                  cssProps: {
                    width: "32px",
                    maxWidth: "32px",
                  },
                },
                {
                  label: "Nome",
                  cssProps: {
                    paddingRight: theme.size.sm,
                  },
                },
                { label: "Email" },
                { label: "Último acesso" },
              ]}
            >
              {data.users.map((user) => (
                <DefaultTableContent
                  key={user.id}
                  colsBody={[
                    {
                      cell: (
                        <ImageComponent
                          src={user.image}
                          alt=""
                          width="32px"
                          height="32px"
                          radius="50px"
                          objectFit="cover"
                        />
                      ),
                      cssProps: {
                        width: "32px",
                        maxWidth: "32px",
                        minWidth: "48px !important",
                        paddingRight: "0px",
                      },
                    },
                    {
                      cell: user.name,
                      cssProps: {
                        paddingLeft: "8px",
                      },
                    },
                    {
                      cell: user.email,
                    },
                    {
                      cell: user.lastAccess
                        ? dateTimeFormatter(user.lastAccess)
                        : "-",
                    },
                    {
                      cell: (
                        <Style.ButtonsContainer>
                          <IconButton
                            icon={<PencilSimple />}
                            onClick={() => {
                              setSelectedUser(user);
                              setModalEditUserIsOpen(true);
                            }}
                          />
                          <PopoverIconButton
                            label="Excluir"
                            buttonIcon={
                              <TrashSimple color={theme.color.danger} />
                            }
                            hiddenIconButtonLabel
                            loading={false}
                            message={{
                              content:
                                "Atenção, essa ação não poderá ser desfeita posteriormente.",
                              title: "Deseja excluir este usuário?",
                              contentColor: theme.color.danger,
                            }}
                            actionButtonBgColor={theme.color.danger}
                            actionButtonClick={() => {
                              alert("Deletar usuário");
                            }}
                          />
                        </Style.ButtonsContainer>
                      ),
                      cssProps: {
                        width: "48px",
                      },
                    },
                  ]}
                />
              ))}
            </DefaultTable>

            {data.count > take && (
              <Style.PaginationFooter>
                <Pagination
                  totalCountOfRegister={data.count}
                  currentPage={page}
                  registerPerPage={take}
                  onPageChange={(currentPage) => {
                    setPage(currentPage);
                  }}
                />
              </Style.PaginationFooter>
            )}
          </>
        )}

        {!isLoading && !data?.users.length && (
          <NotFoundRegisters label="Nenhum usuário cadastrado. Cadastre um usuário para visualizar." />
        )}
      </Style.Container>
    </>
  );
};
