Vue.component('cart', {
    data() {
        return {
            isCartVisible: false,
        }
    },
    template: `
        <div class="cart_box" v-show='isCartVisible'>
                <div class="menuLable">Корзина</div>
                <h4>Товары отсутствуют</h4>
        </div>
    
    `
})