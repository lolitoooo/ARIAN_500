// Add the navigation menu to the page
const navigationContainer = document.querySelector("#navigation");
navigationContainer.appendChild(generateNavigation());
function generateTrajectory(startX, startY, endX, endY) {
  const trajectory = [];

  // Calculate the distance between start and end points
  const distanceX = endX - startX;
  const distanceY = endY - startY;

  // Determine the number of steps based on the longer distance
  const steps = Math.max(Math.abs(distanceX), Math.abs(distanceY));

  // Calculate the step size for each axis
  const stepX = distanceX / steps;
  const stepY = distanceY / steps;

  // Generate the trajectory by adding each step
  for (let i = 0; i <= steps; i++) {
    const x = startX + stepX * i;
    const y = startY + stepY * i;
    trajectory.push({ x, y });
  }

  return trajectory;
}

// Example usage
const startX = 0;
const startY = 0;
const endX = 10;
const endY = 5;

const trajectory = generateTrajectory(startX, startY, endX, endY);
console.log(trajectory);
