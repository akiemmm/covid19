'use strict'

function getJSONData (dataPath) {
	const request = new XMLHttpRequest();
	request.addEventListener('load', (e) => {
		let responseData = JSON.parse(e.target.responseText);
		const show = document.getElementById('show');
		let count18 = 0;
		let count17 = 0;
		let count16 = 0;
		let count15 = 0;
		let count14 = 0;
		let count13 = 0;
		let count12 = 0;
		let count11 = 0;
		let count10 = 0;
		let count09 = 0;
		let count08 = 0;
		let count07 = 0;
		let count06 = 0;
		let count05 = 0;
		let count04 = 0;
		let count03 = 0;
		let count02 = 0;
		let count01 = 0;
		let count00 = 0;

		const jsonObjValues = responseData.map(obj => obj.判明日);
	
					for (let i = 0; i<jsonObjValues.length; i++){
				switch(jsonObjValues[i]){
					case "Sun Jan 17 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
					count18++;
					break;
					case "Sat Jan 16 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
					count17++;
					break;
					case "Fri Jan 15 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
					count16++;
					break;
					case "Thu Jan 14 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
					count15++;
					break;
					case "Wed Jan 13 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
					count14++;
					break;
					case "Tue Jan 12 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
					count13++;
					break;
					case "Mon Jan 11 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
					count12++;
					break;
					case "Sun Jan 10 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
					count11++;
					break;
					case "Sat Jan 09 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
					count10++;
					break;
					case "Fri Jan 08 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
					count09++;
					break;
					case "Thu Jan 07 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
					count08++;
					break;
					case "Wed Jan 06 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
					count07++;
					break;
					case "Tue Jan 05 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
					count06++;
					break;
					case "Mon Jan 04 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
					count05++;
					break;
					case "Sun Jan 03 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
					count04++;
					break;
					case "Sat Jan 02 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
					count03++;
					break;
					case "Fri Jan 01 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
					count02++;
					break;
					case "Thu Dec 31 2020 10:00:00 GMT-0500 (アメリカ東部標準時)":
					count01++;
					break;
					default:
					count00++;
					break;
				}

			};
			const showCount18 =document.getElementById('showCount18');
			const showCount17 =document.getElementById('showCount17');
			const showCount16 =document.getElementById('showCount16');
			const showCount15 =document.getElementById('showCount15');
			const showCount14 =document.getElementById('showCount14');
			const showCount13 =document.getElementById('showCount13');
			const showCount12 =document.getElementById('showCount12');
			const showCount11 =document.getElementById('showCount11');
			const showCount10 =document.getElementById('showCount10');
			const showCount09 =document.getElementById('showCount09');
			const showCount08 =document.getElementById('showCount08');
			const showCount07 =document.getElementById('showCount07');
			const showCount06 =document.getElementById('showCount06');
			const showCount05 =document.getElementById('showCount05');
			const showCount04 =document.getElementById('showCount04');
			const showCount03 =document.getElementById('showCount03');
			const showCount02 =document.getElementById('showCount02');
			const showCount01 =document.getElementById('showCount01');
			showCount18.textContent = count18 + '人';
			showCount17.textContent = count17+ '人';
			showCount16.textContent = count16+ '人';
			showCount15.textContent = count15 + '人';
			showCount14.textContent = count14+ '人';
			showCount13.textContent = count13+ '人';
			showCount12.textContent = count12 + '人';
			showCount11.textContent = count11 +'人';
			showCount10.textContent = count10 +'人';
			showCount09.textContent = count09 + '人';
			showCount08.textContent = count08 + '人';
			showCount07.textContent = count07 + '人';
			showCount06.textContent = count06 + '人';
			showCount05.textContent = count05 + '人';
			showCount04.textContent = count04 + '人';
			showCount03.textContent = count03 + '人';
			showCount02.textContent = count02 + '人';
			showCount01.textContent = count01 + '人';
		});
	request.open('GET', dataPath, true);
	request.send();
}
getJSONData('./covid19.json');
