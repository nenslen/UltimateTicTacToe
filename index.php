<!-- FIXES
4. Fix glitch where tiles are unclickable after some games end
-->

<!DOCTYPE html>

<?php require 'functions.php'; ?>

<html lang="en">
<head>
	<title>Ultimate Tic Tac Toe</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.6.2/css/font-awesome.min.css'>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src="TicTacToe.js"></script>
	<script src="gameLogic.js"></script>
	<script src="Bot.js"></script>
</head>
<body>
	<h1>Ultimate Tic Tac Toe</h1>
	<!--<h1 id="currentTurn">It's X's Turn</h1>-->

	

	

	<div id="settings">
		<button id="showSettings">
			<span><i class='fa fa-gear fa-3x' aria-hidden='true'></i></span>
		</button>


		<div id="settingsMenu">

			<!-- Game speed -->
			<h2>Game Speed</h2>
			<div class="gameSpeed_slider">
				<input class="gameSpeed_range" type="range" value="40" min="1" max="200">
			</div>


			<!-- Difficulty -->
			<h2 class="settings-header">Difficulty</h2>
			<div class="option">
				<input id="level1" type="radio" name="difficultyradio" value="1">
				<label for="level1">Easy</label>
			</div>
			<div class="option">
				<input id="level2" type="radio" name="difficultyradio" value="2" checked>
				<label for="level2">Medium</label>
			</div>


			<!-- Game mode -->
			<h2 class="settings-header">Game Mode</h2>
			<div class="option">
				<input id="type1" type="radio" name="gamemoderadio" value="hvh" checked>
				<label for="type1">Human vs Human</label>
			</div>
			<div class="option">
				<input id="type2" type="radio" name="gamemoderadio" value="hvc">
				<label for="type2">Human vs Computer</label>
			</div>
			<div class="option">
				<input id="type3" type="radio" name="gamemoderadio" value="cvc">
				<label for="type3">Computer vs Computer</label>
			</div>
		</div>
	</div>


	<div id="startButton">New Game</div>
	<div id="game">
		<?php drawBoard(); ?>
	</div>
	
	


	<div id="modal">
		<div class="modal-content">
			<span class="playerLetter">X</span> Wins!dfg
			</br>Click anywhere to continue
		</div>
	</div>
</body>
