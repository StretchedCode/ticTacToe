const gameBoard = (() => {
  const tiles = [];
  const boardContainer = document.querySelector('.gameBoardContainer');

  function createTiles() {
    for (let i = 0; i < 9; i += 1) {
      const tile = document.createElement('div');
      tile.setAttribute('data-index', i);
    }
  }
})();
