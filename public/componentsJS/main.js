import main_page from "./main_page.js";
import ProductLaptop from "./ProductLaptop.js";
import imac from "./imac.js";
import phones from "./phones.js";
import watches from "./watches.js";
import accessoires from "./accessoires.js";
import user_cart from "./user_cart.js";

const routes = [
    { path: '/', component: main_page },
    { path: '/laptops', component: ProductLaptop },
    { path: '/computers', component: imac },
    { path: '/phones', component: phones },
    { path: '/watches', component: watches },
    { path: '/accessoires', component: accessoires },
    { path: '/user_cart', component: user_cart },
]


const router = new VueRouter({
    mode: 'history',
    routes: routes,
    base: '/'
})



new Vue({
    router,
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        postJson(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                });
        },
        putJson(url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                });
        },
        deleteJson(url) {
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                });
        },
    }
}).$mount('#app')