<script setup>
</script>

<template>
  Ajuda
</template>

<style scoped>

h1, h2{
  font-family: "Prompt", sans-serif;
  font-weight: bold;
  color: #d9d9d9;
  text-align: center;
}

h1{
  font-size: 2.5rem;
}

h2{
  font-size: 2rem;
}

div.p{
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 1vw auto;
  background: #313131;
  padding: 15px;
  border-radius: 15px;
  color: #D9D9D9;
  width: 50%;
}

summary{
  font-weight: 600;
  list-style: none;
  font-size: 1.5rem;
}

div.p p{
  color: #d9d9d9d9;
  margin: 5px;
  text-align: left;
  font-size: 1.2rem;
}

.seta{
  margin: 2px;
  transition: .5s;
}

details[open] summary .seta{
  transform: rotate(90deg);
}

div.contato{
  margin: 1vw;
}

div.contato p {
color: #d9d9d9;
text-align: center;
margin: 15px auto;
border: 3px solid #d9d9d9;
border-radius: 15px;
font-weight: bold;
width: fit-content;
padding: 5px 15px;
font-size: 1.2rem;
}

@media (max-width: 768px) {
  h1{
    font-size: 2rem;
  }

  h2{
    font-size: 1.5rem;
    margin: 5vw;
  }
.p{
  width: 100% !important ;
}

summary{
  font-size: 1.3rem;
}
}
</style>
