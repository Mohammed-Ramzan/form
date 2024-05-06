let currentFormIndex = 2;

function showForm(formId) {
    var forms = document.querySelectorAll(".form");
    let tabs = document.querySelectorAll(".tab");

    forms.forEach(function (form, index) {
        if (form.id === formId) {
            form.classList.add("active");
            tabs[index].classList.add("tabActive");
            currentFormIndex = index;
        } else {
            form.classList.remove("active");
            tabs[index].classList.remove("tabActive");
        }
    });
}


//Sale
// Add event listener to Check Fee button
document.addEventListener('DOMContentLoaded', function () {
            
let checkFeeButton = document.querySelector('#sale-calculate');
checkFeeButton.addEventListener('click', function () {
    let userInput = document.querySelector('#sale_price').value;
if(userInput == ""){
    alert("Please Enter Value")
}
else {
// Retrieve data from localStorage
let sharedData = JSON.parse(localStorage.getItem("sharedData"));
console.log(sharedData)
// Access the legal fees from the shared data
let legalFee1 = sharedData.legalFee1;
let legalFee2 = sharedData.legalFee2;
let legalFee3 = sharedData.legalFee3;
let legalFee4 = sharedData.legalFee4;
let legalFee5 = sharedData.legalFee5;
let legalFee6 = sharedData.legalFee6;
let legalFee7 = sharedData.legalFee7;
let legalFee8 = sharedData.legalFee8;
let legalFee9 = sharedData.legalFee9;

let suppVal1 = sharedData.suppVal1;
let suppVal3 = sharedData.suppVal3;
let suppVal4 = sharedData.suppVal4;
let suppVal5 = sharedData.suppVal5;

let disburVal1 = sharedData.disburVal1;
let disburVal2 = sharedData.disburVal2;
let disburVal3 = sharedData.disburVal3;
let disburVal4 = sharedData.disburVal4;

let saleCientCompany = document.querySelector("#sell-company");

if (saleCientCompany.checked) {
    document.querySelector('.sale-client-company span').innerHTML = suppVal1;
  } else {
    document.querySelector('.sale-client-company').innerHTML = "FREE";
  }
let sellShared = document.querySelector("#sell-shared");
if (sellShared.checked && suppVal3 > 0) {
    document.querySelector('.shared-ownership-company span').innerHTML = suppVal3;
  } else {
    document.querySelector('.shared-ownership-company').innerHTML = "FREE";
  }
  if (suppVal4 > 0) {
    document.querySelector('.sale-electronic-onboarding span').innerHTML = suppVal4;
  } else {
    document.querySelector('.sale-electronic-onboarding').innerHTML = "FREE";
  }
  if (suppVal5 > 0) {
    document.querySelector('.sale-archiving-storage-fee span').innerHTML = suppVal5;
  } else {
    document.querySelector('.sale-archiving-storage-fee').innerHTML = "FREE";
  }
  if (disburVal1 > 0) {
    document.querySelector('.sale-bank-transfer-fee span').innerHTML = disburVal1;
  } else {
    document.querySelector('.sale-bank-transfer-fee').innerHTML = "FREE";
  }
  if (disburVal2 > 0) {
    document.querySelector('.sale-office-copies span').innerHTML = disburVal2;
  } else {
    document.querySelector('.sale-office-copies').innerHTML = "FREE";
  }
  if (disburVal3 > 0) {
    document.querySelector('.sale-id-check span').innerHTML = disburVal3;
  } else {
    document.querySelector('.sale-id-check').innerHTML = "FREE";
  }
  if (disburVal4 > 0) {
    document.querySelector('.sale-file-opening-fee span').innerHTML = disburVal4;
  } else {
    document.querySelector('.sale-file-opening-fee').innerHTML = "FREE";
  }

    document.querySelector(".tabsform-wrapper").style.display = "none";
    document.querySelector(".sale-quot-container").style.display = "block";

    let fee;

   if (userInput >= 0 && userInput <= 150000) {
       fee = legalFee1;
   } else if (userInput > 150000 && userInput <= 300000) {
       fee = legalFee2;
   } else if (userInput > 300000 && userInput <= 500000) {
       fee = legalFee3;
   } else if (userInput > 500000 && userInput <= 750000) {
    fee = legalFee4;
} else if (userInput > 750000 && userInput <= 900000) {
    fee = legalFee5;
} else if (userInput > 900000 && userInput <= 1000000) {
    fee = legalFee6;
} else if (userInput > 1000000 && userInput <= 2000000) {
    fee = legalFee7;
} else if (userInput > 2000000 && userInput <= 3000000) {
    fee = legalFee8;
}  else if (userInput > 3000000 && userInput <= 4000000) {
    fee = legalFee9;
} 

   if (fee) {
       document.querySelector(".sale-legal-fee span").innerHTML = fee;
   } else {
       alert("Invalid input or fee not found for the provided value.");
   }
}
});
});


//Purchase
// Add event listener to Check Fee button
document.addEventListener('DOMContentLoaded', function () {
            
    let checkFeeButton = document.querySelector('#buy-calculate');
    checkFeeButton.addEventListener('click', function () {

      let auction = document.querySelector("#auction");
      let userInput = document.querySelector('#purchase_price').value;
      if(userInput == ""){
          alert("Please Enter Value")
      }
      else {
    // Retrieve data from localStorage
    let sharedPurchaseData = JSON.parse(localStorage.getItem("sharedPurchaseData"));
    console.log(sharedPurchaseData)
    // Access the legal fees from the shared data
    let legalFeeP1 = sharedPurchaseData.legalFeeP1;
    let legalFeeP2 = sharedPurchaseData.legalFeeP2;
    let legalFeeP3 = sharedPurchaseData.legalFeeP3;
    let legalFeeP4 = sharedPurchaseData.legalFeeP4;
    let legalFeeP5 = sharedPurchaseData.legalFeeP5;
    let legalFeeP6 = sharedPurchaseData.legalFeeP6;
    let legalFeeP7 = sharedPurchaseData.legalFeeP7;
    let legalFeeP8 = sharedPurchaseData.legalFeeP8;
    let legalFeeP9 = sharedPurchaseData.legalFeeP9;

    let suppValP1 = sharedPurchaseData.suppValP1;
    let suppValP2 = sharedPurchaseData.suppValP2;
let suppValP3 = sharedPurchaseData.suppValP3;
let suppValP4 = sharedPurchaseData.suppValP4;
let suppValP5 = sharedPurchaseData.suppValP5;
let suppValP6 = sharedPurchaseData.suppValP6;
let suppValP7 = sharedPurchaseData.suppValP7;
let suppValP8 = sharedPurchaseData.suppValP8;
let suppValP9 = sharedPurchaseData.suppValP9;

let disburValP1 = sharedPurchaseData.disburValP1;
let disburValP2 = sharedPurchaseData.disburValP2;
let disburValP3 = sharedPurchaseData.disburValP3;
let disburValP4 = sharedPurchaseData.disburValP4;
let disburValP5 = sharedPurchaseData.disburValP5;
let disburValP6 = sharedPurchaseData.disburValP6;
    

    if (auction.checked && suppValP1 > 0) {
      document.querySelector('.legal-pack-review span').innerHTML = suppValP1;
    } else {
      document.querySelector('.legal-pack-review').innerHTML = "FREE";
    }
  let clCompany = document.querySelector("#company");
  if (clCompany.checked && suppValP2 > 0) {
      document.querySelector('.limited-company-fee span').innerHTML = suppValP2;
    } else {
      document.querySelector('.limited-company-fee').innerHTML = "FREE";
    }
    if (suppValP3 > 0) {
        document.querySelector('.gifted-deposit span').innerHTML = suppValP3;
      } else {
        document.querySelector('.gifted-deposit').innerHTML = "FREE";
      }
      if (suppValP4 > 0) {
        document.querySelector('.help-to-buy-isa span').innerHTML = suppValP4;
      } else {
        document.querySelector('.help-to-buy-isa').innerHTML = "FREE";
      }
      if (suppValP5 > 0) {
        document.querySelector('.mortgage-handling-fee span').innerHTML = suppValP5;
      } else {
        document.querySelector('.mortgage-handling-fee').innerHTML = "FREE";
      }
      if (suppValP7 > 0) {
        document.querySelector('.new-build-fee span').innerHTML = suppValP7;
      } else {
        document.querySelector('.new-build-fee').innerHTML = "FREE";
      }
      if (suppValP8 > 0) {
        document.querySelector('.right-to-buy-fee span').innerHTML = suppValP8;
      } else {
        document.querySelector('.right-to-buy-fee').innerHTML = "FREE";
      }
      if (suppValP9 > 0) {
        document.querySelector('.shared-ownership-fee span').innerHTML = suppValP9;
      } else {
        document.querySelector('.shared-ownership-fee').innerHTML = "FREE";
      }

      if (disburValP1 > 0) {
        document.querySelector('.bank-transfer-fee span').innerHTML = disburValP1;
      } else {
        document.querySelector('.bank-transfer-fee').innerHTML = "FREE";
      }
      if (disburValP2 > 0) {
        document.querySelector('.bankruptcy-fee span').innerHTML = disburValP2;
      } else {
        document.querySelector('.bankruptcy-fee').innerHTML = "FREE";
      }
      if (disburValP3 > 0) {
        document.querySelector('.id-check span').innerHTML = disburValP3;
      } else {
        document.querySelector('.id-check').innerHTML = "FREE";
      }
      if (disburValP4 > 0) {
        document.querySelector('.file-opening-fee span').innerHTML = disburValP4;
      } else {
        document.querySelector('.file-opening-fee').innerHTML = "FREE";
      }
      if (disburValP5 > 0) {
        document.querySelector('.searches-pack span').innerHTML = disburValP5;
      } else {
        document.querySelector('.searches-pack').innerHTML = "FREE";
      }
      if (disburValP6 > 0) {
        document.querySelector('.hmlr-search span').innerHTML = disburValP6;
      } else {
        document.querySelector('.hmlr-search').innerHTML = "FREE";
      }


        document.querySelector(".tabsform-wrapper").style.display = "none";
        document.querySelector(".buy-quot-container").style.display = "block";
       const userInput = document.querySelector('#purchase_price').value;
       let fee;
    
       if (userInput >= 0 && userInput <= 150000) {
           fee = legalFeeP1;
       } else if (userInput > 150000 && userInput <= 300000) {
           fee = legalFeeP2;
       } else if (userInput > 300000 && userInput <= 500000) {
           fee = legalFeeP3;
       } else if (userInput > 500000 && userInput <= 750000) {
        fee = legalFeeP4;
    } else if (userInput > 750000 && userInput <= 900000) {
        fee = legalFeeP5;
    } else if (userInput > 900000 && userInput <= 1000000) {
        fee = legalFeeP6;
    } else if (userInput > 1000000 && userInput <= 2000000) {
        fee = legalFeeP7;
    } else if (userInput > 2000000 && userInput <= 3000000) {
        fee = legalFeeP8;
    }  else if (userInput > 3000000 && userInput <= 4000000) {
        fee = legalFeeP9;
    } 
    
       if (fee) {
           document.querySelector(".buy-legal-fee").innerHTML = fee;
       } else {
           alert("Invalid input or fee not found for the provided value.");
       }
      }
    });
    });

    //Remortgage
// Add event listener to Check Fee button
document.addEventListener('DOMContentLoaded', function () {
            
    const checkFeeButton = document.querySelector('#rgage-calculate');
    checkFeeButton.addEventListener('click', function () {
      const userInput = document.querySelector('#rgage_price').value;

      if(userInput == ""){
          alert("Please Enter Value")
      }else{
  // Retrieve data from localStorage
  let sharedRemortgageData = JSON.parse(localStorage.getItem("sharedRemortgageData"));
  // Access the legal fees from the shared data
  let legalFeeM1 = sharedRemortgageData.legalFeeM1;
  let legalFeeM2 = sharedRemortgageData.legalFeeM2;
  let legalFeeM3 = sharedRemortgageData.legalFeeM3;
  let legalFeeM4 = sharedRemortgageData.legalFeeM4;
  
  let suppValM1 = sharedRemortgageData.suppValM1;
  let suppValM2 = sharedRemortgageData.suppValM2;

let disburValM1 = sharedRemortgageData.disburValM1;
let disburValM2 = sharedRemortgageData.disburValM2;
let disburValM3 = sharedRemortgageData.disburValM3;
let disburValM4 = sharedRemortgageData.disburValM4;
let disburValM5 = sharedRemortgageData.disburValM5;
  
  if (suppValM1 > 0) {
    document.querySelector('.remortgage-equity-loan span').innerHTML = suppValM1;
  } else {
    document.querySelector('.remortgage-equity-loan').innerHTML = "FREE";
  }
  if (suppValM2 > 0) {
    document.querySelector('.remortgage-leasehold span').innerHTML = suppValM2;
  } else {
    document.querySelector('.remortgage-leasehold').innerHTML = "FREE";
  }
  if (disburValM1 > 0) {
    document.querySelector('.remortgage-bank-transfer-fee span').innerHTML = disburValM1;
  } else {
    document.querySelector('.remortgage-bank-transfer-fee').innerHTML = "FREE";
  }
  if (disburValM2 > 0) {
    document.querySelector('.remortgage-file-opening-fee span').innerHTML = disburValM2;
  } else {
    document.querySelector('.remortgage-file-opening-fee').innerHTML = "FREE";
  }
  if (disburValM3 > 0) {
    document.querySelector('.remortgage-identity-insurance span').innerHTML = disburValM3;
  } else {
    document.querySelector('.remortgage-identity-insurance').innerHTML = "FREE";
  }
  if (disburValM4 > 0) {
    document.querySelector('.remortgage-id-check span').innerHTML = disburValM4;
  } else {
    document.querySelector('.remortgage-id-check').innerHTML = "FREE";
  }
  if (disburValM5 > 0) {
    document.querySelector('.remortgage-office-copies span').innerHTML = disburValM5;
  } else {
    document.querySelector('.remortgage-office-copies').innerHTML = "FREE";
  }

      document.querySelector(".tabsform-wrapper").style.display = "none";
      document.querySelector(".remortgage-quot-container").style.display = "block";
     let fee;
  
     if (userInput >= 0 && userInput <= 150000) {
         fee = legalFeeM1;
     } else if (userInput > 150000 && userInput <= 300000) {
         fee = legalFeeM2;
     } else if (userInput > 300000 && userInput <= 500000) {
         fee = legalFeeM3;
     } else if (userInput > 500000 && userInput <= 750000) {
      fee = legalFeeM4;
  } 
  
     if (fee) {
         document.querySelector(".remortgage-legal-fee").innerHTML = fee;
     } else {
         alert("Invalid input or fee not found for the provided value.");
     }
    }
  });
  });

  
    //Equity
  // Add event listener to Check Fee button
  document.addEventListener('DOMContentLoaded', function () {
              
    const checkFeeButton = document.querySelector('#equity-calculate');
    checkFeeButton.addEventListener('click', function () {
      const userInput = document.querySelector('#eq_price').value;
      if(userInput == ""){
        alert("Please Enter Value")
    }else{
    // Retrieve data from localStorage
    let sharedEquityData = JSON.parse(localStorage.getItem("sharedEquityData"));
    console.log(sharedEquityData)
    // Access the legal fees from the shared data
    let legalFeeE1 = sharedEquityData.legalFeeE1;
    let legalFeeE2 = sharedEquityData.legalFeeE2;
    let legalFeeE3 = sharedEquityData.legalFeeE3;
    let legalFeeE4 = sharedEquityData.legalFeeE4;
    let suppValE1 = sharedEquityData.suppValE1;
  let suppValE2 = sharedEquityData.suppValE2;

let disburValE1 = sharedEquityData.disburValE1;
let disburValE2 = sharedEquityData.disburValE2;
let disburValE3 = sharedEquityData.disburValE3;
  
  if (suppValE1 > 0) {
    document.querySelector('.equity-shared-ownership span').innerHTML = suppValE1;
  } else {
    document.querySelector('.equity-shared-ownership').innerHTML = "FREE";
  }
  if (suppValE2 > 0) {
    document.querySelector('.equity-leasehold span').innerHTML = suppValE2;
  } else {
    document.querySelector('.equity-leasehold').innerHTML = "FREE";
  }
  if (disburValE1 > 0) {
    document.querySelector('.equity-id-check span').innerHTML = disburValE1;
  } else {
    document.querySelector('.equity-id-check').innerHTML = "FREE";
  }
  if (disburValE2 > 0) {
    document.querySelector('.equity-file-opening-fee span').innerHTML = disburValE2;
  } else {
    document.querySelector('.equity-file-opening-fee').innerHTML = "FREE";
  }
  if (disburValE3 > 0) {
    document.querySelector('.equity-office-copies span').innerHTML = disburValE3;
  } else {
    document.querySelector('.equity-office-copies').innerHTML = "FREE";
  }
    
        document.querySelector(".tabsform-wrapper").style.display = "none";
        document.querySelector(".equity-quot-container").style.display = "block";
       let fee;
    
       if (userInput >= 0 && userInput <= 150000) {
           fee = legalFeeE1;
       } else if (userInput > 150000 && userInput <= 300000) {
           fee = legalFeeE2;
       } else if (userInput > 300000 && userInput <= 500000) {
           fee = legalFeeE3;
       } else if (userInput > 500000 && userInput <= 750000) {
        fee = legalFeeE4;
    } 
    
       if (fee) {
           document.querySelector(".equity-legal-fee").innerHTML = fee;
       } else {
           alert("Invalid input or fee not found for the provided value.");
       }
    }
    });
    });
