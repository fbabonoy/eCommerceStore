import * as readline from "readline";

// Create readline interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Game state
let gameState = {
  currentRoom: "start",
  inventory: [],
  gameActive: true,
  victory: false,
  level: 1,
};

// Game map
const gameMap = {
  start: {
    description: "You are in a dark, cold room with two doors. One leads to the north and another to the east.",
    directions: {
      north: "library",
      east: "kitchen",
    },
  },
  library: {
    description: "You find yourself surrounded by shelves of ancient books. There is a door to the south.",
    directions: {
      south: "start",
    },
    item: "ancient book",
  },
  kitchen: {
    description: "A seemingly abandoned kitchen. There’s a door to the west and a strange, glowing portal that seems to lead nowhere.",
    directions: {
      west: "start",
      portal: "secretRoom",
    },
    item: "rusty key",
  },
  secretRoom: {
    description: "You step through the portal and enter a secret room filled with treasure.",
    directions: {
      portal: "kitchen",
    },
  },
};

// Function to show current location
function showLocation() {
  const location = gameMap[gameState.currentRoom];
  console.log(location.description);
  if (location.item) {
    console.log(`You see a ${location.item} here.`);
  }
}

// Function to move to a new location
function moveToNewLocation(newLocation) {
  const currentLocation = gameMap[gameState.currentRoom];
  if (currentLocation.directions[newLocation]) {
    gameState.currentRoom = currentLocation.directions[newLocation];
    showLocation();
  } else {
    console.log("You can't go that way.");
  }
}

// Function to start the game
function startGame() {
  console.log("Welcome to the Text Adventure Game!");
  showLocation();
  rl.on("line", (input) => {
    if (input === "quit") {
      gameState.gameActive = false;
      rl.close();
    } else if (input in gameMap[gameState.currentRoom].directions) {
      moveToNewLocation(input);
    } else {
      console.log("Invalid command.");
    }
  });
}

// Function to display the player's inventory
function showInventory() {
  if (gameState.inventory.length === 0) {
    console.log("Your inventory is empty.");
  } else {
    console.log("You have the following items in your inventory:");
    gameState.inventory.forEach((item) => console.log(`- ${item}`));
  }
}

// Function to save the game
function saveGame() {
  const gameData = JSON.stringify(gameState);
  console.log("Game saved successfully!", gameData);
}

// Mock combat system
function combat() {
  console.log("You engage in combat!");
  const win = Math.random() > 0.5;
  if (win) {
    console.log("You won the combat!");
    gameState.victory = true;
  } else {
    console.log("You lost the combat!");
  }
}

// Simple leveling system
function levelUp() {
  gameState.level += 1;
  console.log(`Congratulations! You've reached level ${gameState.level}`);
}

// Victory condition
function checkVictory() {
  if (gameState.victory) {
    console.log("Congratulations! You've achieved victory!");
    gameState.gameActive = false;
    rl.close();
  }
}

// Example usage
// Call these functions at appropriate places in the game logic
showInventory();
saveGame();
combat();
levelUp();
checkVictory();

// Initiate the game
startGame();




