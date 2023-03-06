var container = document.getElementById("array");
 
// Function to generate the array of blocks
function generatearray() {
 
  // Creating an array
  var arr = [];
 
  // Filling array with random values
  for (var i = 0; i < 20; i++) {
    // Return a value from 1 to 100 (both inclusive)
    var val = Number(Math.ceil(Math.random() * 100));
    arr.push(val);
  }
 
  // Sorting Array in ascending order
  arr.sort(function (a, b) {
    return a - b;
  });
 
  for (var i = 0; i < 20; i++) {
    var value = arr[i];
 
    // Creating element div
    var array_ele = document.createElement("div");
 
    // Adding class 'block' to div
    array_ele.classList.add("block");
 
    // Adding style to div
    array_ele.style.height = `${value * 3}px`;
    array_ele.style.transform = `translate(${i * 30}px)`;
 
    // Creating label element for displaying
    // size of particular block
    var array_ele_label = document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerText = value;
 
    // Appending created elements to index.html
    array_ele.appendChild(array_ele_label);
    container.appendChild(array_ele);
  }
}

async function BinarySearch(delay = 300) {
    
	var blocks = document.querySelectorAll(".block");
	var output = document.getElementById("text");
   
	//Extracting the value of the element to be searched
	var num = document.getElementById("fname").value;
   
	//Colouring all the blocks violet
	for (var i = 0; i < blocks.length; i += 1) {
	  blocks[i].style.backgroundColor = "#FF1493";
	}
   
	output.innerText = "";
   
	// BinarySearch Algorithm
   
	var start = 0;
	var end = 19;
	var flag = 0;
	while (start <= end) {
	  //Middle index
	  var mid = Math.floor((start + end) / 2);
	  blocks[mid].style.backgroundColor = "FF4949";
   
	  //Value at mid index
	  var value = Number(blocks[mid].childNodes[0].innerHTML);
   
	  // To wait for .1 sec
	  await new Promise((resolve) =>
		setTimeout(() => {
		  resolve();
		}, delay)
	  );
   
	  //Current element is equal to the element
	  //entered by the user
	  if (value == num) {
		alert("ELEMENT FOUND!");
		blocks[mid].style.backgroundColor = "#13CE66";
		flag = 1;
		break;
	  }
	  //Current element is greater than the element
	  //entered by the user
	  if (value > num) {
		end = mid - 1;
		blocks[mid].style.backgroundColor = "#FF4949";
	  } else {
		start = mid + 1;
		blocks[mid].style.backgroundColor = "#FF4949";
	  }
	}
	if (flag === 0) {
        alert("ELEMENT NOT FOUND BRO!");
	}
  }








async function TernarySearch(delay = 700) {
    var blocks = document.querySelectorAll(".block");
    var output = document.getElementById("text");
  
    // Extracting the value entered by the user
    var num = document.getElementById("fname").value;
  
    // Colouring all the blocks violet
    for (var i = 0; i < blocks.length; i += 1) {
        blocks[i].style.backgroundColor = "#FF1493";
    }
  
    output.innerText = "";
  
    // TernarySearch Algorithm
    var start = 0;
    var end = 19;
    var flag = 0;
    while (start <= end) {
        var mid1 = Math.floor(start + (end - start) / 3);
        var mid2 = Math.floor(end - (end - start) / 3);
  
        // Extracting values of mid1 and mid2 blocks
        var value1 = Number(blocks[mid1].childNodes[0].innerHTML);
        var value2 = Number(blocks[mid2].childNodes[0].innerHTML);
  
        // Changing color to red
        blocks[mid1].style.backgroundColor = "#FF4949";
        blocks[mid2].style.backgroundColor = "#FF4949";
  
        // To wait for .1 sec
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );
  
        // Number entered by the user equals to
        // element at mid1
        if (value1 == num) {
            alert("Element Found") ;
            blocks[mid1].style.backgroundColor = "#13CE66";
            flag = 1;
            break;
        }
  
        // Number entered by the user equals to
        // element at mid2
        if (value2 == num) {
            alert("ELEMENT FOUND!");
            blocks[mid2].style.backgroundColor = "#FF4949";
            flag = 1;
            break;
        }
  
        if (num < value1) {
            end = mid1 - 1;
        } else if (num > value2) {
            start = mid2 + 1;
        } else {
            start = mid1 + 1;
            end = mid2 - 1;
        }
    }
  
    if (flag === 0) {
        alert("ELEMENT NOT FOUND BRO!");
    }
}


generatearray();


