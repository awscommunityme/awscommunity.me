jQuery(function ($) {

    /* ----------------------------------------------------------- */
    /*  Change event day color upon hover
    /* -----------------------------------------------------------*/
    // const button = document.getElementById("schedule-day-1-btn");
    // const eventDayElement = document.querySelector(".event-day");

    // function changeEventDayColor() {
    //     eventDayElement.style.color = "#232F3E";
    // }

    // button.addEventListener("mouseover", changeEventDayColor);

    // // Optional: Change color back on mouseout
    // button.addEventListener("mouseout", () => {
    //     eventDayElement.style.color = "#e47911";
    // });


    // $("#schedule-day-1").show();
    // $("#schedule-day-2").hide();

    /* ----------------------------------------------------------- */
    /*  Event counter
    /* -----------------------------------------------------------*/

    // if ($('.countdown').length > 0) {
    //     $(".countdown").jCounter({
    //         date: '10 December 2022 10:00:00',
    //         timezone: "Gulf Standard Time",
    //         fallback: function () {
    //             console.log("count finished!")
    //         }
    //     });
    // }
    function calculateTimeLeft() {
        const targetDate = new Date('October 19, 2024');
        const currentDate = new Date();
        const timeDiff = targetDate.getTime() - currentDate.getTime();
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        return {
        days,
        hours,
        minutes
        };
    }

    function updateCounter() {
        const remainingTime = calculateTimeLeft();
        document.querySelector('.days').textContent = remainingTime.days;
        document.querySelector('.hours').textContent = remainingTime.hours;
        document.querySelector('.minutes').textContent = remainingTime.minutes;
    }

    // setInterval(() => {
    // }, 1000);
    // setInterval(updateCounter, 1000);

    /**-------------------------------------------------
     *Fixed HEader
     *----------------------------------------------------**/
    $(window).on('scroll', function () {

        /**Fixed header**/
        if ($(window).scrollTop() > 250) {
            $('.header').addClass('sticky fade_down_effect');
        } else {
            $('.header').removeClass('sticky fade_down_effect');
        }
    });


    /**-------------------------------------------------
     * Canvas
     *----------------------------------------------------**/
    particlesJS.load('particles-js', 'assets/particlesJsConfig.json', function () { });

    new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 900,
        startDelay: 20,
        loop: true,
    });

    /**-------------------------------------------------
     * Event Schedule buttons
     *----------------------------------------------------**/

    $("#schedule-day-1-btn").click(function () {
        $("#schedule-day-1").show();
        $("#schedule-day-2").hide();
    });

    $("#schedule-day-2-btn").click(function () {
        $("#schedule-day-2").show();
        $("#schedule-day-1").hide();
    });

});
