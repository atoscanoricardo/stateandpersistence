<template>
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        <li v-for="product in getProducts" :key="product.id">
          <h2>{{ product.title }}</h2>
          <p>{{ product.description }}</p>
          <strong>{{ product.price }} USD</strong>
        </li>
      </ul>      
    </div>
  </template>
  
  <script setup lang="ts">
  // Instanciar el store
  const productStore = useProductStore()
  
  useAsyncData('products', async () => {
    await productStore.fetchProducts()
  })

  // Acceder a los getters del store
  const { getProducts } = productStore
  </script>
  