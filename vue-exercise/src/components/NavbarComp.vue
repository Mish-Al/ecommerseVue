<template>
    <div>
 <nav id="navb" class="navbar navbar-expand">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img
         src="https://i.postimg.cc/V5QN8Rkb/Screenshot-2023-06-10-224958-removebg-preview.png" 
         id="logo">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="nav-links">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/product">Product</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin">Admin</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/checkout">Checkout</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>