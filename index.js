function takeANumber(katzDeliLine,name) {
  return katzDeliLine.push(name).length+1
}

function nowServing() {
  if(katzDeli.length===0) {
    "There is noboby waiting to be served!"
  } else {
    return katzDeli.shift()
  }
}