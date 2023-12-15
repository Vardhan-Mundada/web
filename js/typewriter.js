
    // Function to split the text content into individual words wrapped in <span> elements
    function wrapWordsInSpans() {
      const paragraph = document.querySelector('.theme-para');
      const words = paragraph.textContent.split(/\s+/); // Split the text into words
  
      // Clear the existing content in the paragraph
      paragraph.innerHTML = '';
  
      // Wrap each word in a <span> element with animation properties
      words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word;
        span.style.opacity = 0;
        
        span.style.filter = 'blur(4px)';
        span.style.animation = `fade-in 0.8s ${index *0.05}s forwards cubic-bezier(0.11, 0, 0.5, 0)`;
        paragraph.appendChild(span);
  
          // If the word does not end with a punctuation or it's not the last word, add a space after it
          const space = document.createElement('span');
          space.textContent = ' ';
          paragraph.appendChild(space);
        
      });
    }
  
    // Call the function to wrap words in <span> elements
    wrapWordsInSpans();