const quotes = [
        { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
        { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
        { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
        { text: "In order to be irreplaceable, one must always be different.", author: "Coco Chanel" }
      ];

      function showRandomQuote() {
        const random = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById("quote").textContent = random.text;
        document.getElementById("author").textContent = `— ${random.author}`;
      }

      // Clock
      function updateClock() {
        const now = new Date();
        document.getElementById("clock").textContent = now.toLocaleString();
      }

      // Run when page loads
      window.onload = () => {
        showRandomQuote();
        setInterval(showRandomQuote, 10000);
        updateClock();
        setInterval(updateClock, 1000);

        // Hero animation
        document.getElementById("headerContent").classList.remove("opacity-0", "translate-y-8");
      };