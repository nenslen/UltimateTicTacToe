<!DOCTYPE html>

<?php require 'functions.php'; ?>
<?php require '../../../functions.php'; ?>

<html lang="en">
<head>
	<?php drawHead('Ultimate Tic Tac Toe', '../../../'); ?>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script src="js/tictactoe.js"></script>
	<script src="js/gamelogic.js"></script>
	<script src="js/bot.js"></script>
</head>
<body>
	<?php drawHeader('small'); ?>
	

	<div class="wrapper wrapper-no-margin-top">
		<div class='section-wrapper'>
			<div class="section">
				<h1 class="section-header top-header">Ultimate Tic Tac Toe</h1>
				<div class="section-content">

					<div id="game">
						<?php drawBoard(); ?>
					</div>

					<div class="grid">
						<button class="button button-green" id="startButton">New Game</button>
					</div>

					<div class="card" id="settings-menu">
						
						<span class="item">
							Game Speed
							<div class="gameSpeed_slider">
								<input class="gameSpeed_range" type="range" value="40" min="1" max="200">
							</div>
						</span>
						

						<div class="grid grid-2-2-1">

							<!-- Game Mode -->
							<div>
								<span class="item">
									<span class="settings-header">Game Mode</span>
									<div class="option">
										<input id="type1" type="radio" name="gamemoderadio" value="hvh" checked>
										<label for="type1">Human vs Human</label>
									</div>
									<div class="option">
										<input id="type2" type="radio" name="gamemoderadio" value="hvc">
										<label for="type2">Human vs AI</label>
									</div>
									<div class="option">
										<input id="type3" type="radio" name="gamemoderadio" value="cvc">
										<label for="type3">AI vs AI</label>
									</div>
								</span>
							</div>

							<!-- Difficulty -->
							<div>
								<span class="item">
									<span class="settings-header">Difficulty</span>
									<div class="option">
										<input id="level1" type="radio" name="difficultyradio" value="1">
										<label for="level1">Easy</label>
									</div>
									<div class="option">
										<input id="level2" type="radio" name="difficultyradio" value="2" checked>
										<label for="level2">Medium</label>
									</div>
								</span>
							</div>
						</div>
					</div>
					

			        <h1 class="section-header top-header">About</h1>
			        <p id="description">About ultimate tic tac toe</p>
			        

			        <h1 class="section-header top-header">Details</h1>
			        <h2 class="section-header section-header-small">How it works</h2>
			        <p>How it works section</p>
			        
			        <p>For source code, visit the <a href="https://github.com/nenslen/Connect4">github page for this project</a>.</p>
				</div>
			</div>
		</div>

		<div id="modal">
			<div class="modal-content">
				<span class="playerLetter">X</span> Wins!dfg
				</br>Click anywhere to continue
			</div>
		</div>

		<?php drawFooter(); ?>
	</div>
	

	
</body>
</html>