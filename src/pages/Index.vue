<template>
    <div>
        <div id="hero">
            <g-image src="~/assets/images/hero.jpg"/>
            <div id="hero-content">
                <div id="hero-upper">
                    <div id="hero-left">
                        <div id="image-placeholder"></div>
                    </div>
                    <div id="hero-right">
                        <span>Hello, My Name Is</span>
                        <h1>Yahya Sohail</h1>
                    </div>
                </div>
                <div id="hero-bottom">
                    <span>I like to write code and make things</span>
                </div>
            </div>
        </div>
        <section class="section">
            <h2>Checkout What I’ve Written</h2>
            <div id="post-cards">
                <PostCard v-for="idx in 3" :key="idx" />
            </div>
            <div class="button-container">
                <button>Read More</button>
            </div>
        </section>
    </div>
</template>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
    components: {
        PostCard
    }
}
</script>

<style lang="scss" scoped>
    #hero, img {
        width: 100%;
        height: 100vh;
    }

    #hero {
        position: relative;
    }

    img {
        object-fit: cover;
        filter: brightness(50%);
    }

    #image-placeholder {
        background-color: #c4c4c4;
        width: 350px;
        height: 350px;
        border-radius: 50%;
    }

    #hero-content {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        white-space: nowrap;
    }

    #hero-upper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #hero-left {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #hero-right {
        display: flex;
        flex-direction: column;
        font-family: Roboto;
        text-align: right;

        span {
            color: #eee;
            font-size: 96px;
        }

        h1 {
            display: inline-block;
            color: #11CDE2;
            font-size: 144px;
            font-weight: 900;
        }
    }

    #hero-bottom {
        color: #eee;
        font-family: Montserrat;
        font-size: 72px;
        text-align: center;
    }

    .section {
        margin: 50px;

        h2 {
            color: #11CDE2;
            font-family: Roboto;
            font-size: 48px;
            font-weight: 500;
            text-align: center;
        }

        .button-container {
            text-align: center;
            margin-top: 50px;

            button {
                background: transparent;
                border: 2px solid #11CDE2;
                border-radius: 5px;
                padding: 5px 10px;
                text-align: center;

                font-family: Roboto;
                font-weight: 500;
                font-size: 30px;
                color: #11CDE2;
            }
        }
    }

    #post-cards {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 auto;
        margin-top: 50px;
        width: 75%;
    }
</style>