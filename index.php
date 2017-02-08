<!DOCTYPE html>

<?php require 'functions.php'; ?>

<html lang="en">
<head>
	<title>Ultimate Tic Tac Toe</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="TicTacToe.js"></script>
	<script>
		var t = TicTacToe;
		t.start();
		console.log(t.currentPlayer);
	</script>
</head>
<body>
	<?php drawBoard(); ?>
</body>
