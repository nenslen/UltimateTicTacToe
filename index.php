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

	<div id="startButton">Start</div>
	<div id="game">
		<?php drawBoard(); ?>
	</div>
	
	<div id="modal">
		<div class="modal-content"><span class="playerLetter">X</span> Wins!</div>
	</div>
</body>
