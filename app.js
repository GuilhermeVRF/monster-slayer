function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0,
            winner: null,
            battleLogs: []
        }
    },
    methods : {
        attackMonster() {
            const damage = getRandomValue(5, 12);
            this.monsterHealth = this.monsterHealth - damage;

            this.addLogMessage('player', 'attack', damage);
            this.attackPlayer();

            this.currentRound++;
        },
        specialAttackMonster() {
            const damage = getRandomValue(10, 24);
            const damagedHealth =  this.monsterHealth - damage;
            this.monsterHealth = damagedHealth > 0 ? damagedHealth : 0;

            this.addLogMessage('player', 'attack', damage);
            this.attackPlayer();

            this.currentRound++;
        },
        attackPlayer() {
            const damage = getRandomValue(8, 15);
            const damagedHealth =  this.playerHealth - damage;
            this.playerHealth = damagedHealth > 0 ? damagedHealth : 0;

            this.addLogMessage('monster', 'attack', damage);
        },
        healPlayer() {
            const healValue = getRandomValue(8, 20);
            const healedHealth = this.playerHealth + healValue;

            this.playerHealth =healedHealth < 100 ? healedHealth : 100;
            this.currentRound++;

            this.addLogMessage('player', 'heal', healValue);
            this.attackPlayer();
        },
        surrender() {
            this.winner = 'monster';
        },
        restartGame() {
            this.currentRound = 0;
            this.winner = null;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.battleLogs = [];
        },
        addLogMessage(author, action, value) {
            this.battleLogs.push({
                'author': author,
                'action' : action,
                'value': value
            })
        }
    },
    watch: {
        playerHealth(value) {
            if (value === 0 && this.monsterHealth === 0) {
                this.winner = 'draw';
            } else if (value === 0) {
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value === 0 && this.playerHealth === 0) {
                this.winner = 'draw';
            } else if (value === 0) {
                this.winner = 'player';
            }
        }
    },
    computed : {
        monsterBarStyles() {
            return {width : this.monsterHealth + '%'};
        },
        playerBarStyles() {
            return {width : this.playerHealth + '%'};
        },
        isSpecialAttackEnabled() {
            return this.currentRound > 0 && this.currentRound % 3 === 0;
        }
    }
});

app.mount('#game');