Vue.component('top_products', {
    data() {
        return {
            top_products: [],
        }
    },
    mounted() {
        this.$parent.getJson('/api/top_products')
            .then(data => {
                for (let el of data) {
                    this.top_products.push(el);
                }
            })
    },
    template: `
            <div class="fetured_items conteiner">
                <h2 class="feturedTitle">Топ продаж</h2>
                <div class="products">
                    <product v-for="item of top_products" :key="item.id_product" :product="item"></product>
                </div>
            </div class="fetured_items conteiner">
    `
});

Vue.component('product', {
    props: ['product', 'img'],
    template: `
    <div class="product-item">
                <div class="desc">
                    <img :src="product.product_img" width='280px'>
                    <h3 class='itemsHeader'>{{product.product_name}}</h3>
                    <p class='itemsPrice'>{{product.price}}₽</p>
                    <button class="buy-btn" @click="">Купить</button>
<!-- 1                    <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>-->
<!-- 2                    <button class="buy-btn" @click="$parent.$parent.$refs.cart.addProduct(product)">Купить</button>-->
                </div>
            </div>
    `
})