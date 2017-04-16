export const pushStateApp = (x, y) => {
    const getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let randomFigure;
    if (Math.random() < 0.5) {
        const d = getRandomInt(30, 200);
        randomFigure = {
          borderRadius: "100px",
          width: d + "px",
          height: d + "px",
          backgroundColor: `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`,
          top: `${y - d / 2}px`,
          left: `${x - d / 2}px`
        }
      } else {
        const d = getRandomInt(20, 150);
        randomFigure = {
          width: d + "px",
          height: d + "px",
          backgroundColor: `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`,
          top: `${y - d / 2}px`,
          left: `${x - d / 2}px`
        }
    };
    return {
        type: 'ADD_FIGURE',
        item: { styles: randomFigure }
    }
}

export const pushStateFigure = (id) => ({
    type: 'DELETE_FIGURE',
    id: id
})