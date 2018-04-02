<?php
	function drawBoard() {
?>
		<div class="large-board-wrapper">
			<div class="large-board">
<?php
			for($i = 1; $i <= 9; $i++) {
?>
				<div class="large-tile" id=<?php echo "'" . $i . "'" ?>>
					<div class="small-board">
<?php
						for($j = 1; $j <= 9; $j++) {
?>
							<div class="small-tile validTile validBackground" id=<?php echo "'" . $i . $j . "'" ?>></div>
<?php
						}
?>
					</div>
				</div>
<?php
			}
?>
			</div>
		</div>
<?php
	}
?>
