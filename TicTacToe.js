var TicTacToe = {

	board: new Array(9),
	winningCombinations: [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],
	currentPlayer: 'X',
	gameOver: false,


	start: function() {
		this.reset();
	},


	reset: function() {

		currentPlayer = 'X';
		for(var i = 1; i <= 9; i++) {
			this.board[i - 1] = '';
		}
		gameOver = false;
	},
	

	isValidMove: function(tile) {
		return board[tile - 1] == '';
	},


	performTurn: function(tile) {
		board[tile] = currentPlayer;
	},


	swapTurns: function() {
		if(currentPlayer == 'X') { currentPlayer = 'O'; }
		else { currentPlayer = 'X'; }
	},

	// Returns true if a given player has won
	checkWin: function(player) {
		for(var i = 0; i < winningCombinations.length; i++){
			if(board[winningCombinations[i][0]] == player && 
			   board[winningCombinations[i][1]] == player &&
			   board[winningCombinations[i][2]] == player) {
				return true;
			}
		}
		return false;
	}
};
