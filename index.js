// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42; // Assuming Scuber's HQ is at 42nd street
    
    // Calculate absolute distance from 42nd street
    return Math.abs(someValue - hqLocation);
  }
  
  function distanceFromHqInFeet(someValue) {
    // Get the distance in blocks from the HQ
    const blocks = distanceFromHqInBlocks(someValue);
    
    // Convert blocks to feet (264 feet per block)
    return blocks * 264;
  }
  

  function distanceTravelledInFeet(start, destination) {
const blockDifference = Math.abs(destination - start);
return blockDifference * 264;
  }

  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    }
    if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    }
    if (distance > 2000 && distance <= 2500) {
        return 25;
    }
    return 'cannot travel that far';
  }
