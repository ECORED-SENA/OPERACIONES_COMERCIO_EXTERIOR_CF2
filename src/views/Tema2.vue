<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 
    .row.mb-5
      .col-lg-4
        img(src='@/assets/curso/t2/f1.png' alt='imagen relacionada')
      .col-lg-8
        p 
        .cajon.color-primario.p-4.mb-4
          p.mb-0 
    #t_2_1.titulo-secundario
      h2 
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          .titulo-sexto.color-acento-contenido
            span 
          img(src='@/assets/curso/t2/f2.svg' alt='imagen relacionada')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p 





















</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
