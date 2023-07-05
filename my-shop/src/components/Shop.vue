<template>
  <div>
    <div class="cards">
      <Item
        v-for="(good, i) in goods"
        :info="good"
        :key="i"
        @add-to-cart="addToCart"
      ></Item>
    </div>

    <div class="cart">
      <h2 id="carted" @click="showModal = !showModal">Корзина</h2>

      <div id="modal_window" :class="{ show: showModal }" @click="showModal = false">
        <ul>
          <li v-for="(item, index) in addedGoods" :key="index">
            {{ item.info.name }}
            <span>Количество: {{ item.quantity }}</span>
            <span> Цена: {{ item.totalPrice }}</span>
          </li>
        </ul>
        <p>Total: {{ TotalPrice }}</p>
      </div>
    </div>
  </div>
</template>


<script>



import Item from "./Item.vue";

export default {
  name: "VueShop",
  components: {
    Item,
  },
  methods: {
    calculateTotalPrice() {
      this.TotalPrice = this.addedGoods.reduce(
        (total, good) => total + good.totalPrice,
        0
      );
      console.log(this.TotalPrice);
      return this.TotalPrice;
    },

    addToCart(item) {
      const existingItem = this.addedGoods.find(
        (good) => good.info.name === item.name
      );
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.info.price;
      } else {
        this.addedGoods.push({
          info: item,
          quantity: 1,
          totalPrice: item.price,
        });
      }
    },
  },
  data() {
    return {
      TotalPrice: 0,
      addedGoods: [],
      showModal: false,
      goods: [
        {
          name: "Apple iphone 99x99",
          description: "супер я Bitcoin",
          price: 374900,
        },
        {
          name: "Apple iphone12 99x99",
          description: "супер я Facebook",
          price: 3749020,
        },
        {
          name: "Apple iphone 4x Zooom 99x99",
          description: "супер я LOSED",
          price: 11374900,
        },
        {
          name: "SAMS123",
          description: "супер я LOSED",
          price: 37412312900,
        },
        {
          name: "Apple iphone 99x99",
          description: "супер я Bitcoin",
          price: 374900,
        },
        {
          name: "Apple iphone12 99x99",
          description: "супер я Facebook",
          price: 3749020,
        },
        {
          name: "Apple iphone 4x Zooom 99x99",
          description: "супер я LOSED",
          price: 11374900,
        },
        {
          name: "SAMS123",
          description: "супер я LOSED",
          price: 37412312900,
        },
      ],
    };
  },
  watch: {
    addedGoods: {
      handler() {
        this.calculateTotalPrice();
      },
      deep: true,
    },
  },
};
</script>

<style>
ul{
  list-style-type: none;
}
#carted{
  cursor: pointer;
}
#modal_window {
  display: none;
}

#modal_window.show {
  display: block;
}

body {
  display: flex;
  justify-content: center;
}

.cards {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
}
</style>
