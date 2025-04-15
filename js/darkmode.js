$(document).ready(function () {
  function setDarkmode(enable) {
    if (enable == true) {
      $("html").addClass("darkmode");
      $("h1, h2, h3, h4, h5, h6").addClass("color-white");
      $(".icon").attr("fill", "black");
		$(".icon-normal").attr("fill", "white");
      $("#fab-btn").addClass("fab-btn");
      $("#reload").addClass("fab-btn");
      $("#backtop").addClass("fab-btn");
      $("#daymode-icon").css("opacity", "0");
      $("#nightmode-icon").css("opacity", "1");
    } else {
      $("html").removeClass("darkmode");
      $("h1, h2, h3, h4, h5, h6").removeClass("color-white");
       $(".icon").attr("fill", "white");
		$(".icon-normal").attr("fill", "black");
      $("#fab-btn").removeClass("fab-btn");
      $("#reload").removeClass("fab-btn");
      $("#backtop").removeClass("fab-btn");
      $("#nightmode-icon").css("opacity", "0");
      $("#daymode-icon").css("opacity", "1");
    }
    $(window).trigger("scroll");
  }
  function toggleDarkmode() {
    if ($("html").hasClass("darkmode")) {
      setDarkmode(false);
      sessionStorage.setItem("Sgguo_Enable_Dark_Mode", "false");
    } else {
      setDarkmode(true);
      sessionStorage.setItem("Sgguo_Enable_Dark_Mode", "true");
    }
  }
  if (sessionStorage.getItem("Sgguo_Enable_Dark_Mode") == "true") {
    setDarkmode(true);
  }
  function autoToggleDarkmode() {
    if (
      sessionStorage.getItem("Sgguo_Enable_Dark_Mode") == "false" ||
      sessionStorage.getItem("Sgguo_Enable_Dark_Mode") == "true" 
    ) {
      return;
    }
    let prefersStaus = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    let hour = new Date().getHours();
    if (hour < 7 || hour >= 20) {
      setDarkmode(true);

    } else {
      setDarkmode(false);

    }
    if (prefersStaus == true) {
      setDarkmode(true);

    } else {
      setDarkmode(false);
    }
  }
  autoToggleDarkmode();
  $("#fab-btn").click(function () {
    toggleDarkmode();
  });
  $("#reload").click(function () {
    location.reload();
  });
  $("#backtop").click(function () {
    location.href = "#top";
  });
});
