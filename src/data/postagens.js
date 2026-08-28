import { ref } from 'vue'

export const postagens = ref([
  {
    id: 1,
    titulo: 'Esse é o bobby',
    conteudo: 'conteudo super importante',
    autorID: 22,
    data: '24/06/2009',
    salaId: 1,
    curtidas: 18
  },
  {
    id: 2,
    titulo: 'NÃO SEI VUE',
    conteudo: 'Gente, não estou conseguindo entender os componentes do Vue, alguem pode me ajudar com isso??',
    autorID: 28,
    data: '08/04/2009',
    salaId: 5,
    curtidas: 5

  },
  {
    id: 3,
    titulo: 'Aulas de atuação',
    conteudo: 'Alguem sabe alguma aula de atuação boa ou um prof bom??',
    autorID: 19,
    data: '24/06/2009',
    salaId: 4,
    curtidas: 14
  },
  {
    id: 4,
    titulo: 'Café',
    conteudo: 'Onde vende café? meu fornecedor do hospital não faz mais isso',
    autorID: 23,
    data: '06/07/2009',
    salaId: 1,
    curtidas: 160
  },
  {
    id: 5,
    titulo: 'Biollgia e Zoologia',
    conteudo: 'Algm bom de biologia. Estou com dificuldades sobre genetica  estatistica',
    autorID: 24,
    data: '11/07/2009',
    salaId: 3,
    curtidas: 64
  },
  {
    id: 6,
    titulo: 'Biologia e Zoologia',
    conteudo: 'Abuguebum bombum deb ubioblobugia. Ubestobum cobum Ubedibuficubldadebus soberebum gebunubeticabum e ubestabumtistibeca',
    autorID: 29,
    data: '11/07/2009',
    salaId: 6,
    curtidas: 200

  },
  {
    id: 7,
    titulo: 'machado de assis era louco',
    conteudo: 'Gente,',
    autorID: 30,
    data: '11/07/2009',
    salaId: 4,
    curtidas: 300
  },
  {
    id: 8,
    titulo: 'Ciência todo dia',
    conteudo: 'ciência',
    autorID: 19,
    data: '11/09/2001',
    salaId: 2,
    curtidas: 500
  },
])
