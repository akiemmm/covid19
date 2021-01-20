'use strict'

function getJSONData (dataPath) {
	const request = new XMLHttpRequest();
	request.addEventListener('load', (e) => {
		let responseData = JSON.parse(e.target.responseText);
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
			const display = document.getElementById('display');
			display.insertAdjacentHTML('beforeend', (`
			<table>
			<thead>
			<tr>
				<th>日付</th>
				<th>人数</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<th>1/18</th>
				<td>${count18}人</td>
			</tr>
			<tr>
				<th>1/17</th>
				<td>${count17}人</td>
			</tr>
			<tr>
				<th>1/16</th>
				<td>${count16}人</td>
			</tr>
			<tr>
				<th>1/15</th>
				<td>${count15}人</td>
			</tr>
			<tr>
				<th>1/14</th>
				<td>${count14}人</td>
			</tr>
			<tr>
				<th>1/13</th>
			<td>${count13}人</td>
			</tr>
			<tr>
				<th>1/12</th>
				<td>${count12}人</td>
			</tr>
			<tr>
				<th>1/11</th>
				<td>${count11}人</td>
			</tr>
			<tr>
				<th>1/10</th>
				<td>${count10}人</td>
			</tr>
			<tr>
				<th>1/9</th>
				<td>${count09}人</td>
			</tr>
			<tr>
				<th>1/8</th>
				<td>${count08}人</td>
			</tr>
			<tr>
				<th>1/7</th>
				<td>${count07}人</td>
			</tr>
			<tr>
				<th>1/6</th>
				<td>${count06}人</td>
			</tr>
			<tr>
				<th>1/5</th>
				<td>${count05}人</td>
			</tr>
			<tr>
				<th>1/4</th>
				<td>${count04}人</td>
			</tr>
			<tr>
				<th>1/3</th>
				<td>${count03}人</td>
			</tr>
			<tr>
				<th>1/2</th>
				<td>${count02}人</td>
			</tr>
			<tr>
				<th>1/1</th>
				<td>${count01}人</td>
			</tr>
		</tbody>
		
			</table>
			`));

		});
	request.open('GET', dataPath, true);
	request.send();
}
getJSONData('./covid19.json');
