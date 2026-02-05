const birthdayCake = (candles) => {
  const tallest = Math.max(...candles)
  return candles.filter(candle => candle === tallest).length
}

console.log(birthdayCake([3, 2, 1, 3]))