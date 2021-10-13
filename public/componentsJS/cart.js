Vue.component('cart', {
    data() {
        return {
            isCartVisible: false,
            userCart: []
        }
    },
    methods: {
        addProduct(product) {
            let find = this.userCart.find(el => el.id_product === product.id_product);
            if (find) {
                this.$parent.putJson(`/api/cart/${find.id_product}`, { quantity: 1 });
                find.quantity++;
            } else {
                let prod = Object.assign({ quantity: 1 }, product);
                this.$parent.postJson('/api/cart', prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.userCart.push(prod);
                        }
                    });
            }
        },
        remove(item) {
            if (item.quantity > 1) {
                this.$parent.putJson(`/api/cart/${item.id_product}`, { quantity: -1 })
                    .then(data => {
                        if (data.result === 1) {
                            item.quantity--;
                        }
                    });
            } else {
                this.$parent.deleteJson(`/api/cart/${item.id_product}`)
                    .then(data => {
                        if (data.result === 1) {
                            this.userCart.splice(this.userCart.indexOf(item), 1);
                        }
                    });
            }
        },
    },
    computed: {
        totalCartCost() {
            let result = []
            if (this.userCart.length) {
                for (let item of this.userCart) {
                    result.push(item.price * item.quantity)
                }
                result = result.reduce(function (sum, el) {
                    return sum + el;
                })
                return result;
            } else {
                return 0;
            }

        }
    },
    mounted() {
        this.$root.getJson('/api/cart')
            .then(data => {
                for (let el of data.contents) {
                    this.userCart.push(el);
                }
            });
    },
    template: `
        <div class="cart_box" v-show='isCartVisible'>
                <div class="menuLable">Корзина</div>
                <h4 v-if='!userCart.length'>Товары отсутствуют</h4>
                <cart-item class='cart-item'
                v-for='item of userCart'
                    :key='item.id_product'
                    :item = 'item'
                    @remove="remove"
                    @addProduct="addProduct">
                </cart-item>
                <div class='cart-hr'></div>
                <h3 v-if='totalCartCost !== 0'>Итого {{totalCartCost}}</h3>
                <router-link class='cart-open-link' to="/user_cart"><button class='cart-open-btn'>Открыть корзину</button></router-link>
        </div>


    
    `
});
Vue.component('cart-item', {
    props: ['item'],
    template: `
            <div class='cart-item'>
                <img :src='item.product_img' width='150px'>
                <p>{{item.product_name}}</p>
                <p>Количество: {{item.quantity}}</p>
                <p>{{item.price}} ₽</p>
                <button class="plus-item" @click="$emit('addProduct', item)">+</button>
                <button class="del-btn" @click="$emit('remove', item)">-</button>
            </div>
    `
})