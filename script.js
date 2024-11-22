//your JS code here. If required.
document.addEventListener(DOMContentLoaded, functon(){
	const squares = document .querySelectorAll('.square');
	squares.forEach(square => {
		square.addEventListener(mouseover, function()
								{
									square.style.backgroundColor = '#3498db';
								});
		square.addEventListener(mouseout, function(){
			setTimeout(()=>{
				squares.style.backgroundColor = '#eee';
			},1000);
		});
	});
});
	