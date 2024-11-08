<template>
    <header>
        <div class="logo">
            <router-link to="/"><img src="../assets/Images/logo.png" alt="Logo TRP"></router-link>
        </div>
        <nav>
            <ul>
                <li><router-link to="/AppAboutMe">Présentation</router-link></li>
                <li><router-link to="/AppPortefolio">Mes créations</router-link></li>
                <li><router-link to="/AppContact">Contact</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        background-color: #00bd7e;
        box-shadow: 0 2px 4px rgba(14, 22, 18, 0.1);
    }

    .logo img {
        height: 80px;
        margin-left: 80px;;
    }

    nav ul {
        display: flex;
        list-style: none;
        text-decoration: none;
        font-size: 1.7em;
    }

    nav li {
        margin-left: 25px;
    }

    nav a {
        text-decoration: none;
    }

    nav a:hover {
        color: #00ffbf;
    }


</style>