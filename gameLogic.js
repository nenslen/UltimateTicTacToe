/*
	This is the controller that accepts user input and makes changes to the
	view and the model
*/

$(document).ready(function() {
	var mainBoard;
	var boards = new Array(9);
	var nextBoard = 0; // The next board that must be played on (0 = any)
	var	currentPlayer = 'X';
	var justClicked = false;
	var botX = new Bot('X');
	var botO = new Bot('O');
	var gameMode = "hvh";




	$('#startButton').click(function() {
		$(this).html("Restart");

		// Initialize the boards
		mainBoard = new TicTacToe();
		mainBoard.start();
		for(var i = 0; i < 9; i++) {
			boards[i] = new TicTacToe();
			boards[i].start();
		}


		// Reset the boards
		mainBoard.reset();
		for(var i = 0; i < 9; i++) {
			boards[i].reset();
		}


		// Reset classes
		$(".largeTile").removeClass("winnerX");
		$(".largeTile").removeClass("winnerO");
		$(".largeTile").removeClass("tie");
		$(".largeTile").removeClass("validBoardX");
		$(".largeTile").removeClass("validBoardO");
		$(".tile").removeClass("winnerX");
		$(".tile").removeClass("winnerO");
		$(".tile").removeClass("tie");
		$(".tile").removeClass("playerX");
		$(".tile").removeClass("playerO");
		$(".tile").removeClass("hoverX");
		$(".tile").removeClass("hoverO");

		$(".largeTile").addClass("validBoardX");
		$(".largeTile").addClass("validBackground");
		$(".tile").addClass("validTile");
		$(".tile").addClass("validBackground");

		$(".tile").html("");
		$("#currentTurn").html("It's X's Turn");


		// Finalize the reset
		nextBoard = 0;
		currentPlayer = "X";
		refreshBoards();
		gameStarted = true;
		gameMode = $("input[type='radio'][name='gamemoderadio']:checked").val();


		// Scroll to the game
		$('html, body').animate({
			scrollTop: $("#startButton").offset().top
		}, 800);


		// Continuous play until game is over
		if(gameMode == "cvc") {
			for(var i = 0; i < 8; i++) {
			//while(mainBoard.checkWin() == "N") {
			
				// Select next board for bot if there are multiple
				if(nextBoard == 0) {
					nextBoard = selectBoard();
				}

				// Bot decides its move and plays
				var botMove = "";
				if(currentPlayer == "X") {
					botMove = botX.getMove(boards[nextBoard - 1]);
				} else {
					botMove = botO.getMove(boards[nextBoard - 1]);
				}
				
				console.log("clicking " + nextBoard + botMove);
				$("#" + nextBoard + botMove).click();
			}
		}
	});




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
				mainBoard.performTurn(board, "X");
				winner = "winnerX";
				break;		
			case 'O':
				mainBoard.performTurn(board, "O");
				winner = "winnerO";
				break;
			case 'T':
				mainBoard.performTurn(board, "T");
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


		// Check if the main board is won
		switch(mainBoard.checkWin()) {
			case 'X':
				$(".modal-content").css("color", "#006bb3");
				$(".modal-content").css("border-color", "#006bb3");
				$(".modal-content").html("<span class='playerLetter'>X</span> Wins!");
				break;		
			case 'O':
				$(".modal-content").css("color", "#cc0000");
				$(".modal-content").css("border-color", "#cc0000");
				$(".modal-content").html("<span class='playerLetter'>O</span> Wins!");
				break;
			case 'T':
				$(".modal-content").css("color", "#a6a6a6");
				$(".modal-content").css("border-color", "#a6a6a6");
				$(".modal-content").html("It's a Tie!");
				break;
		}

		// Disable boards if gameover
		if(mainBoard.checkWin() !== "N") {
			$(".largeTile").removeClass("validBoardX");
			$(".largeTile").removeClass("validBoardO");
			$(".tile").removeClass("validTile");
			$(".tile").removeClass("validBackground");

			$("#startButton").html("Start");
			$('#modal').css('display','flex');
			$("#currentTurn").html("It's X's Turn");
		}
	});




	$(".tile").hover(function() {
			// Show player letter on hover
			$(this).html(currentPlayer);
			$(this).addClass("hover" + currentPlayer);
		}, function() {
			// Remove player letter on mouse exit
			if(justClicked === false) {
				$(this).html("");
				$(this).removeClass("hoverX");
				$(this).removeClass("hoverO");
			}
			justClicked = false;
	});



	// Close the modal when clicked
	$("#modal").click(function() {
		$("#modal").css("display", "none");
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


		// Enable all boards if game is just starting
		if(nextBoard === 0) {
			for(var i = 1; i <= 9; i++) {
				if(boards[i - 1].gameOver === false) {
					$("#" + i + ".largeTile").addClass("validBoard" + currentPlayer);
					enableBoard(i);
				}
			}
			return;
		}


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




	// Selects a random board number for the bot to play on if multiple boards are available
	var selectBoard = function() {
		// Get list of available tiles (boards) on the main board
		var validBoards = [];

		for(var i = 1; i <= 9; i++) {
			if(mainBoard.isValidMove) {
				validBoards.push(i);
			}
		}

		// Select a random board from list of random boards
		var rnd = Math.floor((Math.random() * validBoards.length));
		console.log(validBoards[rnd])
		return validBoards[rnd];
	}




	$(".test").click(function() {
		$('#modal').css('display','flex');
	});
});
