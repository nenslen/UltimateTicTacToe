<?php

	function drawBoard() {
		echo '<div class="board">';

		// 3 Large rows
		$id1 = 1;
		for($i = 1; $i <= 3; $i++) {
			echo '<div class="row">';

			// 3 Large tiles
			for($j = 1; $j <= 3; $j++) {
				//echo '<div class="largeTile validBoardX validBackground" id="' . $id1 . '">';
				echo '<div class="largeTile" id="' . $id1 . '">';

				// 3 Small rows
				$id2 = 1;
				for($k = 1; $k <= 3; $k++) {
					echo '<div class="row">';

					// 3 Small tiles
					for($l = 1; $l <= 3; $l++) {
						//echo '<div class="tile validTile validBackground" id="' . $id1 . $id2++ .'"></div>';
						echo '<div class="tile" id="' . $id1 . $id2++ .'"></div>';
					}
					echo '</div>';
				}
				$id1++;
				echo '</div>';
			}
			echo '</div>';
		}
		echo '</div>';
	}
?>
