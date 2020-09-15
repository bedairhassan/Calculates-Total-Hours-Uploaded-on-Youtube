// allow pasting
// array = document.getElementsByClassName('label style-scope ytcp-thumbnail')
// let timestamps=[]
// for (const q of array){ timestamps.push(q.firstChild.data) }
// export timestamps


// Step 1 : Copy Object
let q = [
    "\n            6:41\n          ",
    "\n            12:16\n          ",
    "\n            3:14\n          ",
    "\n            2:51\n          ",
    "\n            9:34\n          ",
    "\n            2:51\n          ",
    "\n            3:14\n          ",
    "\n            12:16\n          ",
    "\n            6:41\n          ",
    "\n            9:34\n          ",
    "\n            17:04\n          ",
    "\n            6:14\n          ",
    "\n            0:21\n          ",
    "\n            1:38:40\n          ",
    "\n            1:25\n          ",
    "\n            12:42\n          ",
    "\n            47:23\n          ",
    "\n            1:22\n          ",
    "\n            0:11\n          ",
    "\n            49:04\n          ",
    "\n            3:33\n          ",
    "\n            35:23\n          ",
    "\n            5:22\n          ",
    "\n            0:50\n          ",
    "\n            1:54\n          ",
    "\n            37:47\n          ",
    "\n            3:14\n          ",
    "\n            3:14\n          ",
    "\n            1:07\n          ",
    "\n            8:48\n          ",
    "\n            1:56\n          ",
    "\n            4:34\n          ",
    "\n            2:01\n          "
  ]

// Step 2 : Trim
q=q.map(item=>item.trim())

// Step 3 : Gather all hours, minutes, seconds
let hours=[],minutes=[],seconds=[]
q.map(item=>{

  let array = item.split(':')
  let count = array.length

  let hour=0,minute=0,second=0
  if(count==3){

    hour = parseInt(array[0])
    minute = parseInt(array[1])
    second = parseInt(array[2])
  }else{
    minute=parseInt(array[0])
    second=parseInt(array[1])
  }

  if(hour!=0){
    hours.push(hour)
  }

  minutes.push(minute)
  seconds.push(second)
})

// Step 4 : findSum Function
let findSum = array=>{

  let ret=0
  for (const q of array){
    ret+=q
  }
  return ret
}

// Step 5 : Calculate Sum of Each Array
hours = findSum(hours)
minutes = findSum(minutes)
seconds = findSum(seconds)

// Step 6 : Minutes and Seconds to Hours
hours = hours + minutes/60 + (seconds/60)/60

// Step 7 : Conversion Stage
minutes = (hours-parseInt(hours))*60
seconds = (minutes-parseInt(minutes))*60

// Step 8 : Printing Stage
console.log('hours: ',parseInt(hours))
console.log('minutes: ',parseInt(minutes))
console.log('seconds: ',parseInt(seconds))
