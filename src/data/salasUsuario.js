import { ref, watch} from "vue";

const dadosSalvos = JSON.parse(localStorage.getItem("salasEntradas"));
export const salasUsuario = ref(dadosSalvos || []);

localStorage.setItem("salasEntradas", JSON.stringify(salasUsuario.value))
watch(
  salasUsuario,
  (novoValor) => {
    localStorage.setItem("salasEntradas", JSON.stringify(novoValor))
  },
  { deep: true }
);
