/***************** HEADER  ***********************/
/*
  Get the months span element and change month based on 
  actuall month.
*/
var months = ["January", "February", "March",
                "April", "May", "June", "July",
                "August", "September", "October",
                "November", "December"
];

var monthElement = document.getElementById("months");
var monthDate = new Date();
var actualMonth = monthDate.getMonth();
monthElement.textContent = months[actualMonth] + " Apps";

/******************* END OF HEADER ***********************/


/******************* CONTENTS AREA ***************************************/

    /*************** The Apps Area ***********************/
    
    /* 
        Getting the apps icons and animating them by mouseenter and
        mouseleave.
    */
    const appsIcons = document.querySelectorAll(".theApps table tr td a img");
    for(let i = 0; i < appsIcons.length; i += 1) {
    let superFast = 200;

    function growIcon() {
          $(appsIcons).eq(i).animate({
            width: "+=25px"
           }, superFast);  
    }
    function shrinkIcons() {
        $(appsIcons).eq(i).animate({
            width: "-=25px"
        }, superFast);
    }
    appsIcons[i].addEventListener("mouseenter", growIcon, false);
    appsIcons[i].addEventListener("mouseleave", shrinkIcons, false);
}

    /******************* END OF APPS AREA **************************/

/*************** END OF CONTENTS AREA ******************/


/***************** FOOTER  ***********************/
/* Get the copyright date and 
    change it depending on the actual 
    year
*/
var copyrightYearSpan = document.getElementById("copyrightYear");
var date = new Date();
var year = date.getFullYear();
copyrightYearSpan.textContent = " " + year;

/**************** END OF FOOTER *****************************/