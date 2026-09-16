import { ref } from "vue";
import { users } from "@/views/user/Users";
export const userReal = ref('');

export function pegarIDUsuario() {
  const usuario = users.find((usu) => usu.nome === userReal.value)
  if (usuario) {
    return usuario.id
  } else {
    return null
  }
}
