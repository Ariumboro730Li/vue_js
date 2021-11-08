function getRandomValue(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data(){
        return {
            playerHealth : 100,
            monsterHealth : 100,
            currentRound : 1,
            loadSpecialAttack : true,
            winner : null,
            logMessages : [],
        }
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0 ) {
                width = "0%";
            } else {
                width = `${this.monsterHealth}%`;
            }

            return {
                width
               
            }
        },
        playerBarStyles() {
            if (this.playerHealth < 0 ) {
                width = "0%";
            } else {
                width = `${this.playerHealth}%`;
            }

            return {
                width,
            }
        },
        mayUseSpecialAttack(){
            let disableRound = this.currentRound % 3 !== 0;
            if (disableRound == false || this.loadSpecialAttack == false) {
                return false;
            } else {
                return true;
            }
        }
    },
    watch: {
        playerHealth(val){
            if (val <= 0 && this.monsterHealth <= 0) {
                this.winner = "draw";
            } else if (val <= 0){
                this.winner = "monster";
            }  
        },
        monsterHealth(val){
            if (val <= 0 && this.playerHealth <= 0) {
                this.winner = "draw";
            } else if (val <= 0){
                this.winner = "player";
            }  
        },
    },
    methods: {
        startGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 1;
            this.loadSpecialAttack = true;
            this.winner = null;
        },
        attackMonster(){
            this.currentRound++;
            this.loadSpecialAttack = ((this.currentRound % 3 !== 0) == false) ? false: this.loadSpecialAttack;
            const attackValue =  getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer();
        },
        attackPlayer(){
            const attackValue =  getRandomValue(8, 15);
            this.playerHealth -= attackValue;
            this.addLogMessage('monster', 'attack', attackValue);
        },
        specialAttackMonster() {
            this.currentRound++;
            this.loadSpecialAttack = true;
            const attackValue =  getRandomValue(10, 28);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'special-attack', attackValue);
            this.attackPlayer();
        },
        healPlayer(){
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            if ( this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.addLogMessage('player', 'heal', this.playerHealth);
            this.attackPlayer();
        },
        surrender(){
            this.winner = 'monster'
        },
        addLogMessage(who, what, value  ){
            this.logMessages.unshift({
                actionBy : who,
                actionType : what,
                actionValue : value,
            });
        }
    },
})

app.mount(`#game`);