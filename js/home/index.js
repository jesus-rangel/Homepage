title = document.querySelector("#title h1");
subtitle = document.querySelector("#title p");

function getTitle() {
  if (window.innerWidth < 768) {
    title.innerHTML = "My heroes <br />&emsp;are weirdoes";
  } else {
    title.innerHTML = "My heroes are weirdoes";
  }

  if (window.innerWidth < 1600) {
    subtitle.innerHTML =
      "Talking about oneself is boring, <br />&emsp;&emsp;so let's talk about my heroes.";
  } else {
    subtitle.innerHTML =
      "Talking about oneself is boring, so let's talk about my heroes.";
  }
}

getTitle();

window.onresize = getTitle;

/* **** TIPPY INSTANCES **** */

/* Fading Images */

tippy.setDefaultProps({ animation: "scale" });

tippy(".james", { content: "Morgan James" });

tippy(".jeanne", { content: "Jeanne de Clisson" });

tippy(".frazier", { content: "Joe Frazier" });

tippy(".churchill", { content: "Winston Churchill" });

tippy(".pizarnik", { content: "Alejandra Pizarnik" });

tippy(".ella", { content: "Ella Fitzgerald" });

tippy(".tina", { content: "Tina Chang" });

tippy(".coltrane", { content: "John Coltrane" });

tippy(".karr", { content: "Mary Karr" });

/* Browser Icons in Modal */

tippy("#chromium-browser", { content: "Try Chromium Browser" });

tippy("#edge-browser", { content: "Try Edge Browser" });

tippy("#vivaldi-browser", { content: "Try Vivaldi Browser" });

tippy("#brave-browser", { content: "Try Brave Browser" });

tippy("#opera-browser", { content: "Try Opera Browser" });
