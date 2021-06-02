const maze = [
    ["#", "#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", "+", "+", "+", "#", "+", "+", "+", "#"],
    ["#", "+", "#", "+", "#", "+", "#", "+", "#"],
    ["+", "+", "#", "+", "0", "+", "#", "+", "#"],
    ["#", "#", "#", "+", "#", "#", "#", "#", "#"],
    ["#", "#", "+", "+", "#", "#", "#", "#", "#"],
    ["#", "#", "+", "#", "#", "#", "#", "#", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#", "#"],
  ];
  
  const maze2 = [
    ["#", "#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", "+", "+", "+", "#", "+", "+", "+", "#"],
    ["#", "+", "#", "+", "#", "+", "#", "+", "#"],
    ["#", "#", "#", "+", "0", "+", "#", "+", "+"],
    ["#", "#", "#", "+", "#", "#", "#", "#", "#"],
    ["#", "#", "+", "+", "#", "#", "#", "#", "#"],
    ["#", "#", "+", "#", "#", "#", "#", "#", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#", "#"],
  ];
  
  const maze3 = [
    ["#", "#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", "+", "+", "+", "#", "+", "+", "+", "#"],
    ["#", "+", "#", "+", "#", "+", "#", "+", "#"],
    ["#", "#", "#", "+", "0", "+", "#", "+", "#"],
    ["#", "#", "#", "+", "#", "#", "#", "#", "#"],
    ["#", "#", "+", "+", "#", "#", "#", "#", "#"],
    ["#", "#", "+", "#", "#", "#", "#", "#", "#"],
    ["#", "#", "+", "#", "#", "#", "#", "#", "#"],
  ];
  
  const maze4 = [
    ["#", "#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", "+", "+", "+", "#", "+", "+", "+", "#"],
    ["#", "+", "#", "+", "#", "+", "#", "+", "#"],
    ["#", "#", "#", "+", "0", "+", "#", "+", "#"],
    ["#", "#", "#", "+", "#", "#", "#", "#", "#"],
    ["#", "#", "+", "+", "#", "#", "#", "#", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#", "#"],
  ];
  
  const getWay = (arr) => {
    const start = {};
    const steps = [];
  
    arr.forEach((row, idx) => {
      if (row.includes("0")) {
        start.x = row.indexOf("0");
        start.y = idx;
      }
    });
  
    return getStep(start, arr, steps) || "The maze has no exit";
  };
  
  const getStep = (start, arr, steps) => {
      // mark passed path
      arr[start.y][start.x] = "0";
      const siblings = getValidSibl(start, arr);
  
      if (siblings.length > 0) {
          for (let i = 0; i < siblings.length; i++) {
              const current = siblings[i];
  
              const isRight = current.x === arr[0].length - 1;
              const isLeft = current.x === 0;
              const isTop = current.y === 0;
              const isBottom = current.y === arr.length - 1;
  
              const isSolved = isRight || isLeft || isTop || isBottom;
  
              if (isSolved) {
                  //last step
                  if (isRight) steps.push("right");
                  if (isLeft) steps.push("left");
                  if (isTop) steps.push("top");
                  if (isBottom) steps.push("bottom");
  
                  return steps;
              } else {
                  const currentSteps = steps.slice();
  
                  // add step
                  if (current.x === start.x) {
                      if (current.y === start.y - 1) {
                          currentSteps.push("top");
                      } else currentSteps.push("bottom");
                  } else if (current.x === start.x - 1) {
                      currentSteps.push("left");
                  } else currentSteps.push("right");
                  
                  // recursive run until it return steps
                  const isFinish = getStep(current, arr, currentSteps);
                  if (isFinish) return isFinish;
              }
          }
      }
  };
  
  const getValidSibl = ({ x, y }, arr) => {
    let cords = [];
  
    if (arr[y - 1][x] === "+") {
      cords.push({ x, y: y - 1 });
    }
    if (arr[y][x + 1] === "+") {
      cords.push({ x: x + 1, y: y });
    }
    if (arr[y + 1][x] === "+") {
      cords.push({ x, y: y + 1 });
    }
    if (arr[y][x - 1] === "+") {
      cords.push({ x: x - 1, y });
    }
  
    return cords;
  };
  
  console.log(getWay(maze));
  console.log(getWay(maze2));
  console.log(getWay(maze3));
  console.log(getWay(maze4));
  