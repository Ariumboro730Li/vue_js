<template>
    <div>
        <h2>
            Manage  Goals
        </h2>
        <input type="text" ref="goal">
        <button @click="setGoals()">Set Goals</button>
        <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempora et enim nemo sint cumque vel, iusto est, quam at deserunt quaerat ipsa quisquam? Provident tempore debitis qui fuga ad!
        </h2>
        <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempora et enim nemo sint cumque vel, iusto est, quam at deserunt quaerat ipsa quisquam? Provident tempore debitis qui fuga ad!
        </h2>
        <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempora et enim nemo sint cumque vel, iusto est, quam at deserunt quaerat ipsa quisquam? Provident tempore debitis qui fuga ad!
        </h2>
        <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempora et enim nemo sint cumque vel, iusto est, quam at deserunt quaerat ipsa quisquam? Provident tempore debitis qui fuga ad!
        </h2>
        <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempora et enim nemo sint cumque vel, iusto est, quam at deserunt quaerat ipsa quisquam? Provident tempore debitis qui fuga ad!
        </h2>
        <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempora et enim nemo sint cumque vel, iusto est, quam at deserunt quaerat ipsa quisquam? Provident tempore debitis qui fuga ad!
        </h2>
        <teleport to='body' >
            <error-alert v-if="inputIsInvalid">
                <h2>Input Is Invalid</h2>
                <h2>Please enter some characters</h2>
            </error-alert>
        </teleport>
    </div>

</template>

<script>
import ErrorAlert from './ErrorAlert.vue'
export default {
    components:{
        ErrorAlert,
    },
    data() {
        return {
            inputIsInvalid : false,
        }
    },
    methods: {
        setGoals() {
            const enteredValue = this.$refs.goal.value;
            if (enteredValue == "") {
                this.inputIsInvalid = true;
            } else {
                this.inputIsInvalid = false;
            }
        }
    },
}
</script>