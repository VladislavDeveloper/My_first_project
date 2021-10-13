export default ({
    data() {
        return {
            laptops: [],
        }
    },
    mounted() {
        this.$parent.getJson('/api/laptops')
            .then(data => {
                for (let el of data) {
                    this.laptops.push(el);
                }
            })
    },
    template: `
    <div class="fetured_items conteiner">
                    <h2 class="feturedTitle">MacBook</h2>
                    <div class="products">
                        <product-laptops v-for="item of laptops" :key="item.id_product" :product="item"></product-laptops>
                    </div>
    </div>
    
    `
});

Vue.component('product-laptops', {
    props: ['product', 'img'],
    template: `
        <div class="product-item">
                    <div class="desc">
                        <img :src="product.product_img" width='280px'>
                        <h3 class='itemsHeader'>{{product.product_name}}</h3>
                        <p>{{product.product_description}}</p>
                        <p class='itemsPrice'>{{product.price}}₽</p>
                        <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>
                    </div>
                </div>
        `
})