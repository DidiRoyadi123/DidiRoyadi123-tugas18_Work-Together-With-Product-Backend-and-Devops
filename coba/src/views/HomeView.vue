<template>
  <div class="home" >
    <h1>berita terkini</h1>
      <div class="containerAtas">
        <div class="article" v-for="(berita,url) in beritas"
                  :key="url">
          <div class="item">
            
            <div  class="container" @click="detailHalaman(title)">
                <div class="image" >
                  <img :src="berita.urlToImage" alt="">
                </div>
                <div class="content">
                  <span>
                      {{berita.author}}
                  </span>
                  <h4>
                      {{berita.title}}
                  </h4>
                  <span>
                      {{berita.publishedAt}}
                  </span>
                </div>  
            </div>


          </div>
        </div>
    </div>
  </div>
</template>

<script>
import detailBeritaVue from '../components/detailBerita.vue';


export default {
  name: 'HomeView',
  methods: {
    detailHalaman(title){
      this.$router.push({
        name: 'detail',
        params: {
          title: title
        },
        component : detailBeritaVue
      })
    }
  },
  computed: {
    beritas() {
      return this.$store.state.berita;
    }
  },
  mounted () {
   this.$store.dispatch('fetchBerita')
  }
}

</script>

<style>
.home {
  display: block;
}
.containerAtas {
     display: flex;
    flex-wrap: wrap;
}
.article {
  width: 50%;
}
.item {
  padding: 12px;
  border-radius: 4px
}
.container{
    display: flex;
    background-color: #e3eee8;
    min-height: 150px;
    cursor: pointer;
}
.image {
  width: 30%;
    margin-block: auto
}
img {
  max-width: 100%;
    max-height: 100%
}
.content{
  width: 70%;
    padding: 4px 12px;
    display: block;
}
</style>
