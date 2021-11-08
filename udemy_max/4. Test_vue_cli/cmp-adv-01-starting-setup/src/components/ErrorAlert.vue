<template>
    <dialog open>
        <slot></slot>
    </dialog>
</template>

<style>
    dialog {
        position: fixed;
        top : 30vh;
        left : 0%;
        width : 60%;
        background-color : magenta;
        box-shadow:0 2px 8px rgba(0, 0, 0, 0.26);
    }  
</style>