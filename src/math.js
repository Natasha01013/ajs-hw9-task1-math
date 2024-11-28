export class Character {
    constructor(baseAttack) {
        this.baseAttack = baseAttack; //базовая атака
        this.stoned = false; // индикатор дурмана
        this.distance = 1; // Расстояние по умолчанию (1 клетка)
    }

    // Сила урона зависит от расстояния и линейно падает в зависимости от расстояния (1-5 клеток)
    damageStrength(distance) {
        switch(distance) {
            case 1: return this.baseAttack;
            case 2: return this.baseAttack * 0.9;
            case 3: return this.baseAttack * 0.8;
            case 4: return this.baseAttack * 0.7;
            case 5: return this.baseAttack * 0.6;
        }
    }

    // Метод для установки дурмана
    set stoned(stoned) {
        this._stoned = stoned;
    }
    // Метод для получения дурмана
    get stoned() {
        return this._stoned;
        }

    // Метод для установки базовой атаки
    set attack(attack) {
        this.baseAttack = attack;
    }

    // Метод для расчета атаки с учетом дурмана
    get attack() {
        let attack = this.damageStrength(this.distance);
        if(this.stoned){
            return attack - Math.log2(this.distance) * 5; // Уменьшаем атаку 
        }
        return attack;
    }    
}