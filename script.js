const gameController = (() => {
  let turns = 0;
  function takeTurn(tile) {
    if (tile.getAttribute('used') === 'true') {} else {
      if (turns % 2 === 0) { tile.innerText = 'X'; } else {
        tile.innerText = 'O';
      }

      tile.setAttribute('used', true);
      turns += 1;
    }
  }

  function checkGame(tiles) {
    // This function checks for win conditions throughout the gameboard, and calls a tie if needed.

    function circleWinConditions() {
      if ((tiles[0].innerText === 'O' && tiles[4].innerText === 'O' && tiles[8].innerText === 'O') || (tiles[2].innerText === 'O' && tiles[4].innerText === 'O' && tiles[6].innerText === 'O')) {
        console.log('circle wins!');
      } else if ((tiles[0].innerText === 'O' && tiles[1].innerText === 'O' && tiles[2].innerText === 'O') || (tiles[3].innerText === 'O' && tiles[4].innerText === 'O' && tiles[5].innerText === 'O') || (tiles[6].innerText === 'O' && tiles[7].innerText === 'O' && tiles[8].innerText === 'O')) {
        console.log('circle wins!');
      } else if ((tiles[0].innerText === 'O' && tiles[3].innerText === 'O' && tiles[6].innerText === 'O') || (tiles[1].innerText === 'O' && tiles[4].innerText === 'O' && tiles[7].innerText === 'O') || (tiles[2].innerText === 'O' && tiles[5].innerText === 'O' && tiles[8].innerText === 'O')) {
        console.log('circle wins!');
      }
    }

    function crossWinConditions() {
      if ((tiles[0].innerText === 'X' && tiles[4].innerText === 'X' && tiles[8].innerText === 'X') || (tiles[2].innerText === 'X' && tiles[4].innerText === 'X' && tiles[6].innerText === 'X')) {
        console.log('circle wins!');
      } else if ((tiles[0].innerText === 'X' && tiles[1].innerText === 'X' && tiles[2].innerText === 'X') || (tiles[3].innerText === 'X' && tiles[4].innerText === 'X' && tiles[5].innerText === 'X') || (tiles[6].innerText === 'X' && tiles[7].innerText === 'X' && tiles[8].innerText === 'X')) {
        console.log('circle wins!');
      } else if ((tiles[0].innerText === 'X' && tiles[3].innerText === 'X' && tiles[6].innerText === 'X') || (tiles[1].innerText === 'X' && tiles[4].innerText === 'X' && tiles[7].innerText === 'X') || (tiles[2].innerText === 'X' && tiles[5].innerText === 'X' && tiles[8].innerText === 'X')) {
        console.log('circle wins!');
      }
    }
  }

  return { takeTurn };
})();

const gameBoard = ((turnFunction) => {
  const tiles = [];
  const boardContainer = document.querySelector('.gameBoardContainer');

  function createTiles() {
    for (let i = 0; i < 9; i += 1) {
      const tile = document.createElement('button');
      tile.setAttribute('data-index', i);
      tile.setAttribute('used', false);
      tile.addEventListener('click', () => { turnFunction(tile); });
      tiles.push(tile);
    }
    tiles.forEach((tile) => {
      boardContainer.append(tile);
    });
  }

  return { createTiles, tiles };
})(gameController.takeTurn);

gameBoard.createTiles();
