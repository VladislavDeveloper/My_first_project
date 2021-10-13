export default ({
    data() {
        return {

        }
    },
    template: `
    <main class='user_cart'>
            <div class="conteiner">
                <div class="leftSide">
                    <div class="cartBox">
                        
                    </div>

                    <div class="cartButton">
                        <button class="clearButton">Clear shopping cart</button>
                        <button class="continueButton">Continue shopping</button>
                    </div>
                </div>

                <div class="rightSide">
                    <form action="#" class="rightSideForm">
                        <div class="rightCartTitle">Данные покупателя</div>
                        Ваше имя:
                        <input type="text" placeholder="Александр">
                        Ваша фамилия:
                        <input type="text" placeholder="Иванов">
                        Адрес доставки:
                        <input type="text" placeholder="Россия">
                        <input type="text" placeholder="Санкт-Петербург">
                        <input type="text" placeholder="пр.Энгельса, дом 13">
                        <input type="text" placeholder="394754">
                        <button class="adressButton" style="display: block;">GET A QUOTE</button>
                    </form>

                    <div class="cartTotal">
                        <div class="grandTotal">ИТОГО <span></span></div>
                        <hr>
                        <button class="totalButton">Оформить заказ</button>
                    </div>
                </div>

            </div>

    </main>
    
    `
})