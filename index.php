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
</head>
<body>
	<h1>Ultimate Tic Tac Toe</h1>
	<h1 id="currentTurn">It's X's Turn</h1>
	<div id="startButton">Start</div>
	<div id="game">
		<?php drawBoard(); ?>
	</div>
	
</body>
