$(document).ready(function() {
	var mainBoard;
	var boards = new Array(9);
	var nextBoard = 0; // The next board that must be played on (0 = any)
	var	currentPlayer = 'X';
	var justClicked = false;


	// Initialize the boards
	mainBoard = new TicTacToe();
	mainBoard.start();
	for(var i = 0; i < 9; i++) {
		boards[i] = new TicTacToe();
		boards[i].start();
	}




	$('.tile').click(function() {
		justClicked = true;

		// Set the text of the tile to 'X' or 'O'
		$(this).html(currentPlayer);
		

		// Get the board/tile that was clicked
		board = $(this).attr("id").substring(0, 1); // clickedTile
		tile = $(this).attr("id").substring(1); // nextBoard
		nextBoard = tile;

		// Perform the turn on the tile
		boards[board - 1].performTurn(tile, currentPlayer);


		// Set the winner of the clicked board
		var winner = "neutral";
		switch(boards[board - 1].checkWin()) {
			case 'X':
				winner = "winnerX";
				break;		
			case 'O':
				winner = "winnerO";
				break;
			case 'T':
				winner = "tie";
				break;
		}


		// Color the board and its tiles
		if(winner != "neutral") {
			$("#" + board + ".largeTile").addClass(winner);
			for(var i = 1; i <= 9; i++) {
				$("#" + board + "" + i + ".tile").addClass(winner);
			}
		}
		$("#" + board + "" + tile + ".tile").addClass("player" + currentPlayer);
		

		// Finish up the turn
		$(this).html(currentPlayer);
		swapTurns();
		refreshBoards();
		$("#currentTurn").html("It's " + currentPlayer + "'s Turn");
	});




	$(".tile").hover(function() {
			$(this).html(currentPlayer);
			$(this).addClass("hover" + currentPlayer);
		}, function() {
			if(justClicked === false) {
				$(this).html("");
				$(this).removeClass("hoverX");
				$(this).removeClass("hoverO");
			}
			justClicked = false;
	});




	var swapTurns = function() {
		if(currentPlayer == 'X') { currentPlayer = 'O'; }
		else { currentPlayer = 'X'; }
	};




	// Enable/disable the boards that are available to be played on
	var refreshBoards = function() {
		
		// Disable all boards/tiles
		$(".largeTile").removeClass("validBoardX");
		$(".largeTile").removeClass("validBoardO");
		$(".tile").removeClass("validTile");
		$(".tile").removeClass("validBackground");


		// Enable valid board(s)
		if(boards[nextBoard - 1].gameOver === true) {

			// Enable other boards if the next board to be played on is invalid
			for(var i = 1; i <= 9; i++) {
				if(boards[i - 1].gameOver === false) {
					$("#" + i + ".largeTile").addClass("validBoard" + currentPlayer);
					enableBoard(i);
				}
			}
		} else {
			$("#" + nextBoard + ".largeTile").addClass("validBoard" + currentPlayer);
			enableBoard(nextBoard);
		}
	}




	// Enables a board and any valid tiles on it
	var enableBoard = function(board) {
		for(var i = 1; i <= 9; i++) {
			$("#" + board + "" + i + ".tile").addClass("validBackground");
			if(boards[board - 1].isValidMove(i) === true) {
				$("#" + board + "" + i + ".tile").addClass("validTile");
			}
		}
	}
});
