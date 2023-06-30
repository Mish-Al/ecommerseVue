<template>
  <div class="container">
    <div class="row">
      <div class="col" v-for="item in flagships" :key="item.id">
        <div class="card" style="width: 18rem">
          <img
            :src="item.imageUrl"
            class="card-img-top img-fluid"
            :alt="item.image"
            loading="lazy"
          />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text" id="price">{{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    flagships() {
            return this.$store.state.flagships
        }
    },
    mounted() {
        this.$store.dispatch('fetchFlagships')
    }
};
</script>

<style scoped>
.card{
    display: flex;
    justify-content: center;
    height: 100%;
    background-color: #F8E8EE;
    margin: 5px;
}
.card-img-top{
  
}

img{
    border-radius: 180px !important;
}

#price{
    font-weight: 600;
    color: black;
}

h5{
    text-decoration: underline;
}

#price{
    font-style: italic;
    color: black;
}
</style>