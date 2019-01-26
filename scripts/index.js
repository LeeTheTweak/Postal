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
    var apps = document.querySelectorAll(".theApps table tr td a img");

    function growApp1() {
        $(apps).eq(0).animate({
            width: "+=40px"
        }, 130);
    }
    function shrinkApp1() {
        $(apps).eq(0).animate({
            width: "-=40px"
        }, 130);
    }

    function growApp2() {
        $(apps).eq(1).animate({
            width: "+=40px"
        }, 130);
    }
    function shrinkApp2() {
        $(apps).eq(1).animate({
            width: "-=40px"
        }, 130);
    }

    function growApp3() {
        $(apps).eq(2).animate({
            width: "+=40px"
        }, 130);
    }
    function shrinkApp3() {
        $(apps).eq(2).animate({
            width: "-=40px"
        }, 130);
    }
    apps[0].addEventListener("mouseenter", growApp1, false);
    apps[0].addEventListener("mouseleave", shrinkApp1, false);
    apps[1].addEventListener("mouseenter", growApp2, false);
    apps[1].addEventListener("mouseleave", shrinkApp2, false);
    apps[2].addEventListener("mouseenter", growApp3, false);
    apps[2].addEventListener("mouseleave", shrinkApp3, false);

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