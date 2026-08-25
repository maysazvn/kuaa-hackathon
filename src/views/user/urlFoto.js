import { ref } from "vue";
export const urlFoto = ref(localStorage.getItem('urlFoto') || '/pfpPlaceholder.png');