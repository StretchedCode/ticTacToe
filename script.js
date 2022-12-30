const gameBoard = (() => {
  const tiles = [];
  const boardContainer = document.querySelector('.gameBoardContainer');

  function createTiles() {
    for (let i = 0; i < 9; i += 1) {
      const tile = document.createElement('button');
      tile.setAttribute('data-index', i);
      tile.innerText = 'X';
      tiles.push(tile);
    }
    tiles.forEach((tile) => {
      boardContainer.append(tile);
    });
  }

  return { createTiles, tiles };
})();

const displayController = ((board) => {
  function test() {
    console.log('placeholder');
  }
})(gameBoard.tiles);

const gameController = ((board, playerOne, playerTwo) => {
  let turns = 0;

  if (turns % 2 === 0) {

  } else {

  }

  turns += 1;
})();

gameBoard.createTiles();
