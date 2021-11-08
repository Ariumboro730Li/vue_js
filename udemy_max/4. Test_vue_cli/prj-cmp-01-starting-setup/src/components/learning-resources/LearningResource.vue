<template>
    <base-card class="shadow">
        <header>
            <h3>{{ id }} - {{ title }}</h3>
            <base-button mode="btn btn-outline-danger border-0 btn-sm"
            @click="removeResource(id)">
                <i class="fa fa-trash" aria-hidden="true"></i>
            </base-button>
        </header>
        <p>{{ description }}</p>
        <nav>
            <a :href="link">View Resource</a>
        </nav>
    </base-card>
</template>

<script>
export default {
    props : [
        "id",
        "title",
        "description",
        "link"
    ],
    inject: ['removeResource']
}
</script>

<style scoped>
    li {
        margin: auto;
        max-width: 40rem;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h3 {
        font-size: 1.25rem;
        margin: 0.5rem 0;
    }

    p {
        margin: 0.5rem 0;
    }

    a {
        text-decoration: none;
        color: #ce5c00;
    }

    a:hover,
    a:active {
        color: #c89300;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        margin: auto;
        max-width: 40rem;
    }
</style>