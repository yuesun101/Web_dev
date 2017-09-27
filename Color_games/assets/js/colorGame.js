var pColor = document.querySelectorAll('.square');
var tColor = document.querySelector('#target');
var wColor = document.querySelector('body');
var sign = document.querySelector('#sign');
var H1 = document.querySelector('h1');
var refresh = document.querySelector('#refresh');
var easybtn = document.querySelector('#easybtn');
var hardbtn = document.querySelector('#hardbtn');
var numOfsquares = 6;

easybtn.addEventListener('click',function(){
	easybtn.classList.toggle('selected');
	hardbtn.classList.toggle('selected');
	numOfsquares = 3;
	color_initialize(numOfsquares);
	hardToeasy();
});

hardbtn.addEventListener('click',function(){
	easybtn.classList.toggle('selected');
	hardbtn.classList.toggle('selected');
	numOfsquares = 6;
	color_initialize(numOfsquares);
	easyTohard();
});


var colors = generateColor(numOfsquares);
tColor.textContent = pickColor();
givenColor();

refresh.addEventListener('click',function(){
	color_initialize(numOfsquares);
})


function givenColor(){
	for (var i = 0; i<pColor.length; i++){
		//Give color
		pColor[i].style.backgroundColor = colors[i];
		//Add event - click
		pColor[i].addEventListener('click',function(){
			var Color_now = this.style.backgroundColor;
			if (Color_now === tColor.textContent){
				sign.textContent = 'Correct!';
				refresh.textContent = 'PLAY AGAIN ?'
				changeColor(Color_now);
			}
			else{
				this.style.backgroundColor = '#232323';
				sign.textContent = 'Try Again!';
			}
		});
	};
};

function changeColor(color){
	for (var i=0; i<pColor.length;i++){
		pColor[i].style.backgroundColor = color;
	}
	H1.style.backgroundColor = color;
};

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random]
};

function RandomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return 'rgb('+String(r)+', '+String(g)+', '+String(b)+')'
}

function generateColor(num){
	var arr = []
	for (var i=0; i<num; i++){
		var RandomC = RandomColor();
		arr.push(RandomC);
	}
	return arr
}


function color_initialize(num){
	colors = generateColor(num);
	givenColor();
	tColor.textContent = pickColor();
	H1.style.backgroundColor = 'steelblue';
	refresh.textContent = 'NEW COLORS ?';
	sign.textContent = '';
};

function easyTohard(){
	for(var i = 3; i<pColor.length; i++){
		pColor[i].style.display = 'block';
	}
}

function hardToeasy(){
	for(var i = 3; i<pColor.length; i++){
		pColor[i].style.display = 'none';
	}
}






