let icons = [];
let selections = [];
let cardCount = 10;

var start, end;

function loadIcons() {
    icons = [
        '<img src = "./images/CARTAS/1.png">',
        '<img src = "./images/CARTAS/2.png">',
        '<img src = "./images/CARTAS/3.png">',
        '<img src = "./images/CARTAS/4.png">',
        '<img src = "./images/CARTAS/5.png">',
        '<img src = "./images/CARTAS/6.png">',
        '<img src = "./images/CARTAS/7.png">',
        '<img src = "./images/CARTAS/8.png">',
        '<img src = "./images/CARTAS/9.png">',
        '<img src = "./images/CARTAS/10.png">',
        '<img src = "./images/CARTAS/11.png">',
        '<img src = "./images/CARTAS/12.png">',
        '<img src = "./images/CARTAS/13.png">',
        '<img src = "./images/CARTAS/14.png">',
        '<img src = "./images/CARTAS/15.png">',
        '<img src = "./images/CARTAS/16.png">',
        '<img src = "./images/CARTAS/17.png">',
        '<img src = "./images/CARTAS/18.png">',
        '<img src = "./images/CARTAS/19.png">',
        '<img src = "./images/CARTAS/20.png">',
        '<img src = "./images/CARTAS/21.png">',
        '<img src = "./images/CARTAS/22.png">',
        '<img src = "./images/CARTAS/23.png">',
        '<img src = "./images/CARTAS/24.png">',
        '<img src = "./images/CARTAS/25.png">',
        '<img src = "./images/CARTAS/26.png">',
        '<img src = "./images/CARTAS/27.png">',
        '<img src = "./images/CARTAS/28.jpg">',
        '<img src = "./images/CARTAS/29.jpg">',
        '<img src = "./images/CARTAS/30.jpg">',
        '<img src = "./images/CARTAS/31.jpg">',
        '<img src = "./images/CARTAS/32.jpg">',
        '<img src = "./images/CARTAS/33.jpg">',
        '<img src = "./images/CARTAS/34.jpg">',
        '<img src = "./images/CARTAS/35.jpg">',
        '<img src = "./images/CARTAS/36.jpg">',
        '<img src = "./images/CARTAS/37.jpg">',
        '<img src = "./images/CARTAS/38.jpg">',
        '<img src = "./images/CARTAS/39.jpg">',
        '<img src = "./images/CARTAS/40.jpg">',
        '<img src = "./images/CARTAS/41.jpg">',
        '<img src = "./images/CARTAS/42.jpg">',
        '<img src = "./images/CARTAS/43.jpg">',
        '<img src = "./images/CARTAS/44.jpg">',
        '<img src = "./images/CARTAS/45.jpg">',
        '<img src = "./images/CARTAS/46.jpg">',
        '<img src = "./images/CARTAS/47.jpg">',
        '<img src = "./images/CARTAS/48.jpg">',
        '<img src = "./images/CARTAS/49.jpg">',
        '<img src = "./images/CARTAS/50.jpg">',
        '<img src = "./images/CARTAS/51.jpg">',
        '<img src = "./images/CARTAS/52.jpg">',
        '<img src = "./images/CARTAS/53.jpg">',
        '<img src = "./images/CARTAS/54.jpg">',
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
                    <img src = "./images/CARTAS/REVERSO.png">
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
                    <img src = "./images/CARTAS/REVERSO.png">
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
