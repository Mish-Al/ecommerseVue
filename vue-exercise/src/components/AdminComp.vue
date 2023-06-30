<template>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in flagships" :key="product.id">
            <th scope="row">{{ product.id }}</th>
            <td>{{ product.name }}</td>
            <td><img :src="product.imageUrl" :alt="product.name"></td>
            <td>{{ product.price }}</td>
          </tr>
        </tbody>
      </table>
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
    }
</script>

<style scoped>
img{
  width: 8rem;
}
</style>