function chooseComputer() {
	
	const comp = Math.random();

	if( comp < 0.34 ) return 'elephant';
	if(comp >= 0.34 && comp < 0.67) return 'man';
	return 'ant';

}

function rulesGame(comp, player) {
	
	if( player == comp ) return 'DRAW!';
	if( player == 'elephant') return ( comp == 'man' ) ? 'WIN!' : 'LOSE!';
	if( player == 'man') return ( comp == 'elephant') ? 'LOSE!' : 'WIN!';
	if( player == 'ant') return ( comp == 'man') ? 'LOSE!' : 'WIN!';

}

function twist() {
	const imgComputer = document.querySelector('.img-computer');
	const pictures = ['elephant', 'ant', 'man'];
	let i = 0;
	const timeStart = new Date().getTime();
	setInterval(function() {
		if( new Date().getTime() - timeStart > 1000 ) {
			clearInterval;
		}
		imgComputer.setAttribute('src', 'img/' + pictures[i++] + '.jpg');
		if(i == pictures.length) i = 0;
	}, 100);
}


const choose = document.querySelectorAll('li img');
choose.forEach(function(i) {
	i.addEventListener('click', function() {
		const pilihanKomputer = chooseComputer();
		const pilihanPlayer = i.className;
		const result = rulesGame(pilihanKomputer, pilihanPlayer);

		twist();

		setTimeout(function() {
			const imgComputer = document.querySelector('.img-computer');
			imgComputer.setAttribute('src', 'img/' + pilihanKomputer + '.jpg');
			const infoResult = document.querySelector('.info');
			infoResult.innerHTML = result;
		}, 1000);
		
	});
});






// const pElephant = document.querySelector('.elephant');
// pElephant.addEventListener('click', function() {
// 	const pilihanKomputer = chooseComputer();
// 	const pilihanPlayer = pElephant.className;
// 	const result = rulesGame(pilihanKomputer, pilihanPlayer);

// 	const imgComputer = document.querySelector('.img-computer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanKomputer + '.jpg');
// 	const infoResult = document.querySelector('.info');
// 	infoResult.innerHTML = result;
// });

// const pMan = document.querySelector('.man');
// pMan.addEventListener('click', function() {
// 	const pilihanKomputer = chooseComputer();
// 	const pilihanPlayer = pMan.className;
// 	const result = rulesGame(pilihanKomputer, pilihanPlayer);

// 	const imgComputer = document.querySelector('.img-computer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanKomputer + '.jpg');
// 	const infoResult = document.querySelector('.info');
// 	infoResult.innerHTML = result;
// });

// const pAnt = document.querySelector('.ant');
// pAnt.addEventListener('click', function() {
// 	const pilihanKomputer = chooseComputer();
// 	const pilihanPlayer = pAnt.className;
// 	const result = rulesGame(pilihanKomputer, pilihanPlayer);

// 	const imgComputer = document.querySelector('.img-computer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanKomputer + '.jpg');
// 	const infoResult = document.querySelector('.info');
// 	infoResult.innerHTML = result;
// });