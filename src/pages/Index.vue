<template>
    <div>
        <div id="hero">
            <g-image src="~/assets/images/hero.jpg"/>
            <div id="hero-content">
                <div id="hero-upper">
                    <div id="hero-left">
                        <g-image id="image" src="~/my-face.jpg"/>
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
    </div>
</template>

<style lang="scss" scoped>
    #hero, #hero > img {
        width: 100%;
        height: 100vh;
    }

    #hero {
        position: relative;
        overflow: hidden;

        & > img {
            object-fit: cover;
            filter: brightness(50%);
        }
    }

    #image {
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
</style>