import { ref, watch } from "vue";

const valorSalvo = localStorage.getItem('total_seguindo');
export const seguindo = ref(valorSalvo !== null ? Number(valorSalvo) : 0);

watch(seguindo, (novoValor) => {
  localStorage.setItem('total_seguindo', String(novoValor));
});