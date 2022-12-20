function ticTacToe() {

    var topleft, topmiddle, topright, middleleft, middlemiddle, middleright, bottomleft, bottommiddle, bottomright;
    topleft = document.getElementById("topleft").value;
    topmiddle = document.getElementById("topmiddle").value;
    topright = document.getElementById("topright").value;
    middleleft = document.getElementById("middleleft").value;
    middlemiddle = document.getElementById("middlemiddle").value;
    middleright = document.getElementById("middleright").value;
    bottomleft = document.getElementById("bottomleft").value;
    bottommiddle = document.getElementById("bottommiddle").value;
    bottomright = document.getElementById("bottomright").value;

    if ((topleft == 'x' || topleft == 'X') && (topmiddle == 'x' ||
        topmiddle == 'X') && (topright == 'x' || topright == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("middleleft").disabled = true;
        document.getElementById("middlemiddle").disabled = true;
        document.getElementById("middleright").disabled = true;
        document.getElementById("bottomleft").disabled = true;
        document.getElementById("bottommiddle").disabled = true;
        document.getElementById("bottomright").disabled = true;
        window.alert('Player X won');
    }
    else if ((topleft == 'x' || topleft == 'X') && (middleleft == 'x' ||
        middleleft == 'X') && (bottomleft == 'x' || bottomleft == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("topmiddle").disabled = true;
        document.getElementById("topright").disabled = true;
        document.getElementById("middlemiddle").disabled = true;
        document.getElementById("middleright").disabled = true;
        document.getElementById("bottommiddle").disabled = true;
        document.getElementById("bottomright").disabled = true;

        window.alert('Player X won');
    }
    else if ((bottomleft == 'x' || bottomleft == 'X') && (bottommiddle == 'x' ||
        bottommiddle == 'X') && (bottomright == 'x' || bottomright == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("topleft").disabled = true;
        document.getElementById("topmiddle").disabled = true;
        document.getElementById("topright").disabled = true;
        document.getElementById("middleleft").disabled = true;
        document.getElementById("middlemiddle").disabled = true;
        document.getElementById("middleright").disabled = true;
        window.alert('Player X won');
    }
    else if ((topright == 'x' || topright == 'X') && (middleright == 'x' ||
        middleright == 'X') && (bottomright == 'x' || bottomright == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("topleft").disabled = true;
        document.getElementById("topmiddle").disabled = true;
        document.getElementById("middleleft").disabled = true;
        document.getElementById("middlemiddle").disabled = true;
        document.getElementById("bottomleft").disabled = true;
        document.getElementById("bottommiddle").disabled = true;
        window.alert('Player X won');
    }
    else if ((topleft == 'x' || topleft == 'X') && (middlemiddle == 'x' ||
        middlemiddle == 'X') && (bottomright == 'x' || bottomright == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("topmiddle").disabled = true;
        document.getElementById("topright").disabled = true;
        document.getElementById("middleleft").disabled = true;
        document.getElementById("middleright").disabled = true;
        document.getElementById("bottomleft").disabled = true;
        document.getElementById("bottommiddle").disabled = true;
        window.alert('Player X won');
    }
    else if ((topright == 'x' || topright == 'X') && (middlemiddle == 'x' ||
        middlemiddle == 'X') && (bottomleft == 'x' || bottomleft == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("topleft").disabled = true;
        document.getElementById("topmiddle").disabled = true;
        document.getElementById("middleleft").disabled = true;
        document.getElementById("middleright").disabled = true;
        document.getElementById("bottommiddle").disabled = true;
        document.getElementById("bottomright").disabled = true;
        window.alert('Player X won');
    }
    else if ((topmiddle == 'x' || topmiddle == 'X') && (middlemiddle == 'x' ||
        middlemiddle == 'X') && (bottommiddle == 'x' || bottommiddle == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("topleft").disabled = true;
        document.getElementById("topright").disabled = true;
        document.getElementById("middleleft").disabled = true;
        document.getElementById("middleright").disabled = true;
        document.getElementById("bottomleft").disabled = true;
        document.getElementById("bottomright").disabled = true;
        window.alert('Player X won');
    }
    else if ((middleleft == 'x' || middleleft == 'X') && (middlemiddle == 'x' ||
        middlemiddle == 'X') && (middleright == 'x' || middleright == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("topleft").disabled = true;
        document.getElementById("topmiddle").disabled = true;
        document.getElementById("topright").disabled = true;
        document.getElementById("bottomleft").disabled = true;
        document.getElementById("bottommiddle").disabled = true;
        document.getElementById("bottomright").disabled = true;
        window.alert('Player X won');
    }

    else if ((topleft == '0' || topleft == '0') && (topmiddle == '0' ||
        topmiddle == '0') && (topright == '0' || topright == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("middleleft").disabled = true;
        document.getElementById("middlemiddle").disabled = true;
        document.getElementById("middleright").disabled = true;
        document.getElementById("bottomleft").disabled = true;
        document.getElementById("bottommiddle").disabled = true;
        document.getElementById("bottomright").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((topleft == '0' || topleft == '0') && (middleleft == '0' ||
        middleleft == '0') && (bottomleft == '0' || bottomleft == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("topmiddle").disabled = true;
        document.getElementById("topright").disabled = true;
        document.getElementById("middlemiddle").disabled = true;
        document.getElementById("middleright").disabled = true;
        document.getElementById("bottommiddle").disabled = true;
        document.getElementById("bottomright").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((bottomleft == '0' || bottomleft == '0') && (bottommiddle == '0' ||
        bottommiddle == '0') && (bottomright == '0' || bottomright == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("topleft").disabled = true;
        document.getElementById("topmiddle").disabled = true;
        document.getElementById("topright").disabled = true;
        document.getElementById("middleleft").disabled = true;
        document.getElementById("middlemiddle").disabled = true;
        document.getElementById("middleright").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((topright == '0' || topright == '0') && (middleright == '0' ||
        middleright == '0') && (bottomright == '0' || bottomright == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("topleft").disabled = true;
        document.getElementById("topmiddle").disabled = true;
        document.getElementById("middleleft").disabled = true;
        document.getElementById("middlemiddle").disabled = true;
        document.getElementById("bottomleft").disabled = true;
        document.getElementById("bottommiddle").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((topleft == '0' || topleft == '0') && (middlemiddle == '0' ||
        middlemiddle == '0') && (bottomright == '0' || bottomright == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("topmiddle").disabled = true;
        document.getElementById("topright").disabled = true;
        document.getElementById("middleleft").disabled = true;
        document.getElementById("middleright").disabled = true;
        document.getElementById("bottomleft").disabled = true;
        document.getElementById("bottommiddle").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((topright == '0' || topright == '0') && (middlemiddle == '0' ||
        middlemiddle == '0') && (bottomleft == '0' || bottomleft == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("topleft").disabled = true;
        document.getElementById("topmiddle").disabled = true;
        document.getElementById("middleleft").disabled = true;
        document.getElementById("middleright").disabled = true;
        document.getElementById("bottommiddle").disabled = true;
        document.getElementById("bottomright").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((topmiddle == '0' || topmiddle == '0') && (middlemiddle == '0' ||
        middlemiddle == '0') && (bottommiddle == '0' || bottommiddle == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("topleft").disabled = true;
        document.getElementById("topright").disabled = true;
        document.getElementById("middleleft").disabled = true;
        document.getElementById("middleright").disabled = true;
        document.getElementById("bottomleft").disabled = true;
        document.getElementById("bottomright").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((middleleft == '0' || middleleft == '0') && (middlemiddle == '0' ||
        middlemiddle == '0') && (middleright == '0' || middleright == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("topleft").disabled = true;
        document.getElementById("topmiddle").disabled = true;
        document.getElementById("topright").disabled = true;
        document.getElementById("bottomleft").disabled = true;
        document.getElementById("bottommiddle").disabled = true;
        document.getElementById("bottomright").disabled = true;
        window.alert('Player 0 won');
    }

    else if ((topleft == 'X' || topleft == '0') && (topmiddle == 'X'
        || topmiddle == '0') && (topright == 'X' || topright == '0') &&
        (middleleft == 'X' || middleleft == '0') && (middlemiddle == 'X' ||
        middlemiddle == '0') && (middleright == 'X' || middleright == '0') &&
        (bottomleft == 'X' || bottomleft == '0') && (bottommiddle == 'X' ||
        bottommiddle == '0') && (bottomright == 'X' || bottomright == '0')) {
            document.getElementById('print')
                .innerHTML = "Match Tie";
            window.alert('Match Tie');
    }
    else {

        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print')
                .innerHTML = "Player 0 Turn";
        }
    }
}

function myfunc_2() {
    location.reload();
    document.getElementById('topleft').value = '';
    document.getElementById("topmiddle").value = '';
    document.getElementById("topright").value = '';
    document.getElementById("middleleft").value = '';
    document.getElementById("middlemiddle").value = '';
    document.getElementById("middleright").value = '';
    document.getElementById("bottomleft").value = '';
    document.getElementById("bottommiddle").value = '';
    document.getElementById("bottomright").value = '';

}

flag = 1;
function changeText_3() {
    if (flag == 1) {
        document.getElementById("topleft").value = "X";
        document.getElementById("topleft").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("topleft").value = "0";
        document.getElementById("topleft").disabled = true;
        flag = 1;
    }
}

function changeText_4() {
    if (flag == 1) {
        document.getElementById("topmiddle").value = "X";
        document.getElementById("topmiddle").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("topmiddle").value = "0";
        document.getElementById("topmiddle").disabled = true;
        flag = 1;
    }
}

function changeText_5() {
    if (flag == 1) {
        document.getElementById("topright").value = "X";
        document.getElementById("topright").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("topright").value = "0";
        document.getElementById("topright").disabled = true;
        flag = 1;
    }
}

function changeText_6() {
    if (flag == 1) {
        document.getElementById("middleleft").value = "X";
        document.getElementById("middleleft").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("middleleft").value = "0";
        document.getElementById("middleleft").disabled = true;
        flag = 1;
    }
}

function changeText_7() {
    if (flag == 1) {
        document.getElementById("middlemiddle").value = "X";
        document.getElementById("middlemiddle").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("middlemiddle").value = "0";
        document.getElementById("middlemiddle").disabled = true;
        flag = 1;
    }
}

function changeText_8() {
    if (flag == 1) {
        document.getElementById("middleright").value = "X";
        document.getElementById("middleright").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("middleright").value = "0";
        document.getElementById("middleright").disabled = true;
        flag = 1;
    }
}
 function changeText_9() {
    if (flag == 1) {
        document.getElementById("bottomleft").value = "X";
        document.getElementById("bottomleft").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("bottomleft").value = "0";
        document.getElementById("bottomleft").disabled = true;
        flag = 1;
    }
}

function changeText_10() {
    if (flag == 1) {
        document.getElementById("bottommiddle").value = "X";
        document.getElementById("bottommiddle").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("bottommiddle").value = "0";
        document.getElementById("bottommiddle").disabled = true;
        flag = 1;
    }
}

function changeText_11() {
    if (flag == 1) {
        document.getElementById("bottomright").value = "X";
        document.getElementById("bottomright").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("bottomright").value = "0";
        document.getElementById("bottomright").disabled = true;
        flag = 1;
    }
}
