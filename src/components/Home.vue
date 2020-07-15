<template>
    <div class="hello">
        <h2 class="subtitle">Категории покемонов</h2>
        <ul class="list-group">
            <li v-for="(category, index) in categories" :key="index" class="list-group-item">
                <p class="category-title">{{category.name}} ({{category.pokemons.length}})</p>
                <router-link
                    :to="{name: 'show', params: {name: category.name}}"
                    tag="button" class="btn btn-primary"
                >
                    Показать
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import {pokedex} from '../store.js';
export default {
    data() {
        return {
            categories: pokedex.categories
        }
    }
}
</script>
<style scoped>
    .subtitle {
        color: #42b983;
    }
    .category-title {
        font-size: 30pt;
        font-weight: 100;
    }
</style>