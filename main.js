let damage = parseInt(prompt("1회 공격시 데미지는? (양의 정수)"));
let monsterHP = 100;
let attackCount = 0;
let isMonsterDead = false;

if (damage > 0) {
  while (monsterHP > 0) {
    monsterHP -= damage;
    attackCount += 1;

    if (monsterHP <= 0) {
      monsterHP = 0;
      isMonsterDead = true;
    }

    let attackCountBox = document.createElement("div");
    attackCountBox.style.margin = "30px 0 15px 0";
    attackCountBox.append(`몬스터를 ${attackCount}회 공격했습니다.`);
    document.body.appendChild(attackCountBox);

    let monsterHPBox = document.createElement("strong");
    monsterHPBox.append(`몬스터의 남은 HP는 ${monsterHP}입니다!`);
    document.body.appendChild(monsterHPBox);
  }

  
  if (isMonsterDead) {
    let refreshButton = document.createElement("button");
    refreshButton.innerText = "다시하기";
    refreshButton.style.display = "block";
    refreshButton.style.marginTop = "15px";
    document.body.appendChild(refreshButton);

    refreshButton.addEventListener("click", () => {
      location.reload();
    });
  }
} else if (isNaN(damage) || damage < 1) {
  alert("데미지를 잘못 입력하여 게임을 취소합니다!");
}
