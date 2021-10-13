export default ({
    data() {
        return {
            computers: [],
        }
    },
    mounted() {
        this.$parent.getJson('/api/computers')
            .then(data => {
                for (let el of data) {
                    this.computers.push(el);
                }
            })
    },
    template: `
    <div class="fetured_items conteiner">
                    <h2 class="feturedTitle">iMac</h2>
                    <div class="products">
                        <product v-for="item of computers" :key="item.id_product" :product="item"></product>
                    </div>
    </div>
    
    `
});

Vue.component('product', {
    props: ['product', 'img'],
    template: `
        <div class="product-item">
                    <div class="desc">
                        <img :src="product.product_img" width='280px'>
                        <h3 class='itemsHeader'>{{product.product_name}}</h3>
                        <p>{{product.product_description}}</p>
                        <p class='itemsPrice'>{{product.price}}₽</p>
                        <button class="buy-btn" @click="">Купить</button>
    <!-- 1                    <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>-->
    <!-- 2                    <button class="buy-btn" @click="$parent.$parent.$refs.cart.addProduct(product)">Купить</button>-->
                    </div>
                </div>
        `
})