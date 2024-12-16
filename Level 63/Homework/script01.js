

function determineWinner(player1, player2) {
    // tamashis monacmebis formula
    let player1Score = (player1[0] * 1) + (player1[1] * 2) + (player1[2] * player1[2] / 10);
    let player2Score = (player2[0] * 1) + (player2[1] * 2) + (player2[2] * player2[2] / 10);

    // shedareba
    if (player1Score > player2Score) {
        return "Player 1 wins!";
    } else if (player1Score < player2Score) {
        return "Player 2 wins!";
    } else {
        return "It's a tie!";
    }
}


let player1 = [10, 8, 6]; // dzaka siswarfe inteleqti
let player2 = [7, 9, 7];

console.log(determineWinner(player1, player2));
