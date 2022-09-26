<template>
    <button :type="type" :class="mode" class="btn btn-sm m-1" role="button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: [
        'type',
        'mode',
    ]
}
</script>