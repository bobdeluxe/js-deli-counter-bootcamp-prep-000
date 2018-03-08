var katzDeliLine = [];

function takeANumber(katzDeliLine,name) {
  return katzDeliLine.push(name).length+1
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length===0) {
    "There is noboby waiting to be served!"
  } else {
    return katzDeliLine.shift()
  }
}

function currentLine(katzDeliLine) {
  
}