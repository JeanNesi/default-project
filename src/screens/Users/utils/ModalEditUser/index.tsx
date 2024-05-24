/* eslint-disable no-console */
// #region IMPORTS
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Modal,
  Button,
  FormInput,
  FormImageInput,
} from "../../../../components";
import { FormSelect } from "../../../../components/Form/Select";
import { IUser } from "@/services/user/types";

interface IModalEditUser {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  userInfos: IUser;
  onSave: () => void;
}

export const ModalEditUser = ({ setModal, userInfos }: IModalEditUser) => {
  // #region hookForm\Zood
  const MAX_FILE_SIZE = 500000;
  const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

  const schema = z.object({
    image: z
      .any()
      .refine(
        (files) =>
          String(files).startsWith("https") ||
          files.length === 0 ||
          files?.[0]?.size <= MAX_FILE_SIZE,
        "Limite de 5MB."
      )
      .refine(
        (files) =>
          String(files).startsWith("https") ||
          files.length === 0 ||
          ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Apenas JPG, JPEG e PNG são aceitos."
      ),
    name: z.string().min(1, { message: "Campo obrigatório." }),
    email: z
      .string()
      .min(1, { message: "Campo obrigatório." })
      .email("E-mail inválido."),
    isBlocked: z.string().min(1, { message: "Campo obrigatório." }),
  });

  type TFormData = z.infer<typeof schema>;

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: zodResolver(schema),
    reValidateMode: "onChange",
    defaultValues: {
      image: userInfos.image,
      name: userInfos.name,
      email: userInfos.email,
      isBlocked: userInfos.isBlocked ? "blocked" : "active",
    },
  });
  // #endregion

  return (
    <Modal title="Editar usuário" setModal={setModal}>
      <form
        onSubmit={handleSubmit(async (data) => {
          console.log(data);
        })}
      >
        <FormImageInput
          {...register("image")}
          label="Foto"
          error={errors.image?.message}
          defaultImage={userInfos.image}
        />

        <FormInput
          label="Nome completo"
          {...register("name")}
          placeholder="Ex: João Silva"
          error={errors.name?.message}
        />

        <FormInput
          label="E-mail"
          {...register("email")}
          placeholder="Ex: joao@email.com"
          error={errors.email?.message}
        />

        <FormSelect
          label="Status"
          {...register("isBlocked")}
          watchValue={watch("isBlocked")}
          error={errors.isBlocked?.message}
        >
          <option value="" disabled hidden>
            Selecione
          </option>

          <option value="active">Ativo</option>

          <option value="blocked">Bloqueado</option>
        </FormSelect>

        <Button justify="center" loading={false} type="submit">
          Salvar
        </Button>
      </form>
    </Modal>
  );
};
