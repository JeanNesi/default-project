// #region imports
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import * as Style from "./styles";
import { useAuthContext } from "@/context/Auth/UseAuthContext";

import { FormInput, Button, ImageComponent } from "@/components";
import { theme } from "@/styles/theme";
import { requestLogin } from "@/services/auth";
import { img } from "@/assets/img";
// #endregion

export const Login = () => {
  // #region states
  const navigate = useNavigate();
  const { signIn } = useAuthContext();
  // #endregion

  // #region form
  const schema = z.object({
    email: z
      .string()
      .email("Informe um email válido.")
      .min(1, { message: "Campo obrigatório." }),
    password: z.string().min(1, { message: "Campo obrigatório." }),
  });

  type TFormData = z.infer<typeof schema>;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TFormData>({
    resolver: zodResolver(schema),
  });
  // #endregion

  // #region requests
  const { mutateAsync, isPending } = useMutation({
    mutationFn: () => requestLogin(),
    onSuccess: (reponse) => {
      navigate("/users");
      signIn(reponse);
    },
  });
  // #endregion

  return (
    <Style.Background>
      <ImageComponent src={img.react} alt="Logo" width="256px" height="86px" />

      <Style.Form
        onSubmit={handleSubmit(async () => {
          await mutateAsync();
        })}
      >
        <Style.Card>
          <h2>Login</h2>

          <FormInput
            label="Email"
            {...register("email")}
            placeholder="Informe o email"
            autoComplete="on"
            error={errors.email?.message}
          />

          <FormInput
            label="Senha"
            {...register("password")}
            type="password"
            placeholder="Informe a senha"
            error={errors.password?.message}
          />
        </Style.Card>

        <Button
          type="submit"
          loading={isPending}
          justify="center"
          bgColor={theme.color.primaryH}
        >
          Login
        </Button>
      </Style.Form>
    </Style.Background>
  );
};
