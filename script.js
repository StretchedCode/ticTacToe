const gameController = (() => {
  let turns = 0;
  function takeTurn(tile, tiles) {
    if (tile.getAttribute('used') === 'true') {} else {
      if (turns % 2 === 0) { tile.innerText = 'X'; } else {
        tile.innerText = 'O';
      }

      tile.setAttribute('used', true);
      tile.style.borderColor = 'green';
      turns += 1;

      checkGame(tiles, turns);
    }
  }

  function checkGame(tiles, turnCount) {
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
        console.log('cross wins!');
      } else if ((tiles[0].innerText === 'X' && tiles[1].innerText === 'X' && tiles[2].innerText === 'X') || (tiles[3].innerText === 'X' && tiles[4].innerText === 'X' && tiles[5].innerText === 'X') || (tiles[6].innerText === 'X' && tiles[7].innerText === 'X' && tiles[8].innerText === 'X')) {
        console.log('cross wins!');
      } else if ((tiles[0].innerText === 'X' && tiles[3].innerText === 'X' && tiles[6].innerText === 'X') || (tiles[1].innerText === 'X' && tiles[4].innerText === 'X' && tiles[7].innerText === 'X') || (tiles[2].innerText === 'X' && tiles[5].innerText === 'X' && tiles[8].innerText === 'X')) {
        console.log('cross wins!');
      }
    }

    if (turnCount === 9) {
      console.log('its a tie!');
    } else {
      circleWinConditions();
      crossWinConditions();
    }
  }

  return { takeTurn };
})();

const gameBoard = ((turnFunction) => {
  const tiles = [];
  const container = document.querySelector('.container');
  const boardContainer = document.createElement('div');
  boardContainer.classList.add('gameBoardContainer');

  function createTiles() {
    for (let i = 0; i < 9; i += 1) {
      const tile = document.createElement('button');
      tiles.push(tile);
      tiles[i].setAttribute('data-index', i);
      tiles[i].setAttribute('used', false);
      tiles[i].addEventListener('click', () => { turnFunction(tiles[i], tiles); });
    }
    tiles.forEach((tile) => {
      boardContainer.append(tile);
    });

    container.append(boardContainer);
  }

  return { createTiles, tiles };
})(gameController.takeTurn);

const gameSetup = (() => {
  formButton = document.querySelector('#submit');
})();

// gameBoard.createTiles();
console.log('Hello');
