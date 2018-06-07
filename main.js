let dataJson = [  
  {
    "country": "Australia",
    "countryCode": "AUS",
    "regions": []
  },
  {
    "country": "Canada",
    "countryCode": "CA",
    "regions": [
      {
      "name": "Alberta",
      "code": "AB"
      },
      {
      "name": "British Columbia",
      "code": "BC"
      },
      {
      "name": "Manitoba",
      "code": "MB"
      },
      {
      "name": "New Brunswick",
      "code": "NB"
      },
      {
      "name": "Newfoundland and Labrador",
      "code": "NL"
      },
      {
      "name": "Northwest Territories",
      "code": "NT"
      },
      {
      "name": "Nova Scotia",
      "code": "NS"
      },
      {
      "name": "Nunavut",
      "code": "NU"
      },
      {
      "name": "Ontario",
      "code": "ON"
      },
      {
      "name": "Prince Edward Island",
      "code": "PE"
      },
      {
      "name": "Quebec",
      "code": "QC"
      },
      {
      "name": "Saskatchewan",
      "code": "SK"
      },
      {
      "name": "Yukon Territory",
      "code": "YT"
      }
      ]
  },
  {
    "country": "United States of America",
    "countryCode": "US",
    "regions": [
      {
      "name": "Alabama",
      "code": "AL"
      },
      {
      "name": "Alaska",
      "code": "AK"
      },
      {
      "name": "American Samoa",
      "code": "AS"
      },
      {
      "name": "Arizona",
      "code": "AZ"
      },
      {
      "name": "Arkansas",
      "code": "AR"
      },
      {
      "name": "California",
      "code": "CA"
      },
      {
      "name": "Colorado",
      "code": "CO"
      },
      {
      "name": "Connecticut",
      "code": "CT"
      },
      {
      "name": "Delaware",
      "code": "DE"
      },
      {
      "name": "District Of Columbia",
      "code": "DC"
      },
      {
      "name": "Federated States Of Micronesia",
      "code": "FM"
      },
      {
      "name": "Florida",
      "code": "FL"
      },
      {
      "name": "Georgia",
      "code": "GA"
      },
      {
      "name": "Guam",
      "code": "GU"
      },
      {
      "name": "Hawaii",
      "code": "HI"
      },
      {
      "name": "Idaho",
      "code": "ID"
      },
      {
      "name": "Illinois",
      "code": "IL"
      },
      {
      "name": "Indiana",
      "code": "IN"
      },
      {
      "name": "Iowa",
      "code": "IA"
      },
      {
      "name": "Kansas",
      "code": "KS"
      },
      {
      "name": "Kentucky",
      "code": "KY"
      },
      {
      "name": "Louisiana",
      "code": "LA"
      },
      {
      "name": "Maine",
      "code": "ME"
      },
      {
      "name": "Marshall Islands",
      "code": "MH"
      },
      {
      "name": "Maryland",
      "code": "MD"
      },
      {
      "name": "Massachusetts",
      "code": "MA"
      },
      {
      "name": "Michigan",
      "code": "MI"
      },
      {
      "name": "Minnesota",
      "code": "MN"
      },
      {
      "name": "Mississippi",
      "code": "MS"
      },
      {
      "name": "Missouri",
      "code": "MO"
      },
      {
      "name": "Montana",
      "code": "MT"
      },
      {
      "name": "Nebraska",
      "code": "NE"
      },
      {
      "name": "Nevada",
      "code": "NV"
      },
      {
      "name": "New Hampshire",
      "code": "NH"
      },
      {
      "name": "New Jersey",
      "code": "NJ"
      },
      {
      "name": "New Mexico",
      "code": "NM"
      },
      {
      "name": "New York",
      "code": "NY"
      },
      {
      "name": "North Carolina",
      "code": "NC"
      },
      {
      "name": "North Dakota",
      "code": "ND"
      },
      {
      "name": "Northern Mariana Islands",
      "code": "MP"
      },
      {
      "name": "Ohio",
      "code": "OH"
      },
      {
      "name": "Oklahoma",
      "code": "OK"
      },
      {
      "name": "Oregon",
      "code": "OR"
      },
      {
      "name": "Palau",
      "code": "PW"
      },
      {
      "name": "Pennsylvania",
      "code": "PA"
      },
      {
      "name": "Puerto Rico",
      "code": "PR"
      },
      {
      "name": "Rhode Island",
      "code": "RI"
      },
      {
      "name": "South Carolina",
      "code": "SC"
      },
      {
      "name": "South Dakota",
      "code": "SD"
      },
      {
      "name": "Tennessee",
      "code": "TN"
      },
      {
      "name": "Texas",
      "code": "TX"
      },
      {
      "name": "Utah",
      "code": "UT"
      },
      {
      "name": "Vermont",
      "code": "VT"
      },
      {
      "name": "Virgin Islands",
      "code": "VI"
      },
      {
      "name": "Virginia",
      "code": "VA"
      },
      {
      "name": "Washington",
      "code": "WA"
      },
      {
      "name": "West Virginia",
      "code": "WV"
      },
      {
      "name": "Wisconsin",
      "code": "WI"
      },
      {
      "name": "Wyoming",
      "code": "WY"
      }
    ]
  }

]

function getDataJSON(country) {  
  return new Promise((resolve,reject) => {
    if (country == undefined) {
      resolve(dataJson);
    } else {
      resolve(dataJson.filter(v => v.countryCode === country));
    }
    
  });
}
function featureCountry(data,val) {
  return [...data.filter(o => val.includes(o.countryCode)),...data.filter(o => !(val.includes(o.countryCode)))];  
}
function outputCountries(data) {
  return new Promise((resolve,reject) => { 
    let d = data.reduce((r,v,k) => {
      return r + '<option value='+v.countryCode+'>'+v.country+'</option>'
    },"");
    document.querySelectorAll("select.country").forEach(n => {
      n.innerHTML = d;
    })
    resolve(data);
  })
}
function outputRegions(data, node = undefined) {
  return new Promise((resolve,reject)=>{   
    if (node == undefined) {
      document.querySelectorAll("select.region").forEach(n => {
        n.innerHTML = data[0].regions.reduce((r,v,k) => {
          return r + '<option value='+v.code+'>'+v.name+'</option>'
        },"");
      });
    } else {
      node.innerHTML = data[0].regions.reduce((r,v,k) => {
        return r + '<option value='+v.code+'>'+v.name+'</option>'
      },"");
    }
    
    resolve(data[0]);
  });
}

$(function(){
    
  //init all fields
  getDataJSON()
    .then((data) => {return featureCountry(data,"CA")})
    .then((data) => {return featureCountry(data,"US")})
    .then((data) => {return outputCountries(data)}) 
    .then((data) => {return outputRegions(data)})    
    .then((data) => {
      $("select").selectpicker({style: 'btn-primary', size: 10});
      return new Promise((resolve, reject)=>{
        resolve(data);
      })
    });

  //Billing Change
  $("#BillingCountry").on("change", function(){
    var country = $(this).val();
    getDataJSON(country)
      .then((data)=>{return outputRegions(data, document.querySelector("#BillingState"))})
      .then((data) => {
        $("select").selectpicker("refresh");
        return new Promise((resolve, reject)=>{
          resolve(data);
        });
      })
  }); 
  $("#ShippingCountry").on("change", function(){
    var country = $(this).val();
    getDataJSON(country)
      .then((data)=>{return outputRegions(data, document.querySelector("#ShippingState"))})
      .then((data) => {
        $("select").selectpicker("refresh");
        return new Promise((resolve, reject)=>{
          resolve(data);
        });
      })
  }); 
  
  //action to copy fields if needed
  $("#copyFields").on("click", function(){
    var country = $("#BillingCountry").val();
    var state = $("#BillingState").val();
    getDataJSON(country)
      .then((data) => {
        $("#ShippingCountry").val(country);
        return new Promise((resolve, reject)=>{
          resolve(data);
        });
      })
      .then((data)=>{return outputRegions(data, document.querySelector("#ShippingState"))})
      .then((data) => {
        $("select").selectpicker("refresh");
        return new Promise((resolve, reject)=>{
          resolve(data);
        });
      })

  });
})
