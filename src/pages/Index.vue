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
                <PostCard v-for="edge in $page.allPost.edges" :post="edge.node" :key="edge.node.id" />
            </div>
            <div class="button-container">
                <g-link to="/blog"><button>Read More</button></g-link>
            </div>
        </section>
    </div>
</template>

<page-query>
query {
  allPost(filter: {featured: {eq: true}}) {
    edges {
      node {
        id
        path
        title
        excerpt
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
    components: {
        PostCard
    }
}
</script>

<style lang="scss" scoped>
    #hero, #hero > img {
        width: 100%;
        height: 100vh;
    }

    #hero {
        position: relative;

        img {
            object-fit: cover;
            filter: brightness(50%);
        }
    }

    #image-placeholder {
        background-color: #c4c4c4;
        width: 350px;
        height: 350px;
        border-radius: 50%;

        @media (max-width: 1440px) {
            width: 250px;
            height: 250px;
            margin-bottom: 10px;

            @media (max-width: 400px) {
                width: 175px;
                height: 175px;
            }
        }
    }

    #hero-content {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        white-space: nowrap;

        @media (max-width: 1440px) {
            flex-direction: column;
            white-space: initial;
            width: 90%;
        }
    }

    #hero-upper {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 1440px) {
            flex-direction: column;
        }
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

            @media (max-width: 1440px) {
                font-size: 60px;

                @media (max-width: 400px) {
                    font-size: 50px;
                }
            }
        }

        h1 {
            display: inline-block;
            color: #11CDE2;
            font-size: 144px;
            font-weight: 900;

            @media (max-width: 1440px) {
                font-size: 100px;

                @media (max-width: 400px) {
                    font-size: 80px;
                }
            }
        }

        @media (max-width: 1440px) {
            text-align: center;
        }
    }

    #hero-bottom {
        color: #eee;
        font-family: Montserrat;
        font-size: 72px;
        text-align: center;

        @media (max-width: 1440px) {
            display: none;
        }
    }

    .section {
        margin: 50px;

        @media (max-width: 400px) {
            margin: 50px 20px;
        }

        h2 {
            color: #11CDE2;
            font-family: Roboto;
            font-size: 48px;
            font-weight: 500;
            text-align: center;
        }

        #post-cards {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            margin-top: 50px;

            @media (max-width: 1024px) {
                flex-direction: column;

                .post-card {
                    width: 95%;
                    margin: 20px auto;
                }
            }
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
                cursor: pointer;

                font-family: Roboto;
                font-weight: 500;
                font-size: 30px;
                color: #11CDE2;
            }
        }
    }
</style>