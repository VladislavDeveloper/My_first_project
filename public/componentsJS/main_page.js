export default {
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
    <div class='main-page'>

            <div class="brand">
                        <div class="brandInside">
                            <div class="left_brand">
                                <img src="img/macbook_logo_or.jpg" alt="">
                            </div>
                            <div class="right_brand">
                                <div class="brandText">
                                    <div>APPLE</div>
                                    <div>official retailer<span> Apple </span></div>
                            </div>
                        </div>
                    </div>
            </div>

            <div class="fetured_items conteiner">
                <h2 class="feturedTitle">Топ продаж</h2>
                <div class="products">
                    <product-main v-for="item of top_products" :key="item.id_product" :product="item"></product-main>
                </div>
            </div class="fetured_items conteiner">

    </div>
        
    `
}

Vue.component('product-main', {
    props: ['product', 'img'],
    template: `
    <div class="product-item">
                    <img :src="product.product_img" width='280px'>
                    <h3 class='itemsHeader'>{{product.product_name}}</h3>
                    <p class='itemsPrice'>{{product.price}}₽</p>
                    <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>
<!-- 1                    <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>-->
<!-- 2                    <button class="buy-btn" @click="$parent.$parent.$refs.cart.addProduct(product)">Купить</button>-->
            </div>
    `
})