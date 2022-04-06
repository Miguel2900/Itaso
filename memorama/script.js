let icons = [];
let selections = [];
let cardCount = 10;

function loadIcons() {
    icons = [
        '<img src = "./images/1.png">',
        '<img src = "./images/2.png">',
        '<img src = "./images/3.png">',
        '<img src = "./images/4.png">',
        '<img src = "./images/5.png">',
        '<img src = "./images/6.png">',
        '<img src = "./images/7.png">',
        '<img src = "./images/8.png">',
        '<img src = "./images/9.png">',
        '<img src = "./images/10.png">',
        '<img src = "./images/11.png">',
        '<img src = "./images/12.png">',
        '<img src = "./images/13.png">',
        '<img src = "./images/14.png">',
        '<img src = "./images/15.png">',
        '<img src = "./images/16.png">',
        '<img src = "./images/17.png">',
        '<img src = "./images/18.png">',
        '<img src = "./images/19.png">',
        '<img src = "./images/20.png">',
        '<img src = "./images/21.png">',
        '<img src = "./images/22.png">',
        '<img src = "./images/23.png">',
        '<img src = "./images/24.png">',
        '<img src = "./images/25.png">',
        '<img src = "./images/26.png">',
        '<img src = "./images/27.png">',
        '<img src = "./images/28.jpg">',
        '<img src = "./images/29.jpg">',
        '<img src = "./images/30.jpg">',
        '<img src = "./images/31.jpg">',
        '<img src = "./images/32.jpg">',
        '<img src = "./images/33.jpg">',
        '<img src = "./images/34.jpg">',
        '<img src = "./images/35.jpg">',
        '<img src = "./images/36.jpg">',
        '<img src = "./images/37.jpg">',
        '<img src = "./images/38.jpg">',
        '<img src = "./images/39.jpg">',
        '<img src = "./images/40.jpg">',
        '<img src = "./images/41.jpg">',
        '<img src = "./images/42.jpg">',
        '<img src = "./images/43.jpg">',
        '<img src = "./images/44.jpg">',
        '<img src = "./images/45.jpg">',
        '<img src = "./images/46.jpg">',
        '<img src = "./images/47.jpg">',
        '<img src = "./images/48.jpg">',
        '<img src = "./images/49.jpg">',
        '<img src = "./images/50.jpg">',
        '<img src = "./images/51.jpg">',
        '<img src = "./images/52.jpg">',
        '<img src = "./images/53.jpg">',
        '<img src = "./images/54.jpg">',
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
                    <img src = "./images/REVERSO.png">
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
                    <img src = "./images/REVERSO.png">
                </div>
            </div>
        </div>
        `);
    }
    cards.sort(() => Math.random() - 0.5);
    board.innerHTML = cards.join(" ");
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
            swal.fire({
                title: `¡Has ganado!`,
                text: `Has encontrado todas las cartas.`,
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
    return true;
}
