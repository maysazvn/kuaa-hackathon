import { ref, watch } from "vue"

const dadosSalvos = JSON.parse(
  localStorage.getItem('salas')
)

export const salas = ref(dadosSalvos || [
{
    idSala: 1,
    nome: '22info22',
    participantes: 67,
    desc: 'fórum de discussão de sociologia da 2info2',
    usuarioCriador: 'Samusaax',
    status: 1,
    banner: 'https://pbs.twimg.com/profile_images/1462928084726861828/3mshjWqp_400x400.jpg'
},
{
    idSala: 2,
    nome: 'Ciência todo dia',
    participantes: 32,
    desc: 'Discutindo física com kurt Cobain brasileiro',
    usuarioCriador: 'PedroLooser',
    status: 0,
    banner: 'https://i.pinimg.com/736x/c0/72/47/c0724777580c31a95f3ddf84928b34d9.jpg'
},
{
    idSala: 3,
    nome: 'Química do mal',
    participantes: 2,
    desc: 'Sala de discussão da 2quimiii',
    usuarioCriador: 'Rochelixx',
    status: 1,
    banner: 'https://i.pinimg.com/736x/0b/8d/21/0b8d21f8a1212415a34395aa22af84ea.jpg'
},
{
    idSala: 4,
    nome:'Matematica',
    participantes: 56,
    desc: 'AAAAAaAAAaAAAaAaAA',
    usuarioCriador: 'erererer',
    status: 0,
    banner: 'https://i.pinimg.com/736x/64/fb/35/64fb35d2126cbdd70eab59b20f27b3c4.jpg'
},{
    idSala: 5,
    nome: 'Zootecnia',
    participantes: 21,
    desc: 'Estudamos Monstros, Espíritos, Demônios e Ghouls',
    usuarioCriador: 'Samusaax',
    status: 1,
    banner: 'https://i.pinimg.com/736x/95/8a/a6/958aa6b467125bf1943f5428efe44c65.jpg'
},{
    idSala: 6,
    nome: 'Jojo History Adventures',
    participantes: 21,
    desc: 'Aprenda historia com a familia joestar',
    usuarioCriador: 'Samusaax',
    status: 1,
    banner: 'https://i.pinimg.com/736x/96/dc/aa/96dcaa3ba1bd16314aae595c96836625.jpg'
},{
    idSala: 7,
    nome: 'Five Nights At Freddy',
    participantes: 21,
    desc: '',
    usuarioCriador: 'erererer',
    status: 1,
    banner: 'https://i.pinimg.com/736x/7f/01/fe/7f01fe7cac4f06697b8b61066da99a4b.jpg'
},{
    idSala: 8,
    nome: 'Programação',
    participantes: 99,
    desc: 'Duvidas de JS, Vue, Python, etc...',
    usuarioCriador: 'sackboy',
    status: 1,
    banner: 'https://i.pinimg.com/1200x/80/22/68/8022682b6bbe4ddf22132d07d55f4635.jpg'
},{
    idSala: 9,
    nome: 'CSS',
    participantes: 0,
    desc: 'Ajudando a entender css',
    usuarioCriador: 'homotron3000',
    status: 0,
    banner: 'https://i.pinimg.com/736x/a6/b5/cd/a6b5cdc8d9b2bf6003950a997230e3ba.jpg'
},{
    idSala: 10,
    nome: 'MATEMÁTICA',
    participantes: 0,
    desc: 'Matemática pode ser legal :D',
    usuarioCriador: 'Gabriel',
    status: 0,
    banner: 'https://i.pinimg.com/736x/f0/fc/3f/f0fc3fbf591538641cdc8bee744be8e2.jpg'
},{
    idSala: 11,
    nome: 'Filosofia',
    participantes: 13,
    desc: 'Filosofando com Dexter',
    usuarioCriador: 'Bay-harbor Butcher',
    status: 1,
    banner: 'https://i.pinimg.com/1200x/51/76/34/517634feafe0323c9687ff7ef2e0a220.jpg'
},{
    idSala: 12,
    nome: 'Defesa Contra as Artes das Trevas ',
    participantes: 3,
    desc: 'EU finalmente ensinarei DCAT',
    usuarioCriador: 'hvm',
    status: 1,
    banner: 'https://pt.quizur.com/_image?href=https%3A%2F%2Fstatic.quizur.com%2Fi%2Fb%2F5b08e2f7b7f237.45255471f.jpg&w=200&h=200&f=webp'
},{
    idSala: 13,
    nome: 'Estudo sobre Poções',
    participantes: 10,
    desc: 'Reforço de Poções para os imprestaveis que não prestam atenção na aula',
    usuarioCriador: 'hvm',
    status: 1,
    banner: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2P2te7v8KbtQDoiMnxgi25HI-iHtOEMMUvCgWpXGhdQ&s=10'
},{
    idSala: 14,
    nome: 'Física',
    participantes: 300,
    desc: 'Perguntinhas do HollyShift',
    usuarioCriador: 'o inimigo',
    status: 1,
    banner: 'https://i.pinimg.com/736x/a5/c7/38/a5c7381534ff4c5ff8ea9005def4df4a.jpg'
},

])

watch(
  salas,
  (novoValor) => {
    localStorage.setItem(
      'salas',
      JSON.stringify(novoValor)
    )
  },
  { deep: true }
)
