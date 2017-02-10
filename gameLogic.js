$(document).ready(function() {
	var mainBoard;// = TicTacToe;
	var boards = new Array(9);
	var nextBoard = 0; // The next board that must be played on (0 = any)
	var	currentPlayer = 'X';


	// Initialize the boards
	mainBoard = new TicTacToe();
	mainBoard.start();
	for(var i = 0; i < 9; i++) {
		boards[i] = new TicTacToe();
		boards[i].start();
	}


	$('.tile').click(function() {
		$(this).html(currentPlayer);
		
		clickedTile = $(this).attr("id").substring(0, 1);
		nextBoard = $(this).attr("id").substring(1);

		boards[clickedTile - 1].performTurn(nextBoard, currentPlayer);

		console.log(boards[clickedTile - 1].checkWin());
		switch(boards[clickedTile - 1].checkWin()) {

			case 'X':
				$("#" + clickedTile + ".largeTile").addClass("player1");
				break;		
		}
		swapTurns();
		refreshBoards();

		$("#currentTurn").html("It's " + currentPlayer + "'s Turn");
	});


	var swapTurns = function() {
		if(currentPlayer == 'X') { currentPlayer = 'O'; }
		else { currentPlayer = 'X'; }
	};


	// Enable/disable the boards that are available to be played on
	var refreshBoards = function() {
		
		// Disable all boards/tiles
		$(".largeTile").removeClass("validBoard");
		$(".tile").removeClass("validTile");


		// Enable valid board(s)
		if(boards[nextBoard - 1].gameOver === true) {

			// Enable other boards if the next board to be played on is invalid
			for(var i = 1; i <= 9; i++) {
				if(boards[i - 1].gameOver === false) {
					$("#" + i + ".largeTile").addClass("validBoard");
					enableBoard(i);
				}
			}
		} else {
			$("#" + nextBoard + ".largeTile").addClass("validBoard");
			enableBoard(nextBoard);
		}
	}


	// Enables a board and any valid tiles on it
	var enableBoard = function(board) {
		for(var i = 1; i <= 9; i++) {
			if(boards[board - 1].isValidMove(i) === true) {
				$("#" + board + "" + i + ".tile").addClass("validTile");
			}
		}
	}
});
