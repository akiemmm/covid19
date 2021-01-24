'use strict'
function getJSONData (dataPath) {
	const request = new XMLHttpRequest();
	request.addEventListener('load', (e) => {
		let responseData = JSON.parse(e.target.responseText);
		let count24 = 0;
		let count23 = 0;
		let count22 = 0;
		let count21 = 0;
		let count20 = 0;
		let count19 = 0;
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
		let count24_100 = 0;
		let count23_100 = 0;
		let count22_100 = 0;
		let count21_100 = 0;
		let count20_100 = 0;
		let count19_100 = 0;
		let count18_100 = 0;
		let count17_100 = 0;
		let count16_100 = 0;
		let count15_100 = 0;
		let count14_100 = 0;
		let count13_100 = 0;
		let count12_100 = 0;
		let count11_100 = 0;
		let count10_100 = 0;
		let count09_100 = 0;
		let count08_100 = 0;
		let count07_100 = 0;
		let count06_100 = 0;
		let count05_100 = 0;
		let count04_100 = 0;
		let count03_100 = 0;
		let count02_100 = 0;
		let count01_100 = 0;
		let count24_90 = 0;
		let count23_90 = 0;
		let count22_90 = 0;
		let count21_90 = 0;
		let count20_90 = 0;
		let count19_90 = 0;
		let count18_90 = 0;
		let count17_90 = 0;
		let count16_90 = 0;
		let count15_90 = 0;
		let count14_90 = 0;
		let count13_90 = 0;
		let count12_90 = 0;
		let count11_90 = 0;
		let count10_90 = 0;
		let count09_90 = 0;
		let count08_90 = 0;
		let count07_90 = 0;
		let count06_90 = 0;
		let count05_90 = 0;
		let count04_90 = 0;
		let count03_90 = 0;
		let count02_90 = 0;
		let count01_90 = 0;
		let count24_80 = 0;
		let count23_80 = 0;
		let count22_80 = 0;
		let count21_80 = 0;
		let count20_80 = 0;
		let count19_80 = 0;
		let count18_80 = 0;
		let count17_80 = 0;
		let count16_80 = 0;
		let count15_80 = 0;
		let count14_80 = 0;
		let count13_80 = 0;
		let count12_80 = 0;
		let count11_80 = 0;
		let count10_80 = 0;
		let count09_80 = 0;
		let count08_80 = 0;
		let count07_80 = 0;
		let count06_80 = 0;
		let count05_80 = 0;
		let count04_80 = 0;
		let count03_80 = 0;
		let count02_80 = 0;
		let count01_80 = 0;
		let count24_70 = 0;
		let count23_70 = 0;
		let count22_70 = 0;
		let count21_70 = 0;
		let count20_70 = 0;
		let count19_70 = 0;
		let count18_70 = 0;
		let count17_70 = 0;
		let count16_70 = 0;
		let count15_70 = 0;
		let count14_70 = 0;
		let count13_70 = 0;
		let count12_70 = 0;
		let count11_70 = 0;
		let count10_70 = 0;
		let count09_70 = 0;
		let count08_70 = 0;
		let count07_70 = 0;
		let count06_70 = 0;
		let count05_70 = 0;
		let count04_70 = 0;
		let count03_70 = 0;
		let count02_70 = 0;
		let count01_70 = 0;
		let count24_60 = 0;
		let count23_60 = 0;
		let count22_60 = 0;
		let count21_60 = 0;
		let count20_60 = 0;
		let count19_60 = 0;
		let count18_60 = 0;
		let count17_60 = 0;
		let count16_60 = 0;
		let count15_60 = 0;
		let count14_60 = 0;
		let count13_60 = 0;
		let count12_60 = 0;
		let count11_60 = 0;
		let count10_60 = 0;
		let count09_60 = 0;
		let count08_60 = 0;
		let count07_60 = 0;
		let count06_60 = 0;
		let count05_60 = 0;
		let count04_60 = 0;
		let count03_60 = 0;
		let count02_60 = 0;
		let count01_60 = 0;
		let count24_50 = 0;
		let count23_50 = 0;
		let count22_50 = 0;
		let count21_50 = 0;
		let count20_50 = 0;
		let count19_50 = 0;
		let count18_50 = 0;
		let count17_50 = 0;
		let count16_50 = 0;
		let count15_50 = 0;
		let count14_50 = 0;
		let count13_50 = 0;
		let count12_50 = 0;
		let count11_50 = 0;
		let count10_50 = 0;
		let count09_50 = 0;
		let count08_50 = 0;
		let count07_50 = 0;
		let count06_50 = 0;
		let count05_50 = 0;
		let count04_50 = 0;
		let count03_50 = 0;
		let count02_50 = 0;
		let count01_50 = 0;
		let count24_40 = 0;
		let count23_40 = 0;
		let count22_40 = 0;
		let count21_40 = 0;
		let count20_40 = 0;
		let count19_40 = 0;
		let count18_40 = 0;
		let count17_40 = 0;
		let count16_40 = 0;
		let count15_40 = 0;
		let count14_40 = 0;
		let count13_40 = 0;
		let count12_40 = 0;
		let count11_40 = 0;
		let count10_40 = 0;
		let count09_40 = 0;
		let count08_40 = 0;
		let count07_40 = 0;
		let count06_40 = 0;
		let count05_40 = 0;
		let count04_40 = 0;
		let count03_40 = 0;
		let count02_40 = 0;
		let count01_40 = 0;
		let count24_30 = 0;
		let count23_30 = 0;
		let count22_30 = 0;
		let count21_30 = 0;
		let count20_30 = 0;
		let count19_30 = 0;
		let count18_30 = 0;
		let count17_30 = 0;
		let count16_30 = 0;
		let count15_30 = 0;
		let count14_30 = 0;
		let count13_30 = 0;
		let count12_30 = 0;
		let count11_30 = 0;
		let count10_30 = 0;
		let count09_30 = 0;
		let count08_30 = 0;
		let count07_30 = 0;
		let count06_30 = 0;
		let count05_30 = 0;
		let count04_30 = 0;
		let count03_30 = 0;
		let count02_30 = 0;
		let count01_30 = 0;
		let count24_20 = 0;
		let count23_20 = 0;
		let count22_20 = 0;
		let count21_20 = 0;
		let count20_20 = 0;
		let count19_20 = 0;
		let count18_20 = 0;
		let count17_20 = 0;
		let count16_20 = 0;
		let count15_20 = 0;
		let count14_20 = 0;
		let count13_20 = 0;
		let count12_20 = 0;
		let count11_20 = 0;
		let count10_20 = 0;
		let count09_20 = 0;
		let count08_20 = 0;
		let count07_20 = 0;
		let count06_20 = 0;
		let count05_20 = 0;
		let count04_20 = 0;
		let count03_20 = 0;
		let count02_20 = 0;
		let count01_20 = 0;
		let count24_10 = 0;
		let count23_10 = 0;
		let count22_10 = 0;
		let count21_10 = 0;
		let count20_10 = 0;
		let count19_10 = 0;
		let count18_10 = 0;
		let count17_10 = 0;
		let count16_10 = 0;
		let count15_10 = 0;
		let count14_10 = 0;
		let count13_10 = 0;
		let count12_10 = 0;
		let count11_10 = 0;
		let count10_10 = 0;
		let count09_10 = 0;
		let count08_10 = 0;
		let count07_10 = 0;
		let count06_10 = 0;
		let count05_10 = 0;
		let count04_10 = 0;
		let count03_10 = 0;
		let count02_10 = 0;
		let count01_10 = 0;

		const days = responseData.map(objDays => objDays.判明日);
		const years = responseData.map(objYears => objYears.年代);
	
					for (let i = 0; i<days.length; i++){
				switch(days[i]){
					case "Sat Jan 23 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
						switch(years[i]){
							case "100歳代":
							count24_100++;
							break;
							case "90歳代":
							count24_90++;
							break;
							case "80歳代":
							count24_80++;
							break;
							case "70歳代":
							count24_70++;
							break;
							case "60歳代":
							count24_60++;
							break;
							case "50歳代":
							count24_50++;
							break;
							case "40歳代":
							count24_40++;
							break;
							case "30歳代":
							count24_30++;
							break;
							case "20歳代":
							count24_20++;
							break;
							default:
							count24_10++;
							break;		
				};
					count24++;
					break;
					case "Fri Jan 22 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
						switch(years[i]){
							case "100歳代":
							count23_100++;
							break;
							case "90歳代":
							count23_90++;
							break;
							case "80歳代":
							count23_80++;
							break;
							case "70歳代":
							count23_70++;
							break;
							case "60歳代":
							count23_60++;
							break;
							case "50歳代":
							count23_50++;
							break;
							case "40歳代":
							count23_40++;
							break;
							case "30歳代":
							count23_30++;
							break;
							case "20歳代":
							count23_20++;
							break;
							default:
							count23_10++;
							break;		
				};
					count23++;
					break;
					case "Thu Jan 21 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
						switch(years[i]){
							case "100歳代":
							count22_100++;
							break;
							case "90歳代":
							count22_90++;
							break;
							case "80歳代":
							count22_80++;
							break;
							case "70歳代":
							count22_70++;
							break;
							case "60歳代":
							count22_60++;
							break;
							case "50歳代":
							count22_50++;
							break;
							case "40歳代":
							count22_40++;
							break;
							case "30歳代":
							count22_30++;
							break;
							case "20歳代":
							count22_20++;
							break;
							default:
							count22_10++;
							break;		
				};
					count22++;
					break;
					case "Wed Jan 20 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
						switch(years[i]){
							case "100歳代":
							count21_100++;
							break;
							case "90歳代":
							count21_90++;
							break;
							case "80歳代":
							count21_80++;
							break;
							case "70歳代":
							count21_70++;
							break;
							case "60歳代":
							count21_60++;
							break;
							case "50歳代":
							count21_50++;
							break;
							case "40歳代":
							count21_40++;
							break;
							case "30歳代":
							count21_30++;
							break;
							case "20歳代":
							count21_20++;
							break;
							default:
							count21_10++;
							break;		
				};
					count21++;
					break;
					case "Tue Jan 19 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
						switch(years[i]){
							case "100歳代":
							count20_100++;
							break;
							case "90歳代":
							count20_90++;
							break;
							case "80歳代":
							count20_80++;
							break;
							case "70歳代":
							count20_70++;
							break;
							case "60歳代":
							count20_60++;
							break;
							case "50歳代":
							count20_50++;
							break;
							case "40歳代":
							count20_40++;
							break;
							case "30歳代":
							count20_30++;
							break;
							case "20歳代":
							count20_20++;
							break;
							default:
							count20_10++;
							break;		
				};
					count20++;
					break;
					case "Mon Jan 18 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
						switch(years[i]){
							case "100歳代":
							count19_100++;
							break;
							case "90歳代":
							count19_90++;
							break;
							case "80歳代":
							count19_80++;
							break;
							case "70歳代":
							count19_70++;
							break;
							case "60歳代":
							count19_60++;
							break;
							case "50歳代":
							count19_50++;
							break;
							case "40歳代":
							count19_40++;
							break;
							case "30歳代":
							count19_30++;
							break;
							case "20歳代":
							count19_20++;
							break;
							default:
							count19_10++;
							break;		
				};
					count19++;
					break;
					case "Sat Jan 16 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
						switch(years[i]){
							case "100歳代":
							count17_100++;
							break;
							case "90歳代":
							count17_90++;
							break;
							case "80歳代":
							count17_80++;
							break;
							case "70歳代":
							count17_70++;
							break;
							case "60歳代":
							count17_60++;
							break;
							case "50歳代":
							count17_50++;
							break;
							case "40歳代":
							count17_40++;
							break;
							case "30歳代":
							count17_30++;
							break;
							case "20歳代":
							count17_20++;
							break;
							default:
							count17_10++;
							break;		
						};
					count17++;
					break;
					case "Fri Jan 15 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
						switch(years[i]){
							case "100歳代":
							count16_100++;
							break;
							case "90歳代":
							count16_90++;
							break;
							case "80歳代":
							count16_80++;
							break;
							case "70歳代":
							count16_70++;
							break;
							case "60歳代":
							count16_60++;
							break;
							case "50歳代":
							count16_50++;
							break;
							case "40歳代":
							count16_40++;
							break;
							case "30歳代":
							count16_30++;
							break;
							case "20歳代":
							count16_20++;
							break;
							default:
							count16_10++;
							break;		
						};
					count16++;
					break;
					case "Thu Jan 14 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
						switch(years[i]){
							case "100歳代":
							count15_100++;
							break;
							case "90歳代":
							count15_90++;
							break;
							case "80歳代":
							count15_80++;
							break;
							case "70歳代":
							count15_70++;
							break;
							case "60歳代":
							count15_60++;
							break;
							case "50歳代":
							count15_50++;
							break;
							case "40歳代":
							count15_40++;
							break;
							case "30歳代":
							count15_30++;
							break;
							case "20歳代":
							count15_20++;
							break;
							default:
							count15_10++;
							break;		
						};
					count15++;
					break;
					case "Wed Jan 13 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
						switch(years[i]){
							case "100歳代":
							count14_100++;
							break;
							case "90歳代":
							count14_90++;
							break;
							case "80歳代":
							count14_80++;
							break;
							case "70歳代":
							count14_70++;
							break;
							case "60歳代":
							count14_60++;
							break;
							case "50歳代":
							count14_50++;
							break;
							case "40歳代":
							count14_40++;
							break;
							case "30歳代":
							count14_30++;
							break;
							case "20歳代":
							count14_20++;
							break;
							default:
							count14_10++;
							break;		
						};
					count14++;
					break;
					case "Tue Jan 12 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
						switch(years[i]){
							case "100歳代":
							count13_100++;
							break;
							case "90歳代":
							count13_90++;
							break;
							case "80歳代":
							count13_80++;
							break;
							case "70歳代":
							count13_70++;
							break;
							case "60歳代":
							count13_60++;
							break;
							case "50歳代":
							count13_50++;
							break;
							case "40歳代":
							count13_40++;
							break;
							case "30歳代":
							count13_30++;
							break;
							case "20歳代":
							count13_20++;
							break;
							default:
							count13_10++;
							break;		
						};
					count13++;
					break;
					case "Mon Jan 11 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
						switch(years[i]){
							case "100歳代":
							count12_100++;
							break;
							case "90歳代":
							count12_90++;
							break;
							case "80歳代":
							count12_80++;
							break;
							case "70歳代":
							count12_70++;
							break;
							case "60歳代":
							count12_60++;
							break;
							case "50歳代":
							count12_50++;
							break;
							case "40歳代":
							count12_40++;
							break;
							case "30歳代":
							count12_30++;
							break;
							case "20歳代":
							count12_20++;
							break;
							default:
							count12_10++;
							break;		
						};
					count12++;
					break;
					case "Sun Jan 10 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
						switch(years[i]){
							case "100歳代":
							count11_100++;
							break;
							case "90歳代":
							count11_90++;
							break;
							case "80歳代":
							count11_80++;
							break;
							case "70歳代":
							count11_70++;
							break;
							case "60歳代":
							count11_60++;
							break;
							case "50歳代":
							count11_50++;
							break;
							case "40歳代":
							count11_40++;
							break;
							case "30歳代":
							count11_30++;
							break;
							case "20歳代":
							count11_20++;
							break;
							default:
							count11_10++;
							break;		
						};
					count11++;
					break;
					case "Sat Jan 09 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
						switch(years[i]){
							case "100歳代":
							count10_100++;
							break;
							case "90歳代":
							count10_90++;
							break;
							case "80歳代":
							count10_80++;
							break;
							case "70歳代":
							count10_70++;
							break;
							case "60歳代":
							count10_60++;
							break;
							case "50歳代":
							count10_50++;
							break;
							case "40歳代":
							count10_40++;
							break;
							case "30歳代":
							count10_30++;
							break;
							case "20歳代":
							count10_20++;
							break;
							default:
							count10_10++;
							break;		
						};
					count10++;
					break;
					case "Fri Jan 08 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
						switch(years[i]){
							case "100歳代":
							count09_100++;
							break;
							case "90歳代":
							count09_90++;
							break;
							case "80歳代":
							count09_80++;
							break;
							case "70歳代":
							count09_70++;
							break;
							case "60歳代":
							count09_60++;
							break;
							case "50歳代":
							count09_50++;
							break;
							case "40歳代":
							count09_40++;
							break;
							case "30歳代":
							count09_30++;
							break;
							case "20歳代":
							count09_20++;
							break;
							default:
							count09_10++;
							break;		
						};
					count09++;
					break;
					case "Thu Jan 07 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
						switch(years[i]){
							case "100歳代":
							count08_100++;
							break;
							case "90歳代":
							count08_90++;
							break;
							case "80歳代":
							count08_80++;
							break;
							case "70歳代":
							count08_70++;
							break;
							case "60歳代":
							count08_60++;
							break;
							case "50歳代":
							count08_50++;
							break;
							case "40歳代":
							count08_40++;
							break;
							case "30歳代":
							count08_30++;
							break;
							case "20歳代":
							count08_20++;
							break;
							default:
							count08_10++;
							break;		
						};
					count08++;
					break;
					case "Wed Jan 06 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
						switch(years[i]){
							case "100歳代":
							count07_100++;
							break;
							case "90歳代":
							count07_90++;
							break;
							case "80歳代":
							count07_80++;
							break;
							case "70歳代":
							count07_70++;
							break;
							case "60歳代":
							count07_60++;
							break;
							case "50歳代":
							count07_50++;
							break;
							case "40歳代":
							count07_40++;
							break;
							case "30歳代":
							count07_30++;
							break;
							case "20歳代":
							count07_20++;
							break;
							default:
							count07_10++;
							break;		
						};
					count07++;
					break;
					case "Tue Jan 05 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
						switch(years[i]){
							case "100歳代":
							count06_100++;
							break;
							case "90歳代":
							count06_90++;
							break;
							case "80歳代":
							count06_80++;
							break;
							case "70歳代":
							count06_70++;
							break;
							case "60歳代":
							count06_60++;
							break;
							case "50歳代":
							count06_50++;
							break;
							case "40歳代":
							count06_40++;
							break;
							case "30歳代":
							count06_30++;
							break;
							case "20歳代":
							count06_20++;
							break;
							default:
							count06_10++;
							break;		
						};
					count06++;
					break;
					case "Mon Jan 04 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
						switch(years[i]){
							case "100歳代":
							count05_100++;
							break;
							case "90歳代":
							count05_90++;
							break;
							case "80歳代":
							count05_80++;
							break;
							case "70歳代":
							count05_70++;
							break;
							case "60歳代":
							count05_60++;
							break;
							case "50歳代":
							count05_50++;
							break;
							case "40歳代":
							count05_40++;
							break;
							case "30歳代":
							count05_30++;
							break;
							case "20歳代":
							count05_20++;
							break;
							default:
							count05_10++;
							break;		
						};
					count05++;
					break;
					case "Sun Jan 03 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
						switch(years[i]){
							case "100歳代":
							count04_100++;
							break;
							case "90歳代":
							count04_90++;
							break;
							case "80歳代":
							count04_80++;
							break;
							case "70歳代":
							count04_70++;
							break;
							case "60歳代":
							count04_60++;
							break;
							case "50歳代":
							count04_50++;
							break;
							case "40歳代":
							count04_40++;
							break;
							case "30歳代":
							count04_30++;
							break;
							case "20歳代":
							count04_20++;
							break;
							default:
							count04_10++;
							break;		
						};
					count04++;
					break;
					case "Sat Jan 02 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
						switch(years[i]){
							case "100歳代":
							count03_100++;
							break;
							case "90歳代":
							count03_90++;
							break;
							case "80歳代":
							count03_80++;
							break;
							case "70歳代":
							count03_70++;
							break;
							case "60歳代":
							count03_60++;
							break;
							case "50歳代":
							count03_50++;
							break;
							case "40歳代":
							count03_40++;
							break;
							case "30歳代":
							count03_30++;
							break;
							case "20歳代":
							count03_20++;
							break;
							default:
							count03_10++;
							break;		
						};
					count03++;
					break;
					case "Fri Jan 01 2021 10:00:00 GMT-0500 (アメリカ東部標準時)":
						switch(years[i]){
							case "100歳代":
							count02_100++;
							break;
							case "90歳代":
							count02_90++;
							break;
							case "80歳代":
							count02_80++;
							break;
							case "70歳代":
							count02_70++;
							break;
							case "60歳代":
							count02_60++;
							break;
							case "50歳代":
							count02_50++;
							break;
							case "40歳代":
							count02_40++;
							break;
							case "30歳代":
							count02_30++;
							break;
							case "20歳代":
							count02_20++;
							break;
							default:
							count02_10++;
							break;		
						};
					count02++;
					break;
					default:
						switch(years[i]){
							case "100歳代":
							count01_100++;
							break;
							case "90歳代":
							count01_90++;
							break;
							case "80歳代":
							count01_80++;
							break;
							case "70歳代":
							count01_70++;
							break;
							case "60歳代":
							count01_60++;
							break;
							case "50歳代":
							count01_50++;
							break;
							case "40歳代":
							count01_40++;
							break;
							case "30歳代":
							count01_30++;
							break;
							case "20歳代":
							count01_20++;
							break;
							default:
							count01_10++;
							break;		
						};
					count01++;
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
				<th>100歳代</th>
				<th>90歳代</th>
				<th>80歳代</th>
				<th>70歳代</th>
				<th>60歳代</th>
				<th>50歳代</th>
				<th>40歳代</th>
				<th>30歳代</th>
				<th>20歳代</th>
				<th>10歳代</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<th>1/18</th>
				<td>${count18}人</td>
				<td>${count18_100}人</td>
				<td>${count18_90}人</td>
				<td>${count18_80}人</td>
				<td>${count18_70}人</td>
				<td>${count18_60}人</td>
				<td>${count18_50}人</td>
				<td>${count18_40}人</td>
				<td>${count18_30}人</td>
				<td>${count18_20}人</td>
				<td>${count18_10}人</td>
			</tr>
			<tr>
				<th>1/17</th>
				<td>${count17}人</td>
				<td>${count17_100}人</td>
				<td>${count17_90}人</td>
				<td>${count17_80}人</td>
				<td>${count17_70}人</td>
				<td>${count17_60}人</td>
				<td>${count17_50}人</td>
				<td>${count17_40}人</td>
				<td>${count17_30}人</td>
				<td>${count17_20}人</td>
				<td>${count17_10}人</td>
			</tr>
			<tr>
				<th>1/16</th>
				<td>${count16}人</td>
				<td>${count16_100}人</td>
				<td>${count16_90}人</td>
				<td>${count16_80}人</td>
				<td>${count16_70}人</td>
				<td>${count16_60}人</td>
				<td>${count16_50}人</td>
				<td>${count16_40}人</td>
				<td>${count16_30}人</td>
				<td>${count16_20}人</td>
				<td>${count16_10}人</td>
			</tr>
			<tr>
				<th>1/15</th>
				<td>${count15}人</td>
				<td>${count15_100}人</td>
				<td>${count15_90}人</td>
				<td>${count15_80}人</td>
				<td>${count15_70}人</td>
				<td>${count15_60}人</td>
				<td>${count15_50}人</td>
				<td>${count15_40}人</td>
				<td>${count15_30}人</td>
				<td>${count15_20}人</td>
				<td>${count15_10}人</td>
			</tr>
			<tr>
				<th>1/14</th>
				<td>${count14}人</td>
				<td>${count14_100}人</td>
				<td>${count14_90}人</td>
				<td>${count14_80}人</td>
				<td>${count14_70}人</td>
				<td>${count14_60}人</td>
				<td>${count14_50}人</td>
				<td>${count14_40}人</td>
				<td>${count14_30}人</td>
				<td>${count14_20}人</td>
				<td>${count14_10}人</td>
			</tr>
			<tr>
				<th>1/13</th>
			<td>${count13}人</td>
			<td>${count13_100}人</td>
			<td>${count13_90}人</td>
			<td>${count13_80}人</td>
			<td>${count13_70}人</td>
			<td>${count13_60}人</td>
			<td>${count13_50}人</td>
			<td>${count13_40}人</td>
			<td>${count13_30}人</td>
			<td>${count13_20}人</td>
			<td>${count13_10}人</td>
			</tr>
			<tr>
				<th>1/12</th>
				<td>${count12}人</td>
				<td>${count12_100}人</td>
				<td>${count12_90}人</td>
				<td>${count12_80}人</td>
				<td>${count12_70}人</td>
				<td>${count12_60}人</td>
				<td>${count12_50}人</td>
				<td>${count12_40}人</td>
				<td>${count12_30}人</td>
				<td>${count12_20}人</td>
				<td>${count12_10}人</td>
			</tr>
			<tr>
				<th>1/11</th>
				<td>${count11}人</td>
				<td>${count11_100}人</td>
				<td>${count11_90}人</td>
				<td>${count11_80}人</td>
				<td>${count11_70}人</td>
				<td>${count11_60}人</td>
				<td>${count11_50}人</td>
				<td>${count11_40}人</td>
				<td>${count11_30}人</td>
				<td>${count11_20}人</td>
				<td>${count11_10}人</td>
			</tr>
			<tr>
				<th>1/10</th>
				<td>${count10}人</td>
				<td>${count10_100}人</td>
				<td>${count10_90}人</td>
				<td>${count10_80}人</td>
				<td>${count10_70}人</td>
				<td>${count10_60}人</td>
				<td>${count10_50}人</td>
				<td>${count10_40}人</td>
				<td>${count10_30}人</td>
				<td>${count10_20}人</td>
				<td>${count10_10}人</td>
			</tr>
			<tr>
				<th>1/9</th>
				<td>${count09}人</td>
				<td>${count09_100}人</td>
				<td>${count09_90}人</td>
				<td>${count09_80}人</td>
				<td>${count09_70}人</td>
				<td>${count09_60}人</td>
				<td>${count09_50}人</td>
				<td>${count09_40}人</td>
				<td>${count09_30}人</td>
				<td>${count09_20}人</td>
				<td>${count09_10}人</td>
			</tr>
			<tr>
				<th>1/8</th>
				<td>${count08}人</td>
				<td>${count08_100}人</td>
				<td>${count08_90}人</td>
				<td>${count08_80}人</td>
				<td>${count08_70}人</td>
				<td>${count08_60}人</td>
				<td>${count08_50}人</td>
				<td>${count08_40}人</td>
				<td>${count08_30}人</td>
				<td>${count08_20}人</td>
				<td>${count08_10}人</td>

			</tr>
			<tr>
				<th>1/7</th>
				<td>${count07}人</td>
				<td>${count07_100}人</td>
				<td>${count07_90}人</td>
				<td>${count07_80}人</td>
				<td>${count07_70}人</td>
				<td>${count07_60}人</td>
				<td>${count07_50}人</td>
				<td>${count07_40}人</td>
				<td>${count07_30}人</td>
				<td>${count07_20}人</td>
				<td>${count07_10}人</td>
			</tr>
			<tr>
				<th>1/6</th>
				<td>${count06}人</td>
				<td>${count06_100}人</td>
				<td>${count06_90}人</td>
				<td>${count06_80}人</td>
				<td>${count06_70}人</td>
				<td>${count06_60}人</td>
				<td>${count06_50}人</td>
				<td>${count06_40}人</td>
				<td>${count06_30}人</td>
				<td>${count06_20}人</td>
				<td>${count06_10}人</td>
			</tr>
			<tr>
				<th>1/5</th>
				<td>${count05}人</td>
				<td>${count05_100}人</td>
				<td>${count05_90}人</td>
				<td>${count05_80}人</td>
				<td>${count05_70}人</td>
				<td>${count05_60}人</td>
				<td>${count05_50}人</td>
				<td>${count05_40}人</td>
				<td>${count05_30}人</td>
				<td>${count05_20}人</td>
				<td>${count05_10}人</td>
			</tr>
			<tr>
				<th>1/4</th>
				<td>${count04}人</td>
				<td>${count04_100}人</td>
				<td>${count04_90}人</td>
				<td>${count04_80}人</td>
				<td>${count04_70}人</td>
				<td>${count04_60}人</td>
				<td>${count04_50}人</td>
				<td>${count04_40}人</td>
				<td>${count04_30}人</td>
				<td>${count04_20}人</td>
				<td>${count04_10}人</td>
			</tr>
			<tr>
				<th>1/3</th>
				<td>${count03}人</td>
				<td>${count03_100}人</td>
				<td>${count03_90}人</td>
				<td>${count03_80}人</td>
				<td>${count03_70}人</td>
				<td>${count03_60}人</td>
				<td>${count03_50}人</td>
				<td>${count03_40}人</td>
				<td>${count03_30}人</td>
				<td>${count03_20}人</td>
				<td>${count03_10}人</td>
			</tr>
			<tr>
				<th>1/2</th>
				<td>${count02}人</td>
				<td>${count02_100}人</td>
				<td>${count02_90}人</td>
				<td>${count02_80}人</td>
				<td>${count02_70}人</td>
				<td>${count02_60}人</td>
				<td>${count02_50}人</td>
				<td>${count02_40}人</td>
				<td>${count02_30}人</td>
				<td>${count02_20}人</td>
				<td>${count02_10}人</td>
			</tr>
			<tr>
				<th>1/1</th>
				<td>${count01}人</td>
				<td>${count01_100}人</td>
				<td>${count01_90}人</td>
				<td>${count01_80}人</td>
				<td>${count01_70}人</td>
				<td>${count01_60}人</td>
				<td>${count01_50}人</td>
				<td>${count01_40}人</td>
				<td>${count01_30}人</td>
				<td>${count01_20}人</td>
				<td>${count01_10}人</td>
			</tr>
		</tbody>
			</table>
			`));

		});
	request.open('GET', dataPath, true);
	request.send();
}
getJSONData('./covid19.json');
