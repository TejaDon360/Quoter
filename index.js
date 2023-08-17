let quotes = [
  {
    quote:
      "Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty",
    name: "- Albert Einstein",
  },
  {
    quote:
      "Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions",
    name: "- Deepak Chopra ",
  },
  {
    quote: "Man cannot be freed by the same injustice that enslaved it.",
    name: "- Pierce Brown, Red Rising  ",
  },
  {
    quote: "Life calls the tune, we dance",
    name: "- John Galsworthy  ",
  },
  {
    quote: "Do one thing every day that scares you",
    name: "- Eleanor Roosevelt ",
  },
  {
    quote:
      "Sometimes you wake up. Sometimes the fall kills you. And sometimes, when you fall, you fly.",
    name: "-  Neil Gaiman, The Sandman, Vol. 6: Fables & Reflections  ",
  },
  {
    quote: "What's meant to be will always find a way",
    name: "- Trisha Yearwood ",
  },
  {
    quote:
      "The flower that blooms in adversity is the rarest and most beautiful of all.",
    name: "- Walt Disney Company, Mulan  ",
  },
  {
    quote: "The unexamined life is not worth living.",
    name: "- Socrates ",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    name: "- Winston S. Churchill ",
  },
];

let quoteText = document.querySelector(".card-text ");
let quoteBy = document.querySelector(".quote-by");

let btn = document.querySelector(".btn");

let i = 0;
btn.addEventListener("click", () => {
  i += 1;
  if (i > quotes.length) {
    i = 0;
  }
  quoteText.textContent = quotes[i].quote;
  quoteBy.textContent = quotes[i].name;
  console.log("Works");
});
