Vue.component('header-component', {
    data() {
        return {
            isMenuVisible: false,
        }
    },
    template: `
            <div class="header">

                <div class="conteiner">

                    <div class="left_header">
                        <img class="logo_icon" src="img/logo.svg" alt="" width='180px'>
                        <img class="bars_icon" src="img/bars.png" alt="" v-on:click='isMenuVisible = !isMenuVisible'>
                        
                                    <div class="menu" v-show='isMenuVisible'>
                                    <img class="closeClick" src="img/clickIcon.png" alt="">
                                    <div class="menuLable">MENU</div>

                                    <div class="menuSection">
                                        <div class="menuHeader">
                                            Каталог
                                        </div>
                                        <router-link to="/">Главная</router-link>
                                        <router-link to="/laptops">MacBook</router-link>
                                        <router-link to="/computers">iMac</router-link>
                                        <router-link to="/phones">iPhone</router-link>
                                        <router-link to="/watches">Apple Watch</router-link>
                                        <router-link to="/accessoires">Аксессуары</router-link>
                                    </div>

                                    <div class="menuSection">
                                        <div class="menuHeader">
                                            О нас
                                        </div>
                                        <a href="#">Контакты</a>
                                        <a href="#">Оплата и доставка</a>
                                        <a href="#">Гарантия</a>
                                    </div>
                                </div>
                    </div>
                
                    <div class="right_header">
                        <form class='search_form'>
                            <input class='search_form_input' type="text" placeholder="ПОИСК...">
                            <button class='search_btn' type="submit"><img class="search_icon" src="img/searchIcon.png" alt=""></button>
                        </form>
                        <span class="cart_icon_Num" v-on:click='$root.$refs.cart.isCartVisible = !$root.$refs.cart.isCartVisible'>
                            <img class="cart_icon" src="img/cart.png" alt="">
                        </span>
                    </div>
                </div>      
            </div>
    `
});