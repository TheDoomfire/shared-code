//import zxcvbn from 'zxcvbn';
//const zxcvbn = require('zxcvbn');

//const { Chart } = require("react-chartjs-2");
// import myJson from './data/market-closed.json' assert {type: 'json'};

const us_inflation_json = "/data/us-inflation.json"
const historical_json = "/data/sp500-index-historical-annual-data.json";

let myChart;
//Made from this tutorial:

// https://www.youtube.com/watch?v=flItyHiDm7E&t=22s
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-nav");
const header = document.querySelector(".main-header");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    header.classList.toggle("active");
});

document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

//Only for the compound calculator
//Could be better to move this so it dosent run for every page
/* Window.onload = compounding();
Window.onload = roiCalc(); */


function removeElements(theId, amountToRemove) {
  const parent = document.querySelector(`#${theId}`);
  [...parent.children].slice((-1)*parseFloat(amountToRemove)).forEach(parent.removeChild.bind(parent));
}


window.addEventListener('load', (event) => { // Load on website startup

  if (document.getElementById("run-roiCalc")) {
    roiCalc();
  };

  if (document.getElementById("run-compundingCalc")) {
    coumpound_rate();
    //compounding();
  };

  if (document.getElementById("run-index-time-machine")) {
    
    yearMarkdown(historical_json); // Set the markdown in html
    index_time_machine()
    create_table(historical_json, "index-table")
    //historical_compounding_calculator(); // Have to have "1980" instead of just 1980. So strings not ints.
  };

  if (document.getElementById("run-stockMarketDownToday")) { // Not working??
    stockMarketDownToday("hej");
  };

  if (document.getElementById("form-debt-repayment")) { 
    calculateRepayment();
  };

  if (document.getElementById("form-present-value")) {
    calculate_present_value_form();
  };

  if (document.getElementById("form-gross-profit-margin-form")) {
    calculate_gross_profit_form();
  };

  if (document.getElementById("loan-form")) {
    calculateLoan();
  };

  if (document.getElementById("form-future-value")) {
    calculate_future_value();
  };

  if (document.getElementById("fire-form")) {
    fire_calc();
  };

  if (document.getElementById("form-fee-comparison")) {
    fee_calculator();
  };

  if (document.getElementById("net-worth-calculator")) {
    addInputFieldsToID("form-assets", "addButtonAssets");
    addInputFieldsToID("form-liabilities", "addButtonLiabilities");
  };

  if (document.getElementById("form-emergency-fund")) {
    calc_emergency_fund();
  };

  if (document.getElementById("form-real-estate-commission")) {
    calculate_real_estate_commission()
  };

  if (document.getElementById("form-cost-of-debt")) {
    form_calc_cost_of_debt();
  };

  if (document.getElementById("form-margin-interest")) {
    form_calculate_margin_interest();
  };

  if (document.getElementById("form-house-flip")) {
    form_house_flipping();
  };

  if (document.getElementById("form-amortization-schedule")) {
    form_amortization_schedule();
  };

  if (document.getElementById("form-cd-ladder")) {
    form_cd_ladder();
  };

  if (document.getElementById("form-savings-goal")) {
    form_savings_goal();
    /* formatInputFields(); */
  };

  if (document.getElementById("generate-diceware-password")) {
    generate_diceware_password(8);
  };

  if (document.getElementById("generate-advanced-password")) {
    form_generate_advanced_password()
  };

  if (document.getElementById("form-savings-withdrawal")) {
    form_savings_withdrawal();
  };

  if (document.getElementById("form-transaction-fee")) {
    calculateTransactionFee();
  };

  if (document.getElementById("switch-discount")) {
    const selectArray = getSelectValues("switch-discount");
    switchForms("switch-discount", selectArray);
  };

  if (document.getElementById("portfolio-beta-table")) {
    document.getElementById("portfolio-beta-table").addEventListener("input", function() {
      check_last_row_for_input_changes("portfolio-beta-table");
      displayCount('table-body', 'span');
    });
  };

  if (document.getElementById("asset-allocation-form")) {
    const allocationComponent = createAllocationComponent(
      ['input1', 'input2', 'input3'],
      ['range1', 'range2', 'range3']
    );

    calculateAllocation();
    
    allocationComponent.updateFromInputs();
    allocationComponent.updateFromRanges();
  }

  

  if (document.getElementById("inflation-calc-form")) {
    add_to_inflation_select(us_inflation_json);

    // historical_json
    table_with_year(us_inflation_json);
    //create_table(us_inflation_json, "us-inflation-table");
    //displayData(us_inflation_json);
    setTimeout(function() { // Lol have to set a timeout for it to run on startup.
      inflation_calc();
    }, 100);

/*     if (document.getElementById("hellothere")) {
      console.log("Rule")
      link_input_fields()
    };
 */
  };

  if (document.getElementById("run-test")) { // Test
    coumpound_rate()
  }
/*   if (document.getElementById("run-dcaCalc")) {
    var dcaInput = 2;
  }; */
});

/* roiCalc() */

// Trying to get the aria-expanded to toggle.
/* let el = document.getElementById('hamburger');
console.log(el.ariaExpanded); // false
el.ariaExpanded = "false";
console.log(el.ariaExpanded); // true */


//Trying to store current stock price.
/* let citycon = 6.94;
let cityconDividend = 0.5;
let cityconDividendYield = (cityconDividend / citycon) * 100 ;
let cityconAmountOfShares = 168008940;
let cityconEpraNav2020 = 2011800000;

let cityconNavDiscount = 1 - (citycon / ( cityconEpraNav2020 / cityconAmountOfShares ));

document.getElementById("citycon").innerHTML = citycon; // ERRORHERE */

//Share Button
const shareButton = document.querySelector('.sharethis');
const overlay = document.querySelector('.overlay-fullscreen');
const shareModal = document.querySelector('.share');

const title = window.document.title;
const url = window.document.location.href;

// Dont know what it is???
/* shareButton.addEventListener('click', () => {

  if (navigator.share) {
    navigator.share({
      title: `${title}`,
      url: `${url}`
    }).then(() => {
      //console.log('Thanks for sharing!');
    }).catch(console.error);
  } else {
    overlay.classList.add("show-share");
    shareModal.classList.add("show-share");
  }
}); */

// Dont know what it does
/* overlay.addEventListener('click', () => {
  overlay.classList.remove('show-share');
  shareModal.classList.remove('show-share');
});
 */
// jQuery and Underscore.js are dependencies
// Code from:
// https://codepen.io/j_holtslander/pen/dwrWOx
var pageWidth, pageHeight;
var basePage = {
  width: 826,
  height: 1066,
  scale: 1,
  scaleX: 1,
  scaleY: 1
};

// Dont know???
/* $(function(){
  var $page = $('.google-doc');
  getPageSize();
  scalePages($page, pageWidth, pageHeight);
  //using underscore to delay resize method till finished resizing window
  $(window).resize(_.debounce(function () {
    getPageSize();            
    scalePages($page, pageWidth, pageHeight);
  }, 150));
function getPageSize() {
  pageHeight = $('#google-doc-container').height();
  pageWidth = $('#google-doc-container').width();
}
function scalePages(page, maxWidth, maxHeight) {            
  var scaleX = 1, scaleY = 1;                      
  scaleX = maxWidth / basePage.width;
  scaleY = maxHeight / basePage.height;
  basePage.scaleX = scaleX;
  basePage.scaleY = scaleY;
  basePage.scale = (scaleX > scaleY) ? scaleY : scaleX;
  var newLeftPos = Math.abs(Math.floor(((basePage.width * basePage.scale) - maxWidth)/2));
  var newTopPos = Math.abs(Math.floor(((basePage.height * basePage.scale) - maxHeight)/2));
  page.attr('style', '-webkit-transform:scale(' + basePage.scale + ');left:' + newLeftPos + 'px;top:' + newTopPos + 'px;');
}
}); */

//Trying to save data for use in nunjucks template
/* var nunjucks = require('nunjucks');
nunjucks.render(
  'components/show-movies.njk', {
    movies: [
    {
      title: "hello",
      year: "2001"
    },
    {
      title: "hello2",
      year: "2002"
    }
    ]
  }
) */

var items = [{ title: "foo", id: 1 }, { title: "bar", id: 2}];


function separateNumber(x) {
  removeDecimals(x)
  return removedDecimals.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

// TODO:
// Let 2 decimals in?
function removeDecimals(x) {
  //return removedDecimals = Math.trunc(x)
  if (x % 1 === 0) { // If .00 removes it.
    return removedDecimals = parseInt(x);
  } else if (x >= 1000){ // Removes the decimals if the number is bigger than this.
    return removedDecimals = Math.trunc(x);
  } else {
    removedDecimals =  Math.round(x);
    return removedDecimals = x.toFixed(2)
  }
};


function dcfCalc() {
  let cashFlow = parseFloat(document.getElementById('DCFcashflow').value)
  let discountRate = parseFloat(document.getElementById('DCFdiscountrate').value)
  let years = parseFloat(document.getElementById('DCFyears').value)

/*   for (let i = 1; i <= years; i++) {
    dcf = Math.round(discountRate) + 
  }; */
};


function getDecimalPart(num) {

  if (Number.isInteger(num)) {
    return 0;
  }

  const decimalStr = num.toString().split('.')[1];
  theNumber = Number(decimalStr) / 10
  return theNumber;

};


function compounding() {
  let inputCapital = parseFloat(document.getElementById('capital').value); // parseInt wont take decimals. So parseFloat is better.
  let inputSavings = parseFloat(document.getElementById('savings').value);
  let inputYears = parseFloat(document.getElementById('years').value);
  let inputReturns = parseFloat(document.getElementById('returns').value);
  let tableBody = document.getElementById('tableData');

  document.getElementById("totalYears").innerHTML = inputYears


  // Checks if its null. If no one has put a value into the input
  if (isNaN(inputSavings) == true){
    inputSavings = 0
  }
  if (isNaN(inputCapital) == true){
    inputCapital = 0
  }
/*   if (isNaN(inputYears) == true){
    inputYears = 0
  }
  if (isNaN(inputReturns) == true){
    inputReturns = 0
  } */



  var yearList = [];
  var compoundList = [];
  var capital_list = [];
  var none_compound_list = [];

  tableBody.innerHTML = "";


  // TODO
  // Make decimal work with years AND/OR add input for months.
  // Add this:
  // Add 1 for every year, but for the last year. Add the getDecimalPart(inputYears)

  // <= Less than or equal to.
  // i <= inputYears; i++


  for (let i = 1; i <= inputYears; i++) { // TODO: Make decimals work with years. let i = 1; i <= inputYears; i++
    compoundValue = Math.round((inputCapital) * Math.pow(inputReturns/100+1, i)) + (inputSavings*12) * (Math.pow(inputReturns/100+1, i) - 1)/(inputReturns/100);

    yearList.push(i + " y");
    compoundList.push(removeDecimals(compoundValue));

    tableBody.innerHTML += `<tr><td>${i}&nbsp;Year</td><td type="number">$${separateNumber(compoundValue)}</td></tr>`;

  };

  document.getElementById("totalCompound").innerHTML = "$" + separateNumber(compoundValue);
  document.getElementById("totalSavings").innerHTML = "$" + separateNumber(inputCapital + inputSavings * 12 * inputYears);
  document.getElementById("totalReturn").innerHTML = "$" + separateNumber(compoundValue - (inputCapital + inputSavings * 12 * inputYears));
  myCustomChart("Compund Rate","line", yearList,compoundList);

};

// Get problems using this. Wont work dynamic...
function input_to_currency(id) {
  var input = document.getElementById(id);
  var originalValue = parseFloat(input.value);
  var formattedValue = parseFloat(input.value).toLocaleString("en-US", {style: "currency", currency: "USD"});

  input.value = formattedValue;
  input.addEventListener("input", function() { // Dosent allow for anything other than numbers.
      if (!/^\d+$/.test(input.value)) {
          input.value = input.value.replace(/[^0-9]/g, "");
      }
    });
  input.value = input.value.replace(/\.00$/, ""); // Removes .00 after numbers.

  return originalValue;
}


function roiCalc() {
  let inputStartingCapitalROI = parseFloat(document.getElementById('startingCapitalROI').value);
  let inputEndCapitalROI = parseFloat(document.getElementById('endCapitalROI').value);
  let inputTimeInvestedROI = parseFloat(document.getElementById('timeInvestedROI').value);

  myLolData = []
  myLablesLoL = ['Profit', 'Invested Capital']

  profitROI = inputEndCapitalROI - inputStartingCapitalROI
  returnOnInvestment = (((inputEndCapitalROI - inputStartingCapitalROI) / inputStartingCapitalROI) * 100)
  averageAnnualROI = (returnOnInvestment / inputTimeInvestedROI)
  averageAnnualCompoundROI = ((Math.pow((inputEndCapitalROI / inputStartingCapitalROI), 1 / inputTimeInvestedROI) - 1) * 100)
  myLolData.push(profitROI)
  myLolData.push(inputStartingCapitalROI)

  document.getElementById("totalYearsROI").innerHTML = inputTimeInvestedROI;
  document.getElementById("totalReturnROI").innerHTML = parseFloat(returnOnInvestment.toFixed(2)) + " %";
  document.getElementById("averageAnnualROI").innerHTML = parseFloat(averageAnnualROI.toFixed(2)) + " %";
  document.getElementById("averageAnnualCompoundROI").innerHTML = parseFloat(averageAnnualCompoundROI.toFixed(2)) + " %";
  
  myCustomAwesomeChart("ROI" ,"pie", myLablesLoL, myLolData);
}


function myCustomChart(chartInputLabel, chartType, chartLabels, chartDataset) {
  const myChartData = {
    labels: chartLabels,
    datasets: [{
      label: chartInputLabel,
      backgroundColor: '#006100',
      borderColor: '#3c3c3c',
      pointBackgroundColor: '#111111',
      data: chartDataset,
    }]
  };

  const chartConfig = {
    type: chartType,
    data: myChartData,
    options: {
      legend: {
        display: false //Removes the Label.
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItems, data) {
            return "$" + tooltipItems.yLabel.toString();
          }
        }
      }
    }
  };

  if (myChart) {
    // If a chart instance already exists, update its data and options
    myChart.data = myChartData;
    myChart.options = chartConfig.options;
    myChart.update();
  } else {
    // Otherwise, create a new chart instance
    myChart = new Chart(document.getElementById('myChart'), chartConfig);
  }
};



/* function myCustomAwesomeChart(chartInputLabel, chartType, chartLabels, chartDataset) {

  const myChartData = {
    labels: chartLabels,
    datasets: [{
      label: chartInputLabel,
      backgroundColor: ['#006600', 'rgb(0, 56, 101)', 'rgb(239, 91, 12)', 'rgb(212, 246, 204)'],
      borderColor: 'rgb(253,254,254)',
      data: chartDataset,
    }]
  };

  
  const chartConfig = {
    type: chartType,
    data: myChartData,
    options: {
      legend: {
        display: true // true/false Removes the Label. 
      },
      plugins: {
        labels: {
          render: 'percentage'
        }
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) { // It works!!
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
              return previousValue + currentValue;
            });
            var currentValue = dataset.data[tooltipItem.index];
            var percentage = Math.floor(((currentValue/total) * 100)+0.5);
            var label = data.labels[tooltipItem.index];
            var value = dataset.data[tooltipItem.index];
            return label + ': ' + "$" + separateNumber(value) + ' (' + percentage + '%)';
          }
        }
      }
    }
  };
  
  
    // "$" + separateNumber(value)

  const myChart = new Chart(
    document.getElementById('myChart'),
    chartConfig
  );

};
 */



function myCustomAwesomeChart(chartInputLabel, chartType, chartLabels, chartDataset) {

  const myChartData = {
    labels: chartLabels,
    datasets: [{
      label: chartInputLabel,
      backgroundColor: ['#006600', 'rgb(0, 56, 101)', 'rgb(239, 91, 12)', 'rgb(212, 246, 204)'],
      borderColor: 'rgb(253,254,254)',
      data: chartDataset,
    }]
  };

  const chartConfig = {
    type: chartType,
    data: myChartData,
    options: {
      legend: {
        display: true // true/false Removes the Label. 
      },
      plugins: {
        labels: {
          render: 'percentage'
        }
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) { // It works!!
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
              return previousValue + currentValue;
            });
            var currentValue = dataset.data[tooltipItem.index];
            var percentage = Math.floor(((currentValue/total) * 100)+0.5);
            var label = data.labels[tooltipItem.index];
            var value = dataset.data[tooltipItem.index];
            return label + ': ' + "$" + separateNumber(value) + ' (' + percentage + '%)';
          }
        }
      }
    }
  };

  if (myChart) {
    // If a chart instance already exists, update its data and options
    myChart.data = myChartData;
    myChart.options = chartConfig.options;
    myChart.update();
  } else {
    // Otherwise, create a new chart instance
    myChart = new Chart(document.getElementById('myChart'), chartConfig);
  }
};




function dcaCalc(x, y) {
  //const allShares = document.querySelector(`[id^="share"]`);
  //alert("Hello! I am an alert box!!");
  let amountOfShares = parseFloat(document.getElementById(`amountOfShares${y}`).value);
  let averageBuyPrice = parseFloat(document.getElementById(`averageBuyPrice${y}`).value);
  let totalCost = parseFloat(document.getElementById(`totalCost${y}`).value);

  total = averageBuyPrice * amountOfShares;
  buy = totalCost / amountOfShares;

  
  if (x == "share" && totalCost < 1) {
    document.getElementById(`totalCost${y}`).value = total;
  };
  if (x == "buy") {
    document.getElementById(`totalCost${y}`).value = total;
  };
  if (x == "total") {
    document.getElementById(`averageBuyPrice${y}`).value = buy;
  };

  allTotal = document.querySelectorAll('[id^="totalCost"]');
  for (const i of allTotal.values()) {
    if (typeof realTotal !== 'undefined') {
      realTotal = parseFloat(realTotal) + parseFloat(i.value)
    } else if (isNaN(i.value)) {
      realTotal + 0
    } else {
      var realTotal = i.value;
    };
  };

  allShares = document.querySelectorAll('[id^="amountOfShares"]');
  allBuyPrice = document.querySelectorAll('[id^="averageBuyPrice"]');

  for (const i of allShares.values()) {
    if (typeof allTotalShares !== 'undefined') {
      allTotalShares = parseFloat(allTotalShares) + parseFloat(i.value)
      arrayShares.push(i.value)
    } else {
      var allTotalShares = i.value;
      var arrayShares = [i.value]
    };
  };

  for (const i of allBuyPrice.values()) {
    if (typeof arrayBuy !== 'undefined') {
      arrayBuy.push(i.value)
      howManyBuys.push(count++ + " Time")
    } else {
      var arrayBuy = [i.value]
      var howManyBuys = ["Initial Investment"]
      var count = 1
    };
  };

  totalAvgBuy = realTotal / allTotalShares;
  
  document.getElementById("totalPrice").innerHTML = parseFloat(realTotal.toFixed(2));
  document.getElementById("totalShares").innerHTML = parseFloat(allTotalShares.toFixed(2));
  document.getElementById("totalAvgBuy").innerHTML = parseFloat(totalAvgBuy.toFixed(2));
  /* document.getElementById("hej").innerHTML = document.getElementById("totalCost").value + document.getElementById(`totalCost${y}`).value; */
  //myCustomAwesomeChart("DCA" ,"line", howManyBuys, arrayBuy);
  myCustomChart("DCA" ,"line", howManyBuys, arrayBuy);
};


function dcaCalcButton() {
  const mysection = document.createElement('section');
  mysection.className = 'form-small';

  if (typeof dcaInput !== 'undefined') {
    window.dcaInput = dcaInput + 1;
  } else {
    window.dcaInput = 2; // Window makes the variable global. So it wont just work inside the function()
  };

  mysection.innerHTML = `
  <div>
    <label>Shares</label>
    <input class="small-input" type="number" placeholder="0" id="amountOfShares${dcaInput}" onkeyup="dcaCalc('share',${dcaInput})">
  </div>
  <div>
    <label>Avg Buy</label>
    <input class="small-input" type="number" placeholder="$0" id="averageBuyPrice${dcaInput}" onkeyup="dcaCalc('buy',${dcaInput})">
  </div>
  <div>
    <label>Total Cost</label>
    <input class="small-input" type="number" placeholder="$0" id="totalCost${dcaInput}" onkeyup="dcaCalc('total',${dcaInput})">
  </div>
  `;

  document.getElementById('containdca').appendChild(mysection);
};


function intDaysToStrDays(theDay) {
  if (theDay === 0) {
    return "Sunday"
  } else if (theDay === 1) {
    return "Monday"
  } else if (theDay === 2) {
    return "Tuesday"
  } else if (theDay === 3) {
    return "Wednesday"
  } else if  (theDay === 4) {
    return "Thursday"
  } else if (theDay === 5) {
    return "Friday"
  } else if (theDay === 6) {
    return "Saturday"
  }
};


function intMonthToStrMonth(month) {
  if (month === 0) {
    return "January";
  } else if (month === 1) {
    return "February";
  } else if (month === 2) {
    return "March";
  } else if (month === 3) {
    return "April";
  } else if (month === 4) {
    return "May";
  } else if (month === 5) {
    return "June";
  } else if (month === 6) {
    return "July";
  } else if (month === 7) {
    return "August";
  } else if (month === 8) {
    return "September";
  } else if (month === 9) {
    return "October";
  } else if (month === 10) {
    return "November";
  } else if (month === 11) {
    return "December";
  }
  return;
}


// From: https://gist.github.com/johndyer/0dffbdd98c2046f41180c051f378f343
// https://www.tondering.dk/claus/cal/easter.php
function getEaster(year) {
	var f = Math.floor,
		// Golden Number - 1
		G = year % 19,
		C = f(year / 100),
		// related to Epact
		H = (C - f(C / 4) - f((8 * C + 13)/25) + 19 * G + 15) % 30,
		// number of days from 21 March to the Paschal full moon
		I = H - f(H/28) * (1 - f(29/(H + 1)) * f((21-G)/11)),
		// weekday for the Paschal full moon
		J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,
		// number of days from 21 March to the Sunday on or before the Paschal full moon
		L = I - J,
		the_month = 3 + f((L + 40)/44),
		day = L + 28 - 31 * f(the_month / 4);

	return year + "-"+ the_month + "-" + day; 
};


function getFriday(date) { // NOT DONE, need to change date and make it work.
  let currentDateObj = new Date(date);
  currentDateObj.setDate(currentDateObj.getDate() - (currentDateObj.getDay() + 2) % 7);
  const year = currentDateObj.getFullYear();
  const month = currentDateObj.getMonth() + 1;
  const full_day = currentDateObj.getDate();
  let full_date = year + "-" + month + "-" + full_day;
  return full_date;
};


//Not Tried Yet.
//
function getNextMonday(date) {
  const date_object = new Date(date)
  const dateCopy = new Date(date_object.getTime());

  const nextMonday = new Date(
    dateCopy.setDate(
      dateCopy.getDate() + ((7 - dateCopy.getDay() + 1) % 7 || 7),
    ),
  );

  return nextMonday.getDate();
}


function checkIfWorkDay(date) {
  let currentDateObj = new Date(date);
  let day = currentDateObj.getDay();
  if ( day == 0 || day == 6){
    return false;
  } else {
    return true;
  };
};


// Not Tested
// https://www.irt.org/articles/js050/
function NthDay(nth,weekday,month,year) {
  if (nth > 0) return (nth-1)*7 + 1 + (7 + weekday - DayOfWeek((nth-1)*7 + 1,month,year))%7;
  if (LeapYear(year)) var days = daysofmonthLY[month];
  else                var days = daysofmonth[month];
  return days - (DayOfWeek(days,month,year) - weekday + 7)%7;
};


// Need to paste in date.
// This is the fucking error...
function getAllMondays(date) {
  var d = new Date(date); // This was the error. Had to ad this one...
      month = d.getMonth(),
      mondays = [];

  d.setDate(1);

  // Get the first Monday in the month
  while (d.getDay() !== 1) {
      d.setDate(d.getDate() + 1);
  }

  // Get all the other Mondays in the month
  while (d.getMonth() === month) {
    mondays.push(d.getDate());
    d.setDate(d.getDate() + 7);
  }

  return mondays;
};


// d = date
// day = 0-6 (sun-saturday)
// NOT WORKING
function getAllDaysInDay(date, day) {
    d = new Date(date)
    month = d.getMonth(),
    mondays = [];

  d.setDate(1);

  // Get the first Monday in the month
  while (d.getDay() !== day) {
    d.setDate(d.getDate() + 1);
  }

  // Get all the other Mondays in the month
  while (d.getMonth() === month) {
  mondays.push(d.getDate());
  d.setDate(d.getDate() + 7);
  }

  return mondays;
};


/*   // Get all the other Mondays in the month
  while (d.getMonth() === month) {
    mondays.push(new Date(d.getTime()));
    d.setDate(d.getDate() + 7);
} */


/* function getFirstMonday(date) {
  Date firstMonday = Date.today().toStartOfMonth().toStartOfWeek().addDays(1);    
  //add a week if "firstMonday" is in last month    
  if(firstMonday < date.today().toStartOfmonth()) firstMonday = firstMonday.addDays(7);
  Date thirdMonday = firstMonday.addDays(14);
}; */



// NOT DONE OR ANYTHING YET
// For adding to table.
function addToHolidayArray(searchCompany, searchStatement, year, quarterData) {
  const currentCompany = companyData.find(({company}) => company === searchCompany) //Look 
  if (currentCompany) {
      const statementItem = currentCompany.statements[searchStatement]
      if (!statementItem) {
          currentCompany.statements = { ...currentCompany.statements, ...companyList }; // Adds to the companyData array inside of statements.
          return;
      }
      if (!statementItem[year]) {
          statementItem[year] = []
      }
      statementItem[year].push(quarterData)
  }
};


function getHoliday(date, country){
  const month = date.getMonth(); // Why +1? Since it seems to start with 0. so dates are 0-11 Instead of 1-12
  const year = date.getFullYear(); // getYear returns weird. Better with getFullYear()
  const day_now = date.getDate();
  // TEST
  //console.log("lol: ", date)
  const today_date = year + "-" + month + "-" + day_now;
  const today_date_extra = year + "-" + (month +1) + "-" + day_now;
  // ERROR! The (date) gets setback because of getAllMondays() SOMETIMES! Dont know why. Dont use date after this.
  const all_mondays = getAllMondays(date);
  const last_monday = all_mondays[all_mondays.length - 1]
  const all_thursdays = getAllDaysInDay(today_date_extra, 4)


  if (country == "usa") {
    //TODO:
    // Only on sunday falls on 2:nd.
    // Saturday dosent matter.??
    // Dosent work right. Only 3 (2024, 2025, 2026) Works.
    // 2022 - saturday 2023 - sunday
    // Maybe if on saturday then return nothing.
    var new_years = year +"-"+ 1 +"-" + 1;
    if (month == 0 && day_now == 1 && checkIfWorkDay(today_date_extra) == true) {
      //console.log(date, month, day_now)
      return "New Years Day";
    } else if(month == 0 && day_now == getNextMonday(new_years) && checkIfWorkDay(new_years) == false) {
      return "New Years Day";
    };

    if (month == 0 && day_now == all_mondays[2]){ // Maybe works now?
       // Martin Luther King Jr. Day = Third Monday in January
      return "Martin Luther King, Jr. Day";
    };

    if (month == 1 && day_now == all_mondays[2]) {
      // Presidents Day = Third Monday of February
      return "Presidents Day";
    };

    // ERROR:
    // Weird, displays wrong month.
    // But right day...
    if (today_date_extra == getFriday(getEaster(year))) {
      // Friday BEFORE easter.
      return "Good Friday";
    }

    if (month == 4 && day_now == last_monday) {
      // Memorial day = Last monday in may
      return "Memorial Day";
    }


    // ERROR:
    // 2022 should close on the 20th
    // 2024 19
    var juneteeth_holiday = year + "-" + 6 + "-" + 19;
    if (month == 5 && day_now == 19 && checkIfWorkDay(today_date_extra) == true) {  // Fixed Holiday
      // Maybe add if weekend THEN monday = closed.
      return "Juneteenth Holiday";
    } else if (month == 5 && day_now == getNextMonday(juneteeth_holiday) && checkIfWorkDay(juneteeth_holiday) == false) {
      return "Juneteenth Holiday"; 
    }

    var independence_day = year + "-" + 7 + "-" + 4;
    if (month == 6 && day_now == 4 && checkIfWorkDay(today_date_extra) == true) { // Fixed Holiday
      // Maybe add if weekend THEN monday = closed.
      return "Independence Day";
    } else if (month == 6 && day_now == getNextMonday(independence_day) && checkIfWorkDay(independence_day) == false) {
      return "Independence Day";
    };

    if (month == 8 && day_now == all_mondays[0]) {
      // First Monday
      return "Labour Day";
    }

    if (month == 10 && day_now == all_thursdays[3]) {
      // Thanksgiving = 4th Thursday in November
      return "Thanksgiving Day";
    };

    var day_after_thanksgiving = all_thursdays[3] + 1; // - but + ??
    var date_after_thanksgiving = year + "-" + month + "-" + day_after_thanksgiving;
    if (month == 10 && day_now == day_after_thanksgiving && checkIfWorkDay(date_after_thanksgiving) == true) {
      // Day After Thanksgiving
      // Black firday??
      return "Early Close";
    };

    var christmas_day = year + "-" + 12 + "-" + 25; // Need this to check for the next christmas
    if (month == 11 && day_now == 25 && checkIfWorkDay(today_date_extra) == true) { // Fixed hoilyday?
      return "Christmas Holiday";
    } else if (month == 11 && day_now == getNextMonday(christmas_day) && checkIfWorkDay(christmas_day) == false) {
      return "Christmas Holiday";
    }

    // ADD THIS:
    // If for example christmas (or any other federal holiday)
    // Is on a saturday or sunday (not work day)
    // THEN stock market is closed on Monday instead.
    // https://www.nyse.com/markets/hours-calendars
    };

    return; // Returns nothing.

  };



function stockMarketDownToday(id) {
  const theDate = new Date();
  const month = theDate.getMonth() + 1; // Not sure why I have to add +1...
  const day = theDate.getDay(); // Day of the week 0-6
  const dayOfMonth = theDate.getDate(); // The actual date day
  const hours = theDate.getHours();
  const minutes = theDate.getMinutes();
  const theTime = hours + ":" + minutes;
  var today = month + "-" + dayOfMonth;
  var totalMinutes = hours * 60 + minutes
  

/*   var date_us = new Date(usTime)
  var us_time_hours = date_us.getHours() */
  //var usHours = usTime.getHours()
  // https://www.techighness.com/post/get-user-country-and-region-on-browser-with-javascript-only/
  const country = Intl.DateTimeFormat().resolvedOptions().timeZone; // Get the country "Europe/Stockholm", "Asia/Karachi". Need to get a list of all time zones.

  fetch("/data/market-closed.json").then((response) => response.json()).then((json) =>
  {

    // TODO
    // Check if country found in the JSON.
    // If not undefined "aka found" Then use it, Else "US"
    // Dropdown menu for choosing right STOCK_MARKET
    // Print out the market name.
    // Check day. Print "CLOSED. Stock market is down at DAY"
    // Check Time. Print "CLOSED. Stock market is open between TIME-TIME"
    // Check Holiday and holiday_time. Print "CLOSED. Stock Market is closed due to HOLIDAY"
    // Else if holiday exist but time is still closed. Print (Market WAS closed today due to HOLIDAY)
    // Else print "OPENED. Stock market should be up right now"


    /*   TODO:
      Add more contries!!
      https://en.wikipedia.org/wiki/List_of_countries_by_stock_market_capitalization 
    */


    let found = json.find(({ market }) => market === "usa"); // Works

    // Check country
    const lookingForCountry = json.find(({ market }) => market === country); // Works
    if (lookingForCountry === true) { // If another country is found. Incase I add more to the JSON
        let found = lookingForCountry;
    };

    // Load the timezone
    const market_date_str = new Date().toLocaleString('en-US', { timeZone: found.timezone });
    const market_date = new Date(market_date_str);
    // const time_zone = market_date_str.split(' '); // Not done
    const market_date_month = market_date.getMonth() + 1; // Months are 0-11, thats why +1.
    const market_date_month_day = market_date.getDate(); // The exact day example: 27.
    const market_date_day = market_date.getDay();
    const market_date_hours = market_date.getHours();
    const market_date_minutes = market_date.getMinutes();
    const market_date_today = market_date_month + "-" + market_date_month_day;
    const market_date_minutes_total = market_date_hours * 60 + market_date_minutes;
/*     const market_date_hours = market_date.getMonth()
    console.log(market_date_hours) */
/*     const test_date = new Date(2025, 6, 4);
    console.log(test_date)
    console.log(getHoliday(test_date, "usa")); */

    //getHoliday(market_date, found.market)

    // TEST
/*     console.log(market_date_str)
    console.log(market_date) */
    const lookingForHoliday = found.holidays.find(({ name }) => name === getHoliday(market_date, found.market)); // Works
    const dayFound = found.days.find(({element}) => element === market_date_day)

    // Open Time
    var open_time_hour = 0;
    var open_time_minutes = 0;
    if (typeof found.open_time === "string" || found.open_time instanceof String) {
      var splitted_open_time = found.open_time.split(":");
      var open_time_hour = parseInt(splitted_open_time[0]);
      var open_time_minutes = parseInt(splitted_open_time[1]);

    } else {
      var open_time_hour = found.open_time
      var open_time_minutes = 0
    }
    var open_time_total = open_time_hour * 60 + open_time_minutes


    // Closing Time
    var closing_time_hour = 0;
    var closing_time_minutes = 0;
    if (typeof found.closing_time === "string" || found.open_time instanceof String) {
      var splitted_closing_time = found.closing_time.split(":");
      var closing_time_hour = parseInt(splitted_closing_time[0]);
      var closing_time_minutes = parseInt(splitted_closing_time[1]);
    } else {
      var closing_time_hour = found.closing_time;
      var closing_time_minutes = 0;
    }
    var close_time_total = closing_time_hour * 60 + closing_time_minutes


    var reasonsForMarketClose = [];
    var stock_market_open = true;
    if (found.days.includes(market_date_day) === false) { // Open on day = FALSE
          var stock_market_open = false;
          reasonsForMarketClose.push("The market is never opened on " + intDaysToStrDays(market_date_day))
          //console.log(day)
      };
      

    if (market_date_minutes_total < open_time_total) { // Open Time = FALSE
          var stock_market_open = false;
          reasonsForMarketClose.push("Market never opens before: " + found.open_time)
      };

    
    if (market_date_minutes_total > close_time_total) { // Close Time = FALSE
          var stock_market_open = false;
          reasonsForMarketClose.push("Market Closes after: " + found.closing_time)
      };

    if (lookingForHoliday) { // If there is a holiday today.
        var stock_market_open = false;
        reasonsForMarketClose.push("Todays is: " + lookingForHoliday.name); // Should add a strong tag.
      };


    var MarketClosedHTML = document.getElementById("MarketClosedOrOpen")
    if (stock_market_open == true) {
      MarketClosedHTML.innerHTML = "Opened"; // Adds text.
      MarketClosedHTML.classList.add("color-special"); // Adds a class.
      MarketClosedHTML.classList.add("font-big");
    } else {
      MarketClosedHTML.innerHTML = "Closed";
      MarketClosedHTML.classList.add("color-red");
      MarketClosedHTML.classList.add("font-big");
    }

    document.getElementById("market-name").innerHTML = found.market_name;

    
    let stockMarketCloseList = document.getElementById("reasonsForMarketClose");
    reasonsForMarketClose.forEach((reason) => {
      let li = document.createElement("li");
      li.innerText = reason;
      stockMarketCloseList.appendChild(li);
    })

  }
  );


  // TODO:
  // Push to array with : Holiday, years: {year, date}
  // If getHoliday(d) returns a value then look for it inside of the Array.
  // If holiday is found

  function getAllMarketHolidays(country) {
    var now = new Date();
    var year = now.getFullYear()
    var toDay = (year + 4) + "-" + 12 + "-" + 31; // End Date
    var lastDate = new Date(toDay);
    var allHolidaysPerYear = [];
    const market_tableHeaders = ["Holidays", year, year+1, year+2, year+3, year+4];


    var allDates = []
    var allHolidays = []
    var all_holidays_data = []
    var d = new Date(year, 0, 1);
    for (var d = new Date(d); d <= lastDate; d.setDate(d.getDate() + 1)) {

      //var newDate = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate()
      allDates.push(d)
      const d_year = d.getFullYear()
      const holidayName = getHoliday(d, country);
      const formatted_date = intDaysToStrDays(d.getDay()) + ", " + intMonthToStrMonth(d.getMonth()) + " " + d.getDate();
      const yearAndDate = {[d_year]:formatted_date};
      if(typeof holidayName !== "undefined")
      {
        // Look for return value (holiday name) inside of array.
        // If found push it to "years"
        // Otherwise push the entire string.

        // Adds if it dosent already exist.
        if (!allHolidays.includes(holidayName)) {
          allHolidays.push(holidayName);

          var object = {holiday: holidayName, years: [yearAndDate]}
          all_holidays_data.push(object);
        } else {
          const foundHoliday = all_holidays_data.find(({holiday}) => holiday === holidayName); //Look for it
          if (foundHoliday) {
            foundHoliday.years.push(yearAndDate)
          }
        }

      } 
    };

      // Sets tale header
      const table = document.getElementById("stockMarketDownTodayTable");
      var row = table.insertRow();
      market_tableHeaders.forEach(item => {
        var cell1 =  row.insertCell();
        //cell1.innerHTML = item;
        cell1.outerHTML = '<th>' + item + "</th>"
      });

      // Table Body?
      all_holidays_data.forEach(item => {
        var row = table.insertRow();

        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();
        var cell5 = row.insertCell();
        var cell6 = row.insertCell();
        var cell7 = row.insertCell();

        //cell2.innerHTML = item.holiday;
        //cell3.innerHTML = item.years[0][market_tableHeaders[1]];
        // Added data-label to make it responsive in css.
        cell2.outerHTML = '<td data-label="Holidays">' + item.holiday + "</td>"
        cell3.outerHTML = `<td data-label=${market_tableHeaders[1]}>` + item.years[0][market_tableHeaders[1]] + "</td>"
        cell4.outerHTML = `<td data-label=${market_tableHeaders[2]}>` + item.years[1][market_tableHeaders[2]] + "</td>"
        cell5.outerHTML = `<td data-label=${market_tableHeaders[3]}>` + item.years[2][market_tableHeaders[3]] + "</td>"
        cell6.outerHTML = `<td data-label=${market_tableHeaders[4]}>` + item.years[3][market_tableHeaders[4]] + "</td>"
        cell7.outerHTML = `<td data-label=${market_tableHeaders[5]}>` + item.years[4][market_tableHeaders[5]] + "</td>"
      });

      // Displays in the header.
      const years_to_display = document.getElementById("years-market-close");
      years_to_display.innerHTML = "(" + market_tableHeaders[1] + "-" + market_tableHeaders[5] + ")";

  };

  getAllMarketHolidays("usa")

};


function yearMarkdown(the_json) {
  fetch(the_json)
  .then(response => response.json())
  .then(data => {


    data.forEach(function(item) {
      var option = document.createElement("option");
      //option.value = item["Year"];
      option.textContent = item["Year"];
      if (item["Year"] == "2000") { //Sets it as the default.
        option.selected = true;
      }
      document.getElementById("year_start").appendChild(option);
      document.getElementById("year_end").appendChild(option.cloneNode(true)); // Need to have cloneNode otherwise can I only append one.
    });

    //historical_compounding_calculator()

});
}


function percentageReturn(x, y) {
  return (y/x - 1);
}


// NOT DONE!!
// TODO: Historical Compound Interest Calculaor + DCA/LSI
// Take AvgPrice and compare it to year_end price.
// Then take it calculate the % return.
// Take capital * % Return

// Compound
function historical_compounding_calculator() {

  let year_start = document.getElementById("year_start").value;
  let year_end = document.getElementById("year_end").value;

  let the_json = "/data/sp500-index-historical-annual-data.json";
  fetch(the_json)
  .then(response => response.json())
  .then(data => {

    
    let inputCapital = parseFloat(document.getElementById('capital').value); // parseInt wont take decimals. So parseFloat is better.
    let inputSavings = parseFloat(document.getElementById('savings').value);

    if (isNaN(inputSavings) == true){ // Checks if its null. If no one has put a value into the input
      inputSavings = 0
    }

    // TODO: Math
    // Profit = Capital

    // Compund calculator - just to check.
/*     compoundValue = Math.round((inputCapital) * Math.pow(inputReturns/100+1, i)) + (inputSavings*12) * (Math.pow(inputReturns/100+1, i) - 1)/(inputReturns/100);

    yearList.push(i + " y");
    compoundList.push(removeDecimals(compoundValue)); */

    let annual_savings = inputSavings * 12;


    let year_start_object = data.find(item => item.Year === year_start);
    let year_end_object = data.find(item => item.Year === year_end);

    // Compounded returns
    let start_average_value = year_start_object["AverageClosing Price"];
    let start_open_value = year_start_object["Year Open"];
    var end_average_value = year_end_object["AverageClosing Price"]; // Works??? Or not??
    var end_close_value = year_end_object["Year Close"]; // The price of the end of the year of the last year

    let average_difference = end_average_value / start_average_value; // Selling price / Buying price - 2.4534
    let open_difference = end_average_value / start_open_value;
    let average_close_difference = end_close_value / start_average_value;
    
    let average_capital_difference = average_difference * inputCapital; // This is the compounded value on the Initial Investment. 2
    let open_capital_difference = open_difference * inputCapital; // 1
    let average_close_capital_difference = average_close_difference * inputCapital;
/*     console.log("Avg And open", average_capital_difference, open_capital_difference)
    console.log("End: ", end_average_value)
    console.log("Start: ", start_average_value)
    console.log("Sold at end: ", average_close_capital_difference) */

    let start_year_open_value = year_start_object["Year Open"]; // Dosent work???
    var end_year_open_value = year_end_object["Year Open"];
/*     open_difference = open_difference * inputCapital;
    console.log("OpenDiff: ", open_difference) */

    let start_year_high_value = year_start_object["Year High"];
    var end_year_high_value = year_end_object["Year High"];
    let high_difference = end_year_high_value / start_year_high_value;
    high_difference = high_difference * inputCapital;

    let start_year_low_value = year_start_object["Year Low"];
    var end_year_low_value = year_end_object["Year Low"];
    let low_difference = end_year_low_value / start_year_low_value;
    low_difference = low_difference * inputCapital;


    let compound_capital_return = (parseInt(end_average_value) - parseInt(start_average_value)) / parseInt(start_average_value);

    let capital_total = inputCapital * compound_capital_return;


    // TODO
    // Make a loop for every years returns.

    
    var total_average_compounded = 0;
    var total_open_compounded = 0;
    for (let i = parseInt(year_start); i <= parseInt(year_end); i++) {

      let find_year = data.find(item => item.Year === String(i));
      //let find_next_year = data.find(item => item.Year === String(i+1));
      let average_price = find_year["AverageClosing Price"];
      let open_price = find_year["Year Open"];
      let close_price = find_year["Year Close"];
      let high_price = find_year["Year High"];
      let low_price = find_year["Year Low"];
      //let all_prices = ["average_price", "open_price", "close_price", "high_price", "low_price"]

      // The percentages.
      // average bought price
      let average_change_difference = end_close_value / average_price; // DCA percentage - 3.4435
      let open_change_difference = end_close_value / open_price; // LSI
      //console.log(average_change_difference, open_change_difference)

      // The money value.
      let average_compounded = average_change_difference * annual_savings; // Bought at avg
      let open_compounded = open_change_difference * annual_savings; // Bought at open

      // Pusing them.
      total_average_compounded += average_compounded
      total_open_compounded += open_compounded

    }

    let average_total = total_average_compounded + average_capital_difference; // Compound value + initial investment
    let average_open_total = total_open_compounded + average_capital_difference;

    //console.log("Test: ", total_average_compounded)

    let open_total = total_average_compounded + open_capital_difference;
    let open_open_total = total_open_compounded + open_capital_difference;


    document.getElementById("average_return").innerHTML = "$" + separateNumber(average_total);
    document.getElementById("average_open_return").innerHTML = "$" + separateNumber(average_open_total);
    document.getElementById("open_return").innerHTML = "$" + separateNumber(open_total);
    document.getElementById("open_open_return").innerHTML = "$" + separateNumber(open_open_total);

});
};


// TODO: Calculate the compounded historical returns.
// Very wrong atm...

function index_time_machine() {
  let the_json = "/data/sp500-index-historical-annual-data.json";
  fetch(the_json)
  .then(response => response.json())
  .then(jsonData => {
    // get selected year, buying price, investment amount and monthly contribution from user input
    const selectedYear = document.getElementById("year_start").value;
    const endYear = document.getElementById("year_end").value;
    const buying_price_initial = document.getElementById("buying_price").value;
    // const buyingPrice = document.querySelector('input[name="buying-price"]:checked').value;
    const investmentAmount = parseFloat(document.getElementById("investment-amount").value);
    // const monthlyContribution = parseFloat(document.getElementById("monthly-contribution").value); WONT ADD IT YET, DON'T KNOW HOW.
    //const buying_price_initial = "Year Open";
 
    let start_y = jsonData.find(item => item.Year === selectedYear);
    let end_y = jsonData.find(item => item.Year === endYear);
    const year_diff = endYear - selectedYear;
    let time_diff = (end_y["Year Close"] - start_y[buying_price_initial])/start_y[buying_price_initial] + 1;
    let total_annual_compound = investmentAmount * time_diff; // Annual compound from initial investment

    let ROI = (total_annual_compound - investmentAmount) / investmentAmount * 100;
    let avgReturn = ROI / year_diff; // roi / years

    let CAGR = (Math.pow((total_annual_compound / investmentAmount), (1/year_diff)) -1)*100;
    //let cagr_annual_percentage = (total_annual_compound / investmentAmount) ** (1/year_diff)*100; // WRONG??


    let total_monthly_compound = investmentAmount;
    for (let i = parseInt(selectedYear); i <= parseInt(endYear); i++) {
      let year_start_object = jsonData.find(item => item.Year === String(i))
      let percentage_return = (start_y["Year Close"] - year_start_object[buying_price_initial])/year_start_object[buying_price_initial] + 1;
      let total_percentage_return = (end_y["Year Close"] - year_start_object[buying_price_initial])/year_start_object[buying_price_initial] + 1;
      let amount_of_years = parseInt(endYear) - i;
      let returns = (percentage_return-1);

      // i = amount of years??
      // FROM C: (inputSavings*12) * (Math.pow(inputReturns+1, amount_of_years) - 1)/(inputReturns)
      // SUPER WRONG
      // total_annual_compound += (monthlyContribution * 12 ) * (Math.pow(total_percentage_return + 1, amount_of_years)/total_percentage_return);

      //  Monthly compound
  /*     for (var j = 0; j < 12; j++) { // Very wrong. why??
        total_monthly_compound *= (1 + (returns/12));
        //console.log(total_monthly_compound *= (1 + (returns/12)))
        total_monthly_compound += monthlyContribution * returns;
        } */

      }
      document.getElementById("result").innerHTML = "$" + separateNumber(total_annual_compound);
      document.getElementById("roi").innerHTML = separateNumber(ROI) + "%";
      document.getElementById("avgReturn").innerHTML = separateNumber(avgReturn) + "%";
      document.getElementById("cagr").innerHTML = separateNumber(CAGR) + "%";
      //console.log("End Monthly: ", total_monthly_compound)
  });
}



// Failed :(
/* 
function calculate() {
  let the_json = "/data/sp500-index-historical-annual-data.json";
  fetch(the_json)
  .then(response => response.json())
  .then(jsonData => {
    // get selected year, buying price, investment amount and monthly contribution from user input
    const selectedYear = document.getElementById("year_start").value;
    const endYear = document.getElementById("year_end").value;
    const investmentAmount = parseFloat(document.getElementById("investment-amount").value);
    const monthlyContribution = parseFloat(document.getElementById("monthly-contribution").value);
    const buying_price_initial = "Year Open";

    let start_y = jsonData.find(item => item.Year === selectedYear);
    let end_y = jsonData.find(item => item.Year === endYear);
    let total_monthly_compound = investmentAmount;

    for (let i = parseInt(selectedYear); i <= parseInt(endYear); i++) {
      let year_start_object = jsonData.find(item => item.Year === String(i))
      let percentage_return = (year_start_object["Year Close"] - year_start_object[buying_price_initial])/year_start_object[buying_price_initial] + 1;
      let returns = (percentage_return-1);

      for (var j = 0; j < 12; j++) {
        total_monthly_compound *= (1 + (returns/12));
        total_monthly_compound += monthlyContribution;
        }
    }
    console.log("End Monthly: ", total_monthly_compound)
  });
}
*/




/* function calculate() {
  let the_json = "/data/sp500-index-historical-annual-data.json";
  fetch(the_json)
  .then(response => response.json())
  .then(jsonData => {
    // get selected year, buying price, investment amount and monthly contribution from user input
    const selectedYear = document.getElementById("year_start").value;
    const buyingPrice = document.querySelector('input[name="buying-price"]:checked').value;
    const investmentAmount = parseFloat(document.getElementById("investment-amount").value);
    const monthlyContribution = parseFloat(document.getElementById("monthly-contribution").value);
    if(isNaN(investmentAmount)) {
      alert("Please enter a valid investment amount");
      return;
    }
    // filter data for selected year
    let filteredData = jsonData.filter(year => year.Year >= selectedYear);
    let compound = investmentAmount;
    for(let i=0;i<filteredData.length;i++){
        let returns = parseFloat(filteredData[i]["Annual% Change"])/100;
        compound *= (1 + returns);
        if(monthlyContribution && !isNaN(monthlyContribution)) {
            compound += monthlyContribution*12;
        }
    }
    // display the result
    document.getElementById("result").innerHTML = "Your compound return is: " + compound;
  })
  .catch(error => {
    console.log(error);
    alert("Error fetching data, please try again later");
  });
}
 */



// the_json, do_this (For running functions)
function fetchData(the_json) {
  fetch(the_json)
  .then(response => response.json())
  .then(data => {
    // do something with the data
    //console.log(data)
    let specificYear = data.find(item => item.Year === "2003");
    //console.log(specificYear);
  });
};


// TODO: Warning before download?
// Something so the user cant download pc stuff as easily on phone.
function getOperatingSystem() { // Too see what operating system the user has
  var userAgent = navigator.userAgent;
  var the_operating_system = "";

  if (userAgent.indexOf("Windows") !== -1) {
      console.log("This user is using Windows");
  } else if (userAgent.indexOf("Mac") !== -1) {
      console.log("This user is using Mac OS");
  } else if (userAgent.indexOf("Android") !== -1) {
      console.log("This user is using Android");
  } else if (userAgent.indexOf("Linux") !== -1) {
    console.log("This user is using Linux");
  } else {
      console.log("Could not detect operating system");
  }
};
//getOperatingSystem()

//REMOVE
//fetchData("/data/sp500-index-historical-annual-data.json")


// TODO: Past Time Compound Calculator.
// Like the compound calculator but with past years.
// You can choose in a dropdown the years
// And it will calculate the compounded return
// A chart.js will show with the high, low & average returns.
// 1 - Make compound function

// Dysleksi
function coumpound_rate() {
  let inputCapital = parseFloat(document.getElementById('capital').value); // parseInt wont take decimals. So parseFloat is better.
  let inputSavings = parseFloat(document.getElementById('savings').value);
  let inputYears = parseFloat(document.getElementById('years').value);
  let inputReturns = parseFloat(document.getElementById('returns').value) / 100;
  let select = document.getElementById("time-compound-interest");
  let selectedOption = select.options[select.selectedIndex].value;

/*   if(isNaN(inputCapital) || isNaN(inputSavings) || isNaN(inputYears) || isNaN(inputReturns)){
      alert("All inputs should be numbers");
      return;
  } */

  document.getElementById("totalYears").innerHTML = inputYears

  // Checks if its null. If no one has put a value into the input
  if (isNaN(inputSavings) == true){
    inputSavings = 0
  }
  if (isNaN(inputCapital) == true){
    inputCapital = 0
  }

/*   var yearList = [];
  var compoundList = []; */
  var results = {};
  var compound = inputCapital;
  var savings = 0;

  for (let i = 1; i <= inputYears; i++) { // TODO: Make decimals work with years. let i = 1; i <= inputYears; i++
    // Monthly compound
    for (var j = 0; j < 12; j++) {
      compound *= (1 + (inputReturns/12));
      savings += inputSavings;
      compound += inputSavings;
      }

    // For annual compound
    compoundValue = Math.round((inputCapital) * Math.pow(inputReturns+1, i)) + (inputSavings*12) * (Math.pow(inputReturns+1, i) - 1)/(inputReturns);
      
    // The Object
    results[i + " Year"] = { // (i + 1)
      "compounded_monthly": compound,
      "uncompounded_monthly": compound - savings,
      "compounded_annual": compoundValue,
      "uncompounded_annual": compoundValue - savings,
      "savings": savings
    }};

  compound_annual_or_month(selectedOption, inputCapital, savings, compoundValue, compound, results)

};


function compound_annual_or_month(x, capital, save, annual_compound, month_compound, the_object) {
  var tableBody = document.getElementById('tableData');
  tableBody.innerHTML = "";
  var the_value = 0;
  var year_list = []
  var compound_list = []
  var comp = 0;

  if (x == "monthly") {
    the_value = month_compound;
    for (let key in the_object) {
      comp = the_object[key]["compounded_monthly"];
      tableBody.innerHTML += `<tr><td>${key}</td><td type="number">$${separateNumber(comp)}</td></tr>`;
      year_list.push(key.match(/\d+/)[0] + " y")
      compound_list.push(removeDecimals(comp))
    }
  } else { // Annual
    the_value = annual_compound;
    for (let key in the_object) {
      comp = the_object[key]["compounded_annual"];
      year_list.push(key.match(/\d+/)[0] + " y")
      compound_list.push(removeDecimals(comp))
      tableBody.innerHTML += `<tr><td>${key}</td><td type="number">$${separateNumber(comp)}</td></tr>`;
    }
  }
  document.getElementById("totalCompound").innerHTML = "$" + separateNumber(the_value);
  document.getElementById("totalSavings").innerHTML = "$" + separateNumber(capital + save);
  document.getElementById("totalReturn").innerHTML = "$" + separateNumber(the_value - (capital + save));
  myCustomChart("Compound Rate","line", year_list,compound_list);
}


// Creates a header and body for a table.
function create_table(the_json, table) {
  const tableBody = document.getElementById(table);
  const tableHead = tableBody.createTHead();
  const headRow = tableHead.insertRow();

  fetch(the_json)
  .then(response => response.json())
  .then(data => {
    // Get the first object in the JSON data
    let firstRow = data[0];
    // Get the property names of the first object
    let properties = Object.keys(firstRow);
    // Insert the property names as table head data
    for (let i = 0; i < properties.length; i++) {
      let headCell = document.createElement('th');
      headCell.innerHTML = properties[i];
      headRow.appendChild(headCell);
    }
    // Insert the rest of the JSON data as table body data
    for (let i = 0; i < data.length; i++) {
      let row = tableBody.insertRow(-1);
      for (let j = 0; j < properties.length; j++) {
        let cell = row.insertCell(j);
        cell.innerHTML = data[i][properties[j]];
      }
    }
  });
};


function table_with_year(url) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (!data) {
        throw new Error("No data received");
      }
      let table = document.getElementById("dataTable");
      let header = table.createTHead();
      let headerRow = header.insertRow();
      let th = document.createElement("th");
      th.innerHTML = "Year";
      headerRow.appendChild(th);
      let headers = Object.keys(Object.values(data)[0]);
      headers.forEach(header => {
        th = document.createElement("th");
        th.innerHTML = header;
        headerRow.appendChild(th);
      });
      let years = Object.keys(data);
      years.sort((a, b) => b - a);
      years.forEach(year => {
        let yearData = data[year];
        let row = table.insertRow();
        let yearCell = row.insertCell();
        yearCell.innerHTML = year;
        headers.forEach(header => {
          let cell = row.insertCell();
          cell.innerHTML = yearData[header];
        });
      });
    })
    .catch(error => console.error(error));
};



// Kinda works
/* function displayData(url) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (!data) {
        throw new Error("No data received");
      }
      let table = document.getElementById("dataTable");
      let header = table.createTHead();
      let headerRow = header.insertRow();
      let headers = Object.keys(Object.values(data)[0]);
      headers.forEach(header => {
        let th = document.createElement("th");
        th.innerHTML = header;
        headerRow.appendChild(th);
      });
      Object.entries(data).forEach(([year, yearData]) => {
        let row = table.insertRow();
        let yearCell = row.insertCell();
        yearCell.innerHTML = year;
        headers.forEach(header => {
          let cell = row.insertCell();
          cell.innerHTML = yearData[header];
        });
      });
    })
    .catch(error => console.error(error));
} */


/* function displayData(data) {
  let table = document.getElementById("dataTable");
  let header = table.createTHead();
  let headerRow = header.insertRow();
  let headers = Object.keys(data[0]);
  headers.forEach(header => {
    let th = document.createElement("th");
    th.innerHTML = header;
    headerRow.appendChild(th);
  });
  data.forEach(datum => {
    let row = table.insertRow();
    headers.forEach(header => {
      let cell = row.insertCell();
      cell.innerHTML = datum[header];
    });
  });
}; */


function calculateEntropy(password) {
  // Standard character sets list.
  const stdCharsets = [
    { name: 'lowercase', re: /[a-z]/, length: 26 },
    { name: 'uppercase', re: /[A-Z]/, length: 26 },
    { name: 'numbers', re: /[0-9]/, length: 10 },
    { name: 'symbols', re: /[^a-zA-Z0-9\s]/, length: 32 }
  ];

  // Creates a function to calculate the total charset length of a string based on the given charsets.
  const calcCharsetLengthWith = charsets =>
    string =>
      charsets.reduce((length, charset) =>
        length + (charset.re.test(string) ? charset.length : 0), 0);

  // Helper function to calculate the total charset lengths of a given string using the standard character sets.
  const calcCharsetLength = calcCharsetLengthWith(stdCharsets);

  // Calculate the entropy of the password.
  const entropy = Math.round(password.length * Math.log(calcCharsetLength(password)) / Math.log(2));

  // Return the calculated entropy.
  return entropy;
};


function calculateCrackingTime(entropy) {
  // Define the cracking rate of a supercomputer in passwords per second
  var crackingRate = 1e12; // 1e12 = 1 trillion passwords per second. 1e15 = quadrillion, 1e18 = quintillion
  //var crackingRate = 1000000000;

  // Calculate the number of possible characters based on the entropy
  var possibleCombinations = Math.pow(2, entropy);

  // Calculate the time it would take to crack the password in seconds
  var timeInSeconds = possibleCombinations / crackingRate;

  // Convert the time to years
  // var timeInYears = timeInSeconds / (365 * 24 * 3600);

  return timeInSeconds;
};


/* function convertSeconds(seconds) {

  if (seconds < 60) {
    return separateNumber(seconds) + " sec";
  }
  
  var minutes = seconds / 60;
  if (minutes < 60) {
    return separateNumber(minutes) + " min";
  }
  
  var hours = minutes / 60;
  if (hours < 24) {
    return hours.toFixed(2) + " hours";
  }
  
  var days = hours / 24;
  if (days < 7) {
    return days.toFixed(2) + " days";
  }

  var weeks = days / 7;
  if (weeks < 4) {
    return weeks.toFixed(2) + " weeks";
  }

  var months = days / 30.44;
  if (months < 12) {
    return months.toFixed(2) + " months";
  }

  var years = days / 365;
  if (years < 99999) {
    return years.toFixed(2) + " years";
  }

  var millions = years / 1000000;

  return millions.toFixed(2) + " million years"
}; */


// TODO
// Make it more readable. Display several units together. like "5 thousand billion"
// Add years to every bigger number.
function convertSeconds(seconds) {
  const timeUnits = [
    { unit: "sec", max: 60 },
    { unit: "min", max: 60 },
    { unit: "hour", max: 24 },
    { unit: "day", max: 7 },
    { unit: "week", max: 4 },
    { unit: "month", max: 12 },
    { unit: "year", max: 1000 },
    { unit: "million year", max: 1000000 },
    { unit: "billion year", max: 1000000000 },
    { unit: "trillion year", max: 1000000000000 },
    { unit: "quadrillion year", max: 1000000000000000 },
    { unit: "quintillion year", max: 1000000000000000000 },
    { unit: "sextillion year", max: 1000000000000000000000 },
    { unit: "septillion year", max: 1000000000000000000000000 },
    { unit: "octillion year", max: 1000000000000000000000000000 },
    { unit: "nonillion year", max: 1000000000000000000000000000000 },
    { unit: "decillion year", max: 1000000000000000000000000000000000 },
    { unit: "undecillion year", max: 1000000000000000000000000000000000000 },
    { unit: "duodecillion year", max: 1000000000000000000000000000000000000000 },
    { unit: "tredecillion year", max: 1000000000000000000000000000000000000000000 },
    { unit: "quattuordecillion year", max: 1000000000000000000000000000000000000000000000 },
    { unit: "quindecillion year", max: 1000000000000000000000000000000000000000000000000 },
    { unit: "sexdecillion year", max: 1000000000000000000000000000000000000000000000000000 },
    { unit: "septendecillion year", max: 1000000000000000000000000000000000000000000000000000000 },
    { unit: "octodecillion year", max: 1000000000000000000000000000000000000000000000000000000000 },
    { unit: "novemdecillion year", max: 1000000000000000000000000000000000000000000000000000000000000000 },
    { unit: "vigintillion year", max: Infinity }
  ];
  
  let value = seconds;
  let unitIndex = 0;
  
  while (value >= timeUnits[unitIndex].max && unitIndex < timeUnits.length - 1) {
    value /= timeUnits[unitIndex].max;
    unitIndex++;
  }
  
  return `${separateNumber(value)} ${timeUnits[unitIndex].unit}${unitIndex > 0 ? "s" : ""}`;
};



function test_password_strength() {

  var password = document.getElementById("passwordInput").value;
  var entropy =  calculateEntropy(password); // Bits 
  var cracking_time = calculateCrackingTime(entropy); // seconds
  const result = analyzePassword(password); // For returning more information. Maybe not working well.

  document.getElementById("character-lenght").innerHTML = result.length + " Characters";

  const password_contains = [
    result.hasLowerCase ? "lower case" : "",
    result.hasUpperCase ? "UPPER CASE" : "",
    result.hasNumber ? "Numbers (0-9)" : "",
    result.hasSymbol ? "Symbols (#¤!...)" : "",
    result.isCommonSequence ? "Word Sequences" : ""
  ].filter(Boolean);

  const display_password_contains = password_contains.join(", ");

  document.getElementById("password-contains").innerHTML = "&nbsp;&nbsp;&nbsp;" + display_password_contains;


  if (password == "" || password === undefined) {
    document.getElementById("password-years").innerHTML = "Crack Time: " + 0 + " seconds";
    document.getElementById("entropy").innerHTML = "Entropy: " + 0 + " bits";
    //console.log("IsNaN: ", isNaN(password))
  } else {
    document.getElementById("password-years").innerHTML = "Crack Time: " + convertSeconds(cracking_time);
    document.getElementById("entropy").innerHTML = "Entropy: " + separateNumber(entropy) + " bits";
    //console.log("IsNaN: ", isNaN(password))
  };


  var strong_or_week = 0;
  if (entropy < 1 || isNaN(entropy)) {
    strong_or_week = "bg-grey"
  } else if (entropy < 40) {
    strong_or_week = "bg-red"
  } else if (entropy < 80) {
    strong_or_week = "bg-orange"
  } else {
    strong_or_week = "bg-green"
  }
  //console.log("Password is ", strong_or_week)
  document.getElementById("change-this-color").className = strong_or_week;
};


// TODO
// Return the object and make the code more reusable.
function generate_diceware_password(input_element) {
  var amount_of_words = 0;

  if (typeof input_element === 'number') { // To make it work for input AND other tags.
    amount_of_words = input_element;
  } else {
    amount_of_words = input_element.value; // Has to be .value if from a input field
  }
  // Get the number of words from the form
  //var num_words = document.getElementById("num_words").value;

  // Fetch the JSON file containing the words
  fetch("/data/diceware-word-list.json")
    .then(response => response.json())
    .then(data => {
      // Select the specified number of random words from the JSON file
      var password = "";
      var password_big_letter = "";
      var password_spaceless = "";
      const crypto = window.crypto || window.msCrypto; // Microsoft vs everyone else
/*       for (var i = 0; i < amount_of_words; i++) {
        var random_key = Object.keys(data)[Math.floor(Math.random()*Object.keys(data).length)];
        password += data[random_key] + " ";
        password_big_letter += data[random_key].charAt(0).toUpperCase() + data[random_key].slice(1) + " ";
        password_spaceless += data[random_key].charAt(0).toUpperCase() + data[random_key].slice(1);
      } */
      for (var i = 0; i < amount_of_words; i++) {
        const randomArray = new Uint32Array(1);
        crypto.getRandomValues(randomArray);
        var random_key = Object.keys(data)[uniformSecureRandomNumber(Object.keys(data).length)];
        password += data[random_key] + " ";
        password_big_letter += data[random_key].charAt(0).toUpperCase() + data[random_key].slice(1) + " ";
        password_spaceless += data[random_key].charAt(0).toUpperCase() + data[random_key].slice(1);
      }
      
      password = password.trim(),
      password_big_letter = password_big_letter.trim(),
      password_spaceless = password_spaceless.trim();

      const password_entropy = separateNumber(calculateEntropy(password)) + " bits";
      const password_big_letter_entropy = calculateEntropy(password_big_letter) + " bits";
      const password_spaceless_entropy = calculateEntropy(password_spaceless) + " bits";


      // Return this to make code more reusable.
      const returnObject = {
        password: password,
        password_big_letter: password_big_letter,
        password_spaceless: password_spaceless

      }

      //document.getElementById("diceware-password").innerHTML = password;

      document.getElementById("diceware-password-normal-result").innerHTML = password;
      document.getElementById("diceware-password-normal-bits-result").innerHTML = password_entropy;
      document.getElementById("diceware-password-formatted-result").innerHTML = password_big_letter;
      document.getElementById("diceware-password-formatted-bits-result").innerHTML = password_big_letter_entropy;
      document.getElementById("diceware-password-spaceless-result").innerHTML = password_spaceless;
      document.getElementById("diceware-password-spaceless.bits-result").innerHTML = password_spaceless_entropy;

    });
};


// For creating more true random.
function uniformSecureRandomNumber(range) {
  const crypto = window.crypto || window.msCrypto;
  const max = Math.floor(2 ** 32 / range) * range;
  let x;
  do {
    x = crypto.getRandomValues(new Uint32Array(1))[0];
  } while (x >= max);
  return x % range;
};





/* function copy_text() {
  const textField = document.getElementById("diceware-password");
  textField.select();

  // Copy the text field's contents
  document.execCommand("copy");
} */

function copy_this(elementId) {

  var element = document.getElementById(elementId);
  var text = element.innerText || element.value;
  var tempInput = document.createElement("input");
  tempInput.value = text;

  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput); // Otherwise it creates a element below the footer every time its run.

};

// TODO:
// Create radio buttons for weird characters, numbers, caps, whatever
function generate_basic_password() {
  // create a variable to store the password
  var password = "";

  // create a string of characters to use for the password
  var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

  // create a loop to generate the password
  for (var i = 0; i < 8; i++) {
    // generate a random number between 0 and the length of the characters string
    var randomNum = Math.floor(Math.random() * characters.length);

    // add the character at the randomly generated index to the password
    password += characters.charAt(randomNum);
  }

  // display the generated password in the text field
  document.getElementById("password").value = password;
};


function analyzePassword(password) {
  const result = {
    length: password.length,
    hasLowerCase: /[a-z]/.test(password),
    hasUpperCase: /[A-Z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSymbol: /[^\w\s]/.test(password),
    hasSequence: /(.)\1{2,}/.test(password),
    isCommonSequence: false,
    isFrequentlyUsed: false
  };
  
  const commonSequences = [
    "123", "abc", "qwe", "asd", "zxc", "password", "admin", "letmein", "monkey",
    "football", "iloveyou", "password1", "welcome", "sunshine", "superman", "princess",
    "dragon", "master", "hello", "freedom", "whatever", "shadow", "qwertyuiop",
    "asdfghjkl", "zxcvbnm", "trustno1", "starwars", "baseball", "football", "hockey",
    "basketball", "mustang", "michael", "jennifer", "anthony", "liverpool", "chelsea",
    "arsenal", "manchester", "yankees", "cowboys", "dolphins", "corvette", "ferrari",
    "mercedes", "porsche", "letmein123", "monkey123", "superman123", "password123"
  ];

  const frequentlyUsedWords = [
    "password", "admin", "letmein", "monkey", "iloveyou", "welcome", "sunshine",
    "princess", "dragon", "master", "freedom", "whatever", "shadow", "trustno1",
    "starwars", "baseball", "football", "hockey", "basketball", "mustang", "michael",
    "jennifer", "anthony", "liverpool", "chelsea", "arsenal", "manchester", "yankees",
    "cowboys", "dolphins", "corvette", "ferrari", "mercedes", "porsche"
  ];
  
  if (commonSequences.some(seq => password.includes(seq))) {
    result.isCommonSequence = true;
  }
  
  if (frequentlyUsedWords.includes(password.toLowerCase())) {
    result.isFrequentlyUsed = true;
  }
  
  return result;
};


/* function hello_there() {
  var password = "weld tub dodge mites";
  var strength = zxcvbn(password);
  console.log("HAHJJASD")
  console.log("Score: " + strength.score + " Entropy: " + strength.entropy + " Bits: " + strength.entropy/Math.log2(2));
} */

//hello_there()


// Seems to work.
function inflation_working(data, startYear, endYear, startValue) {
  let totalInflation = 1;
  for (let year = startYear; year <= endYear; year++) {
    const inflationRate = data[year]["Ave"] / 100;
    totalInflation *= (1 + inflationRate);
  }
  return startValue * totalInflation;
}


function calculateInflation(data, startYear, endYear, startMonth, endMonth, startValue) {
  let totalInflation = 1;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  for (let year = startYear; year <= endYear; year++) {
    for (let month = months.indexOf(startMonth); month <= months.indexOf(endMonth); month++) {
      const inflationRate = data[year][months[month]] / 100;
      totalInflation *= (1 + inflationRate);
    }
  }

  return startValue * totalInflation;
}


// VERY wrong....
function inflation_test(data, startYear, endYear, startMonth, endMonth, startValue) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let startMonthIndex = months.indexOf(startMonth);
  let endMonthIndex = months.indexOf(endMonth);
  let value = startValue;
  let currentYear = startYear;
  let currentMonthIndex = startMonthIndex;

  while (currentYear < endYear || (currentYear === endYear && currentMonthIndex <= endMonthIndex)) {
      value *= (1 + data[currentYear][months[currentMonthIndex]] / 100);
      currentMonthIndex++;
      if (currentMonthIndex === 12) {
          currentMonthIndex = 0;
          currentYear++;
      }
  }

  return value;
}


function inflation_calc() {

const startValue = document.getElementById('investment-amount').value
const startYear = document.getElementById('from_year').value.toString();
const endYear = document.getElementById('to_year').value.toString();
 

  fetch("/data/us-inflation.json")
  .then(response => response.json())
  .then(data => {
    // Example usage

    //const startValue = 100;
    //const startYear = "1950";
    const startMonth = "Jan";
    //const endYear = "2021";
    const endMonth = "Dec";

    const end_value = inflation_working(data, startYear, endYear, startValue)
    const roi = (end_value-startValue) / startValue * 100
    // data, startYear, endYear, startMonth, endMonth, startValue
    //const inflationValue = calculateInflation(data, startYear, endYear, startMonth, endMonth, startValue);

    //console.log(inflation_test(data, startYear, endYear, startMonth, endMonth, startValue))
  
    //console.log("Estimated inflation value: ", inflationValue);

/*     if (isNaN(inflationValue)) {
      console.error("Error: The inflation value is not a valid number.");
    } else {
      console.log("Estimated inflation value: ", inflationValue);
    }
 */
    //document.getElementById("result").innerHTML = inflationValue
    document.getElementById("result").innerHTML = "$" + separateNumber(end_value)
    document.getElementById("the_year_from").innerHTML = startYear
    document.getElementById("the_year_to").innerHTML = endYear
    document.getElementById("roi").innerHTML = separateNumber(roi) + "%"
  });

};

//inflation_calc()


function json_to_markdown(the_json, id) {
  fetch(the_json)
  .then(response => response.json())
  .then(data => {


    data.forEach(function(item) {
      var option = document.createElement("option");
      //option.value = item["Year"];
      option.textContent = item["Year"];
      if (item["Year"] == "2000") { //Sets it as the default.
        option.selected = true;
      }
      document.getElementById(the_json).appendChild(option);
      //document.getElementById("year_end").appendChild(option.cloneNode(true)); // Need to have cloneNode otherwise can I only append one.
    });

    //historical_compounding_calculator()

});
}


function addYearsToSelect(jsonData, id, highest) {
  let select = document.getElementById(id);
  for (let year in jsonData) {
    let option = document.createElement("option");
    option.value = year;
    option.text = year;
    select.add(option);
  }
  if (highest) {
    let highestYear = Math.max(...Object.keys(jsonData));
    select.value = highestYear - 1;
  }
};


function add_to_inflation_select(the_json) {
  fetch(the_json)
  .then(response => response.json())
  .then(data => {
    const from_year = "from_year"
    const to_year = "to_year"

    addYearsToSelect(data, from_year)
    addYearsToSelect(data, to_year, "True")
});
};

//console.log("Hello: ", four_percentage_rule(2000, 4))

function link_input_fields(input) {
  const input1 = document.getElementById("monthly-amount");
  const input2 = document.getElementById("annual-amount");
  const the_percentage = document.getElementById("select-percentage").value;
  const result = document.getElementById("percentage-rule-result");

  if (input === input1) {
    input2.value = input1.value * 12;
  } else if (input === input2) {
    input1.value = input2.value / 12;
  }

  const percentage_rule = input2.value / (the_percentage/100)

  result.innerHTML = "$" + separateNumber(percentage_rule);
};

// fixed monthly payment and calculates the repayment period based on that
// Todo:
// Always gets Month to a variable
// Always get Interest Paid to a variable

// Monthly payment: P = L * (r/12) / (1 - (1 + (r/12))^(-n))

// separateNumber()


function calculateRepayment() {
  let debtAmount = parseInt(document.getElementById("debtAmount").value);
  let interestRate = document.getElementById("interestRate").value;
  let repaymentOption = document.querySelector('input[name="repaymentOption"]:checked').value;
  let the_result = document.getElementById("result");
  let chart_labels = ["Principal", "Interest"];

  
  if (repaymentOption === "monthlyPayment") {
    let monthlyPayment = parseInt(document.getElementById("monthlyPayment").value);
    let rate = interestRate / 100 / 12;
    let minimumMonthlyPayment = debtAmount * rate / (1 - (1 / Math.pow(1 + rate, desiredMonths)));
  
    if (monthlyPayment < minimumMonthlyPayment) {
      //document.getElementById("result").innerHTML = "Error: Monthly payment is too low. Increase monthly payment or decrease desired months.";
      //document.getElementById("result").innerHTML = ""
    } else {
      let months = Math.log(monthlyPayment / (monthlyPayment - rate * debtAmount)) / Math.log(1 + rate);
      if (!isNaN(months)) {
        months_exact = months
        months = Math.ceil(months);
        let totalInterest = (months_exact * monthlyPayment) - debtAmount;
        totalInterest = totalInterest.toFixed(2);
        document.getElementById("totalMonthlyPayment").innerHTML = "<strong>Monthly Payment</strong><br> $" + monthlyPayment;
        document.getElementById("totalMonths").innerHTML = "<strong>Time to Pay Off</strong><br>" + months + " months";
        document.getElementById("totalInterest").innerHTML = "<strong>Total Interest</strong><br> $" + totalInterest;
        the_result.innerHTML = "";

        chart_data = [debtAmount, parseInt(totalInterest)]
        myCustomAwesomeChart("ROI" ,"pie", chart_labels, chart_data);
      } else {
        the_result.innerHTML = "Error: Could not calculate result. Please check the inputs and try again.";
      }
    }
  } else if (repaymentOption === "desiredMonths") {
    let desiredMonths = document.getElementById("desiredMonths").value;
    let rate = interestRate / 100 / 12;
    let monthlyPayment = debtAmount * rate * (Math.pow(1 + rate, desiredMonths)) / (Math.pow(1 + rate, desiredMonths) - 1);
    let totalInterest = (desiredMonths * monthlyPayment) - debtAmount;
    monthlyPayment = monthlyPayment.toFixed(2);
    totalInterest = totalInterest.toFixed(2);
  
    document.getElementById("totalMonthlyPayment").innerHTML = "<strong>Monthly Payment</strong><br> $" + monthlyPayment;
    document.getElementById("totalMonths").innerHTML = "<strong>Time to Pay Off</strong><br>" + desiredMonths + " months";
    document.getElementById("totalInterest").innerHTML = "<strong>Total Interest</strong><br> $" + totalInterest;
    chart_data = [debtAmount, parseInt(totalInterest)]
    myCustomAwesomeChart("ROI" ,"pie", chart_labels, chart_data);
  }
  // 
};






/* function calculateRepayment() {
  let debtAmount = document.getElementById("debtAmount").value;
  let interestRate = document.getElementById("interestRate").value;
  let repaymentOption = document.querySelector('input[name="repaymentOption"]:checked').value;

  if (repaymentOption === "monthlyPayment") {
    let monthlyPayment = document.getElementById("monthlyPayment").value;
    let rate = interestRate / 100 / 12;
    let months = Math.log(monthlyPayment / (monthlyPayment - rate * debtAmount)) / Math.log(1 + rate);
    months = Math.ceil(months);
//'<span id="percentage-rule-result" class="color-special big-bold">' + months + '</span>'
    document.getElementById("result").innerHTML = "It will take you approximately " + months + " months to pay off your debt.";
    // document.getElementById("months").innerHTML = months + " months";

  } else if (repaymentOption === "desiredMonths") {
    let desiredMonths = document.getElementById("desiredMonths").value;
    let rate = interestRate / 100 / 12;
    let monthlyPayment = debtAmount * rate * (Math.pow(1 + rate, desiredMonths)) / (Math.pow(1 + rate, desiredMonths) - 1);
    monthlyPayment = monthlyPayment.toFixed(2);

    document.getElementById("result").innerHTML = "Your monthly payment will be approximately $" + monthlyPayment + ".";
  }
}; */


/* function calculateRepayment() {
  var loanAmount = document.getElementById("debtAmount").value;
  var interestRate = document.getElementById("interestRate").value;
  var monthlyPayment = document.getElementById("monthlyPayment").value;
  var desiredMonths = document.getElementById("desiredMonths").value;
  var radioSelection = document.querySelector('input[name="repaymentOption"]:checked').value;
  var result;

  if (radioSelection === "monthlyPayment") {
    result = loanAmount * (interestRate / 12) / (1 - Math.pow(1 + (interestRate / 12), -desiredMonths));
  } else if (radioSelection === "desiredMonths") {
    result = monthlyPayment / ((interestRate / 12) / (1 - Math.pow(1 + (interestRate / 12), -desiredMonths)));
  }

  document.getElementById("result").innerHTML = "Loan Amount: $" + loanAmount + "<br>" +
                                                "Interest Rate: " + interestRate * 100 + "%<br>" +
                                                "Monthly Payment: $" + monthlyPayment + "<br>" +
                                                "Desired Months: " + desiredMonths + "<br>" +
                                                "Result: $" + result.toFixed(2);
}; */

// For disable another input field.
function disable_enable_field(disable_me, enable_me) {
  document.getElementById(disable_me).disabled = true;
  //document.getElementById(field1).value = "";
  document.getElementById(enable_me).disabled = false;
  //event.target.nextElementSibling.disabled = false;
};


/* function calculate_present_value(futureValue, interestRate, numPeriods) {
  return futureValue / Math.pow(1 + interestRate/100, numPeriods);
};
 */


// Like a reverse compound calculator
function calculate_present_value(futureValue, interestRate, numPeriods) {
  var presentValue = futureValue / Math.pow(1 + interestRate/100, numPeriods);
  var totalInterest = futureValue - presentValue;
  var periodPresentValues = [];


  for (var i = 0; i <= parseInt(numPeriods); i++) {
    var periodPresentValue = futureValue / Math.pow(1 + interestRate/100, i);
    periodPresentValues.push(periodPresentValue);
  }

  return { presentValue: presentValue, periodPresentValues: periodPresentValues, totalInterest: totalInterest};
}




function calculate_present_value_form() {
  const futureValue = document.getElementById("future-value").value;
  const numPeriods = document.getElementById("number-of-periods").value;
  const interestRate = document.getElementById("interest-rate").value;
  const table_body = document.getElementById("myTableBody");

  const result = calculate_present_value(futureValue, interestRate, numPeriods);
  document.getElementById("present-value").innerHTML = "$" + separateNumber(result.presentValue);
  document.getElementById("total-interest").innerHTML = "$" + separateNumber(result.totalInterest);


  table_body.innerHTML = "";
  amount_of_periods = [];
  for (var i = result.periodPresentValues.length -1; i >= 0; i--) {
    var row = table_body.insertRow();
    var periodCell = row.insertCell(0);
    var presentValueCell = row.insertCell(1);
    periodCell.textContent = "Period " + (result.periodPresentValues.length - 1 - i) + ":";
    presentValueCell.textContent = "$" + separateNumber(result.periodPresentValues[i]);
    amount_of_periods.push(i)
  }

  myCustomChart("Present Value","line", amount_of_periods, result.periodPresentValues);
  
};


function calculate_gross_profit_margin(revenue, cost) {
  const grossProfitMargin = ((revenue - cost) / revenue) * 100;
  const grossProfit = revenue - cost;
  return {margin: grossProfitMargin, profit: grossProfit};
};


function calculate_gross_profit_form() {
  const revenue = document.getElementById("revenue").value;
  const cost = parseInt(document.getElementById("cost").value);

  const result = calculate_gross_profit_margin(revenue, cost);
  document.getElementById("gross-profit-margin").innerHTML = separateNumber(result.margin) + "%";
  document.getElementById("gross-profit").innerHTML = "$" + separateNumber(result.profit);

  const myLabels = ["Gross Profit", "Cost"];
  const chart_data = [result.profit, cost]

  console.log(chart_data)

  myCustomAwesomeChart("Gross Profit" ,"pie", myLabels, chart_data);

};


function calculateLoan() {
  const principal = parseFloat(document.getElementById('loan-amount').value);
  const interestRate = parseFloat(document.getElementById('interest-rate').value);
  const loanTerm = parseInt(document.getElementById('loan-term').value);

  const monthlyInterestRate = interestRate / 1200;
  const totalPayments = loanTerm * 12;
  const discountFactor = (Math.pow(1 + monthlyInterestRate, totalPayments) - 1) / (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments));
  const monthlyPayment = principal / discountFactor;
  const totalPayment = monthlyPayment * totalPayments;
  const totalInterest = totalPayment - principal;

  document.getElementById('monthly-payment').textContent = `$${monthlyPayment.toFixed(2)}`;
  document.getElementById('total-payment').textContent = `$${totalPayment.toFixed(2)}`;
  document.getElementById('total-interest').textContent = `$${totalInterest.toFixed(2)}`;

  // Create the table
  const table = document.createElement('table');
  table.classList.add('repayment-schedule');

  // Add the table headers
  const headerRow = table.insertRow();
  const headers = ['Payment #', 'Date', 'Payment Amount', 'Principal', 'Interest', 'Remaining Balance'];
  for (let header of headers) {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  }

  // Add the payment details for each payment period to the table
  let remainingBalance = principal;
  let paymentDate = new Date();
  for (let paymentNumber = 1; paymentNumber <= totalPayments; paymentNumber++) {
    const paymentRow = table.insertRow();
    const paymentAmount = monthlyPayment;
    const interest = remainingBalance * monthlyInterestRate;
    const principal = paymentAmount - interest;
    remainingBalance -= principal;

    // Calculate the payment date
    paymentDate.setMonth(paymentDate.getMonth() + 1);
    const paymentDateString = paymentDate.toLocaleDateString();

    const cells = [paymentNumber, paymentDateString, `$${paymentAmount.toFixed(2)}`, `$${principal.toFixed(2)}`, `$${interest.toFixed(2)}`, `$${remainingBalance.toFixed(2)}`];
    for (let cellData of cells) {
      const td = document.createElement('td');
      td.textContent = cellData;
      paymentRow.appendChild(td);
    }
  }

  // Add the table to the page
  const tableContainer = document.getElementById('repayment-schedule');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(table);

  // Create the chart
  const myLabels = ["Loan Amount", "Total Interest"];
  const chart_data = [principal, totalInterest];
  myCustomAwesomeChart("Loan Repayment Schedule", "pie", myLabels, chart_data);
};


/* function calculateAllocation() {
  // Get the initial investment amount and selected risk level
  const initialInvestment = parseFloat(document.getElementById("initial-investment").value);
  const riskLevel = document.getElementById("risk-level").value;

  // Define the allocation percentages for each risk level
  let stockAllocation, bondAllocation, cashAllocation;
  if (riskLevel === "conservative") {
    stockAllocation = 0.4;
    bondAllocation = 0.5;
    cashAllocation = 0.1;
  } else if (riskLevel === "moderate") {
    stockAllocation = 0.6;
    bondAllocation = 0.3;
    cashAllocation = 0.1;
  } else {
    stockAllocation = 0.8;
    bondAllocation = 0.1;
    cashAllocation = 0.1;
  }

  // Calculate the dollar amount for each asset class
  const stockAmount = initialInvestment * stockAllocation;
  const bondAmount = initialInvestment * bondAllocation;
  const cashAmount = initialInvestment * cashAllocation;

  // Output the results
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
    <ul>
      <li><b>Stocks:</b> $${separateNumber(stockAmount)} (${stockAllocation * 100}%)</li>
      <li><b>Bonds:</b> $${separateNumber(bondAmount)} (${bondAllocation * 100}%)</li>
      <li><b>Cash:</b> $${separateNumber(cashAmount)} (${cashAllocation * 100}%)</li>
    </ul>
  `;
}; */


function calculateAllocation() {
  // Get the initial investment amount and selected risk level
  const initialInvestment = parseFloat(document.getElementById("initial-investment").value);
  const input_stocks = document.getElementById("input1").value;
  const input_bonds = document.getElementById("input2").value;
  const input_cash = document.getElementById("input3").value;


  stockAllocation = input_stocks/100;
  bondAllocation = input_bonds/100;
  cashAllocation = input_cash/100;


  // Calculate the dollar amount for each asset class
  const stockAmount = initialInvestment * stockAllocation;
  const bondAmount = initialInvestment * bondAllocation;
  const cashAmount = initialInvestment * cashAllocation;

  const myLabels = ["Stocks", "Bonds", "Cash"];
  const chart_data = [stockAmount, bondAmount, cashAmount];


  // Need to perform monte carlo simulation or else to find better numbers of risk.
  var stockRisk = 0.15; // 15% standard deviation of returns for stocks
  var bondRisk = 0.05; // 5% standard deviation
  var cashRisk = 0.01; // 1% standard deviation
  var risk = portfolioRisk(stockAllocation, bondAllocation, cashAllocation, stockRisk, bondRisk, cashRisk);

  // Risk under 0.075 = low risk, better for low time horizone
  // Risk under 0.99 = moderate risk, better for a longer time horzone
  // risk over 0.12 = high risk, better for very long time horizons

/*   let risk_help = "";
  if (risk >= 0.5) {
// something
  } else {
    risk_help = "This allocation has lower risk and may require a shorter time horizon."
  }
 */
  // <li>${risk_level(risk)} </li>
  // Output the results
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
    <ul>
      <li><b>Stocks:</b> $${separateNumber(stockAmount)} (${input_stocks}%)</li>
      <li><b>Bonds:</b> $${separateNumber(bondAmount)} (${input_bonds}%)</li>
      <li><b>Cash:</b> $${separateNumber(cashAmount)} (${input_cash}%)</li>
      <li>${risk_level(risk)}</li>
    </ul>
  `;

  myCustomAwesomeChart("Asset Allocation", "pie", myLabels, chart_data);
};

// This allocation has lower risk and may require a shorter time horizon.

function risk_level(risk) {

      let result_risk;
      let result_time;

      if ( risk > 0.13) { // 0.15 is max
        result_risk = "very high";
        result_time = "very long";
      } else if ( risk > 0.11) {
        result_risk = "higher";
        result_time = "longer";
      } else if ( risk > 0.08) {
        result_risk = "moderate";
        result_time = "moderate";
      } else if ( risk > 0.05) {
        result_risk = "lower";
        result_time = "shorter";
      } else {
        result_risk = "very low";
        result_time = "very short";
      }

      return `This allocation has ${result_risk} risk and may require a ${result_time} time horizon.`;
}



 /*  // get all the input and range elements
  const inputs = document.querySelectorAll('input[type="number"]');
  const ranges = document.querySelectorAll('input[type="range"]');
  
  // function to update the input and range values when a number input field is changed
  function updateValuesFromInput(inputIndex) {
    // get the total value of all the input fields
    const total = Array.from(inputs).reduce((accumulator, input) => accumulator + Number(input.value), 0);
    
    // calculate the new value for the current range input field
    let value = Math.round((inputs[inputIndex].value / total) * 100);
    if (total > 100) {
      value = Math.max(value - (total - 100), 0);
    }
    
    // set the value of the corresponding range input field
    ranges[inputIndex].value = value;
  }
  
  // function to update the input and range values when a range input field is changed
  function updateValuesFromRange(rangeIndex) {
    // calculate the new value for the current input field
    let value = ranges[rangeIndex].value;
    
    // get the total value of all the range input fields except for the current one
    const total = Array.from(ranges).reduce((accumulator, range, index) => index !== rangeIndex ? accumulator + Number(range.value) : accumulator, 0);
    
    if (total + Number(value) > 100) {
      value = Math.max(100 - total, 0);
    }
    
    // set the value of the corresponding input field
    inputs[rangeIndex].value = value;
  }
  
  // update the input and range values when any of the input fields change
  inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
      updateValuesFromInput(index);
    });
  });
  
  // update the input and range values when any of the range input fields change
  ranges.forEach((range, index) => {
    range.addEventListener('input', () => {
      updateValuesFromRange(index);
    });
  }); */


/* 
  function update_fields(value1, value2, value3, input1, input2, input3){
    const field1 = document.getElementById(input1);
    const field2 = document.getElementById(input2);
    const field3 = document.getElementById(input3);
  
    field1.value = value1;
    field2.value = value2;
    field3.value = value3;
  
  }; */


/*   function update_fields(...valuesAndInputs) {
    for (let i = 0; i < valuesAndInputs.length; i += 2) {
      const value = valuesAndInputs[i];
      const inputId = valuesAndInputs[i+1];
      const field = document.getElementById(inputId);
      field.value = value;
    }
  } */


  function update_input_and_range(...values_inputs_ranges) {
    for (let i = 0; i < values_inputs_ranges.length; i += 3) {
      const value = values_inputs_ranges[i];
      const inputId = values_inputs_ranges[i+1];
      const rangeId = values_inputs_ranges[i+2];
      const field = document.getElementById(inputId);
      const range = document.getElementById(rangeId);
      field.value = value;
      range.value = value;
    }
  };


  function createAllocationComponent(inputIds, rangeIds) {
    const inputs = inputIds.map(id => document.getElementById(id));
    const ranges = rangeIds.map(id => document.getElementById(id));
  
    function updateValuesFromInput(inputIndex) {
      const total = Array.from(inputs).reduce((accumulator, input) => accumulator + Number(input.value), 0);
      let value = Math.round((inputs[inputIndex].value / total) * 100);
      if (total > 100) {
        value = Math.max(value - (total - 100), 0);
      }
      ranges[inputIndex].value = value;
    }
  
    function updateValuesFromRange(rangeIndex) {
      let value = ranges[rangeIndex].value;
      const total = Array.from(ranges).reduce((accumulator, range, index) => {
        if (index !== rangeIndex) {
          return accumulator + Number(range.value);
        }
        return accumulator;
      }, 0);
      if (total + Number(value) > 100) {
        value = Math.max(100 - total, 0);
      }
      if (value == ranges[rangeIndex].max && ranges[rangeIndex].value != ranges[rangeIndex].max) {
        ranges[rangeIndex].value = ranges[rangeIndex].value;
      } else {
        inputs[rangeIndex].value = value;
        ranges[rangeIndex].value = value;
      }
    }
  
    function updateFromInputs() {
      inputs.forEach((input, index) => {
        const existingListener = input.getAttribute('data-listener');
        if (existingListener) {
          input.removeEventListener('input', existingListener);
        }
        const newListener = () => updateValuesFromInput(index);
        input.addEventListener('input', newListener);
        input.setAttribute('data-listener', newListener);
      });
    }
    
    
  
    function updateFromRanges() {
      ranges.forEach((range, index) => {
        range.addEventListener('input', () => {
          updateValuesFromRange(index);
        });
      });
    };

  
    updateFromInputs();
    updateFromRanges();
  
    return {
      updateFromInputs,
      updateFromRanges,
    };
  }


//  Need better name. Maybe toggle_active_class
  function changeColor(clickedDiv) {
    var clickableDivs = document.getElementsByClassName("clickable-div");
    var targetDiv = document.getElementById("target-div");
    var inputField1 = document.getElementById("input1").value;
    var inputField2 = document.getElementById("input2").value;
    var inputField3 = document.getElementById("input3").value;
    
    if (inputField1 === "value1" && inputField2 === "value2" && inputField3 === "value3") {
      targetDiv.classList.add("active");
    } else {
      targetDiv.classList.remove("active");
    }
    
    for (var i = 0; i < clickableDivs.length; i++) {
      if (clickableDivs[i] == targetDiv || clickableDivs[i] == clickedDiv) {
        continue;
      }
      clickableDivs[i].classList.remove("active");
    }
    clickedDiv.classList.add("active");
  }
  
  


  function show_total_value(result, ...inputIds) {
    const myResult = document.getElementById(result);
    let total = 0;
    for (let i = 0; i < inputIds.length; i++) {
      const input = document.getElementById(inputIds[i]);
      total += Number(input.value);
    }
    myResult.innerHTML = total;
  };


  // Need to do a Monte Carlo simulation for better numbers.
  function portfolioRisk(stockAllocation, bondAllocation, cashAllocation, stockRisk, bondRisk, cashRisk) {
    var portfolioRisk = Math.sqrt(Math.pow(stockAllocation * stockRisk, 2) + Math.pow(bondAllocation * bondRisk, 2) + Math.pow(cashAllocation * cashRisk, 2));
    return portfolioRisk;
  };


// FV = PV * (1 + (r/n))^nt + PMT * (((1 + (r/n))^nt - 1) / (r/n))
/* function calculateFutureValue(presentValue, interestRate, time, interestCompounded) {
  let n = 1;
  if (interestCompounded === "quarterly") {
    n = 4;
  } else if (interestCompounded === "monthly") {
    n = 12;
  } else if (interestCompounded === "daily") {
    n = 365;
  }

  let futureValue;
  if (interestCompounded === "end") {
    futureValue = presentValue * Math.pow(1 + interestRate / n, n * time);
  } else {
    futureValue = presentValue * (1 + interestRate / n);
    futureValue = Math.pow(futureValue, n * time);
  }

  return futureValue;
}

const presentValue = 1000;
const interestRate = 0.05;
const time = 5;
const interestCompounded = "end"; // or "beginning", "quarterly", "monthly", or "daily"
const futureValue = calculateFutureValue(presentValue, interestRate, time, interestCompounded);
console.log("Future value: ", futureValue); */


// future value of an ordinary annuity
// FV = Furture Vale, PV = Present Value, r = annual interest rate, n = number of periods interest held
// P = payments, I = interest rate (discount) rate, N = Number of payments
// FV = PV(1+r)^n + P * ((1 + r)^N - 1 )/r    **

/* function future_value(present_value_PV, interest_rate_r, periods_n, payment_P) {

const futureValue = present_value_PV * Math.pow((1+interest_rate_r), periods_n); // Seems to work

const futureValuePeriodic = payment_P * (Math.pow(1+interest_rate_r, periods_n) - 1)/interest_rate_r; // Not working :(

return futureValue + futureValuePeriodic;

} */


/* function future_value(present_value_PV, interest_rate_r, periods_n, payment_P) {
  const futureValue = present_value_PV * Math.pow((1 + interest_rate_r), periods_n); // Future value without payments
  const futureValuePeriodic = payment_P * ((Math.pow(1 + interest_rate_r, periods_n) - 1) / interest_rate_r); // Future value of payments
  const totalFutureValue = futureValue + futureValuePeriodic; // Total future value
  return totalFutureValue;
  } */


  // TODO:
  // Add total interest
  // Add Total Periodic Deposits
  // Add Number of Period
  // Add table data for start principal	, start balance, interest, end balance, end principal
  // Add Present Value??

  // Works!
/*   function future_value(present_value_PV, interest_rate_r, periods_n, payment_P, payment_timing = "end") {
    const futureValue = present_value_PV * Math.pow((1 + interest_rate_r), periods_n); // Future value without payments
    let futureValuePeriodic;
    if (payment_timing === "end") {
      futureValuePeriodic = payment_P * ((Math.pow(1 + interest_rate_r, periods_n) - 1) / interest_rate_r); // Future value of payments made at the end of each period
    } else if (payment_timing === "beginning") {
      futureValuePeriodic = payment_P * ((Math.pow(1 + interest_rate_r, periods_n) - 1) / interest_rate_r) * (1 + interest_rate_r); // Future value of payments made at the beginning of each period
    }
    const totalFutureValue = futureValue + futureValuePeriodic; // Total future value
    return totalFutureValue;
  }; */
  


  // Make this function work the same but return a object of more items. Such as present value, total intrest. And an array for displaying at a table that has for peach periods start principal, start balance, interest, end balance, end principal
  function future_value(present_value_PV, interest_rate_r, periods_n, payment_P, payment_timing = "end") {

    const futureValue = present_value_PV * Math.pow((1 + interest_rate_r), periods_n); // Future value without payments
    let futureValue_total_interest = futureValue - present_value_PV;

    const futureValues = {};
    const only_future_values = [];
/*     for (let periods = 1; periods <= periods_n; periods++) {
      const futureValue = present_value_PV * Math.pow((1 + interest_rate_r), periods);
      const last_futureValue = present_value_PV * Math.pow((1 + interest_rate_r), (periods-1));

      let the_interest = futureValue - last_futureValue;
      futureValues[periods] = { pv: futureValue }; // add property to object
      futureValues[periods].pv_interest = the_interest ; // add property to object
    }
 */

    let futureValuePeriodic;
    let futureValuePeriodic_each_period;
    let futureValuePeriodic_interest_each_period;
    let futureValuePeriodic_total_interest;
    
    if (payment_timing === "end") {
      futureValuePeriodic = payment_P * ((Math.pow(1 + interest_rate_r, periods_n) - 1) / interest_rate_r); // Future value of payments made at the end of each period
      futureValuePeriodic_total_interest = futureValuePeriodic - payment_P * periods_n;

      for (let p = 1; p <= periods_n; p++) {

        const futureValue = present_value_PV * Math.pow((1 + interest_rate_r), p);
        const last_futureValue = present_value_PV * Math.pow((1 + interest_rate_r), (p-1));

        futureValuePeriodic_each_period = payment_P * ((Math.pow(1 + interest_rate_r, p) - 1) / interest_rate_r); // Future value of payments made at the end of each period
        futureValues[p] = { "Future Value": separateNumber(futureValuePeriodic_each_period + futureValue)}; // add property to object
        fixed_values = (futureValuePeriodic_each_period + futureValue).toFixed(2)
        only_future_values.push(fixed_values);
        futureValues[p]["Perodic Returns"] = separateNumber(futureValuePeriodic_each_period - payment_P * p + futureValue-last_futureValue);
        // futureValues[p] = futureValuePeriodic_each_period - payment_P * p + futureValue-last_futureValue;
      }

    } else if (payment_timing === "beginning") {
      futureValuePeriodic = payment_P * ((Math.pow(1 + interest_rate_r, periods_n) - 1) / interest_rate_r) * (1 + interest_rate_r); // Future value of payments made at the beginning of each period
      futureValuePeriodic_total_interest = futureValuePeriodic - payment_P * periods_n;

      for (let p = 1; p <= periods_n; p++) {
        const futureValue = present_value_PV * Math.pow((1 + interest_rate_r), p);
        const last_futureValue = present_value_PV * Math.pow((1 + interest_rate_r), (p-1));

        futureValuePeriodic_each_period = payment_P * ((Math.pow(1 + interest_rate_r, p) - 1) / interest_rate_r) * (1 + interest_rate_r); // Future value of payments made at the end of each period
        futureValues[p] = { "Future Value": separateNumber(futureValuePeriodic_each_period + futureValue)}; // add property to object
        fixed_values = (futureValuePeriodic_each_period + futureValue).toFixed(2)
        only_future_values.push(fixed_values);
        futureValues[p]["Perodic Returns"] = separateNumber(futureValuePeriodic_each_period - payment_P * p + futureValue-last_futureValue);
      }
    }

    //console.log(Object.keys(futureValues[1]))

    const total_interest = futureValue + futureValuePeriodic_each_period - (parseInt(present_value_PV) + parseInt(payment_P) * parseInt(periods_n));
    const totalFutureValue = futureValue + futureValuePeriodic; // Total future value
    const return_array = {total: totalFutureValue, total_interest: total_interest, only_future_value: only_future_values, the_array: futureValues}
    //console.log(totalFutureValue)
    return return_array;
  };



  // TODO
  // Add to a object every future value

  // Total Interest
  // Total Periodic Deposits
  function calculate_future_value() {
    const present_value = document.getElementById("present-value").value;
    const periods = document.getElementById("number-of-periods").value;
    const interest = document.getElementById("interest-rate").value;
    const periodic_deposit = document.getElementById("periodic-deposit").value;
    const paymentTimingRadios = document.getElementsByName('payment-timing');

    // For the radio buttons
    let payment_timing;
    for (let i = 0; i < paymentTimingRadios.length; i++) {
      if (paymentTimingRadios[i].checked) {
        payment_timing = paymentTimingRadios[i].value;
        break;
      }
    }

    const result = future_value(present_value, interest/100, periods, periodic_deposit, payment_timing)

    //console.log(result.totalFutureValue)
    //console.log(result.the_array)

    document.getElementById('future-value').innerHTML = separateNumber(result.total);
    document.getElementById('total-interest').innerHTML = separateNumber(result.total_interest);


    populateTable(result.the_array, "table-future-value")
    //load_object_to_table(result.the_array, "table-future-value");

    //const tableLabels = Object.keys(result.the_array[1])
    const every_key_heading = Object.keys(result.the_array)

    //myCustomAwesomeChart("ROI" ,"line", result.only_future_value, every_key_heading);
    myCustomChart("Future Value","line", result.only_future_value, every_key_heading);
  };


  function load_object_to_table(data, tableId) {
    const table = document.getElementById(tableId);
  
    // Clear existing table rows
    while (table.rows.length > 0) {
      table.deleteRow(0);
    }
  
    // Add header row
    const headerRow = table.insertRow(0);
    const headerCells = Object.keys(data[1]).map(key => {
      const cell = document.createElement('th');
      cell.textContent = key;
      return cell;
    });
    headerCells.forEach(cell => headerRow.appendChild(cell));
  
    // Add data rows
    Object.keys(data).forEach(rowKey => {
      const rowData = data[rowKey];
      const row = table.insertRow(-1);
      Object.keys(rowData).forEach(cellKey => {
        const cell = row.insertCell(-1);
        cell.textContent = rowData[cellKey];
      });
    });
  }


  function populateTable(data, tableId) {
    // Get the table element and create a new table body
    const table = document.querySelector(`#${tableId}`);
    const newTableBody = document.createElement('tbody');
    newTableBody.classList.add('my-tbody'); // Add a class to the new table body

    // Add a row for the table headings
    const headingRow = document.createElement('tr');
    const periodsHeading = document.createElement('th');
    periodsHeading.textContent = 'Periods';
    headingRow.appendChild(periodsHeading);

    const futureValueHeading = document.createElement('th');
    futureValueHeading.textContent = 'Future Value';
    headingRow.appendChild(futureValueHeading);

    const periodicReturnsHeading = document.createElement('th');
    periodicReturnsHeading.textContent = 'Periodic Returns';
    headingRow.appendChild(periodicReturnsHeading);

    newTableBody.appendChild(headingRow);

    // Loop through the data array and create a new row for each item
    for (const [key, value] of Object.entries(data)) {
        // Create a new table row
        const row = document.createElement('tr');

        // Create a cell for the key (period)
        const keyCell = document.createElement('td');
        keyCell.textContent = key;
        row.appendChild(keyCell);

        // Create a cell for the future value
        const futureValueCell = document.createElement('td');
        futureValueCell.textContent = value['Future Value'];
        row.appendChild(futureValueCell);

        // Create a cell for the periodic returns
        const periodicReturnsCell = document.createElement('td');
        periodicReturnsCell.textContent = value['Perodic Returns'];
        row.appendChild(periodicReturnsCell);

        // Add the row to the new table body
        newTableBody.appendChild(row);
    }

    // Replace the old table body with the new one
    const oldTableBody = table.querySelector('.my-tbody');
    if (oldTableBody) {
        table.replaceChild(newTableBody, oldTableBody);
    } else {
        table.appendChild(newTableBody);
    }
};
  

/* function calculateFIRE(currentSavingsId, annualReturnId, annualExpensesId, retirementLengthId, expectedInflationId) {
  var currentSavings = parseFloat(document.getElementById(currentSavingsId).value);
  var annualReturn = parseFloat(document.getElementById(annualReturnId).value);
  var annualExpenses = parseFloat(document.getElementById(annualExpensesId).value);
  var retirementLength = parseInt(document.getElementById(retirementLengthId).value);
  var expectedInflation = parseFloat(document.getElementById(expectedInflationId).value);

  var annualExpensesInflationAdjusted = annualExpenses * Math.pow(1 + expectedInflation / 100, retirementLength);
  var retirementSavingsNeeded = annualExpensesInflationAdjusted / (annualReturn / 100);
  var totalSavingsNeeded = retirementSavingsNeeded - currentSavings;
  var monthsToRetire = retirementLength * 12;
  var monthlySavingsNeeded = totalSavingsNeeded / monthsToRetire;
  var retirementYear = new Date().getFullYear() + retirementLength;

  console.log("retirementSavingsNeeded:", retirementSavingsNeeded)
  
  return {
    retirementSavingsNeeded: retirementSavingsNeeded.toFixed(2),
    totalSavingsNeeded: totalSavingsNeeded.toFixed(2),
    monthlySavingsNeeded: monthlySavingsNeeded.toFixed(2),
    retirementYear: retirementYear
  };
}; */



function calculateYearsToReachGoal(startingAmount, yearlySavings, goalAmount, annualInterestRate) {
  let totalAmount = startingAmount;
  let years = 0;
  const yearlySavingsArray = [];
  const table_data = {};

  while (totalAmount < goalAmount) {
    totalAmount += yearlySavings;
    totalAmount *= (1 + annualInterestRate);
    yearlySavingsArray.push(totalAmount.toFixed(2));
    years++;
    if (!table_data[years]) {
      table_data[years] = {};
    }
    
    table_data[years]["Year"] = years + " Year";
    table_data[years]["Total Value"] = "$" + separateNumber(totalAmount);
    
  }

  const return_this = {years: years, each_years: yearlySavingsArray, table_data: table_data};
  return return_this;
}


// TODO:
// Annual Expenses * 25 = Yearly.
// OR Monthly Expenses * 300

// Calculate year of retirement.
// Compound Current Savings + Annual income - annual expenses.
// Age (if you want)


// --Maybe choose monthly or annual? 
// Current Savings
// Annual Expenses
// Annual Savings
// Average rate of return - CTA to a average allocation return

function calculate_FIRE(currentSavingsId, addedSavingsId, annualReturnId, ExpensesId) {
  const currentSavings = parseFloat(document.getElementById(currentSavingsId).value);
  const addedSavings = parseFloat(document.getElementById(addedSavingsId).value);
  const returns = parseFloat(document.getElementById(annualReturnId).value)/100;
  const expenses = parseFloat(document.getElementById(ExpensesId).value);

  const currentYear = new Date().getFullYear();

  const capital_needed = expenses * 25; //4% rule

  const year_result = calculateYearsToReachGoal(currentSavings, addedSavings, capital_needed, returns);
  const years_to_reach_goal = year_result.years;
  const year_of_retirement = currentYear + years_to_reach_goal
  //const present_value = 0; // calculate_present_value

  // (startingAmount, yearlySavings, goalAmount, annualInterestRate)  

  const return_this = {years_left: years_to_reach_goal, year: year_of_retirement, capital_needed: capital_needed, yoy_returns: year_result.each_years, table_data: year_result.table_data}

  return return_this;
}


function calculateFIRE(currentSavingsId, annualReturnId, annualExpensesId, retirementLengthId, expectedInflationId) {
  var currentSavings = parseFloat(document.getElementById(currentSavingsId).value);
  var annualReturn = parseFloat(document.getElementById(annualReturnId).value);
  var annualExpenses = parseFloat(document.getElementById(annualExpensesId).value);
  var retirementLength = parseInt(document.getElementById(retirementLengthId).value);
  var expectedInflation = parseFloat(document.getElementById(expectedInflationId).value);

  var annualExpensesInflationAdjusted = annualExpenses * Math.pow(1 + expectedInflation / 100, retirementLength);
  var retirementSavingsNeeded = annualExpensesInflationAdjusted / (annualReturn / 100);
  var totalSavingsNeeded = retirementSavingsNeeded - currentSavings;
  var monthsToRetire = retirementLength * 12;
  var monthlySavingsNeeded = totalSavingsNeeded / monthsToRetire;
  var retirementYear = new Date().getFullYear() + retirementLength;

  console.log("retirementSavingsNeeded:", retirementSavingsNeeded)
  
  return {
    retirementSavingsNeeded: retirementSavingsNeeded.toFixed(2),
    totalSavingsNeeded: totalSavingsNeeded.toFixed(2),
    monthlySavingsNeeded: monthlySavingsNeeded.toFixed(2),
    retirementYear: retirementYear
  };
};


function number_to_array(num) {
  let result = [];

  for (let i = 1; i <= num; i++) {
    result.push(i);
  }

  return result;
}




function fire_calc() {

  const result = calculate_FIRE("savings", "add-savings", "annual-return", "expenses");

  document.getElementById("capital-needed").innerHTML ="$" + separateNumber(result.capital_needed);
  document.getElementById("total-years").innerHTML = result.years_left + " years (" + result.year +")";
  /* document.getElementById("year-of-retirement").innerHTML = result.year; */


  myCustomChart("Compund Rate","line", number_to_array(result.years_left),result.yoy_returns);


  //populateTable(result.table_data, "table-fire")
  load_object_to_table(result.table_data, "table-fire")

}

// Not tested
function calculateInvestmentFee(investedAmount, years, investmentReturn, fee1, fee2) {
  // Calculate investment returns after fees
  const investment1 = investedAmount * Math.pow(1 + investmentReturn / 100 - fee1 / 100, years);
  const investment2 = investedAmount * Math.pow(1 + investmentReturn / 100 - fee2 / 100, years);

  // Calculate total fees paid
  const totalFee1 = investedAmount * (Math.pow(1 + fee1 / 100, years) - 1);
  const totalFee2 = investedAmount * (Math.pow(1 + fee2 / 100, years) - 1);

  // Calculate total return after fees
  const totalReturn1 = investment1 - investedAmount - totalFee1;
  const totalReturn2 = investment2 - investedAmount - totalFee2;


  let difference = investment1 - investment2;
  if (difference < 0) {
    difference = Math.abs(difference);
  }


  // Round the results to two decimal places
  const roundedInvestment1 = Math.round(investment1 * 100) / 100;
  const roundedInvestment2 = Math.round(investment2 * 100) / 100;
  const roundedTotalReturn1 = Math.round(totalReturn1 * 100) / 100;
  const roundedTotalReturn2 = Math.round(totalReturn2 * 100) / 100;
  const roundedTotalFee1 = Math.round(totalFee1 * 100) / 100;
  const roundedTotalFee2 = Math.round(totalFee2 * 100) / 100;

/*   console.log(`Investment with fee ${fee1}%: $${roundedInvestment1}, total fees paid: $${roundedTotalFee1}, total return after fees: $${roundedTotalReturn1}`);
  console.log(`Investment with fee ${fee2}%: $${roundedInvestment2}, total fees paid: $${roundedTotalFee2}, total return after fees: $${roundedTotalReturn2}`); */

  // Return the results as an object
  return {
    investment1: roundedInvestment1,
    investment2: roundedInvestment2,
    totalReturn1: roundedTotalReturn1,
    totalReturn2: roundedTotalReturn2,
    totalFee1: roundedTotalFee1,
    totalFee2: roundedTotalFee2,
    difference: difference
  };
}


function fee_calculator() {
  var startingAmount = parseFloat(document.getElementById("invested-amount").value);
  var years = parseFloat(document.getElementById("years").value);
  var investmentReturn = parseFloat(document.getElementById("investment-return").value);
  var fee_one = parseFloat(document.getElementById("fee-one").value);
  var fee_two = parseFloat(document.getElementById("fee-two").value);

  var result = calculateInvestmentFee(startingAmount, years, investmentReturn, fee_one, fee_two)


  document.getElementById("first-fee").innerHTML = fee_one + "%";
  document.getElementById("first-fee-result").innerHTML = "$" + separateNumber(result.investment1);

  document.getElementById("second-fee").innerHTML = fee_two + "%";
  document.getElementById("second-fee-result").innerHTML = "$" + separateNumber(result.investment2);

  document.getElementById("difference").innerHTML = "$" + separateNumber(result.difference);

  const chart_lables = ["Fee " + fee_one + "%", "Fee " + fee_two + "%", "Difference"];
  const chart_data = [result.investment1, result.investment2, result.difference];

  myCustomAwesomeChart("Fee Comparison" ,"bar", chart_lables, chart_data);

};



/* function addInputFieldsToID(id, addBtn) {
  // Get a reference to the form and the "Add" button
  const myForm = document.getElementById(id);
  const addButton = document.getElementById(addBtn);
  
  // Add an event listener to the "Add" button
  addButton.addEventListener("click", function() {
    // Create two new input fields
    const input1 = document.createElement("input");
    const input2 = document.createElement("input");
    
    // Set the type and name of the input fields
    input1.type = "text";
    input1.name = "input1[]"; // Use [] to create an array of values
    input2.type = "text";
    input2.name = "input2[]";
    
    // Create a new "Delete" button
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("btn-remove"); // Add the "btn-remove" class
    
    // Add an event listener to the "Delete" button
    deleteButton.addEventListener("click", function() {
      // Remove the input fields and the "Delete" button from the form
      myForm.removeChild(input1);
      myForm.removeChild(input2);
      myForm.removeChild(deleteButton);
    });
    
    // Insert the new elements after the input fields
    myForm.insertBefore(input1, addButton);
    myForm.insertBefore(input2, addButton);
    myForm.insertBefore(deleteButton, addButton);
  });
} */

function addInputFieldsToID(id, addBtn) {
  // Get a reference to the form and the "Add" button
  const myForm = document.getElementById(id);
  const addButton = document.getElementById(addBtn);

  // Add an event listener to the "Add" button
  addButton.addEventListener("click", function() {
    // Create a new fieldset to contain the input fields and button
    const fieldset = document.createElement("fieldset");

    // Create two new input fields
    const input1 = document.createElement("input");
    const input2 = document.createElement("input");

    // Set the type and name of the input fields
    input1.type = "text";
    input1.name = "input1[]"; // Use [] to create an array of values
    input1.placeholder = "Name...";
    input1.oninput = calc_net_wealth;

    input2.type = "number";
    input2.name = "input2[]";
    input2.placeholder = "$0";
    input2.oninput = calc_net_wealth;

    // Create a new "Delete" button
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("btn-remove"); // Add the "btn-remove" class

    // Add an event listener to the "Delete" button
    deleteButton.addEventListener("click", function() {
      // Remove the entire fieldset element from the form
      myForm.removeChild(fieldset);
      // Recalculate the total net worth after deleting the fieldset
      calc_net_wealth();
    });

    // Add the input fields and button to the fieldset
    fieldset.appendChild(input1);
    fieldset.appendChild(input2);
    fieldset.appendChild(deleteButton);

    // Insert the new elements after the input fields
    myForm.insertBefore(fieldset, addButton);
  });
}


function calculate_total_number_input(formId) {
  // Get a reference to the form element
  const form = document.getElementById(formId);
  
  // Get all the number input fields in the form
  const numberInputs = form.querySelectorAll('input[type="number"]');
  
  // Initialize a variable to hold the total value
  let total = 0;
  
  // Loop through each number input field and add its value to the total
  numberInputs.forEach(function(input) {
    total += parseInt(input.value) || 0;
  });
  
  // Return the total value
  return total;
};

// TODO
// Maybe add debounce/eventlistner since it wont work to show many diffrent charts.
function calc_net_wealth() {
  const total_assets = calculate_total_number_input("form-assets");
  const total_liabilities = calculate_total_number_input("form-liabilities");
  
  const net_worth = total_assets - total_liabilities;


  if (net_worth < 20000) {
    //console.log("Under 20k")
  } else if ( net_worth < 80000) {
    // Median US net worth of a 35 year old.??
  }
  //console.log(text_and_number_to_object("form-assets"))

  document.getElementById("total-assets").innerHTML = "$" + total_assets; 
  document.getElementById("total-liabilities").innerHTML = "$" + total_liabilities;
  document.getElementById("total-net-worth").innerHTML = "$" + net_worth;

  const assets_result = extractLabelsAndDataKeys(text_and_number_to_object("form-assets"));
  const liabilities_result = extractLabelsAndDataKeys(text_and_number_to_object("form-liabilities"));

  generate_chart("Assets", "pie", assets_result.mylabels, assets_result.mykeys, "chartAssets");
  generate_chart("Liabilities", "pie", liabilities_result.mylabels, liabilities_result.mykeys, "chartLiabilities");

};


  function text_and_number_to_object(containerId) {
    // Get the container element
    const container = document.getElementById(containerId);
  
    // Get all text and number inputs that are descendants of the container
    const inputs = container.querySelectorAll('input[type="text"], input[type="number"]');
    
    // Create an object to store the inputs
    const inputObj = {};
  
    // Loop through the inputs and add them to the object
    for (let i = 0; i < inputs.length; i += 2) {
      const key = inputs[i].value;
      const value = inputs[i+1].value;
  
      // Add the key-value pair to the object
      inputObj[key] = value;
    }
  
    return inputObj;
  };


  //Add function with the_title, htmlContent
  function createPDF(the_title, htmlContent) {
    // Create an HTML string containing the content you want to include in the PDF
    //var htmlContent = '<h1>Total Net Worth</h1><p>This is some example text that will be included in the PDF.</p>';

    // Create a new window to print the PDF to
    var printWindow = window.open('', '', 'height=600,width=800');

    // Write the HTML content and CSS styles to the new window
    printWindow.document.write('<html><head><title>' + the_title + '</title>');
    printWindow.document.write('<style>.container { display: flex; justify-content: space-between; } .column { flex: 1; }</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(htmlContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();

    // Print the window
    printWindow.print();

    // Get the PDF data from the printWindow and create a blob
    var pdfData = printWindow.document.documentElement.innerHTML;
    var blob = new Blob([pdfData], {type: 'application/pdf'});

    // Create a URL for the blob
    var url = URL.createObjectURL(blob);

    // Open a new window with the URL and set the Content-Disposition header to force download
    var downloadWindow = window.open(url, '_blank');
    downloadWindow.document.title = 'my-pdf-file.pdf';
    downloadWindow.document.head.innerHTML += '<meta http-equiv="Content-Disposition" content="attachment; filename=my-pdf-file.pdf">';

    // Close the original printWindow
    printWindow.close();
};



/* function generate_chart(chartInputLabel, chartType, chartLabels, chartDataset, id) {

  const myChartData = {
    labels: chartLabels,
    datasets: [{
      label: chartInputLabel,
      backgroundColor: ['#006600', 'rgb(0, 56, 101)', 'rgb(239, 91, 12)', 'rgb(212, 246, 204)'],
      borderColor: 'rgb(253,254,254)',
      data: chartDataset,
    }]
  };

  const chartConfig = {
    type: chartType,
    data: myChartData,
    options: {
      legend: {
        display: true // true/false Removes the Label. 
      },
      plugins: {
        labels: {
          render: 'percentage'
        }
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) { // It works!!
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
              return previousValue + currentValue;
            });
            var currentValue = dataset.data[tooltipItem.index];
            var percentage = Math.floor(((currentValue/total) * 100)+0.5);
            var label = data.labels[tooltipItem.index];
            var value = dataset.data[tooltipItem.index];
            return label + ': ' + "$" + separateNumber(value) + ' (' + percentage + '%)';
          }
        }
      }
    }
  };

  if (myChart) {
    // If a chart instance already exists, update its data and options
    myChart.data = myChartData;
    myChart.options = chartConfig.options;
    myChart.update();
  } else {
    // Otherwise, create a new chart instance
    myChart = new Chart(document.getElementById(id), chartConfig);
  }
}; */


function extractLabelsAndDataKeys(obj) {
  let labels = [];
  let dataKeys = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      labels.push(key);
      dataKeys.push(obj[key]);
    }
  }

  return { mylabels: labels, mykeys: dataKeys };
};


// Should move myCustomChart() to this.
function generate_chart(chartInputLabel, chartType, chartLabels, chartDataset, id) {

  const myChartData = {
    labels: chartLabels,
    datasets: [{
      label: chartInputLabel,
      backgroundColor: chartType === 'line' ? '#006600' : ['#006600', 'rgb(0, 56, 101)', 'rgb(239, 91, 12)', 'rgb(212, 246, 204)', 'rgb(255, 0, 0)'],
      /* borderColor: '#006600', // Set line color */
      borderWidth: 2, // Set line width
      pointBackgroundColor: 'black', // Set dot color
      pointRadius: 5, // Set dot size
      pointHoverRadius: 7, // Set dot hover size
      data: chartDataset,
    }]
  };
  

  const chartConfig = {
    type: chartType,
    data: myChartData,
    options: {
      legend: {
        display: true // true/false Removes the Label. 
      },
      plugins: {
        labels: {
          render: 'percentage'
        }
      },   scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontColor: 'black'
          }
        }],
        xAxes: [{    
          barPercentage: 0.5, // Adjust the width of the bars
          categoryPercentage: 1 // Adjust the width of the bars
        }]
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
              return previousValue + Number(currentValue);
            }, 0);
            var currentValue = Number(dataset.data[tooltipItem.index]);
            var percentage = Math.floor(((currentValue/total) * 100)+0.5);
            var label = data.labels[tooltipItem.index];
            var value = dataset.data[tooltipItem.index];
            var formattedValue = separateNumber(value);
            if (value !== 0 && total !== 0) {
              return label + ': $' + formattedValue + ' (' + percentage + '%)';
            } else {
              return label + ': $' + formattedValue;
            }
          }          
        }        
      }      
    }
  };

  var ctx = document.getElementById(id);
  if (ctx) {
    // If a chart instance already exists, destroy it before creating a new one
    if (ctx.chart) {
      ctx.chart.destroy();
    }
    // Create a new chart instance
    ctx.chart = new Chart(ctx, chartConfig);
  } else {
    console.error("Canvas element with id " + id + " not found.");
  }
};


// TODO:
// Get all form data.
// Turn it to HTML.
// Display assets + liabilities next to eachother.
// Add chartjs under.
function create_net_worth_pdf() {
  const assets_object = text_and_number_to_object("form-assets");
  const liabilities_object = text_and_number_to_object("form-liabilities");

  const total_assets = calculate_total_number_input("form-assets");
  const total_liabilities = calculate_total_number_input("form-liabilities");
  
  const net_worth = total_assets - total_liabilities;


/*   const assets_result = extractLabelsAndDataKeys(text_and_number_to_object("form-assets"));
  const liabilities_result = extractLabelsAndDataKeys(text_and_number_to_object("form-liabilities"));

  generate_chart("Assets", "pie", assets_result.mylabels, assets_result.mykeys, "chartAssets");
  generate_chart("Liabilities", "pie", liabilities_result.mylabels, liabilities_result.mykeys, "chartLiabilities"); */


  let net_worth_html = `<h1>Total Net Worth: $${net_worth}</h1><br>
  <p>Net worth is a measure of an individual's or company's financial position, calculated by subtracting total liabilities from total assets.</p>
  <div class="container">
    <div class="column">
      <h2>Assets:</h2>
      ${objectToHtml(assets_object)}
    </div>
    <div class="column">
      <h2>Liabilities:</h2>
      ${objectToHtml(liabilities_object)}
    </div>
  </div>`;


  createPDF("Net Worth", net_worth_html)
};


function objectToHtml(obj) {
  var html = '';
  var entries = Object.entries(obj);
  for (var i = 0; i < entries.length; i++) {
    var key = entries[i][0];
    var value = entries[i][1];
    html += '<b>' + key + ':</b> $' + value + '<br>';
  }
  return html;
};


function calculateEmergencyFund(monthsToCover, currentSavings, monthlyExpenses, monthlySavings) {
  const recommendedFund = monthlyExpenses * monthsToCover;
  //const totalSavings = currentSavings + (monthlySavings * monthsToCover);
  const shortfall = recommendedFund - currentSavings;
  const monthsToSave = Math.ceil(shortfall / monthlySavings);

  return {months_left: monthsToSave, recommended_fund: recommendedFund, shortfall: shortfall}
}


function calc_emergency_fund() {
  let monthsToCover = parseInt(document.getElementById("emergency-months").value);
  let currentSavings = parseInt(document.getElementById("current-emergency-fund").value);
  let monthlyExpenses = parseInt(document.getElementById("costs").value);
  let monthlySavings = parseInt(document.getElementById("monthly-savings").value);

  // If there is no value.
  [monthsToCover, currentSavings, monthlyExpenses, monthlySavings] = input_empty_equal_zero(monthsToCover, currentSavings, monthlyExpenses, monthlySavings);

  const result = calculateEmergencyFund(monthsToCover, currentSavings, monthlyExpenses, monthlySavings)

  document.getElementById("recommended-fund-result").innerHTML = "$" + separateNumber(result.recommended_fund);
  document.getElementById("savings-needed-result").innerHTML = "$" + separateNumber(result.shortfall);
  document.getElementById("months-left-result").innerHTML = separateNumber(result.months_left) + " months";

  const chart_labels = ["Savings Needed", "Current Savings"]
  const chart_data = [parseInt(result.shortfall), currentSavings]
  console.log(result.shortfall)

  generate_chart("Emergency Fund", "bar", chart_labels, chart_data, "chart-savings-needed");

};


function calculate_real_estate_commission(){
  const house_price = parseInt(document.getElementById("house-price").value);
  const commission = parseInt(document.getElementById("commission").value)/100;

  const total_commission = house_price * commission;
  const seller_receives = house_price - total_commission;
  const average_agent_commission = total_commission * 0.5;
  const low_agent_commission = total_commission * 0.3;
  const high_agent_commission = total_commission * 0.7;
  
  const the_split = "All from $" + separateNumber(low_agent_commission) + " to $" + separateNumber(high_agent_commission) + " are also likely"


  document.getElementById("amount-seller-receives-result").innerHTML = "$" + separateNumber(seller_receives);
  document.getElementById("commission-result").innerHTML = "$" + separateNumber(total_commission);
  document.getElementById("agents-commission-result").innerHTML = "$" + separateNumber(average_agent_commission);
  document.getElementById("agents-commission-range-result").innerHTML = the_split;

  const chart_labels = ["Seller Receives", "Total Commission"];
  const chart_data = [seller_receives, total_commission];

  generate_chart("House Value", "pie", chart_labels, chart_data, "chart-commission");

};


function calculateCostOfDebt(actualInterestExpense, actualTaxExpense, totalDebt) {
  // Calculate pre-tax cost of debt
  var preTaxCostOfDebt = actualInterestExpense / totalDebt;

  // Calculate after-tax cost of debt
  var afterTaxCostOfDebt = preTaxCostOfDebt * (1 - actualTaxExpense / actualInterestExpense);

  // Return results
  return {
    preTaxCostOfDebt: preTaxCostOfDebt,
    afterTaxCostOfDebt: afterTaxCostOfDebt
  };
};


function form_calc_cost_of_debt() {
  const interest_expense = document.getElementById("interest-expense").value;
  const tax_expense = document.getElementById("tax-expense").value;
  const total_debt = document.getElementById("total-debt").value;

  const result = calculateCostOfDebt(interest_expense, tax_expense, total_debt);

  document.getElementById("pre-tax-result").innerHTML = separateNumber(result.preTaxCostOfDebt * 100) + "%";
  document.getElementById("after-tax-result").innerHTML = separateNumber(result.afterTaxCostOfDebt * 100) + "%";
};


function calculateMarginInterest(borrowed, rate, days) {
  // Calculate the margin interest using the formula
  let marginInterest = borrowed * (rate / 100) / 360 * days;

  // Return the total margin interest
  return marginInterest;
};


function form_calculate_margin_interest() {
  const borrowed_amount = document.getElementById("borrow").value;
  const interest_rate = document.getElementById("rate").value;
  const time_margin = document.getElementById("days").value;

  result = calculateMarginInterest(borrowed_amount, interest_rate, time_margin);

  const new_interest =  (result / borrowed_amount) * 100;

  document.getElementById("margin-interest-result").innerHTML = "$" + separateNumber(result);
  document.getElementById("days-result").innerHTML = "For " + time_margin + " days";
  document.getElementById("percentage-result").innerHTML = separateNumber(new_interest) + "%";

  
  const chart_labels = ["Borrowed Amount", "Margin Interest Paid"];
  const chart_data = [borrowed_amount, result];

  generate_chart("Margin Interest", "pie", chart_labels, chart_data, "chart-margin-interest");
};


// For House Flip Calculator
function calculateHouseFlipProfit(propertyValue, rehabCosts, financingCosts, holdingCosts, sellingCosts, purchasePrice, closingCosts, realtorFees, profitMargin) {
  // Calculate total investment
  const totalInvestment = purchasePrice + rehabCosts + financingCosts + holdingCosts + closingCosts + realtorFees;

  // Calculate estimated sale price
  const estimatedSalePrice = propertyValue * (1 + profitMargin);

  // Calculate net profit
  const netProfit = estimatedSalePrice - totalInvestment - sellingCosts;

  // Calculate return on investment (ROI)
  //const ROI = (netProfit / totalInvestment) * 100;
  const ROI = (netProfit === 0 || totalInvestment === 0) ? 0 : (netProfit / totalInvestment) * 100;

  // Return results as an object. Everything is in values and not percentages.
  return {
    totalInvestment: totalInvestment,
    estimatedSalePrice: estimatedSalePrice,
    netProfit: netProfit,
    ROI: ROI
  };
};


function form_house_flipping() {
  let propertyValue = parseInt(document.getElementById("property-value").value);
  let rehabCosts = parseInt(document.getElementById("rehab-costs").value);
  let financingCosts = parseInt(document.getElementById("financing-costs").value);
  let holdingCosts = parseInt(document.getElementById("holding-costs").value);
  let sellingCosts = parseInt(document.getElementById("selling-costs").value);

  let purchasePrice = parseInt(document.getElementById("purchase-price").value);
  let closingCosts = parseInt(document.getElementById("closing-costs").value);
  let realtorFees = parseInt(document.getElementById("realtor-fees").value);
  let profitMargin = parseInt(document.getElementById("profit-margin").value) / 100;

  // Replace any NaN or empty values with 0
  // Did make a shorter version with function input_empty_equal_zero()
  propertyValue = isNaN(propertyValue) || propertyValue !== propertyValue ? 0 : propertyValue;
  rehabCosts = isNaN(rehabCosts) || rehabCosts !== rehabCosts ? 0 : rehabCosts;
  financingCosts = isNaN(financingCosts) || financingCosts !== financingCosts ? 0 : financingCosts;
  holdingCosts = isNaN(holdingCosts) || holdingCosts !== holdingCosts ? 0 : holdingCosts;
  sellingCosts = isNaN(sellingCosts) || sellingCosts !== sellingCosts ? 0 : sellingCosts;
  purchasePrice = isNaN(purchasePrice) || purchasePrice !== purchasePrice ? 0 : purchasePrice;
  closingCosts = isNaN(closingCosts) || closingCosts !== closingCosts ? 0 : closingCosts;
  realtorFees = isNaN(realtorFees) || realtorFees !== realtorFees ? 0 : realtorFees;
  profitMargin = isNaN(profitMargin) || profitMargin !== profitMargin ? 0 : profitMargin;

  const result = calculateHouseFlipProfit(propertyValue, rehabCosts, financingCosts, holdingCosts, sellingCosts, purchasePrice, closingCosts, realtorFees, profitMargin);

  console.log(result);

  document.getElementById("net-profit-result").innerHTML = "$" + separateNumber(result.netProfit);
  document.getElementById("total-investment-result").innerHTML = "$" + separateNumber(result.totalInvestment);
  document.getElementById("estimated-sale-price-result").innerHTML = "$" + separateNumber(result.estimatedSalePrice);
  document.getElementById("roi-result").innerHTML = separateNumber(result.ROI) + "%";


  const chart_labels = ["Net Profit", "Total Investment"];
  const chart_data = [result.netProfit, result.totalInvestment];

  generate_chart("Margin Interest", "pie", chart_labels, chart_data, "chart-house-flip");

};


function input_empty_equal_zero(...args) {
  return args.map(x => isNaN(x) || x !== x ? 0 : x);
};

//Works but only fgor numbers.
function get_id_value(...inputIds) {
  return inputIds.map(id => {
    const value = parseInt(document.getElementById(id).value);
    return isNaN(value) || value !== value ? 0 : value;
  });
};



function amortizationSchedule(loanAmount, loanTerm, interestRate, startMonth) {
  // Convert interest rate to monthly rate
  const monthlyRate = interestRate / 1200;

  // Calculate monthly payment
  const numPayments = loanTerm * 12;
  const payment = loanAmount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -numPayments));

  // Calculate amortization schedule
  const schedule = [];
  const raw_schedule = [];
  let balance = loanAmount;
  let interest, principal, month, totalInterest = 0, totalCost = 0;
  for (let i = 0; i < numPayments; i++) {
    interest = balance * monthlyRate;
    totalInterest += interest;
    principal = payment - interest;
    balance -= principal;
    totalCost += payment;
    month = new Date(startMonth.getFullYear(), startMonth.getMonth() + i, 1);

    let formatted_payment = "$" + separateNumber(payment);
    let formatted_principal = "$" + separateNumber(principal);
    let formatted_interest = "$" + separateNumber(interest);
    let formatted_balance = "$" + separateNumber(balance);
    let formatted_month = formatDate(month);
    raw_schedule.push({ month, payment, principal, interest, balance }); // Just for calculating the end payoff date
    schedule.push({ "Date": formatted_month, "Payment": formatted_payment, "Principal": formatted_principal, "Interest": formatted_interest, "Balance": formatted_balance });
  }

  // Calculate end payoff date
  const lastPaymentDate = raw_schedule[raw_schedule.length - 1].month;
  const endPayoffDate = new Date(lastPaymentDate.getFullYear(), lastPaymentDate.getMonth() + 1, 0);

  // Return summary object
  return {
    numPayments,
    payment,
    schedule,
    totalInterest: Math.round(totalInterest * 100) / 100,
    totalCost: Math.round(totalCost * 100) / 100,
    endPayoffDate
  };
};



function form_amortization_schedule() {
  let [loanAmount, years, interestRate] = get_id_value("loan-amount", "years", "interest-rate");
  let startMonth = document.getElementById("start-loan-date").value;
  startMonth = new Date(startMonth);

  const result = amortizationSchedule(loanAmount, years, interestRate, startMonth)

  object_to_table(result.schedule, "table-schedule");

  document.getElementById("monthly-payment-result").innerHTML = "$" + separateNumber(result.payment);
  document.getElementById("total-cost-result").innerHTML = "$" + separateNumber(result.totalCost);
  document.getElementById("total-interest-result").innerHTML = "$" + separateNumber(result.totalInterest);
  document.getElementById("number-of-payments-result").innerHTML = separateNumber(result.numPayments) + " times";
  document.getElementById("payoff-day-result").innerHTML = formatDate(result.endPayoffDate);

  //chart-amortization
  const chart_labels = ["Loan Amount", "Total Interest"];
  const chart_data = [loanAmount, result.totalInterest];

  generate_chart("loan vs Interest", "pie", chart_labels, chart_data, "chart-amortization");

};


function object_to_table(data, tbodyId) {
  // Check if a table with the specified id already exists
  const existingTable = document.getElementById(tbodyId)?.parentNode;
  if (existingTable) {
    // If it does, remove any existing tbody with the same id
    const existingTbody = existingTable.querySelector(`#${tbodyId}`);
    if (existingTbody) {
      existingTbody.remove();
    }
    // Create a new tbody with the specified id and append it to the existing table
    const tbody = document.createElement('tbody');
    tbody.id = tbodyId;
    existingTable.appendChild(tbody);
    // Create a header row with the keys of the first object in the data array
    const headerRow = tbody.insertRow();
    Object.keys(data[0]).forEach(key => {
      const headerCell = headerRow.insertCell();
      headerCell.textContent = key;
    });
    // Append the table rows and cells inside the new tbody
    data.forEach(obj => {
      const row = tbody.insertRow();
      Object.keys(obj).forEach(key => {
        const cell = row.insertCell();
        cell.textContent = obj[key];
      });
    });
  } else {
    // If a table with the specified id does not exist, create a new table with a tbody and append it to the document body
    const tbody = document.createElement('tbody');
    tbody.id = tbodyId;
    const table = document.createElement('table');
    table.appendChild(tbody);
    // Create a header row with the keys of the first object in the data array
    const headerRow = tbody.insertRow();
    Object.keys(data[0]).forEach(key => {
      const headerCell = headerRow.insertCell();
      headerCell.textContent = key;
    });
    // Append the table rows and cells inside the new tbody
    data.forEach(obj => {
      const row = tbody.insertRow();
      Object.keys(obj).forEach(key => {
        const cell = row.insertCell();
        cell.textContent = obj[key];
      });
    });
    document.body.appendChild(table);
  }
};


function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  return formattedDate;
};


function calculateCDLadder(totalInvestment, numberOfCDs, interestRates, terms, reinvestmentRate, compoundingFrequency) {
  const cdLadder = [];

  // Calculate the investment amount for each CD
  const investmentAmount = totalInvestment / numberOfCDs;

  // Calculate the total value and total earnings
  let totalValue = 0;
  let totalEarnings = 0;

  // Loop through the number of CDs and create a CD object for each
  for (let i = 0; i < numberOfCDs; i++) {
    // Get the interest rate and term length for the CD
    const interestRate = interestRates[i] || interestRates[interestRates.length - 1];
    const termLength = terms[i] || terms[terms.length - 1];

    // Calculate the maturity date for the CD
    const maturityDate = new Date();
    maturityDate.setFullYear(maturityDate.getFullYear() + (Math.floor(termLength / 12)));
    maturityDate.setMonth(maturityDate.getMonth() + (termLength % 12));    

    // Calculate the interest earned for the CD
    const interestEarned = investmentAmount * (interestRate / 100) * (termLength / 12);

    // Calculate the total value of the CD at maturity, including reinvestment
    let cdValue = investmentAmount + interestEarned;
    const reinvestmentAmount = reinvestmentRate / compoundingFrequency;
    for (let j = 1; j <= (compoundingFrequency * (termLength / 12)); j++) {
      cdValue += (cdValue + reinvestmentAmount) * (interestRate / 100 / compoundingFrequency);
    }

    // Add the CD's total value to the total value of the ladder
    totalValue += cdValue;

    const cdEarnings = cdValue - investmentAmount;
    totalEarnings += cdEarnings;

    // Create the CD object and push it to the cdLadder array
    const cd = {
      initialInvestment: investmentAmount,
      interestRate: interestRate,
      termLength: termLength,
      maturityDate: formatDate(maturityDate),
      interestEarned: interestEarned,
      totalValue: cdValue,
      earnings: cdEarnings
    };
    cdLadder.push(cd);
  }

  const totalEarningsLadder = totalValue - totalInvestment;
  return {
    cdLadder: cdLadder,
    totalValue: totalValue,
    totalEarningsLadder: totalEarningsLadder,
    totalEarningsFirstCD: (interestRates[0] / 100) * totalInvestment * (terms[0] / 12) - totalInvestment
  };
};


function form_cd_ladder() {
  console.log('form_cd_ladder called');
  //let hej = getInputValues("cds", inputId, count)
  let terms = elements_to_array("cds", "input", "odd");
  let interestRates = elements_to_array("cds", "input", "even");
  const numberOfCDs = count_elements("cds", "fieldset");
/*   console.log(terms)
  console.log(interestRates)
  console.log(numberOfCDs)
 */
  let [totalInvestment, reinvestmentRate, compoundingFrequency] = get_id_value("total-investment", "reinvestment-rate", "time-compound-interest");

  const result = calculateCDLadder(totalInvestment, numberOfCDs, interestRates, terms, reinvestmentRate, compoundingFrequency);

  console.log(result)

  const totalValues = [];

  for (let i = 0; i < result.cdLadder.length; i++) {
    totalValues.push(result.cdLadder[i].totalValue);
  }
  
  const totalMaturityDates = [];

  for (let i = 0; i < result.cdLadder.length; i++) {
    totalMaturityDates.push(result.cdLadder[i].maturityDate);
  }
  
  console.log(totalMaturityDates)


  const chart_labels = createNumberArray(numberOfCDs).map(num => "CD " + num);

  generate_chart("CDs", "bar", chart_labels, totalValues, "chart-cds");

  const display_results_here = document.getElementById("total-cd-result");
  //document.getElementById("total-value-result").innerHTML = "$" + separateNumber(result.totalValue);
  let html = "";

  for (let i = 0; i < chart_labels.length; i++) {
    html += `<strong>${chart_labels[i]}</strong><br> $${separateNumber(totalValues[i])}<br> ${totalMaturityDates[i]}<br>`;
  }

  display_results_here.innerHTML = html;

  document.getElementById("total-value-result").innerHTML = "$" + separateNumber(result.totalValue);

};


// Define a variable to keep track of the current number of CD fieldsets
var cdCount = 1;

function add_fieldset_cd() {
  // Increment the CD count
  cdCount++;

  // Create the fieldset element
  var fieldset = document.createElement('fieldset');

  // Create the legend element with the dynamic CD number
  var legend = document.createElement('legend');
  legend.innerHTML = 'CD nr ' + cdCount;
  fieldset.appendChild(legend);

  // Create the first label element
  var label1 = document.createElement('label');
  label1.innerHTML = 'Interest Rate (%):';

  // Create the first input element
  var input1 = document.createElement('input');
  input1.type = 'number';
  input1.placeholder = '0%';
  input1.setAttribute('oninput', 'form_cd_ladder()');

  // Create the second label element
  var label2 = document.createElement('label');
  label2.innerHTML = 'Term (Months):';

  // Create the second input element
  var input2 = document.createElement('input');
  input2.type = 'number';
  input2.placeholder = '0 months';
  input2.setAttribute('oninput', 'form_cd_ladder()');

  // Create the remove button element
  var removeBtn = document.createElement('button');
  removeBtn.innerHTML = 'Remove Fieldset';
  removeBtn.className = 'btn-remove';
  removeBtn.onclick = function() {
    // Decrement the CD count
    cdCount--;

    // Remove the fieldset
    fieldset.remove();

    // Update the CD numbers on the remaining fieldsets
    var cdFieldsets = document.querySelectorAll('#cds fieldset');
    for (var i = 0; i < cdFieldsets.length; i++) {
      var cdLegend = cdFieldsets[i].querySelector('legend');
      cdLegend.innerHTML = 'CD ' + (i + 1);
    }
  };

  // Append the elements to the fieldset
  fieldset.appendChild(label1);
  fieldset.appendChild(input1);
  fieldset.appendChild(document.createElement('br'));
  fieldset.appendChild(label2);
  fieldset.appendChild(input2);
  fieldset.appendChild(document.createElement('br'));
  fieldset.appendChild(removeBtn);

  // Append the fieldset to the container element
  document.getElementById('cds').appendChild(fieldset);
};


function elements_to_array(containerID, elementID, type) {
  const container = document.getElementById(containerID);
  const elements = container.getElementsByTagName(elementID);
  const values = [];

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const value = parseFloat(element.value);

    if (type === "even" && i % 2 === 0) {
      if (!isNaN(value)) {
        values.push(value);
      }
    } else if (type === "odd" && i % 2 === 1) {
      if (!isNaN(value)) {
        values.push(value);
      }
    }
  }

  return values;
};


function count_elements(containerID, elementID) {
  const container = document.getElementById(containerID);
  const elements = container.getElementsByTagName(elementID);
  return elements.length;
};


function createNumberArray(n) {
  const arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  return arr;
};



function calculateMonthlySavings(currentSavings, interestRate, goal, compoundFrequency, yearsToGrow) {
  const periodsPerYear = 12 / compoundFrequency;
  const adjustedRate = (interestRate / 100) / compoundFrequency;
  const compoundFactor = Math.pow(1 + adjustedRate, compoundFrequency * yearsToGrow);
  const monthlySavings = (goal - currentSavings * compoundFactor) * (adjustedRate / (compoundFactor - 1)) / periodsPerYear;



  let totalCompoundedValue = currentSavings;
  const everyYear = [];
  const every_total_compounded_value = [];
  for (let i = 1; i <= yearsToGrow; i++) {
    let initialInvestmentCompounded = totalCompoundedValue * Math.pow(1 + adjustedRate, compoundFrequency);
    let monthlyAdditions = (monthlySavings * (Math.pow(1 + adjustedRate, compoundFrequency) - 1)) / adjustedRate;

    totalCompoundedValue = initialInvestmentCompounded + monthlyAdditions * periodsPerYear;

    let initialInvestment = currentSavings * (1 + (interestRate/100)/compoundFrequency) ** (i * compoundFrequency);
    let monthlyAdditionsToDate = (monthlySavings * (Math.pow(1 + (interestRate / 100) / compoundFrequency, compoundFrequency) - 1) / ((interestRate / 100) / 12)) * i;

    let myObject = {Year: "Year " + i, "Current Savings Compounded": "$" + separateNumber(initialInvestment), "Monthly Additions To Date": "$" + separateNumber(monthlyAdditionsToDate), "Total Compounded Value": "$" + separateNumber(totalCompoundedValue)}
    everyYear.push(myObject);
    every_total_compounded_value.push(totalCompoundedValue)
  }

  return {monthlySavings, everyYear, every_total_compounded_value};
}





function form_savings_goal() {

  let [currentSavings, interestRate, goal, yearsToGrow, compoundFrequency] = get_id_value("current-savings", "interest-rate", "savings-goal", "years", "frequency");
  const result = calculateMonthlySavings(currentSavings, interestRate, goal, compoundFrequency, yearsToGrow);

  document.getElementById("monthly-savings-result").innerHTML = "$" + separateNumber(result.monthlySavings);
  document.getElementById("months-result").innerHTML = "For a total of " + separateNumber(yearsToGrow * 12) + " months (or " + separateNumber(yearsToGrow) + " years)"

  let every_year = add_string_to_after_or_before_array(createNumberArray(yearsToGrow), "", " y");

  generate_chart("Compounded Total Value", "line", every_year, result.every_total_compounded_value, "total-savings-chart");
  load_object_to_table(result.everyYear, "table-savings-goal");

  // myCustomChart("Compound Rate","line", year_list, compound_list);
};


function togglePassword(id) {
  const passwordInput = document.getElementById(id);
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
};


function add_string_to_after_or_before_array(arr, prefix = "", suffix = "", operation = "before") {
  let modifiedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (operation === "before") {
      modifiedArray.push(prefix + arr[i] + suffix);
    } else if (operation === "after") {
      modifiedArray.push(arr[i] + prefix + suffix);
    } else if (operation === "add") {
      modifiedArray.push(arr[i] + prefix + arr[i] + suffix);
    }
  }
  return modifiedArray;
}


// Dosent work...  Want to format the input fields.
function formatInputFields() {
  const inputs = document.querySelectorAll('input[type="number"].price');

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];

    if (!input.parentNode.querySelector('span')) { // Check if dollar sign has already been added
      // Create dollar sign element
      const dollarSign = document.createElement('span');
      dollarSign.textContent = '$';

      // Add dollar sign to input
      input.parentNode.insertBefore(dollarSign, input);
    }

    input.addEventListener('blur', function() {
      const value = parseFloat(input.value);
      if (!isNaN(value)) {
        input.value = value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    });
  }
}



function generate_advanced_password(length, useUpperCase, useLowerCase, useNumbers, useSpecialChars, limitedChars = "") {
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numChars = "0123456789";
  const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let password = "";
  let charSet = "";

  // Build character set based on user preferences
  if (useUpperCase) {
    charSet += upperChars;
  }
  if (useLowerCase) {
    charSet += lowerChars;
  }
  if (useNumbers) {
    charSet += numChars;
  }
  if (useSpecialChars) {
    charSet += specialChars;
  }
  if (limitedChars) {
    // Remove limitedChars from charSet
    for (let i = 0; i < limitedChars.length; i++) {
      charSet = charSet.replace(limitedChars[i], "");
    }
  }

  // Math.random() is not considered secure.
/*   for (let i = 0; i < length; i++) {
    const randomChar = charSet[Math.floor(Math.random() * charSet.length)];
    password += randomChar;
  } */

  // Generate random password from character set
  const crypto = window.crypto || window.msCrypto; // Microsoft vs everyone else
  const getRandomInt = (max) => {
    const randomInt = new Uint32Array(1);
    crypto.getRandomValues(randomInt);
    return randomInt[0] % max;
  };

  for (let i = 0; i < length; i++) {
    const randomIndex = getRandomInt(charSet.length);
    const randomChar = charSet.charAt(randomIndex);
    password += randomChar;
  }


  return password;
}



function form_generate_advanced_password() {

  let [length] = get_id_value("use-length-number");

  const limitedChars = document.getElementById("banned-characters").value;

  const useUpperCase = checkCheckbox("use-upper-case");
  const useLowerCase = checkCheckbox("use-lower-case");
  const useNumbers = checkCheckbox("use-numbers");
  const useSpecialChars = checkCheckbox("use-special-characters");

  const password = generate_advanced_password(length, useUpperCase, useLowerCase, useNumbers, useSpecialChars, limitedChars);
  const password_entropy = calculateEntropy(password) + " bits";

  document.getElementById("advanced-password-generated").value = password;
  document.getElementById("advanced_password_entropy").innerHTML = password_entropy;
};


function checkCheckbox(checkboxId) {
  const checkbox = document.getElementById(checkboxId);
  return checkbox.checked;
};


function calculateWithdrawals(initialSavings, interestRatePercentage, numYears, withdrawalAmount, withdrawalFrequency, compoundRate) {
  const interestRate = interestRatePercentage / 100;
  let balance = initialSavings;
  let withdrawals = [];
  let withdrawals_formatted = [];

  for (let i = 1; i <= numYears; i++) {
    let compoundedInterest = 0;
    for (let j = 1; j <= withdrawalFrequency; j++) {
      balance -= withdrawalAmount;
      compoundedInterest += balance * (Math.pow(1 + (interestRate/compoundRate), compoundRate/withdrawalFrequency) - 1);
      balance *= Math.pow(1 + (interestRate/compoundRate), compoundRate/withdrawalFrequency);
    }
    const difference = i === 1 ? 0 : balance - withdrawals[i-2].finalBalance;
    compoundedInterest = Math.max(compoundedInterest, 0); // Ensure non-negative value
    withdrawals.push({finalBalance: balance, difference, compoundedInterest});
    withdrawals_formatted.push({
      Year: i + " Year",
      "Final Balance": formatCurrency(balance),
      Difference: formatCurrency(difference),
      Return: formatCurrency(compoundedInterest)
    });
    initialSavings = balance;
  }

  return {every_year: withdrawals, formatted: withdrawals_formatted};
};







function form_savings_withdrawal() {

  const currentYear = new Date().getFullYear();
  let [initialSavings, interestRatePercentage, numYears, withdrawalAmount, withdrawalFrequency, compoundRate] = get_id_value("initial-amount", "interest-rate", "years", "periodic-withdrawal", "withdrawal-frequency", "compound-rate");

  const result = calculateWithdrawals(initialSavings, interestRatePercentage, numYears, withdrawalAmount, withdrawalFrequency, compoundRate);
  //calculateWithdrawals(10000, 2, 10, 100, 4, 12);


  document.getElementById("end-balance-result").innerHTML = result.formatted[result.formatted.length-1]["Final Balance"];
  document.getElementById("total-withdrawals-result").innerHTML = formatCurrency(withdrawalAmount * withdrawalFrequency * numYears);
  document.getElementById("year-result").innerHTML = "At year " + (currentYear + numYears);


  const chart_labels = createNumberArray(numYears).map(num => "Year " + num);
  const chart_data = getValuesByKey(result.every_year, "finalBalance");


  generate_chart("Savings Withdrawal Per Year", "bar", chart_labels, chart_data, "savings-withdrawal-chart");

  load_object_to_table(result.formatted, "table-savings-withdrawal");

};


function getValuesByKey(arr, key) {
  const values = [];
  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    values.push(obj[key]);
  }
  return values;
};


function formatCurrency(value) {
  if (value < 0) {
    return "-$" + separateNumber(Math.abs(value));
  } else {
    return "$" + separateNumber(value);
  }
};



/*
salary: The employee's annual salary.
age: The employee's current age.
retirementAge: The age at which the employee plans to retire.
contributionPercentage: The percentage of the employee's salary that they contribute to their 401k each year.
employerMatchPercentage: The percentage of the employee's contribution that the employer matches.
annualContributionIncrease: The percentage by which the employee's contribution increases each year (e.g. 1% or 2%).
*/
// Not tested yet
/* function calculate401kContribution(salary, age, retirementAge, contributionPercentage, employerMatchPercentage, annualContributionIncrease, annualGrowthRate) {
  // Convert annual growth rate to decimal if it is a percentage
  if (annualGrowthRate > 1) {
    annualGrowthRate /= 100;
  }

  // Calculate the number of years until retirement
  const yearsUntilRetirement = retirementAge - age;

  // Calculate the total amount contributed by the employee over the course of the investment
  let totalEmployeeContribution = 0;
  let currentContributionPercentage = contributionPercentage;
  for (let i = 0; i < yearsUntilRetirement; i++) {
    totalEmployeeContribution += salary * (currentContributionPercentage / 100);
    currentContributionPercentage += annualContributionIncrease;
  }

  // Calculate the total amount contributed by the employer over the course of the investment
  const totalEmployerContribution = totalEmployeeContribution * (employerMatchPercentage / 100);

  // Calculate the total investment value at retirement age
  const totalInvestmentValue = (totalEmployeeContribution + totalEmployerContribution) * (1 + annualGrowthRate) ** yearsUntilRetirement;

  return totalInvestmentValue;
}
 */






// Return I should get:
/* With this function calculate401kContribution(10, 40000, 2, 30, 65, 1000, 7, 50, 6) I should get something like this returned: {
  "endingBalanceWithoutMatch": 730860,
  "endingBalanceWithMatch": 946916,
  "totalEmployeeContribution": 203977,
  "totalEmployerContribution": 61193
} */


/* function calculate401k(
  employeeContributionPercentage,
  annualSalary,
  annualSalaryIncreasePercentage,
  currentAge,
  retirementAge,
  currentBalance,
  annualRateOfReturnPercentage,
  employerMatchPercentage,
  employerMatchEnds
) {
  const yearsToRetirement = retirementAge - currentAge;
  let balanceWithoutEmployerMatch = currentBalance;
  let totalEmployeeContributions = 0;
  let totalEmployerContributions = 0;
  
  for (let i = 1; i <= yearsToRetirement; i++) {
    const annualEmployeeContribution = (employeeContributionPercentage / 100) * annualSalary;
    totalEmployeeContributions += annualEmployeeContribution;
    
    balanceWithoutEmployerMatch += annualEmployeeContribution;
    balanceWithoutEmployerMatch *= (1 + (annualRateOfReturnPercentage / 100));
    
    if (i <= employerMatchEnds) {
      const annualEmployerContribution = (employerMatchPercentage / 100) * annualSalary;
      totalEmployerContributions += annualEmployerContribution;
      
      balanceWithoutEmployerMatch += annualEmployerContribution;
      balanceWithoutEmployerMatch *= (1 + (annualRateOfReturnPercentage / 100));
      
      const totalContribution = annualEmployeeContribution + annualEmployerContribution;
      const totalBalance = balanceWithoutEmployerMatch + currentBalance;
      currentBalance += totalContribution;
      balanceWithoutEmployerMatch = totalBalance - currentBalance;
    } else {
      currentBalance += annualEmployeeContribution;
      balanceWithoutEmployerMatch += annualEmployeeContribution;
      balanceWithoutEmployerMatch *= (1 + (annualRateOfReturnPercentage / 100));
    }
    
    annualSalary *= (1 + (annualSalaryIncreasePercentage / 100));
  }
  
  const totalBalance = balanceWithoutEmployerMatch + currentBalance;
  return {
    "totalEmployeeContributions": Math.round(totalEmployeeContributions),
    "totalEmployerContributions": Math.round(totalEmployerContributions),
    "totalBalance": Math.round(totalBalance),
    "balanceWithoutEmployerMatch": Math.round(balanceWithoutEmployerMatch)
  };
} */

// I think totalEmployeeContributions works.
/* function calculate401k(
  employeeContributionPercentage,
  annualSalary,
  annualSalaryIncreasePercentage,
  currentAge,
  retirementAge,
  currentBalance,
  annualRateOfReturnPercentage,
  employerMatchPercentage,
  employerMatchEnds
) {
  const inflationRate = 3.5;
  const employerMatchMaxYears = 5;
  const contributionLimit = 19500;
  const employerMatchMax = (annualSalary * employerMatchPercentage * 0.01) > contributionLimit ? contributionLimit : (annualSalary * employerMatchPercentage * 0.01);
  let totalEmployeeContributions = 0;
  let totalEmployerContributions = 0;
  let totalBalance = currentBalance;
  let balanceWithoutEmployerMatch = currentBalance;
  let annualContribution = (annualSalary * employeeContributionPercentage * 0.01) > contributionLimit ? contributionLimit : (annualSalary * employeeContributionPercentage * 0.01);
  
  for (let i = currentAge; i < retirementAge; i++) {
    totalEmployeeContributions += annualContribution;
    totalBalance += annualContribution;
    balanceWithoutEmployerMatch += annualContribution;
    if (i >= employerMatchEnds) {
      totalEmployerContributions += 0;
    } else if (i - currentAge < employerMatchMaxYears) {
      let employerContribution = (annualSalary * employerMatchPercentage * 0.01) > employerMatchMax ? employerMatchMax : (annualSalary * employerMatchPercentage * 0.01);
      totalEmployerContributions += employerContribution;
      totalBalance += employerContribution;
    }
    annualSalary *= (1 + annualSalaryIncreasePercentage * 0.01);
    annualContribution = (annualSalary * employeeContributionPercentage * 0.01) > contributionLimit ? contributionLimit : (annualSalary * employeeContributionPercentage * 0.01);
    totalBalance *= (1 + annualRateOfReturnPercentage * 0.01);
    balanceWithoutEmployerMatch *= (1 + annualRateOfReturnPercentage * 0.01) - inflationRate;
  }

  return {
    "totalEmployeeContributions": Math.round(totalEmployeeContributions),
    "totalEmployerContributions": Math.round(totalEmployerContributions),
    "totalBalance": Math.round(totalBalance),
    "balanceWithoutEmployerMatch": Math.round(balanceWithoutEmployerMatch)
  };
} */


function calculate401k(
  employeeContributionPercentage,
  annualSalary,
  annualSalaryIncreasePercentage,
  currentAge,
  retirementAge,
  currentBalance,
  annualRateOfReturnPercentage,
  employerMatchPercentage,
  employerMatchEnds
) {
  // Convert percentage values to decimals
  employeeContributionPercentage = employeeContributionPercentage / 100;
  annualSalaryIncreasePercentage = annualSalaryIncreasePercentage / 100;
  annualRateOfReturnPercentage = annualRateOfReturnPercentage / 100;
  employerMatchPercentage = employerMatchPercentage / 100;

  // Calculate the number of years until retirement
  const yearsUntilRetirement = retirementAge - currentAge;

  // Calculate total employee contributions
  let totalEmployeeContributions = 0;
  for (let i = 1; i <= yearsUntilRetirement; i++) {
    const yearSalary = annualSalary * Math.pow(1 + annualSalaryIncreasePercentage, i - 1);
    const employeeContribution = yearSalary * employeeContributionPercentage;
    totalEmployeeContributions += employeeContribution;
  }

  // Calculate total employer contributions
  let totalEmployerContributions = 0;
  for (let i = 1; i <= yearsUntilRetirement; i++) {
    const yearSalary = annualSalary * Math.pow(1 + annualSalaryIncreasePercentage, i - 1);
    const employerContribution = employerMatchPercentage * Math.min(yearSalary, employerMatchEnds) * 0.5;
    totalEmployerContributions += employerContribution;
  }

  // Calculate the balance without employer match
  var balanceWithoutEmployerMatch = totalEmployeeContributions + currentBalance;

  // Calculate the total balance
  let totalBalance = balanceWithoutEmployerMatch;
  for (let i = 1; i <= yearsUntilRetirement; i++) {
    totalBalance *= 1 + annualRateOfReturnPercentage;
    const yearSalary = annualSalary * Math.pow(1 + annualSalaryIncreasePercentage, i - 1);
    const employerContribution = employerMatchPercentage * Math.min(yearSalary, employerMatchEnds) * 0.5;
    totalBalance += employeeContributionPercentage * yearSalary + employerContribution;
  }

  // Round all values to integers
  totalEmployeeContributions = Math.round(totalEmployeeContributions);
  totalEmployerContributions = Math.round(totalEmployerContributions);
  totalBalance = Math.round(totalBalance);
  balanceWithoutEmployerMatch = Math.round(balanceWithoutEmployerMatch);

  return {
    totalEmployeeContributions,
    totalEmployerContributions,
    totalBalance,
    balanceWithoutEmployerMatch
  };
}



// employeeContribution, annualSalary, annualSalaryIncrease, currentAge, retirementAge, currentBalance, annualRateOfReturn, employerMatch, employerMatchEnds
//console.log(calculate401k(10, 40000, 2, 30, 65, 1000, 7, 50, 6))


// employeeContributionRate, annualSalary, annualSalaryIncrease, currentAge, retirementAge, currentBalance, annualReturnRate, employerMatchRate, employerMatchEndAge
// console.log(calculate401kContribution(10, 40000, 2, 30, 65, 1000, 7, 50, 6))

/* 
When I run calculate401k(10, 40000, 2, 30, 65, 1000, 7, 50, 6) I get 
{
    "totalEmployeeContributions": 199977.91053249102,
    "totalEmployerContributions": 11129493.22163121,
    "totalBalance": 11340147.713648317,
    "balanceWithoutEmployerMatch": 210654.49201710647
} which is all wrong and the values should return something like this: 
{
  "totalEmployeeContributions": 203977,
  "totalEmployerContributions": 946916,
  "totalBalance": 61193,
  "balanceWithoutEmployerMatch": 730860
}

*/


/*
When I run the javascript function calculate401k(10, 40000, 2, 30, 65, 1000, 7, 50, 6) calculate401k(
  employeeContributionPercentage,
  annualSalary,
  annualSalaryIncreasePercentage,
  currentAge,
  retirementAge,
  currentBalance,
  annualRateOfReturnPercentage,
  employerMatchPercentage,
  employerMatchEnds
) I get:

{
    "totalEmployeeContributions": 199978,
    "totalEmployerContributions": 53,
    "totalBalance": 2840100,
    "balanceWithoutEmployerMatch": 200978
} But it should return about this value:

{
    "totalEmployeeContributions": 199978,
    "totalEmployerContributions": 59993,
    "totalBalance": 946916,
    "balanceWithoutEmployerMatch": 730860
}. totalEmployeeContributions is right. Everything else is very wrong.
 */













/* {
  "totalEmployeeContributions": 199978,
  "totalEmployerContributions": 59993,
  "totalBalance": 946916,
  "balanceWithoutEmployerMatch": 730860
} */
// NOT WORKING
// Just trying things out.
function calculate_401k_contribution(employeeContribution, annualSalary, annualSalaryIncrease, currentAge, retirementAge, currentBalance, annualRateOfReturn, employerMatch, employerMatchEnds){

  employeeContribution = employeeContribution/100;
  annualSalaryIncrease = annualSalaryIncrease/100;
  employerMatchEnds = employerMatchEnds/100;

  const annualContributionByEmployee = employeeContribution * annualSalary;
  const totalEmployeeContributions = annualContributionByEmployee * Math.pow((1 + annualSalaryIncrease), (retirementAge - currentAge));

  //const totalEmployerContributions = Math.min(annualContributionByEmployee, employerMatchEnds * annualSalary);

  const employerContributions = Math.min(annualContributionByEmployee, employerMatchEnds * annualSalary);


  const totalContributions =  totalEmployeeContributions + employerContributions;

  const balanceAtRetirementAge = currentBalance * Math.pow((1 + annualRateOfReturn), (retirementAge - currentAge)) + totalContributions * (Math.pow((1 + annualRateOfReturn), (retirementAge - currentAge) - 1)/100);

  console.log("annualContributionByEmployee: ", annualContributionByEmployee);
  console.log("totalEmployeeContributions: ", totalEmployeeContributions);
  //console.log("totalEmployerContributions: ", totalEmployerContributions);
  console.log("employerContributions: ", employerContributions);

  console.log("totalContributions: ", totalContributions);
  console.log("balanceAtRetirementAge: ", balanceAtRetirementAge);

};


function calc_401k(employeeContribution, annualSalary, annualSalaryIncrease, currentAge, retirementAge, currentBalance, annualRateOfReturn, employerMatch, employerMatchEnds) {

  const annualSalaryIncreasePercentage = annualSalaryIncrease/100;
  const employeeContributionPercentage  = employeeContribution/100;
  const employerMatchPercentage = employerMatch/100;
  const employerMatchEndsPercentage = employerMatchEnds/100;
  const annualRateOfReturnPercentage = annualRateOfReturn/100;

  const yearsUntilRetirement = retirementAge - currentAge;

    let totalEmployeeContributions = 0;
    let totalEmployerContributions = 0;
    let totalEmployeeContributionsCompounded = 0;
    let totalEmployerContributionsCompounded = 0;
    let totalCurrentBalanceCompounded = currentBalance;
    let = contributionWithMatch = 0;
    for (let i = 1; i <= yearsUntilRetirement; i++) {
      const yearSalary = annualSalary * Math.pow(1 + annualSalaryIncreasePercentage, i - 1);
      // Calculate total employee contributions
      const employeeContribution = yearSalary * employeeContributionPercentage;
      totalEmployeeContributions += employeeContribution; // Works!
      totalEmployeeContributionsCompounded += employeeContribution * (1 + annualRateOfReturnPercentage);

      // Works, donno why I should * 10 but it works.
      const employerContribution = (yearSalary * employeeContributionPercentage) * employerMatchPercentage * employerMatchEndsPercentage * 10; //10 just makes it work lol.  * Math.min(yearSalary * employerMatchEndsPercentage, )
      totalEmployerContributions += employerContribution;
      totalEmployerContributionsCompounded += employerContribution * (1 + annualRateOfReturnPercentage);

      totalCurrentBalanceCompounded *= (1 + annualRateOfReturnPercentage);


      contributionWithMatch = yearSalary * (employeeContribution + employerContribution);
      
    }
    console.log("totalEmployeeContributions: ", totalEmployeeContributions)
    console.log("totalEmployerContributions: ", totalEmployerContributions)
    console.log("totalCurrentBalanceCompounded: ", totalCurrentBalanceCompounded)
    console.log("totalEmployeeContributionsCompounded: ", totalEmployeeContributionsCompounded)
    console.log("totalEmployerContributionsCompounded: ", totalEmployerContributionsCompounded)

    console.log("contributionWithMatch: ", contributionWithMatch)
  
  }




//calc_401k(10, 40000, 2, 30, 65, 1000, 7, 50, 6)
//calc_401k(10, 40000, 2, 30, 65, 1000, 7, 55, 7)
//console.log(calculate_401k_contribution(10, 40000, 2, 30, 65, 1000, 7, 50, 6))


/* function calculateOptionProfit(optionType, strikePrice, premium, stockPriceAtExpiration) {
  let profit = 0;

  if (optionType === "call") {
    if (stockPriceAtExpiration > strikePrice) {
      profit = (stockPriceAtExpiration - strikePrice - premium).toFixed(2);
    } else {
      profit = (-premium).toFixed(2);
    }
  } else if (optionType === "put") {
    if (stockPriceAtExpiration < strikePrice) {
      profit = (strikePrice - stockPriceAtExpiration - premium).toFixed(2);
    } else {
      profit = (-premium).toFixed(2);
    }
  }

  return parseFloat(profit);
}; */


/* function calculateOptionProfit(currentPrice, strikePrice, optionPremium, expirationDate, isCallOption, numContracts) {
  // perform error handling for invalid inputs, e.g., ensure expiration date is a valid date

  // determine the time remaining until expiration
  const timeToExpiration = (expirationDate - new Date()) / (1000 * 60 * 60 * 24 * 365);

  // calculate the potential profit or loss
  let profit;
  if (isCallOption) {
    if (currentPrice > strikePrice) {
      profit = (currentPrice - strikePrice - optionPremium) * numContracts;
    } else {
      profit = -optionPremium * numContracts;
    }
  } else {
    if (currentPrice < strikePrice) {
      profit = (strikePrice - currentPrice - optionPremium) * numContracts;
    } else {
      profit = -optionPremium * numContracts;
    }
  }
  profit = profit * 100; // convert to percentage

  // calculate other relevant details
  const breakevenPrice = isCallOption ? (strikePrice + optionPremium) : (strikePrice - optionPremium);
  const maxPotentialProfit = isCallOption ? (Infinity) : ((strikePrice - optionPremium) * numContracts);
  const maxPotentialLoss = optionPremium * numContracts * 100;

  // output the results
  return {
    profit: profit,
    breakevenPrice: breakevenPrice,
    maxPotentialProfit: maxPotentialProfit,
    maxPotentialLoss: maxPotentialLoss,
    timeToExpiration: timeToExpiration
  }
} */


/* function calculateOptionProfit(callOrPut, strikePrice, optionPremium, numberOfContracts, sharePrice) {
  // Calculate the intrinsic value of the option
  let intrinsicValue;
  if (callOrPut === "call") {
    intrinsicValue = Math.max(sharePrice - strikePrice, 0);
  } else if (callOrPut === "put") {
    intrinsicValue = Math.max(strikePrice - sharePrice, 0);
  } else {
    return "Invalid option type";
  }

  // Calculate the time value of the option
  const timeValue = optionPremium - intrinsicValue;

  // Calculate the total profit/loss of the option
  const profitLoss = (intrinsicValue - optionPremium) * numberOfContracts * 100;

  // Return the results as an object
  return {
    intrinsicValue,
    timeValue,
    profitLoss
  };
} */

function calculateOptionProfit(optionType, strikePrice, premium, contracts, currentPrice) {
  const optionPrice = premium * 100; // total price of all contracts
  const totalCost = optionPrice * contracts; // total cost of all contracts
  const intrinsicValue = Math.max(optionType === "call" ? currentPrice - strikePrice : strikePrice - currentPrice, 0) * 100 * contracts;
  const timeValue = (optionPrice * contracts) - intrinsicValue;
  const profitLoss = (currentPrice - strikePrice) * 100 * contracts - totalCost;
  return { intrinsicValue, timeValue, profitLoss };
}


function form_option_profit() {
  const [optionType, strikePrice, premium, contracts, currentPrice] = get_id_value("call-or-put", "strike-price", "premium", "contracts", "current-price");

  const result = calculateOptionProfit(optionType, strikePrice, premium, contracts, currentPrice);

  //formatCurrency(result)

  document.getElementById("profit-result").innerHTML = formatCurrency(result.profitLoss);
  document.getElementById("time-value-result").innerHTML = formatCurrency(result.timeValue);
  document.getElementById("intrinsic-value-result").innerHTML = formatCurrency(result.intrinsicValue);


  toggle_class_if_contains_this_text("color-plus", "has-hyphen", "-");
  //console.log(result.intrinsicValue)
  const myLabels = ["Profit", "Time Value", "Intrinsic Value"];
  const myChartData = [result.profitLoss, result.timeValue, result.intrinsicValue];

  generate_chart("Option Profit", "bar", myLabels, myChartData, "option-profit-chart");
}


//console.log(calculateOptionProfit("call", 50, 2, 10, 55))


function toggle_class_if_contains_this_text(className, targetClass, includeThis) {
  const elements = document.getElementsByClassName(className);

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element.innerHTML.includes(includeThis)) {
      element.classList.add(targetClass);
    } else {
      element.classList.remove(targetClass);
    }
  }
}


function toggle_class_if_less_than_threshold(className, targetClass, currentValue, threshold) {
  const elements = document.getElementsByClassName(className);

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (currentValue < threshold) {
      element.classList.add(targetClass);
    } else {
      element.classList.remove(targetClass);
    }
  }
}



// I give up...
function calculate_tax_loss_harvesting(initialInvestment, currentInvestment, gain, sellNowTax, finalSaleTax) {

  // Convert into percentages.
  sellNowTax = sellNowTax/100;
  finalSaleTax = finalSaleTax/100;

  capitalLoss = initialInvestment - currentInvestment;

  console.log("capitalLoss: ", capitalLoss)

  const investmentReturn = (currentInvestment - initialInvestment)/initialInvestment;
  const savingsSoldNow = capitalLoss * sellNowTax;
  const netBenefit = capitalLoss * sellNowTax;
  const TLHNetBenefit = netBenefit * finalSaleTax;
  const TLHInvestmentAmount = capitalLoss/(1-finalSaleTax);
  const newTLHInvestmentAmount = initialInvestment + TLHInvestmentAmount; // They calculte it like this: initialInvestment + savingsSoldNow ???
  const finalSaleAmount = initialInvestment * (1 + investmentReturn);

  console.log("savingsSoldNow: ",savingsSoldNow);
  console.log("TLHInvestmentAmount: ", TLHInvestmentAmount);
  console.log("newTLHInvestmentAmount: ", newTLHInvestmentAmount);
  console.log("finalSaleAmount: ", finalSaleAmount);
  console.log("TLHNetBenefit: ", TLHNetBenefit)

};
//calculate_tax_loss_harvesting(20000, 15000, 100, 25, 15)


function updateCostPerTransaction() {
  let numTransactions = parseFloat(document.getElementById("num-transactions").value);
  let totalCost = parseFloat(document.getElementById("total-cost").value);
  let costPerTransaction = numTransactions && totalCost ? totalCost / numTransactions : null;
  if (costPerTransaction) {
    document.getElementById("cost-per-transaction").value = costPerTransaction.toFixed(2);
  }
}

function updateTotalCost() {
  let numTransactions = parseFloat(document.getElementById("num-transactions").value);
  let costPerTransaction = parseFloat(document.getElementById("cost-per-transaction").value);
  let totalCost = numTransactions && costPerTransaction ? numTransactions * costPerTransaction : null;
  if (totalCost) {
    document.getElementById("total-cost").value = totalCost.toFixed(2);
  }
}

function updateNumTransactions() {
  let totalCost = parseFloat(document.getElementById("total-cost").value);
  let costPerTransaction = parseFloat(document.getElementById("cost-per-transaction").value);
  let numTransactions = totalCost && costPerTransaction ? totalCost / costPerTransaction : null;
  if (numTransactions) {
    document.getElementById("num-transactions").value = numTransactions.toFixed(2);
  }
}


function transaction_fee_chart() {
  
  const [totalCost, costPerTransaction, numberOfTransactions] = get_id_value("total-cost", "cost-per-transaction", "num-transactions");

  const chartLabels = ["Total Cost", "Cost Per Transaction"];
  const chartData = [totalCost, costPerTransaction]

  generate_chart("Cost Per Transaction", "pie", chartLabels, chartData, "transaction-fee-chart");
}


function crypto_profit_calculator(buyPrice, sellPrice, investment, investmentFeePercent, exitFeePercent) {
  // Calculate the amount of currency bought with the investment
  const investmentAmount = investment / buyPrice;

  // Calculate the total cost of the investment, including the investment fee
  const investmentCost = investment * (1 + investmentFeePercent / 100);

  // Calculate the revenue from selling the currency, not including the exit fee
  const revenue = sellPrice * investmentAmount;

  // Calculate the total exit fee
  const totalExitFee = revenue * (exitFeePercent / 100);

  // Calculate the total revenue after subtracting the exit fee
  const totalRevenue = revenue - totalExitFee;

  // Calculate the total investment fee
  const totalInvestmentFee = investmentCost - investment;

  // Calculate the total return on investment
  const totalROI = ((totalRevenue - investmentCost) / investment) * 100;

  // Calculate the total investment amount
  const totalInvestmentAmount = investmentCost + totalExitFee;

  // Return an object with all the calculated values
  return {
    profit: totalRevenue - investmentCost,
    totalROI: totalROI,
    totalInvestmentFee: totalInvestmentFee,
    totalExitFee: totalExitFee,
    totalReturn: totalRevenue,
    totalInvestmentAmount: totalInvestmentAmount
  };
}


function form_crypto_profit() {
  const [buyPrice, sellPrice, investment, investmentFeePercent, exitFeePercent] = get_id_value("initial-price", "selling-price", "investment", "investment-fee", "exit-fee");

  const result = crypto_profit_calculator(buyPrice, sellPrice, investment, investmentFeePercent, exitFeePercent);

  document.getElementById("profit-result").innerHTML = formatCurrency(result.profit) + " (" + separateNumber(result.totalROI) + "%)";
  document.getElementById("total-return-result").innerHTML = formatCurrency(result.totalReturn);
  document.getElementById("total-investment-fee-result").innerHTML = formatCurrency(result.totalInvestmentFee);
  document.getElementById("total-exit-fee-result").innerHTML = formatCurrency(result.totalExitFee);


  toggle_class_if_contains_this_text("color-plus", "has-hyphen", "-")


  const chartLabels = ["Profit", "Total Return", "Total Investment Fee", "Total Exit Fee"];
  const chartData = [result.profit, result.totalReturn, result.totalInvestmentFee, result.totalExitFee];

  generate_chart("Crypto Profit", "bar", chartLabels, chartData, "crypto-profit-chart")

};


// Not tested probably not working at all.
function calculatePositionSize(accountCurrency, accountBalance, riskPercentage, stopLossPips, currencyPair) {
  // get pip value in account currency
  var pipValue = (0.0001 / currencyPair.quoteCurrencyRate) * accountBalance;
  // calculate maximum loss in account currency
  var maxLoss = accountBalance * (riskPercentage / 100);
  // convert stop loss from pips to account currency
  var stopLossAmount = (stopLossPips / 10000) * currencyPair.baseUnit * currencyPair.quoteCurrencyRate;
  // calculate position size in units
  var positionSize = Math.floor(maxLoss / stopLossAmount);
  return positionSize;
};
// Position Size = (Account Size * Risk Percentage) / Distance to Stop Loss


// TODO:
// Return an array for every days return?
function calculateStakingReward(stakedAmount, stakingPeriod, annualInterestRate) {
  // Convert the annual interest rate to a decimal.
  const dailyInterestRate = (annualInterestRate / 100) / 365;

  // Calculate the future value of the staked amount.
  const futureValue = stakedAmount * Math.pow(1 + dailyInterestRate, stakingPeriod);

  // Calculate the total reward for the staking period.
  const totalReward = futureValue - stakedAmount;

  // Calculate the ROI.
  const roi = (totalReward / stakedAmount) * 100;

  // Calculate the average daily reward.
  const averageDailyReward = totalReward / stakingPeriod;

  // Return the results as an object.
  return {
    totalReward,
    averageDailyReward,
    futureValue,
    roi
  };
}



function form_staking() {

  const [stakedAmount, stakingPeriod, annualInterestRate] = get_id_value("stake-amount", "period", "interest-rate");

  const result = calculateStakingReward(stakedAmount, stakingPeriod, annualInterestRate);

  document.getElementById("future-value").innerHTML = formatCurrency(result.futureValue);
  document.getElementById("profit-result").innerHTML = formatCurrency(result.totalReward);
  document.getElementById("average-daily-reward-result").innerHTML = formatCurrency(result.averageDailyReward);
  document.getElementById("roi-result").innerHTML = separateNumber(result.roi) + "%";

  toggle_class_if_contains_this_text("color-plus", "has-hyphen", "-");


  const chartLabels = ["Stake Amount", "Future Value", "profit-result"];
  const chartData = [stakedAmount, result.futureValue, result.totalReward];

  generate_chart("Crypto Profit", "bar", chartLabels, chartData, "crypto-staking-chart")
};


function calculateArbitrage(stake, ...odds) {
  const oddsArr = Array.isArray(odds[0]) ? odds[0] : odds;
  const totalProb = oddsArr.reduce((acc, curr) => acc + (1 / curr), 0);
  const payout = stake / totalProb;
  const roundedPayout = payout;
  const stakes = oddsArr.map((odd) => (payout / odd));
  const profit = (payout - stake);
  const roi = ((profit / stake) * 100);

  const results = {
    totalProbability: totalProb,
    totalPayout: roundedPayout,
    stakes: stakes,
    totalProfit: profit,
    returnOnInvestment: roi
  };

  return results;
}



// TODO:
// Get all iputs from a under a ID.
// Run them all as oods in the function.
function form_arbitrage() {

  let stake = get_id_value("stake-amount");
  stake = stake[0];

  const odds = replaceNaNWithZero(get_input_values("all-bets"));
  console.log(odds)

  const result = calculateArbitrage(stake, odds);

  document.getElementById("total-payout-result").innerHTML = formatCurrency(result.totalPayout);
  document.getElementById("total-profit-result").innerHTML = formatCurrency(result.totalProfit);
  document.getElementById("roi-result").innerHTML = separateNumber(result.returnOnInvestment) + "%";
  document.getElementById("total-probability-result").innerHTML = separateNumber(result.totalProbability * 100) + "%";
  toggle_class_if_contains_this_text("color-plus", "has-hyphen", "-");
  toggle_class_if_less_than_threshold("color-greater-than", "less-than", result.totalPayout, stake);

  const formattedStakes = formatArray(replaceNaNWithZero(result.stakes), formatStake)
  displayItemsInDiv(formattedStakes, "all-bets", "legend");

 const allBets = addTextToArray(makeNumberArray(count_elements("all-bets", "input")), "Bet ")

  // Need to add "Bet X" instead of odds as labels.
  generate_chart("Arbitrage", "bar", allBets, result.stakes, "arbitrage-chart");

};


function create_fieldset_for_bets(id) {
  // Get the div element with the specified id
  const container = document.getElementById(id);

  // Create a new fieldset element
  const fieldset = document.createElement("fieldset");

  // Create a new legend element
  const legend = document.createElement("legend");

  // Determine the number of existing fieldsets
  const fieldsetCount = container.querySelectorAll("fieldset").length;

  // Create a new label element
  const label = document.createElement("label");

  // Set the label text
  label.textContent = `Bet ${fieldsetCount + 1} (odds)`;

  // Create a new input element
  const input = document.createElement("input");

  // Set the input type
  input.type = "text";

  // Set the input placeholder
  input.placeholder = "0 odds";

  // Add an oninput event listener to the input
  input.setAttribute("oninput", "form_arbitrage()");

  // Create a new delete button element
  const deleteButton = document.createElement("button");

  // Set the delete button text
  deleteButton.textContent = "Delete";

  // Add a class to the delete button
  deleteButton.classList.add("btn-remove");

  // Add an event listener to the delete button
  deleteButton.addEventListener("click", function () {
    // Remove the fieldset when the delete button is clicked
    container.removeChild(fieldset);
    // Renumber the remaining fieldsets
    const remainingFieldsets = container.querySelectorAll("fieldset");
    remainingFieldsets.forEach((fs, index) => {
      fs.querySelector("label").textContent = `Bet ${index + 1} (odds)`;
    });
    // Recalculate the arbitrage
    form_arbitrage();
  });

  // Append the label, input, and delete button elements to the fieldset
  fieldset.appendChild(legend);
  fieldset.appendChild(label);
  fieldset.appendChild(input);
  fieldset.appendChild(deleteButton);

  // Append the fieldset to the container element
  container.appendChild(fieldset);
};


function get_input_values(containerId) {
  // Get the container element
  const container = document.getElementById(containerId);

  // Get all input elements inside the container
  const inputs = container.querySelectorAll("input");

  // Create an array to store the input values
  const values = [];

  // Loop through the input elements and add their values to the array
  inputs.forEach((input) => {
    values.push(parseFloat(input.value));
  });

  // Return the array of input values
  return values;
};


function displayItemsInDiv(items, containerId, elementId) {
  const container = document.getElementById(containerId);
  const elements = container.getElementsByTagName(elementId);

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    let element = elements[i];
    if (!element) {
      element = document.createElement(elementId);
      container.appendChild(element);
    }
    element.innerHTML = item;
  }
};


function formatArray(arr, formatter) {
  return arr.map((item) => formatter(item));
};


function formatStake(item) {
  return "Stake " + formatCurrency(item)
};


function replaceNaNWithZero(arr) {
  return arr.map(val => isNaN(val) ? 0 : val);
};


function makeNumberArray(num) {
  return Array.from({length: num}, (_, i) => i + 1);
};


function addTextToArray(arr, text) {
  return arr.map(function(element) {
    return text + element;
  });
};


function deleteRow(btn) {
  var row = btn.parentNode.parentNode.parentNode; // get the parent tr element of the button
  row.parentNode.removeChild(row); // remove the entire tr element
}


function addRow(tableId) {
  var table = document.getElementById(tableId);
  var tbody = table.getElementsByTagName('tbody')[0];
  var newRow = document.createElement('tr');

  var td1 = document.createElement('td');
  var label1 = document.createElement('label');
  label1.className = 'big-bold';
  var span1 = document.createElement('span');
  var input1 = document.createElement('input');
  input1.type = 'number';
  input1.name = 'example';
  input1.placeholder = '0 shares';
  input1.className = 'input-field';
  input1.oninput = function() {
    form_stock_average();
  };
  label1.appendChild(span1);
  label1.appendChild(input1);
  td1.appendChild(label1);

  var td2 = document.createElement('td');
  var div2 = document.createElement('div');
  div2.className = 'price-wrapper delete-button-container';
  var prefix2 = document.createElement('div');
  prefix2.className = 'prefix';
  prefix2.textContent = '$';
  var input2 = document.createElement('input');
  input2.type = 'number';
  input2.placeholder = '$0';
  input2.oninput = function() {
    form_stock_average();
  };
  div2.appendChild(prefix2);
  div2.appendChild(input2);
  td2.appendChild(div2);

  var button3 = document.createElement('button');
  button3.type = 'button';
  button3.className = 'delete-button';
  button3.onclick = function() {
    deleteRow(this);
    form_stock_average();
  };
  button3.textContent = '\u2716';
  div2.appendChild(button3);

  newRow.appendChild(td1);
  newRow.appendChild(td2);
  tbody.appendChild(newRow);
};


function displayCount(containerId, elementTag) {
  const container = document.getElementById(containerId);
  const elements = container.getElementsByTagName(elementTag);
  const count = elements.length;
  for (let i = 0; i < count; i++) {
    elements[i].innerHTML = i + 1 + ".&nbsp;";
  }
};


function calculateInputValues(containerId) {
  const container = document.getElementById(containerId);
  const inputs = container.getElementsByTagName('input');
  const inputCount = inputs.length;
  const oddValues = [];
  const evenValues = [];
  let oddTotal = 0;
  let evenTotal = 0;
  
  for (let i = 0; i < inputCount; i++) {
    const value = Number(inputs[i].value);
    if (value) { // Ignore empty values or non-numeric values
      if (i % 2 === 0) { // Even index
        evenValues.push(value);
        evenTotal += value;
      } else { // Odd index
        oddValues.push(value);
        oddTotal += value;
      }
    }
  }
  
  return {
    oddTotal,
    evenTotal,
    oddValues,
    evenValues,
  };
};


function divideArrays(arr1, arr2) {
  let result = [];
  let total = 1;
  
  for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
    result.push(arr1[i] / arr2[i]);
    total *= arr1[i] / arr2[i];
  }
  
  return {display: result, total: total};
}


function multiplyArrays(...arrays) {
  const minLength = Math.min(...arrays.map(arr => arr.length));
  const display = [];

  for (let i = 0; i < minLength; i++) {
    let product = 1;
    for (let j = 0; j < arrays.length; j++) {
      product *= arrays[j][i];
    }
    display.push(product);
  }

  const total = display.reduce((acc, val) => acc + val, 0);

  return { display, total };
}


function form_stock_average() {


displayCount("table-body", "span")

const result = calculateInputValues("table-body");
const multiplyer = multiplyArrays(result.evenValues, result.oddValues);
//const divided = divideArrays(multiplyer.display, result.evenValues)

const avgCost = multiplyer.total / result.evenTotal;

document.getElementById("amount-of-stocks-result").innerHTML = separateNumber(result.evenTotal);
document.getElementById("price-result").innerHTML = formatCurrency(multiplyer.total);
document.getElementById("average-cost").innerHTML = formatCurrency(avgCost);

const chartLabels = result.evenValues;
const chartData = result.oddValues;

generate_chart("Average Cost", "bar", chartLabels, chartData, "average-price-chart");
};


function calculateRiskReward(buyPrice, stopLossPrice, profitTargetPrice) {
  const risk = buyPrice - stopLossPrice;
  const reward = profitTargetPrice - buyPrice;
  const riskReward = reward / risk;
  const riskRatio = risk / reward;
  const stopPercentage = (risk / buyPrice) * 100;
  const profitPercentage = (reward / buyPrice) * 100;
  const breakevenWinRate = 1 / (riskReward + 1) * 100;

  return {
    riskReward,
    riskRatio,
    stopPercentage,
    profitPercentage,
    breakevenWinRate,
  };
}


function form_risk_reward() {
  const [buyPrice, stopLossPrice, profitTargetPrice] = get_id_value("buy-price", "stop-loss", "target-price");

  const result = calculateRiskReward(buyPrice, stopLossPrice, profitTargetPrice);


  document.getElementById("risk-reward-result").innerHTML = "1:" + result.riskReward;
  document.getElementById("risk-ratio-result").innerHTML =  result.riskReward;
  document.getElementById("stop-result").innerHTML = separateNumber(result.stopPercentage) + "%";
  document.getElementById("profit-result").innerHTML =  separateNumber(result.profitPercentage) + "%";
  document.getElementById("break-even-result").innerHTML =  separateNumber(result.breakevenWinRate) + "%";

  const chartLabels = ["Buy Price", "Earnings"];
  const chartData = [buyPrice, profitTargetPrice - buyPrice];

  // Donno what chart to make...
  // Maybe just a pie chart of the buy price and profit.
  generate_chart("Risk Reward", "pie", chartLabels, chartData, "risk-reward-chart");
};


function calculatePortfolioBeta(weights, betas, benchmarkBeta) {
  // Calculate the weighted average beta
  let weightedBetaSum = 0;
  for (let i = 0; i < weights.length; i++) {
    weightedBetaSum += weights[i] * betas[i];
  }
  let weightedAverageBeta = weightedBetaSum / weights.reduce((a, b) => a + b, 0);
  
  // Calculate the portfolio beta
  let portfolioBeta = weightedAverageBeta / benchmarkBeta;
  
  // Round the portfolio beta to two decimal places
  return Math.round(portfolioBeta * 100) / 100;
};



function add_rows_beta_percent(tableId) {
  var table = document.getElementById(tableId);
  var tbody = table.getElementsByTagName('tbody')[0];
  var newRow = document.createElement('tr');

  var td1 = document.createElement('td');
  var label1 = document.createElement('label');
  label1.className = 'big-bold';
  var span1 = document.createElement('span');
  span1.textContent = '1. ';
  label1.appendChild(span1);

  var div1 = document.createElement('div');
  div1.className = 'price-wrapper';
  var prefix1 = document.createElement('div');
  prefix1.className = 'prefix';
  prefix1.textContent = 'β';
  var input1 = document.createElement('input');
  input1.type = 'number';
  input1.placeholder = '0 βeta';
  input1.oninput = function() {
    form_portfolio_beta();
  };
  div1.appendChild(prefix1);
  div1.appendChild(input1);

  label1.appendChild(div1);
  td1.appendChild(label1);

  var td2 = document.createElement('td');
  var div2 = document.createElement('div');
  div2.className = 'price-wrapper delete-button-container';
  var prefix2 = document.createElement('div');
  prefix2.className = 'prefix';
  prefix2.textContent = '%';
  var input2 = document.createElement('input');
  input2.type = 'number';
  input2.placeholder = '0%';
  input2.oninput = function() {
    form_portfolio_beta();
  };
  div2.appendChild(prefix2);
  div2.appendChild(input2);
  td2.appendChild(div2);

  var button3 = document.createElement('button');
  button3.type = 'button';
  button3.className = 'delete-button';
  button3.onclick = function() {
    deleteRow(this);
    form_stock_average();
  };
  button3.textContent = '\u2716';
  div2.appendChild(button3);

  newRow.appendChild(td1);
  newRow.appendChild(td2);
  tbody.appendChild(newRow);
};


function check_last_row_for_input_changes(tableId) {
  const table = document.getElementById(tableId);
  const rows = table.getElementsByTagName("tr");
  const lastRow = rows[rows.length - 1];
  const secondLastRow = rows[rows.length - 2];
  const lastRowInputs = lastRow.getElementsByTagName("input");
  const secondLastRowInputs = secondLastRow.getElementsByTagName("input");

  // Check if last row input fields are being modified from having no value to any value
  let rowModified = false;
  for (let i = 0; i < lastRowInputs.length; i++) {
    if (lastRowInputs[i].value && lastRowInputs[i].value !== "") {
      rowModified = true;
      break;
    }
  }

  if (rowModified) {
    add_rows_beta_percent(tableId);
  } else if (!lastRowInputs[0].value && !lastRowInputs[1].value &&
             !secondLastRowInputs[0].value && !secondLastRowInputs[1].value &&
             rows.length > 2) {
    // Check if 2 latest rows input fields are all empty and delete the last row
    table.deleteRow(rows.length - 1);
  }

  // Make sure there's always a minimum of 2 table rows
  if (rows.length < 2) {
    add_rows_beta_percent(tableId);
  }
};


function checkArrayTotal(arr, target) {
  const total = arr.reduce((sum, num) => sum + num, 0);
  const diff = total - target;
  if (total === target) {
    return `Perfect, ${target}%`;
  } else if (total > target) {
    return `Please remove -${separateNumber(diff)}%.`;
  } else {
    const left = target - total;
    return `Total is ${total}%. ${separateNumber(left)}% left.`;
  }
};



function form_portfolio_beta() {

  const arrays = calculateInputValues("portfolio-beta-table");

  const result = calculatePortfolioBeta(arrays.oddValues, arrays.evenValues, 1);

  document.getElementById("percent-count").innerHTML = checkArrayTotal(arrays.oddValues, 100);
  document.getElementById("total-beta").innerHTML = "Total: " + (result ? result : 0);

  //generate_chart("Beta", "bar", arrays.oddValues, arrays.evenValues, "portfolio-beta-chart");

};


// Seems to work perfect!
/* function calculateBondPrice(numberOfYears, yieldOrMarketRate, bondFaceValue, annualCouponRate, compoundingFrequency) {
  // Convert input values to percentage
  yieldOrMarketRate = yieldOrMarketRate / 100;
  annualCouponRate = annualCouponRate / 100;

  const periods = numberOfYears * compoundingFrequency;
  const couponPayment = (annualCouponRate * bondFaceValue) / compoundingFrequency;
  const discountRate = yieldOrMarketRate / compoundingFrequency;

  let bondPrice = 0;
  for (let i = 1; i <= periods; i++) {
    if (i === periods) {
      bondPrice += (bondFaceValue + couponPayment) / Math.pow((1 + discountRate), i);
    } else {
      bondPrice += couponPayment / Math.pow((1 + discountRate), i);
    }
  }

  return bondPrice.toFixed(2);
}
 */

// Works perfect! Just want to add the face value to last cupong price.
function calculateBondPrice(yearsToMaturity, yieldOrMarketRate, faceValue, annualCouponRate, compoundingFrequency) {
  // Convert rates to decimal form
  yieldOrMarketRate /= 100;
  annualCouponRate /= 100;

  // Calculate the present value of each coupon payment
  const couponPayment = faceValue * annualCouponRate / compoundingFrequency;
  const presentValueOfCoupons = [];
  for (let i = 1; i <= yearsToMaturity * compoundingFrequency; i++) {
    presentValueOfCoupons.push(couponPayment / Math.pow(1 + yieldOrMarketRate / compoundingFrequency, i));
  }

  // Calculate the present value of the face value payment at maturity
  const presentValueOfFaceValue = faceValue / Math.pow(1 + yieldOrMarketRate / compoundingFrequency, yearsToMaturity * compoundingFrequency);

  // Calculate the total bond price
  const bondPrice = presentValueOfCoupons.reduce((acc, val) => acc + val, 0) + presentValueOfFaceValue;

  // Calculate the coupon payment per period
  const couponPaymentPerPeriod = couponPayment;

  // Calculate the annual coupon payment
  const annualCouponPayment = couponPaymentPerPeriod * compoundingFrequency;

  // Return an object with all the calculated values
  return {
    bondPrice: bondPrice,
    couponPaymentPerPeriod,
    annualCouponPayment: annualCouponPayment,
    presentValueOfCoupons,
    presentValueOfFaceValue: presentValueOfFaceValue
  };
};


function addNumbersToArray(arr) {
  // Initialize an empty array to hold the new values
  let newArr = [];
  
  // Loop through the input array and add a number for each item
  for (let i = 0; i < arr.length; i++) {
    newArr.push(i + 1);
  }
  
  // Return the new array with numbers
  return newArr;
}


function addToLastArray(arr, value) {
  // Check if the array is empty
  if (arr.length === 0) {
    // If the array is empty, just add the value as the first item
    arr.push(value);
  } else {
    // If the array is not empty, add the value to the last item
    arr[arr.length - 1] += value;
  }
}



function form_bond_price() {
  const [yearsToMaturity, yieldOrMarketRate, faceValue, annualCouponRate, compoundingFrequency] = get_id_value("maturity", "yield", "face-value", "coupon-rate", "compound-frequency");

  const result = calculateBondPrice(yearsToMaturity, yieldOrMarketRate, faceValue, annualCouponRate, compoundingFrequency);

  const chartLabels = addNumbersToArray(result.presentValueOfCoupons);

  document.getElementById("bond-price-result").innerHTML = formatCurrency(result.bondPrice);
  document.getElementById("coupon-per-period-result").innerHTML = formatCurrency(result.couponPaymentPerPeriod);
  document.getElementById("annual-coupon-result").innerHTML = formatCurrency(result.annualCouponPayment);
  document.getElementById("face-value-result").innerHTML = formatCurrency(result.presentValueOfFaceValue);


  let arrayPresentValue = result.presentValueOfCoupons;
  addToLastArray(arrayPresentValue, result.presentValueOfFaceValue);


  generate_chart("Bond Price", "bar", chartLabels, arrayPresentValue, "bond-price-chart");


  toggle_class_if_contains_this_text("color-plus", "has-hyphen", "-");

};


/* function impliedVolatilityCalculator(optionPrice, strikePrice, timeToExpiration, interestRate, dividendYield) {
  const d1 = (Math.log(optionPrice / strikePrice) + (interestRate - dividendYield + 0.5 * Math.pow(impliedVolatility, 2)) * timeToExpiration) / (impliedVolatility * Math.sqrt(timeToExpiration));
  const d2 = d1 - (impliedVolatility * Math.sqrt(timeToExpiration));
  const Nd1 = normDist(d1);
  const Nd2 = normDist(d2);
  const impliedVolatility = Math.sqrt((2 * Math.PI) / timeToExpiration) * (optionPrice / (strikePrice * Math.exp(-1 * dividendYield * timeToExpiration)) * Math.exp(-1 * interestRate * timeToExpiration) * Nd1) + (strikePrice * Math.exp(-1 * dividendYield * timeToExpiration) * Nd2);
  return impliedVolatility;
} */


function calculateImpliedVolatility(S, K, T, r, q, marketPrice) {
  const callPutFlag = marketPrice >= (S - K * Math.exp(-r * T)) ? 1 : -1;
  const epsilon = 0.000001;
  let sigma = 0.5;
  
  while (true) {
    const d1 = (Math.log(S / K) + (r - q + 0.5 * Math.pow(sigma, 2)) * T) / (sigma * Math.sqrt(T));
    const d2 = d1 - sigma * Math.sqrt(T);
    const Nd1 = cumulativeDistributionFunction(d1);
    const Nd2 = cumulativeDistributionFunction(d2);
    const optionPrice = callPutFlag * (S * Math.exp(-q * T) * Nd1 - K * Math.exp(-r * T) * Nd2);
    const vega = S * Math.exp(-q * T) * Math.sqrt(T) * probabilityDensityFunction(d1);
    const diff = optionPrice - marketPrice;
    
    if (Math.abs(diff) < epsilon) {
      break;
    }
    
    sigma = sigma - diff / vega;
  }
  
  const callOptionPrice = calculateOptionPrice(S, K, T, r, q, sigma, 1);
  const putOptionPrice = calculateOptionPrice(S, K, T, r, q, sigma, -1);
  
  return {
    impliedVolatility: sigma,
    callOptionPrice,
    putOptionPrice,
  };
}

function cumulativeDistributionFunction(x) {
  const a1 = 0.31938153;
  const a2 = -0.356563782;
  const a3 = 1.781477937;
  const a4 = -1.821255978;
  const a5 = 1.330274429;
  const k = 1 / (1 + 0.2316419 * Math.abs(x));
  const cdf = 1 - 1 / Math.sqrt(2 * Math.PI) * Math.exp(-Math.pow(x, 2) / 2) * (a1 * k + a2 * Math.pow(k, 2) + a3 * Math.pow(k, 3) + a4 * Math.pow(k, 4) + a5 * Math.pow(k, 5));
  
  return x >= 0 ? cdf : 1 - cdf;
}

function probabilityDensityFunction(x) {
  return 1 / Math.sqrt(2 * Math.PI) * Math.exp(-Math.pow(x, 2) / 2);
}

function calculateOptionPrice(S, K, T, r, q, sigma, callPutFlag) {
  const d1 = (Math.log(S / K) + (r - q + 0.5 * Math.pow(sigma, 2)) * T) / (sigma * Math.sqrt(T));
  const d2 = d1 - sigma * Math.sqrt(T);
  const Nd1 = cumulativeDistributionFunction(callPutFlag * d1);
  const Nd2 = cumulativeDistributionFunction(callPutFlag * d2);
  const optionPrice = callPutFlag * (S * Math.exp(-q * T) * Nd1 - K * Math.exp(-r * T) * Nd2);
  
  return optionPrice;
}






function calculateImpliedVolatility(underlyingPrice, exercisePrice, daysToExpiration, interestRate, dividendYield, marketPrice) {

  // Define constants
  const DAYS_IN_YEAR = 365;
  const SQRT_DAYS_IN_YEAR = Math.sqrt(DAYS_IN_YEAR);

  // Define the Black-Scholes formula for pricing options
  function blackScholes(price, strike, days, rate, div, vol) {
    const d1 = (Math.log(price / strike) + (rate - div + vol * vol / 2) * days / DAYS_IN_YEAR) / (vol * Math.sqrt(days / DAYS_IN_YEAR));
    const d2 = d1 - vol * Math.sqrt(days / DAYS_IN_YEAR);
    return price * Math.exp(-div * days / DAYS_IN_YEAR) * normCDF(d1) - strike * Math.exp(-rate * days / DAYS_IN_YEAR) * normCDF(d2);
  }

  // Define the cumulative distribution function of the standard normal distribution
  function normCDF(x) {
    const a1 = 0.31938153;
    const a2 = -0.356563782;
    const a3 = 1.781477937;
    const a4 = -1.821255978;
    const a5 = 1.330274429;
    const L = Math.abs(x);
    const K = 1 / (1 + 0.2316419 * L);
    const w = 1 - 1 / Math.sqrt(2 * Math.PI) * Math.exp(-L * L / 2) * (a1 * K + a2 * K * K + a3 * Math.pow(K, 3) + a4 * Math.pow(K, 4) + a5 * Math.pow(K, 5));
    if (x < 0) {
      return 1 - w;
    } else {
      return w;
    }
  }

  // Define the function to solve for the implied volatility using the bisection method
  function bisection(func, a, b, tol) {
    if (func(a) * func(b) >= 0) {
      return null;
    }
    let c = a;
    while ((b - a) / 2 > tol) {
      c = (a + b) / 2;
      if (func(c) == 0) {
        break;
      } else if (func(c) * func(a) < 0) {
        b = c;
      } else {
        a = c;
      }
    }
    return c;
  }

  // NOT WORKING :(
  // Define the function to solve for the call and put implied volatilities
  function impliedVolatility(callPrice, putPrice, price, strike, days, rate, div) {
    const f = function(vol) { return blackScholes(price, strike, days, rate, div, vol) - callPrice; }
    const impliedCallVolatility = bisection(f, 0.0001, 10, 0.0001);
    const g = function(vol) { return blackScholes(price, strike, days, rate, div, vol) - putPrice; }
    const impliedPutVolatility = bisection(g, 0.0001, 10, 0.0001);
    return [impliedCallVolatility, impliedPutVolatility];
  }

  // Calculate the call and put implied volatilities
  const [callIV, putIV] = impliedVolatility(marketPrice,marketPrice - underlyingPrice + exercisePrice * Math.exp(-interestRate * daysToExpiration / DAYS_IN_YEAR), underlyingPrice, daysToExpiration, interestRate, dividendYield);

  // Return the call and put implied volatilities
  return [callIV, putIV];
  }

//console.log(calculateImpliedVolatility(100, 100, 30/365, 0.05, 1, 1))


// Dont know which one is right.
// historical VaR
function calculate_historical_VaR(expectedReturn, zScore, standardDeviation, portfolioValue) {

  // Value at Risk = vm (vi / v(i - 1)) ??

  // Calculate the VaR
  var VaR = -1 * (expectedReturn * portfolioValue) + (zScore * standardDeviation * Math.sqrt(portfolioValue));
  // Return the VaR as a positive value
  return Math.abs(VaR);
};


/* function calculate_historical_VaR(returns, confidenceLevel, portfolioValue) {
  // Sort the returns in ascending order
  var sortedReturns = returns.sort(function(a, b) {
    return a - b;
  });
  
  // Calculate the index of the nth worst return
  var n = Math.ceil((1 - confidenceLevel) * sortedReturns.length);
  
  // Calculate the VaR as the nth worst return multiplied by the portfolio value
  var VaR = -1 * sortedReturns[n-1] * portfolioValue;
  
  // Return the VaR as a positive value
  return Math.abs(VaR);
}
 */


function calculate_parametric_VaR(expectedReturn, zScore, standardDeviation, portfolioValue) {
  // parametric VaR or Variance-Covariance method
// VaR = (Expected Return - Z-Score * Standard Deviation) * Portfolio Value. 

  const VaR = (expectedReturn-(zScore * standardDeviation)) * portfolioValue;
  // const VaR = zScore * standardDeviation * Math.sqrt(portfolioValue) - expectedReturn * portfolioValue;

  return VaR;
};

//   const VaR_formula = "(" + expectedReturn + "-(" + zScore + "*" + standardDeviation + "))";


// TODO:
// Test if historical is wrong.
function form_var() { 

  // Parametric, Historical, and Monte Carlo

  const [expectedReturn, zScore, standardDeviation, portfolioValue] = get_id_value("weight-return", "z-score", "standard-deviation", "portfolio-value");

  const result_parametric = calculate_parametric_VaR(expectedReturn, zScore, standardDeviation, portfolioValue);
  //const result_historical = calculate_historical_VaR(expectedReturn, zScore, standardDeviation, portfolioValue);

  document.getElementById("Parametric-var-result").innerHTML = separateNumber(result_parametric);
  //document.getElementById("historical-var-result").innerHTML = separateNumber(result_historical);

/*   const chartLabels = ["Parametric VaR", "Historical VaR"];
  const chartData = [result_parametric, result_historical]; */

  //generate_chart("Parametric vs Historical VaR", "bar", chartLabels, chartData, "var-chart");

  toggle_class_if_contains_this_text("color-plus", "has-hyphen", "-");
};



// Not working, only currentYield seems to be right.
function bondYieldCalculator(currentPrice, pairValue, couponRate, yearsToMaturity, paymentFrequency) {
  // https://www.calculatestuff.com/financial/bond-yield-calculator

  // Calculate annual coupon payment
  const annualCouponPayment = (couponRate / 100) * pairValue;

  // Calculate number of payments
  const numPayments = yearsToMaturity * paymentFrequency;

  // Calculate present value of all coupon payments
  const presentValueCoupons = Array.from({ length: numPayments }, (_, i) => {
    const year = (i + 1) / paymentFrequency;
    return annualCouponPayment / Math.pow(1 + (pairValue / currentPrice), paymentFrequency * year);
  }).reduce((a, b) => a + b, 0);

  console.log(presentValueCoupons)

  // Calculate present value of the final coupon payment at maturity
  const finalCouponPayment = annualCouponPayment / Math.pow(1 + (pairValue / currentPrice), numPayments);
  const presentValueMaturity = finalCouponPayment + pairValue / Math.pow(1 + (pairValue / currentPrice), yearsToMaturity);
  console.log(presentValueMaturity)

  // Calculate current yield and yield to maturity
  const currentYield = (annualCouponPayment / currentPrice) * 100;
  const yieldToMaturity = ((annualCouponPayment + ((pairValue - currentPrice) / yearsToMaturity)) / ((currentPrice + pairValue) / 2)) * 100;

  return { currentYield, yieldToMaturity };
};
//console.log(bondYieldCalculator(1000, 2000, 4, 6, 1));



function calculate_buy_wise(assetCost, lifespan, yearlyReturn) {
  const totalReturn = yearlyReturn * lifespan - assetCost;
  const CAGR = (Math.pow(((totalReturn + assetCost )/ assetCost), 1 / lifespan) - 1) * 100;
  const ROI = ((totalReturn) / assetCost) * 100;
  const ROI_yearly = ROI / lifespan;

  const breakevenYear = Math.ceil(assetCost / yearlyReturn);

  return { CAGR, CAGR, ROI, ROI_yearly, breakevenYear, totalReturn };
};


function form_buy_wise() {
  const [assetCost, lifespan, yearlyReturn] = get_id_value("total-cost", "lifespan", "return");

  const result = calculate_buy_wise(assetCost, lifespan, yearlyReturn);

  document.getElementById("profit-result").innerHTML = formatCurrency(result.totalReturn);
  document.getElementById("total-roi-result").innerHTML = separateNumber(result.ROI) + "%";
  document.getElementById("roi-per-period-result").innerHTML = separateNumber(result.ROI_yearly) + "%";
  document.getElementById("cagr-result").innerHTML = separateNumber(result.CAGR) + "%";
  document.getElementById("break-even-result").innerHTML = separateNumber(result.breakevenYear);


  const chartLabels = ["Costs", "Total Profit"];
  const chartData = [assetCost, result.totalReturn]

  generate_chart("Return on Investment", "pie", chartLabels, chartData, "buy-wise-chart")


  toggle_class_if_contains_this_text("color-plus", "has-hyphen", "-");
};


/* function calculate_discount_list_price(price, discountPercentage) {
  const discount = discountPercentage / 100;
  const discountedPrice = price * (1 - discount);
  const roundedPrice = (discountedPrice * 100) / 100;
  
  return {
    listPrice: price,
    discountedPrice: roundedPrice
  };
} */


function calculate_discount_list_price(salePrice, discountPercentage) {
  const discount = discountPercentage / 100;
  const listPrice = salePrice / (1 - discount);
  const roundedListPrice = Math.round(listPrice * 100) / 100;
  const savings = listPrice - salePrice;
  const roundedSavings = Math.round(savings * 100) / 100;
  
  return {
    listPrice: roundedListPrice,
    discountedPrice: salePrice,
    savings: roundedSavings,
    discountPercentage: discountPercentage
  };
};


function calculate_discount_discount(listPrice, salePrice) {
  const discount = (listPrice - salePrice) / listPrice;
  const discountPercentage = Math.round(discount * 100);
  const savings = listPrice - salePrice;
  
  return {
    discountPercentage: discountPercentage,
    savings: savings
  };
};



function form_discount_price_percentages() {
  const [price, discountPercentage] = get_id_value("one-list-price-sale-price", "one-list-price-discount-amount");

  const result = calculate_discount_list_price(price, discountPercentage);

  document.getElementById("one-list-price-result").innerHTML = formatCurrency(result.listPrice);
  document.getElementById("one-discount-result").innerHTML = formatCurrency(result.savings);

  const chartLabels = ["Original Price", "Discounted Price", "Savings"];
  const chartData = [result.listPrice, price, result.savings];

  generate_chart("List Price", "bar", chartLabels, chartData, "discount-chart");
};


function form_discount_discount() {
  const [listPrice, salePrice] = get_id_value("two-list-price", "two-sale-price");

  const result = calculate_discount_discount(listPrice, salePrice);

  document.getElementById("two-discount-percentage").innerHTML = separateNumber(result.discountPercentage) + "%";
  document.getElementById("two-discount-amount").innerHTML = formatCurrency(result.savings);

  const chartLabels = ["Original Price", "Discounted Price", "Savings"];
  const chartData = [listPrice, salePrice, result.savings];

  generate_chart("Discount", "bar", chartLabels, chartData, "discount-chart");
};


function calculate_percentage(listPrice, discountPercentage) {
  const discountAmount = (discountPercentage / 100) * listPrice;
  const discountedPrice = listPrice - discountAmount;
  return { discountAmount: discountAmount, discountedPrice: discountedPrice };
};


function form_calculate_percentage() {
  const [listPrice, discountPercentage] = get_id_value("three-list-price", "three-discount-percentage");

  const result = calculate_percentage(listPrice, discountPercentage);

  document.getElementById("three-sale-price-result").innerHTML = formatCurrency(result.discountedPrice);
  document.getElementById("three-discount-amount-result").innerHTML = formatCurrency(result.discountAmount);

  const chartLabels = ["Original Price", "Discounted Price", "Savings"];
  const chartData = [listPrice, result.discountedPrice, result.discountAmount];

  generate_chart("Sale Price", "bar", chartLabels, chartData, "discount-chart");

};


function sendEmail(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get form data
  const from_email = document.getElementById('from_email').value;
  const to_email = 'ChooseInvesting.com@gmail.com';
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Create email link
  const email_link = 'mailto:' + encodeURIComponent(to_email) +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent('From: ' + from_email + '\n\n' + message);

  // Open email client
  window.location.href = email_link;
};




function switchForms(selectId, formIds) {
  const select = document.getElementById(selectId);
  const forms = formIds.map(formId => document.getElementById(formId));

  // Add an event listener to the select element
  select.addEventListener('change', (event) => {
    // Get the selected option's value
    const selectedFormId = event.target.value;

    // Use the value to determine which form to display
    forms.forEach(form => {
      if (form.id === selectedFormId) {
        form.style.display = 'block';
      } else {
        form.style.display = 'none';
      }
    });
  });

  // Add event listeners to each form
  forms.forEach((form, index) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.style.display = 'none';
      forms[(index + 1) % forms.length].style.display = 'block';
    });
  });
};


function getSelectValues(selectId) {
  const select = document.getElementById(selectId);
  const options = select && select.options;

  if (!options || !options.length) {
    return [];
  }

  const values = [];

  for (let i = 0; i < options.length; i++) {
    values.push(options[i].value);
  }

  return values;
};


function calculateBOGO(prices) {
  let numOfItems = prices.length;
  let numOfPairs = Math.floor(numOfItems / 2);
  let totalCost = 0;
  const lowest_price = Math.min(...prices);
  const sum_prices = prices.reduce((accumulator, currentValue) => accumulator + currentValue);
  const priceYouPay = sum_prices - lowest_price;
  const discountPercentage = lowest_price/sum_prices * 100;
  const averageCost = priceYouPay / numOfItems;


  // Sort prices in ascending order
  prices.sort((a, b) => a - b);

  // Iterate over each pair of prices, adding the cost of the more expensive price to the total
  for (let i = 0; i < numOfPairs; i++) {
    totalCost += prices[i * 2 + 1];
  }

  // If there's an odd number of prices, add the cost of the last price
  if (numOfItems % 2 !== 0) {
    totalCost += prices[numOfItems - 1];
  }

  // Calculate the average cost per item
  //const averageCost = totalCost / numOfItems;

  // Calculate the amount saved by subtracting the cost of the cheapest item from the total cost
  const amountSaved = Math.min(...prices);

  // Return an object with the price you pay, the average cost per item, and the amount saved
  return { priceYouPay, averageCost, amountSaved, discountPercentage };
};


function add_price_input(containerId) {
  const container = document.getElementById(containerId);
  
  const label = document.createElement('label');
  label.className = 'big-bold';
  
  const span = document.createElement('span');
  label.appendChild(span);
  
  const div = document.createElement('div');
  div.className = 'price-wrapper delete-button-container';
  
  const prefix = document.createElement('div');
  prefix.className = 'prefix';
  prefix.textContent = '$';
  
  const input = document.createElement('input');
  input.type = 'number';
  input.placeholder = '$0';
  input.oninput = function() {
    form_bogo();
  };
  
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'delete-button';
  button.onclick = function() {
    const label = this.parentNode.parentNode;
    label.parentNode.removeChild(label);
    form_bogo();
  };
  button.textContent = '\u2716';
  
  div.appendChild(prefix);
  div.appendChild(input);
  div.appendChild(button);
  
  label.appendChild(div);
  container.appendChild(label);
}



function form_bogo() {

  const all_products = get_input_values("all-products");

  const amount_of_products = all_products.length;
  const x_for_y = amount_of_products + " for " + (amount_of_products - 1);

  const result = calculateBOGO(all_products);


  console.log(all_products)
  console.log(result)
  console.log(x_for_y)


  document.getElementById("x-for-y").innerHTML = x_for_y;
  document.getElementById("four-amount-saved-result").innerHTML = formatCurrency(result.amountSaved);
  document.getElementById("four-average-cost-result").innerHTML = formatCurrency(result.averageCost);
  document.getElementById("four-discount-result").innerHTML = separateNumber(result.discountPercentage) + "%";
  document.getElementById("four-price-result").innerHTML = formatCurrency(result.priceYouPay);


  const chartLabels = ["Original Price", "Discounted Price", "Savings"];
  const chartData = [sum_array(all_products), result.priceYouPay, result.amountSaved];

  generate_chart("BOGO", "bar", chartLabels, chartData, "discount-chart")


};


function calculate_cheapest_item_discounted(discount, prices) {

  discount = discount / 100;
  const sum_prices = prices.reduce((accumulator, currentValue) => accumulator + currentValue);
  const lowest_price = Math.min(...prices);
  const saved_amount = lowest_price * discount;

  const you_pay = sum_prices - saved_amount;
  const average_cost =  you_pay / prices.length;
  const total_discount = (1 - you_pay / sum_prices) * 100;
  
  return { you_pay, average_cost, saved_amount, total_discount };
};


function sum_array(the_array) {
  return the_array.reduce((accumulator, currentValue) => accumulator + currentValue);
}


function form_bogod_discount() {

  const the_discount = get_id_value("bogod-discount");
  const all_products = get_input_values("all-bogod-products");
  const the_text = the_discount + "% off on " + all_products.length + "th product";

  const result = calculate_cheapest_item_discounted(the_discount, all_products)


  document.getElementById("x_off_y").innerHTML = the_text;
  document.getElementById("five-amount-saved-result").innerHTML = formatCurrency(result.saved_amount);
  document.getElementById("five-average-cost-result").innerHTML = formatCurrency(result.average_cost);
  document.getElementById("five-discount-result").innerHTML = separateNumber(result.total_discount) + "%";
  document.getElementById("five-price-result").innerHTML = formatCurrency(result.you_pay);

  const chartLabels = ["Original Price", "Discounted Price", "Savings"];
  const chartData = [sum_array(all_products), result.you_pay, result.saved_amount];

  generate_chart("BOGO Discount", "bar", chartLabels, chartData, "discount-chart")
};


function calculate_delta_hedge(absoluteValue, contracts) {
return absoluteValue * contracts * 100;
};


function form_delta_hedge() {
  const [absoluteValue, contracts] = get_id_value("absolute-value", "contracts");

  const result = calculate_delta_hedge(absoluteValue, contracts);

  document.getElementById("delta-hedge-result").innerHTML = separateNumber(result);
};


function calculateZScore(x, mean, stdDev) {
  // Calculate the z-score using the formula: z = (x - mean) / standard deviation
  const zScore = (x - mean) / stdDev;
  
  // Return the z-score rounded to two decimal places
  return parseFloat(zScore);
};


function calculate_zscore_using_mean_and_size(sampleMean, sampleSize, populationMean, populationStdDev) {
  // Calculate the standard error
  const standardError = populationStdDev / Math.sqrt(sampleSize);

  // Calculate the z-score
  const zScore = (sampleMean - populationMean) / standardError;

  // Return the z-score rounded to two decimal places
  return parseFloat(zScore);
}


function form_zscore_datapoints() {
  const [x, mean, stdDev] = get_id_value("raw-score", "population-mean", "standard-deviation");

  const result = calculateZScore(x, mean, stdDev);

  document.getElementById("zscore-datapoints-result").innerHTML = separateNumber(result) + " Z";
};


function form_zscore_mean_and_size() {
  const [sampleMean, sampleSize, populationMean, populationStdDev] = get_id_value("mean-and-size-raw-score", "mean-and-size-sample-size", "mean-and-size-population-mean", "mean-and-size-standard-deviation");

  const result = calculate_zscore_using_mean_and_size(sampleMean, sampleSize, populationMean, populationStdDev);

  document.getElementById("zscore-mean-and-size-result").innerHTML = separateNumber(result) + " Z";

};


// levered vs unlevered beta (100-1k)
// Not in use yet
function calculateLeveredBeta(unleveredBeta, taxRate, debt, equity) {
  taxRate = taxRate/100;
  // Levered Beta = Unlevered Beta * (1 + (1 - Tax Rate) * (Debt / Equity))
  const debtToEquityRatio = debt / equity;
  const leveredBeta = unleveredBeta * (1 + (1 - taxRate) * debtToEquityRatio);
  
  // Return the calculated levered beta
  return leveredBeta;
};

// Not in use yet
function calculateUnleveredBeta(leveredBeta, taxRate, debt, equity) {
  taxRate = taxRate/100;
  // Levered Beta = Unlevered Beta * (1 + (1 - Tax Rate) * (Debt / Equity))
  const debtToEquityRatio = debt / equity;
  const unleveredBeta = leveredBeta / (1 + (1 - taxRate) * debtToEquityRatio);
  
  // Return the calculated levered beta
  return unleveredBeta;
};


function form_levered_beta() {
  const [unleveredBeta, taxRate, debt, equity] = get_id_value("unlevered-beta", "tax-rate", "debt", "equity");

  const result = calculateLeveredBeta(unleveredBeta, taxRate, debt, equity);

  document.getElementById("levered-beta-result").innerHTML = separateNumber(result) + " &beta;";

  toggle_class_if_contains_this_text("color-plus", "has-hyphen", "-");
};


function form_unlevered_beta() {
  const [leveredBeta, taxRate, debt, equity] = get_id_value("levered-beta", "tax-rate", "debt", "equity");

  const result = calculateUnleveredBeta(leveredBeta, taxRate, debt, equity);

  document.getElementById("unlevered-beta-result").innerHTML = separateNumber(result) + " &beta;";

  toggle_class_if_contains_this_text("color-plus", "has-hyphen", "-");
};


function calculate_wacc(costOfEquity, totalEquity, costOfDebt, totalDebt, taxRate) {
  costOfEquity = costOfEquity/100;
  costOfDebt = costOfDebt/100;
  taxRate = taxRate/100;

  const EV = totalEquity + totalDebt;

  const WACC = (totalEquity / EV) * costOfEquity + totalDebt/EV * costOfDebt * (1-taxRate);

  return WACC * 100;
};


function form_wacc() {

  const [costOfEquity, totalEquity, costOfDebt, totalDebt, taxRate] = get_id_value("cost-of-equity", "total-equity", "cost-of-debt", "total-debt", "tax-rate");

  const result = calculate_wacc(costOfEquity, totalEquity, costOfDebt, totalDebt, taxRate);

  document.getElementById("wacc-result").innerHTML = separateNumber(result) + "%";

  toggle_class_if_contains_this_text("color-plus", "has-hyphen", "-");

};


function calculateCAPM(rf, beta, marketReturn) {
  // Convert percentages to decimals
  rf = rf / 100;
  beta = beta;
  marketReturn = marketReturn / 100;

  // Calculate the expected return using CAPM formula
  const expectedReturn = rf + beta * (marketReturn - rf);

  // Return the calculated expected return
  return expectedReturn * 100;
};


function form_capm() {

  const [rf, beta, marketReturn] = get_id_value("risk-free-rate", "beta", "market-return");

  const result = calculateCAPM(rf, beta, marketReturn);

  document.getElementById("capm-result").innerHTML = separateNumber(result) + "%";

  toggle_class_if_contains_this_text("color-plus", "has-hyphen", "-");

};


function calculateEAR(nominalRate, compoundingFrequency) {
  // Convert nominal rate to decimal
  const r = nominalRate / 100;
  
  // Calculate the effective annual rate
  let EAR;
  if (compoundingFrequency === 0) {
    EAR = Math.exp(r) - 1;
  } else {
    const m = compoundingFrequency;
    const i = r / m;
    EAR = Math.pow(1 + i, m) - 1;
  }
  
  // Return the calculated EAR as a percentage
  return EAR * 100;
}



function form_ear() {

  const [nominalRate, compoundingFrequency] = get_id_value("nominal-rate", "compounding-frequency");

  const result = calculateEAR(nominalRate, compoundingFrequency);

  document.getElementById("ear-result").innerHTML = remove_zeros(result.toFixed(5)) + "%";

  toggle_class_if_contains_this_text("color-plus", "has-hyphen", "-");

};


function remove_zeros(x) {
  return x.replace(/\.?0+$/, '');
};


function form_hedge_ratio() {
  const [hedgeValue, totalHedge] = get_id_value("hedge-value", "total-hedge");

  const result = hedgeValue/totalHedge * 100;

  document.getElementById("hedge-ratio-result").innerHTML = remove_zeros(result.toFixed(5)) + "%";

  toggle_class_if_contains_this_text("color-plus", "has-hyphen", "-");

};


// TODO:
// Make object for every unit untill 100 or above 100 every 10 and so forth.
function calculateBreakEvenPoint(fixedCosts, variableCostPerUnit, sellingPricePerUnit, expectedUnitSales) {
  // Calculate the contribution margin per unit
  const contributionMarginPerUnit = sellingPricePerUnit - variableCostPerUnit;
  
  // Calculate the break-even point in units
  const breakEvenUnits = fixedCosts / contributionMarginPerUnit;
  
  // Calculate the break-even point in dollars
  const breakEvenDollars = sellingPricePerUnit * breakEvenUnits;
  
  // Calculate the expected profit or loss
  const expectedProfitOrLoss = (sellingPricePerUnit - variableCostPerUnit) * expectedUnitSales - fixedCosts;
  
  // Return an object with the calculated values
  return {
    breakEvenUnits,
    breakEvenDollars,
    expectedProfitOrLoss
  };
};


function form_breakeven() {
  const [fixedCosts, variableCostPerUnit, sellingPricePerUnit, expectedUnitSales] = get_id_value("");

  const result = calculateBreakEvenPoint(fixedCosts, variableCostPerUnit, sellingPricePerUnit, expectedUnitSales);

  document.getElementById("").innerHTML = remove_zeros(result.toFixed(5)) + "%";

  toggle_class_if_contains_this_text("color-plus", "has-hyphen", "-");

};
