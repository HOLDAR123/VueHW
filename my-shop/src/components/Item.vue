<template>
    <div class="item">
      <div>
        Название товара: {{ info.name }}
      </div>
      <div>
        Описание товара::
        <p>{{ info.description }}</p>
      </div>
      <div>
        Цена: {{ info.price }}
      </div>
      <button @click="addToCart(info)">Купить</button>
    </div>
  </template>
  
  <script>
 export default {
  props: ['info'],
  name: 'VueItem',
  methods: {
    addToCart(item) {
      this.$emit('add-to-cart', item);
    }
  }
};

  </script>
  
  <style >
  .item{
    width: 200px;
    border: 2px solid slateblue;
    border-radius: 5px;
    padding: 40px;
    background-color: bisque;
  }
  </style>
  