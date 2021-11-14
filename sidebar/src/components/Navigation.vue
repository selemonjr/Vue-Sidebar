<template>
        <header>
        <nav>
            <div class="logo">
                <h1>Vue Sidebar</h1>
            </div>
            <ul v-show="!mobile" class="navigation">
                <li><router-link to="/">Home</router-link></li>
                  <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
            <div v-show="mobile" :class="{'rotate' : mobileNav}" @click="rotate">
                <div class="box1"></div>
                <div class="box2"></div>
                <div class="box3"></div>
            </div>
            <transition name="mobileNav" class="animation">
                <ul v-show="mobileNav" class="sidebar">
                <li><router-link to="/">Home</router-link></li>
                  <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
            </transition>
        </nav>
    </header>
</template>
<script>
export default {
    name:"Navigation",
    data() {
        return {
            mobile: false,
            mobileNav: null,
            windowWidth:null,
        }
    },
    created() {
        window.addEventListener("resize",this.checkScreenSize);
        return this.checkScreenSize();
    },
    methods: {
        rotate() {
            this.mobileNav = !this.mobileNav;
        },
        checkScreenSize() {
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <=768) {
                return this.mobile = true;
            } else {
                this.mobile = false;
                this.mobieNav = false;
            }
        }
    }
}
</script>
<style scoped>

nav {
    width: 100%;
    height: 8vh;
    background: #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1%;
}
nav .logo {
    color: #3EAF7C;
}
.animation {
    transition: all 0.5s;
}
.navigation {
    display:inline-flex;
    list-style: none;
}
.navigation li {
    margin: 10px;
}
.navigation li a {
    font-size: 20px;
    text-decoration: none;
}
a:hover {
    color: #3EAF7C;
}
.box1,.box2,.box3 {
     margin: 5px;
    width: 35px;
    height: 3px;
    background-color: #3EAF7C;
    transition: all 400ms cubic-bezier(.84,.06,.52,1.8);
}
.sidebar {
    height: 100%;
    width: 250px;
    top: -0.2%;
    left: 0;
    position: fixed;
    background: #3EAF7C;
    display: inline-block;
    list-style: none;
    transition: all 0.5s;
}
.sidebar li {
    margin: 10px;
}
.sidebar li a {
    text-decoration: none;
    color: #000;
    font-size: 20px;
}
 .rotate .box1{
     transform: rotate(40deg) translate(8px,3px);
 }
 .rotate .box3{
     transform: rotate(-45deg) translate(8px,-5px);
   }
 .rotate .box2{
    opacity: 0;
 }
</style>