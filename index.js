const body = document.querySelector('body');
let countryGrid = document.querySelector('.country-grid')
let btnDrop = document.querySelector('.btn-filter')
let filterGroup = document.querySelector('.filter-group')
let root = document.querySelector('.root')
let main = document.querySelector('.main')
let countryDetails = document.querySelector('.country-details')
let loadingSpinner = document.querySelector('.loading-spinner')
// console.log(root);
// console.log(listItem);




// this is for showing the dropdown item
btnDrop.addEventListener('click', (e) => {
    filterGroup.classList.toggle('show-group')
})

let response_deserialized = JSON.parse(localStorage.getItem('country'))
// convert the local srorage string to  JSON format
// load items
window.addEventListener('load',  ()=> {
  // loadingSpinner.className += ' hidden'
  loadingSpinner.classList.add('hidden')
    if ( localStorage.getItem('country') ){
      console.log("this item is in the localStorage so i did not fetch the data ");
      createCountryItem(response_deserialized)
    }else{
      console.log('this item in not in the localStorage so i fetched the data ');
      fetchCountries()
      createCountryItem(response_deserialized)
      }
    addFilterBtns(switchDisplayItems)
    searchCountry(switchDisplayItems)
    switchDisplayItems()
    // borderLookup();
  })


// craete filter array
function createFilterBtns() {
    // value = the ['all] and key = the item
    const region  = response_deserialized.reduce((value, key) => {
        if (!value.includes(key.region)) {
            value.push(key.region)
                }
                return value
                // the push pushes to the returning array ['all']
            },['all'])
            // console.log(region);
            return region
        }
// createFilterBtns()

/*
// this function is kind of confusing  let me explain it
// get the createFilterBtns() function return value and map it with the html markup 
// then joins it with .join() function adds it to the filterGroup Child tree 
*/
function addFilterBtns(  functionParam ) {
    const regionBtns = createFilterBtns().map( (region) =>{
        return `  <button data-region="${region}" type="button" class="filter-btns">
        ${region}
        </button> `
    }).join('');
    // console.log( regionBtns );
    filterGroup.innerHTML = regionBtns
    let filterBtns = document.querySelectorAll('.filter-btns')
        // // filter items
        filterBtns.forEach(btn => {
            // console.log(btn);
            // this adds event addEventListener to each of the filterBtns
            btn.addEventListener('click', (e)=> {
                // this gets the dataset of the button html
                const region =  e.currentTarget.dataset.region;
                // this get the region from the countries object in the local localStorage
                let regionFilter = response_deserialized.filter(function(item) {
                    // console.log(item.region);
                    // this checks if the dataset region  is equal to the region the object
                    if (item.region === region) {
                        return item;
                    }
                })
                // console.log(regionFilter);
                // if you click on all display all of the countries
                if (region === 'all') {
                    console.log('you clicked on all regions');
                    createCountryItem(response_deserialized)
                    functionParam()
                } else{
                    // if you click on a specific  buttom if displays only the region you clicked
                    console.log('you clicked on a specific region' );
                    createCountryItem(regionFilter)
                    functionParam()
                }
        })
    })
    // console.log(filterBtns);
}




async function fetchCountries() {
    try {
        // let request = await fetch('https://restcountries.eu/rest')
        let request = await fetch('https://restcountries.eu/rest/v2/all')
        // debugger
        let response = await request.json()
        let response_serialized = JSON.stringify(response);
        return localStorage.setItem('country', response_serialized)
    } catch (error) {
        console.log('Api is invalid');
        console.log(error);
    }
}

function hello() {
    console.log(hello);
}


// this function maps the object passed into it to tthe html and  add it to the countryGrid InnerHtml
function createCountryItem(params) {
    // console.log(params);
    let countryItem = params.map(function (item) {
        // onclick="(e)=>switchDisplayItems(e)" 
        return  `
        <li  data-name="${item.name}"  class="country-item">
                <div class="img-controller">
                  <img src="${item.flag}" alt="${item.name}" />
                </div>
                <div class="country-text">
                  <h5 class="country-name">${item.name}</h5>
                  <div class="details-list">
                    <p class="list-key">
                      Population: <span class="list-value">  ${item.population} </span>
                    </p>
                    <p class="list-key">
                      Region: <span class="list-value"> ${item.region} </span>
                    </p>
                    <p class="list-key">
                      Capital: <span class="list-value"> ${item.capital} </span>
                    </p>
                  </div>
                </div>
        </li>
    `;
    })
    countryItem = countryItem.join('');
    countryGrid.innerHTML = countryItem
    // console.log( countryGrid );
}

function searchCountry( functionParam ){
    let searchValue = document.querySelector('.search-input')
    // let li = countryGrid.querySelectorAll('li')

    searchValue.addEventListener('keyup', (e)=>{
        // e.preventDefault()
        let countrySearch = e.target.value.toLowerCase()
        // changes the first letter of thr string to toUpperCase
        let countrySearch2 = countrySearch.charAt(0).toUpperCase() + countrySearch.slice(1)
        // console.log( countrySearch2 );
        let filterCountry = response_deserialized.filter( (country)=>{
            // console.log(country.name);
            return country.name.toLowerCase().includes(countrySearch) || country.region.toLowerCase().includes(countrySearch) || country.capital.toLowerCase().includes(countrySearch)
        })
        // console.log(e.target.value);
        // console.log(filterCountry);
        // if filterCountry is empty string returns all else returns what the array brings up
        if ( filterCountry == '') {
            createCountryItem(response_deserialized)
            // switchDisplayItems()
            functionParam()
        } else{
            createCountryItem(filterCountry)
            // switchDisplayItems()
            functionParam()
        }
    })
    // console.log( searchValue);
}

function createSingleCountryItem (object) {
    let singleCountry = object.map( (item) => {
        return `
        
        <div class="back-btn-container">
          <button class="gen-btn back-btn">
            <svg
              height="20px"
              id="Layer_1"
              style="enable-background: new 0 0 512 512"
              version="1.1"
              viewBox="0 0 512 512"
              width="20px"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M189.3,128.4L89,233.4c-6,5.8-9,13.7-9,22.4c0,8.7,3,16.5,9,22.4l100.3,105.4c11.9,12.5,31.3,12.5,43.2,0  c11.9-12.5,11.9-32.7,0-45.2L184.4,288h217c16.9,0,30.6-14.3,30.6-32c0-17.7-13.7-32-30.6-32h-217l48.2-50.4  c11.9-12.5,11.9-32.7,0-45.2C220.6,115.9,201.3,115.9,189.3,128.4z"
              />
            </svg>
            Back
          </button>
        </div>

        <section class="country-content">
          <div class="country-flag-img">
            <img src="${item.flag}" alt="${item.name}" />
          </div>

          <div class="country-texts">
            <h2 class="country-name"> ${item.name} </h2>

            <div class="country-sub">
              <ul class="detail-list">
                <li class="list-item">
                  Native Name: <span class="item-details"> ${item.nativeName} </span>
                </li>
                <li class="list-item">
                  Population: <span class="item-details"> ${item.population} </span>
                </li>
                <li class="list-item">
                  Region: <span class="item-details"> ${item.region} </span>
                </li>
                <li class="list-item">
                  Sub Region:
                  <span class="item-details"> ${item.subregion} </span>
                </li>
                <li class="list-item">
                  Capital: <span class="item-details"> ${item.capital} </span>
                </li>
              </ul>

              <ul class="detail-list">
                <li class="list-item">
                  Top Level Domain: <span class="item-details"> 
                  ${item.topLevelDomain} </span>
                </li>
                <li class="list-item">
                  Currencies: <span class="item-details"> ${item.currencies[0].name} </span>
                </li>
                <li class="list-item">
                  Languages:
                  <span class="item-details"> ${item.languages[0].name}
                   </span>
                </li>
              </ul>
            </div>
            <div class="border-countries">
              <p class="header">Border Countries:</p>
              <div class="btn-group">
                
              </div>
            </div>
          </div>
        </section>

        `
    }) 
    singleCountry = singleCountry.join('')
    countryDetails.innerHTML = singleCountry
    // root.appendChild(singleCountry)
}

// borderLookup



function borderLookup(param) {
    let borderList = {};
    response_deserialized.forEach((item) => {
        borderList[item.alpha3Code] = item.name;
    });
    let arr = []
    // console.log(Object.keys(borderList).length );
    let matchBorder =  param.map((item)=> {
        //  console.log(item.borders);
        item.borders.forEach((e)=> {
            arr.push(borderList[e])
            // console.log(borderList[e]);
        })
    })
    // console.log(arr);
    // debugger
    return arr;
}

function switchDisplayItems() {
    let listItem = document.querySelectorAll('.country-item')
    listItem.forEach(item => {
        item.addEventListener('click', (e)=>{
            let countryData =  e.currentTarget.dataset.name ;
            // console.log(e);
            let filterCountry = response_deserialized.filter((item)=> {
                if (item.name ==  countryData ){
                    return item
                }
            })
            console.log( filterCountry );
            main.style.display = 'none'
            countryDetails.style.display = 'block'
            createSingleCountryItem(filterCountry)
            goBack()
            function displayBorder() {
                let borderCountries = borderLookup(filterCountry).map(border => {
                    return `<button data-border="${border}" class="gen-btn dsk-gen-btn"> ${border} </button> `
                }).join('')
                // console.log(borderCountries);
                let borderGroup = document.querySelector('.btn-group')
                borderGroup.innerHTML = borderCountries
            }
            displayBorder()
        })
    })
    // console.log(listItem);
}

function goBack() {
    let backBtn = document.querySelector('.back-btn');
    backBtn.addEventListener('click', ()=> {
        countryDetails.style.display = 'none'
        main.style.display = 'block'
    })
}
