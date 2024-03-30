function updatePrices() {
    const priceSpans = document.querySelectorAll('.tag span');

    priceSpans.forEach(span => {
      let currentPrice = parseFloat(span.textContent.replace('$', ''));
      let targetPrice = currentPrice + (Math.random() * 10 - 5);
      let duration = 2000 + Math.random() * 2000;
      let steps = 30 + Math.random() * 20;
      let step = (targetPrice - currentPrice) / steps;

      let count = 0;
      let interval = setInterval(() => {
        if (count < steps) {
          currentPrice += step;
          span.textContent = `$${currentPrice.toFixed(4)}`;
          span.style.color = currentPrice > parseFloat(span.textContent.replace('$', '')) ? '#A6CF98' : '#DF2E38';
          count++;
        } else {
          clearInterval(interval);
        }
      }, duration / steps);
    });
  }

  updatePrices(); // Initial update
  setInterval(updatePrices, 5000);