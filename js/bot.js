/** CURRENT BUGS and wanted features
1. Bot does not detect any double, blocking, or winning moves. Always chooses random due to error accessing winningCombinations[i][0], it will always return 0 for some reason
2. 
*/

function Bot(player, level) {

	this.player = player;
	this.level = level;
	this.winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


	// Returns a tile index where the bot wants to play
	this.getMove = function(board) {
		/* Based on level, bot will try to:
		1) Find a winning move
		2) Find a blocking move
		3) Find a move to get 2 tiles in the same line
		4) Select a random tile
		*/

		if(this.level == 1) {
			return this.findRandomMove(board);
		}

		if(this.findWinMove(board) != -1) {
			return this.findWinMove(board);
		}

		if(this.findBlockMove(board) != -1) {
			return this.findBlockMove(board);
		}

		if(this.findDoubleMove(board) != -1) {
			return this.findDoubleMove(board);
		}

		return this.findRandomMove(board);
	};


	// Returns which tile will result in a win (-1 if not possible)
	this.findWinMove = function(board) {
		
		// Find combination with 2 player tiles and 1 neutral tile
		for(var i = 0; i < this.winningCombinations.length; i++) {
			var tile1 = board.board[this.winningCombinations[i][0]];
			var tile2 = board.board[this.winningCombinations[i][1]];
			var tile3 = board.board[this.winningCombinations[i][2]];
			var neutralIndex = -1;
			var tileCount = 0;


			// Count number of tiles that this bot owns, and find position of a neutral tile
			if(tile1 == player) { tileCount++; }
			if(tile1 == 'N')    { neutralIndex = this.winningCombinations[i][0]; }

			if(tile2 == player) { tileCount++; }
			if(tile2 == 'N')    { neutralIndex = this.winningCombinations[i][1]; }

			if(tile3 == player) { tileCount++; }
			if(tile3 == 'N')    { neutralIndex = this.winningCombinations[i][2]; }


			// Either return the winning tile index or indicate that there is none
			if(tileCount == 2 && neutralIndex != -1) {
				return neutralIndex + 1;
			}
		}

		
		// Move not possible
		return -1;
	};


	// Returns which tile will result in a blocking move (-1 if not possible)
	this.findBlockMove = function(board) {
		
		// Find combination with 2 enemy tiles and 1 neutral tile
		for(var i = 0; i < this.winningCombinations.length; i++) {
			var tile1 = board.board[this.winningCombinations[i][0]];
			var tile2 = board.board[this.winningCombinations[i][1]];
			var tile3 = board.board[this.winningCombinations[i][2]];
			var neutralIndex = -1;
			var tileCount = 0;
			var enemy = "X";
			if(player == "X") { enemy = "O"; }


			// Count number of tiles that this bot owns, and find index of a neutral tile
			if(tile1 == enemy) { tileCount++; }
			if(tile1 == 'N')   { neutralIndex = this.winningCombinations[i][0]; }

			if(tile2 == enemy) { tileCount++; }
			if(tile2 == 'N')    { neutralIndex = this.winningCombinations[i][1]; }

			if(tile3 == enemy) { tileCount++; }
			if(tile3 == 'N')   { neutralIndex = this.winningCombinations[i][2]; }


			// Either return the blocking tile index or indicate that there is none
			if(tileCount == 2 && neutralIndex != -1) {
				return neutralIndex + 1;
			}
		}

		// Move not possible
		return -1;
	};


	// Returns which tile will result in 2 of the player's tiles being in the same line
	this.findDoubleMove = function(board) {
		
		// Find combination with 2 player tiles and 1 neutral tile
		for(var i = 0; i < this.winningCombinations.length; i++) {
			var tile1 = board.board[this.winningCombinations[i][0]];
			var tile2 = board.board[this.winningCombinations[i][1]];
			var tile3 = board.board[this.winningCombinations[i][2]];
			var neutralIndex = -1;
			var tileCount = 0;

			//console.log(board.board[this.winningCombinations[i][0]]);
			/*
			console.log("Winning");
			console.log(this.winningCombinations);
			console.log("Winning2");
			console.log(this.winningCombinations[i]);
			console.log("Winning3");
			console.log(this.winningCombinations[i][1]);
			*/

			/*
			console.log("tile1=" + tile1);
			console.log("tile2=" + tile2);
			console.log("tile3=" + tile3);
			*/

			//console.log("neutralIndex=" + neutralIndex);
			//console.log("tileCount=" + tileCount);

			// Count number of tiles that this bot owns, and find position of a neutral tile
			if(tile1 == player) { tileCount++; }
			if(tile1 == 'N')    { neutralIndex = this.winningCombinations[i][0]; }

			if(tile2 == player) { tileCount++; }
			if(tile2 == 'N')    { neutralIndex = this.winningCombinations[i][1]; }

			if(tile3 == player) { tileCount++; }
			if(tile3 == 'N')    { neutralIndex = this.winningCombinations[i][2]; }


			// Return the tile if found
			if(tileCount == 1 && neutralIndex != -1) {
				return neutralIndex + 1;
			}
		}

		// Move not possible
		return -1;
	};


	// Returns a random tile if none of the above were successful
	this.findRandomMove = function(board) {
		var validMoves = [];

		// Find list of neutral tiles on the board
		for(var i = 1; i <= 9; i++) {
			if(board.isValidMove(i)) {
				validMoves.push(i);
			}
		}


		// Select a random tile from list of valid tiles
		var rnd = Math.floor((Math.random() * validMoves.length));
		return validMoves[rnd];
	};
};
