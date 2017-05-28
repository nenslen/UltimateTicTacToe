<!DOCTYPE html>

<?php require 'functions.php'; ?>

<html lang="en">
<head>
	<title>Ultimate Tic Tac Toe</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src="TicTacToe.js"></script>
	<script src="gameLogic.js"></script>
	<script src="Bot.js"></script>
</head>
<body>
	<h1>Ultimate Tic Tac Toe</h1>
	<h1 id="currentTurn">It's X's Turn</h1>

	<div class="gametype">
		<input id="type1" type="radio" name="gamemoderadio" value="hvh" checked>
		<label for="type1">Human vs Human</label>
	</div>
	<div class="gametype">
		<input id="type2" type="radio" name="gamemoderadio" value="hvc">
		<label for="type2">Human vs Computer</label>
	</div>
	<div class="gametype">
		<input id="type3" type="radio" name="gamemoderadio" value="cvc">
		<label for="type3">Computer vs Computer</label>
	</div>

	<div id="startButton">New Game</div>
	<div id="game">
		<?php drawBoard(); ?>
	</div>
	
	<!-- Game speed -->
	<h2>Game Speed</h2>
	<div class="range-slider">
		<input class="range-slider__range" type="range" value="100" min="1" max="200">
		<span class="range-slider__value">0</span>
	</div>


	<div id="modal">
		<div class="modal-content"><span class="playerLetter">X</span> Wins!</div>
	</div>
</body>
