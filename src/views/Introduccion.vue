<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 El fenómeno de la globalización de los mercados, el dinamismo económico mundial y la constante evolución tecnológica, requiere que las organizaciones deban estar preparadas para asumir los retos impuestos por las exigencias de los mercados internacionales, los cuales cada día tienen mayor apertura y son más competitivos. Por tal razón, en este componente formativo tendrá la oportunidad de identificar la normatividad que rige específicamente los medios y modos de transporte, así como los diferentes conceptos que se establecen para su operación. Estamos seguros que será un tema fundamental en su desarrollo profesional. Veamos este video que nos da una introducción al tema de los medios de transporte:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      //figcaption Video: Leyenda del video
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
