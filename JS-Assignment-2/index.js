const quotes = [
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "- Bernard M. Baruch",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "- Mahatma Gandhi",
  },
  {
    quote:
      "It is better to be hated for what you are than to be loved for what you are not.",
    author: "- Andre Gide, Autumn Leaves",
  },
  {
    quote: "Life is what happens to us while we are making other plans.",
    author: "- Allen Saunders",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "- George Eliot",
  },

  {
    quote: "That which does not kill us makes us stronger.",
    author: "- Friedrich Nietzsche",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "- Mae West",
  },
];

let lastIndex = -1;

function Generate_Quote() {
  let index;
  for (let i = 0; i < quotes.length; i++) {
    index = Math.floor(Math.random() * quotes.length);
    if (index !== lastIndex) {
      break;
    }
  }

  lastIndex = index;

  document.getElementById("quote").textContent = `"${quotes[index].quote}"`;
  document.getElementById("author").textContent = quotes[index].author;
}