import { ref, watch} from "vue";

const dadosSalvos = JSON.parse(localStorage.getItem("salasEntradas"));
export const salasUsuario = ref(dadosSalvos || []);

localStorage.setItem("salasEntradas", JSON.stringify(salasUsuario.value))
watch(
  salasUsuario,
  (novoValor) => {
    const dadosSimplificados = novoValor.map(sala => ({
      id: sala.id,
      nome: sala.nome}));
    localStorage.setItem("salasEntradas", JSON.stringify(dadosSimplificados));
  },
  { deep: true } 
);