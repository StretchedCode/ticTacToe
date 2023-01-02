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
