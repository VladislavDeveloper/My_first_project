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
                                        <a href="#">MacBook</a>
                                        <a href="#">iMac</a>
                                        <a href="#">Iphone</a>
                                        <a href="#">Apple watch</a>
                                        <a href="#">Аксессуары</a>
                                    </div>

                                    <div class="menuSection">
                                        <div class="menuHeader">
                                            О нас
                                        </div>
                                        <a href="#">Контакты</a>
                                        <a href="#">Оплата и доставка</a>
                                        <a href="#">Гарантия</a>
                                    </div>

                                    <div class="menuSection">
                                        <div class="menuHeader">
                                            Наш сервисный центр
                                        </div>
                                        <a href="#">Официальная гарантия Apple</a>
                                    </div>


                                </div>
                    </div>
                
                    <div class="right_header">
                        <form class='search_form'>
                            <input class='search_form_input' type="text" placeholder="ПОИСК...">
                            <button class='search_btn' type="submit"><img class="search_icon" src="img/searchIcon.png" alt=""></button>
                        </form>
                        <span class="cart_icon_Num" v-on:click='$refs.cart.isCartVisible = !$refs.cart.isCartVisible'>
                            <img class="cart_icon" src="img/cart.png" alt="">
                            <span>5</span>
                            <cart ref='cart'></cart>
                        </span>
                    </div>
                </div>      
            </div>
    `
});