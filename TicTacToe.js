/*
	This is the game model. It essentially represents the tic tac toe board.
*/

function TicTacToe() {

	this.board = new Array(9);
	this.winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
	this.gameOver = false;


	this.start = function() {
		this.reset();
	};


	this.reset = function() {
		this.currentPlayer = 'X';
		for(var i = 1; i <= 9; i++) {
			this.board[i - 1] = 'N';
		}
		this.gameOver = false;
	};
	

	this.isValidMove = function(tile) {

		// Make sure tile is within range
		if(tile < 0 || tile > 9) {
			return false;
		}

		// Check if the given tile is open
		if(this.board[tile - 1] == 'N') {
			return true;
		} else {
			return false;
		}
	};


	this.performTurn = function(tile, player) {
		this.board[tile - 1] = player;
	};



	/*
	 * Returns:
	 * 'X' = X Wins
	 * 'O' = O Wins
	 * 'T' = Tie
	 * 'N' = No winner yet
	 */
	this.checkWin = function() {
		//console.log(this.winningCombinations[0][1]);
		// Check for winning player
		for(var i = 0; i < this.winningCombinations.length; i++) {
			var tile1 = this.board[this.winningCombinations[i][0]];
			var tile2 = this.board[this.winningCombinations[i][1]];
			var tile3 = this.board[this.winningCombinations[i][2]];

			if(tile1 == tile2 && tile2 == tile3 && tile1 != 'N') {
				this.gameOver = true;
				return tile1;
			}
		}


		// Check for all tiles used
		for(var i = 0; i < 9; i++) {
			if(this.board[i] == 'N') {
				return 'N';
			}
		}


		// No winners and all tiles are used
		this.gameOver = true;
		return 'T';
	};
};
