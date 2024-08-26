import * as turbo from "@hotwired/turbo";

turbo.start();

// Use the Turbo load event to handle re-initialization
document.addEventListener("turbo:load", () => {
  const menuIcon = document.querySelector("li[data-menu]") as HTMLLIElement;
  if (menuIcon) {
    menuIcon.addEventListener("click", () => {
      const header = document.querySelector("[data-header]") as HTMLDivElement;
      const overlay = document.querySelector(
        "[data-overlay]"
      ) as HTMLDivElement;

      if (overlay && header) {
        overlay.classList.remove("hidden");
        overlay.classList.add("block");
        header.classList.add("ml-[0px]");
        header.classList.remove("ml-[-300px]");
      }
    });
  }

  const path = window.location.pathname.split("/")[1];
  // get nav links
  const navLinks = document.querySelectorAll<HTMLAnchorElement>("[data-link]");
  navLinks.forEach((link) => {
    console.log(path, link.getAttribute("href"));
    if (link?.getAttribute("href")?.split("/")[1] === path) {
      link.classList.add("text-green-600");
    }
  });
  // overlay element
  const overlay = document.querySelector("[data-overlay]") as HTMLDivElement;
  // header element
  const header = document.querySelector("[data-header]") as HTMLDivElement;
  // select the cancel button
  const cancelButton = document.querySelector(
    "span[data-cancel]"
  ) as HTMLSpanElement;
  cancelButton.addEventListener("click", () => {
    header.classList.remove("ml-[0px]");
    header.classList.add("ml-[-300px]");
    overlay.classList.add("hidden");
  });
  // overlay
  overlay.addEventListener("click", () => {
    header.classList.remove("ml-[0px]");
    header.classList.add("ml-[-300px]");
    overlay.classList.add("hidden");
  });
});
