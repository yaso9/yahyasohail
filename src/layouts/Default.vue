<template>
    <div>
        <div id="top-bar">
            <g-link to="/" id="top-bar-title">{{ $static.metadata.siteName }}</g-link>
        </div>
        <div id="main-content-container">
            <main id="main-content">
                <slot />
            </main>
        </div>
    </div>
</template>

<static-query>
query {
    metadata {
        siteName
    }
}
</static-query>

<style lang="scss">
    #top-bar {
        background-color: #11CDE2;
        padding: 10px 30px;

        @media (max-width: 500px) {
            text-align: center;
        }
    }

    #top-bar-title {
        color: #eee;
        font-family: Roboto;
        font-weight: 900;
        font-size: 54px;
        text-decoration: none;

        @media (max-width: 500px) {
            font-size: 45px;
        }
    }

    #main-content-container {
        display: flex;
        justify-content: center;
        padding: 0 30px;
    }

    #main-content {
        max-width: 1024px;
        width: 100%;
        color: #eee;
        font-family: Roboto;
        font-size: 17px;
        margin-top: 25px;

        h1 {
            color: #11CDE2;
            font-family: Roboto;
            font-weight: 900;
            font-size: 48px;
            margin-bottom: 25px;
        }

        p {
            margin-top: 1em ;
            margin-bottom: 1em ;
        }

        ol, ul {
            list-style-position: inside;
        }

        a {
            color: #11CDE2;
        }
    }
</style>