function gladiatorExpenses(fight, helmet, sword, shield, armor) {
  let lostFight = fight;
  let helmetPrice = helmet;
  let swordPrice = sword;
  let shieldPrice = shield;
  let armorPrice = armor;

  let shieldBroaken = 0;
  let sum = 0;

  for (let currentFight = 1; currentFight <= lostFight; currentFight++) {
    if (currentFight % 2 === 0) {
      sum += helmetPrice;
    } 
    
    if (currentFight % 3 === 0) {
      sum += swordPrice;
    }

    if (currentFight % 2 === 0 && currentFight % 3 === 0) {
      sum += shieldPrice;
      shieldBroaken++;

      if (shieldBroaken % 2 == 0) {
        sum += armorPrice;
      }
    }
    
  }
  console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4);
