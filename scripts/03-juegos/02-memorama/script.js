let icons = [];
let selections = [];
let cardCount = 10;

var start, end;

function loadIcons() {
    icons = [
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/1.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/2.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/3.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/4.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/5.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/6.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/7.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/8.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/9.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/10.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/11.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/12.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/13.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/14.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/15.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/16.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/17.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/18.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/19.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/20.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/21.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/22.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/23.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/24.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/25.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/26.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/27.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/28.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/29.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/30.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/31.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/32.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/33.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/34.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/35.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/36.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/37.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/38.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/39.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/40.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/41.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/42.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/43.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/44.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/45.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/46.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/47.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/48.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/49.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/50.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/51.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/52.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/53.png">',
        '<img src = "../../../media/03-juegos/02-memorama/images/cartas/54.png">',
    ];
}

function generateBoard(level) {
    if (level == 'l1') {
        var nums = [2, 3, 5, 7, 11, 12, 13, 14, 16, 17, 19, 23, 24];//all numbers to be randomized
        ranNums = [];
        a = nums.length;
        b = 0;
        while (a--) {
            b = Math.floor(Math.random() * (a + 1));
            ranNums.push(nums[b]);
            nums.splice(b, 1);
        }
    } else if (level == 'l2') {
        var nums = [0, 1, 4, 6, 8, 9, 10, 15, 18, 20, 21, 22, 25, 26];//all numbers to be randomized
        ranNums = [];
        a = nums.length;
        b = 0;
        while (a--) {
            b = Math.floor(Math.random() * (a + 1));
            ranNums.push(nums[b]);
            nums.splice(b, 1);
        }
    } else {
        var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];//all numbers to be randomized
        ranNums = [];
        a = nums.length;
        b = 0;
        while (a--) {
            b = Math.floor(Math.random() * (a + 1));
            ranNums.push(nums[b]);
            nums.splice(b, 1);
        }
    }
    loadIcons();
    selections = [];
    let board = document.getElementById("board");
    let cards = [];
    console.log(ranNums);
    for (let i = 1; i < (cardCount / 2) + 1; i++) {
        console.log(ranNums[i])
        cards.push(`
        <div class="card-area" onclick="selectCard(${i})">
            <div class="card" id="card${i}">
                <div class="side rear" id="rear${i}">
                    ${icons[ranNums[i]]}
                </div>
                <div class="side front">
                    <img src = "../../../media/03-juegos/02-memorama/images/cartas/REVERSO.png">
                </div>
            </div>
        </div>        
        `)
        cards.push(`
        <div class="card-area" onclick="selectCard(${i + 27})">
            <div class="card" id="card${i + 27}">
                <div class="side rear" id="rear${i + 27}">
                    ${icons[(ranNums[i]) + 27]}
                </div>
                <div class="side front">
                    <img src = "../../../media/03-juegos/02-memorama/images/cartas/REVERSO.png">
                </div>
            </div>
        </div>
        `);
    }
    cards.sort(() => Math.random() - 0.5);
    board.innerHTML = cards.join(" ");

    start = new Date().getTime();
}

function selectCard(i) {
    let card = document.getElementById("card" + i);
    if (card.style.transform != "rotateY(180deg)") {
        card.style.transform = "rotateY(180deg)";
        selections.push(i);
    }
    if (selections.length == 2) {
        deselect(selections);
        selections = [];
    }
}

function deselect(selections) {
    setTimeout(() => {
        let rear1 = document.getElementById("rear" + selections[0]);
        let rear2 = document.getElementById("rear" + selections[1]);
        console.log(selections[0]);
        console.log(selections[1]);
        if(selections[0] + 27 == selections[1] || selections[0] == selections[1] + 27) {
            rear1.style.background = "plum";
            rear2.style.background = "plum";
            console.log('saca es putooooo')
        }
        else {
            let card1 = document.getElementById("card" + selections[0]);
            let card2 = document.getElementById("card" + selections[1]);
            card1.style.transform = "rotateY(0deg)";
            card2.style.transform = "rotateY(0deg)";
        }
        if (verifyWin()) {
            let string = `Has encontrado todas las cartas. \nTe has tardado `;
            let time = ((end - start) / 1000).toFixed(1);
            if (time > 60) {
                string += `${time / 60} minutos`;
            } else {
                string += `${time} segundos`;
            }
            swal.fire({
                title: `¡Has ganado!`,
                text: string,
                icon: `success`
            });
        }
    }, 1000);
}

function verifyWin() {
    for (let i = 1; i <= (cardCount / 2); i ++) {
        let rear = document.getElementById("rear" + i);
        if (rear.style.background != "plum") {
            return false;
        }
    }
    end = new Date().getTime();
    return true;
}
