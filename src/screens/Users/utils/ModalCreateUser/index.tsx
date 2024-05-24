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

interface IModalCreateUser {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  onSave: () => void;
}

export const ModalCreateUser = ({ setModal }: IModalCreateUser) => {
  // #region hookForm\Zood
  const MAX_FILE_SIZE = 500000;
  const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

  const schema = z
    .object({
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
      permission: z.string().min(1, { message: "Campo obrigatório." }),
      password: z
        .string()
        .min(6, "Escolha uma senha com pelo menos seis caracteres."),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "As senhas não são iguais.",
      path: ["confirmPassword"],
    });

  type TFormData = z.infer<typeof schema>;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: zodResolver(schema),
    reValidateMode: "onChange",
    defaultValues: {
      image: "",
      name: "",
      email: "",
      permission: "",
      password: "",
      confirmPassword: "",
    },
  });
  // #endregion

  return (
    <Modal title="Cadastrar usuário" setModal={setModal}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <FormImageInput
          {...register("image")}
          label="Foto"
          error={errors.image?.message}
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

        <FormInput
          label="Senha"
          type="password"
          {...register("password")}
          placeholder="Crie uma senha de pelo menos 6 caracteres"
          error={errors.password?.message}
        />

        <FormInput
          label="Confirmar senha"
          type="password"
          {...register("confirmPassword")}
          placeholder="Confirme a senha criada"
          error={errors.confirmPassword?.message}
        />

        <Button justify="center" loading={false} type="submit">
          Cadastrar
        </Button>
      </form>
    </Modal>
  );
};
