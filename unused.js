const body = document.querySelector('body');
let countryGrid = document.querySelector('.country-grid')

// function showNav() {
//     let nav = document.createElement('nav')
//     // nav.innerHTML = `
//     // <div class></div>
//     // `
//     // nav.innerHTML = (<div class="blue"> <p> hi there</p> </div>)
//     return (
//     );
// }
// body.appendChild(showNav)

window.addEventListener('load',  ()=> {
    // fetch('https://restcountries.eu/rest/v2/all')
    // .then
    // const apiAll = 'https://restcountries.eu/rest/v2/all'
    fetchCountries()
    console.log('loaded');
})

async function fetchCountries() {
    let request = await fetch('https://restcountries.eu/rest/v2/all')
    let response = await request.json()
    // using for loop
    for (let i = 0; i < response.length; i++) {
        const arr = response[i];
        // console.log(response[i]);
        createCountryItem(arr)
    }

    // using map
    // let something = response.map(function (item) {
    //     console.log(item);
    // })
    // something()
    console.log(response);
}

function createCountryItem(params) {
    let countryItem = document.createElement('li')
    countryItem.classList.add('country-item')
    countryItem.innerHTML = `
     <a href="">
                <div class="img-controller">
                  <img src="${params.flag}" alt="" />
                </div>
                <div class="country-text">
                  <h5 class="country-name">${params.name}</h5>
                  <div class="details-list">
                    <p class="list-key">
                      Population: <span class="list-value">  ${params.population} </span>
                    </p>
                    <p class="list-key">
                      Region: <span class="list-value"> ${params.region} </span>
                    </p>
                    <p class="list-key">
                      Capital: <span class="list-value"> ${params.capital} </span>
                    </p>
                  </div>
                </div>
              </a>
    `;
    // countryGrid.appendChild(countryItem);
    countryGrid.innerHTML = countryItem
}

// async function fetchRegion(){
// }

// let createTemplates = (item) => {
//     let countryItem = `<li class="country-item">
//                <a href="">
//                 <div class="img-controller">
//                   <img src="${item.flag}" alt="" />
//                 </div>
//                 <div class="country-text">
//                   <h5 class="country-name">${item.name}</h5>
//                   <div class="details-list">
//                     <p class="list-key">
//                       Population: <span class="list-value">  ${item.population} </span>
//                     </p>
//                     <p class="list-key">
//                       Region: <span class="list-value"> ${item.region} </span>
//                     </p>
//                     <p class="list-key">
//                       Capital: <span class="list-value"> ${item.capital} </span>
//                     </p>
//                   </div>
//                 </div>
//               </a>
//             </li>`;
//         countryItem  = countryItem.join('');
//         countryGrid.innerHTML = countryItem
//     // return 
// }


 // let filterRegions = response.map(function (item) {
    //     // filter items
    //     console.log(item);
    //     filterDrop.forEach(btn => {
    //         btn.addEventListener('click', (e)=> {
    //           const region =  e.currentTarget.dataset.region;
    //         //   const regionCategory  = item.filter(function(param)  {
    //         //     //   console.log(param.region);
    //         //       return param
    //         //   })
    //           console.log(region);
    //         })
    //     })
    // })


      // let arr = [... response]
    
   
    

    // using map
    // let countryItem = response.map(function (item) {
        // console.log(item.region);
        
    // })
    // countryItem = countryItem.join('')
    // countryGrid.innerHTML = countryItem


    //  let arr =   fetchCountries()
    // console.log(arr);
    //  let save =  ( fetchCountries().map( function(item) {
        //     console.log(item);
        // } ) );
        // let save = [...fetchCountries()]
        // console.log(fetchCountries());
        // console.log(arr);

        // window.addEventListener('click', () =>{
// })

// window.onclick = function(){
//     if (showDrop.classList.contains('show-group')){
//         showDrop.classList.remove('show-group')
//     }
// }

// obj.map(function(item) {
//     console.log(item);
// })

// for(const [key, value] in  response_deserialized ) {
//     console.log(key + ': ' + value);
// }

// Object.entries(obj).filter(item => {
//     console.log(item);
// })


// obj.forEach(element => {
//     console.log(element);
// });

    // console.log(response_serialized );
    //     }
    // window.localStorage('country', JSON.stringify(response))
    // return response

        // for (let i = 0; i < response.length; i++) {
    //         // const arr = response[i];
    //         arr = response[i]
    //         // createCountryItem(arr)
    //         // console.log(arr);

     // function mapArray(item) {
    //     item.map(function (item) {
    //         createCountryItem(item)
    //     })
    // }


    // console.log( localStorage.getItem('country'));



// function createCountryItem(params) {
//     let countryItem = document.createElement('li')
//     countryItem.classList.add('country-item')
//     countryItem.innerHTML = `
//      <a href="">
//                 <div class="img-controller">
//                   <img src="${params.flag}" alt="${params.name}" />
//                 </div>
//                 <div class="country-text">
//                   <h5 class="country-name">${params.name}</h5>
//                   <div class="details-list">
//                     <p class="list-key">
//                       Population: <span class="list-value">  ${params.population} </span>
//                     </p>
//                     <p class="list-key">
//                       Region: <span class="list-value"> ${params.region} </span>
//                     </p>
//                     <p class="list-key">
//                       Capital: <span class="list-value"> ${params.capital} </span>
//                     </p>
//                   </div>
//                 </div>
//               </a>
//     `;
//     countryGrid.appendChild(countryItem);
//     // countryGrid.innerHTML = countryItem
// }



// function searchCountry(){
//     // let form = document.querySelector('form')
//     let searchValue = document.querySelector('#search-input')
//     // let inputValue = form.querySelector('input').value
//     // let inputValue = form.querySelector('input').value
//     let li = countryGrid.querySelectorAll('li')
//     // form.addEventListener('submit', (e)=>{
//     //     e.preventDefault()
//     //     console.log( form['search-input'].value );
//     // })
//     console.log( searchValue);
// }
// searchCountry()


// function border(){
//     for (let i = 0; i < response_deserialized.length; i++) {
//         const element = response_deserialized[i];

//         for (let j = 0; j < element.borders.length; j++) {
//             const bord = element.borders[j];
//             // console.log(bord);
            
//             let regionFilter = response_deserialized.filter(function(item) {
//                 if (item.alpha3Code == bord) {
//                     console.log(item.name);
//                     return item;
//                 }
//             })
//         }
//     }
// }
// border()