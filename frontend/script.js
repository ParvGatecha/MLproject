document
  .getElementById("prediction-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const feature1 = parseFloat(e.target.feature1.value);
    const feature2 = parseFloat(e.target.feature2.value);
    const feature3 = parseFloat(e.target.feature3.value);
    const feature4 = parseFloat(e.target.feature4.value);

    const response = await fetch("/api/predict", {
      // Use relative path with '/api' prefix
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        features: [feature1, feature2, feature3, feature4],
      }),
    });

    const result = await response.json();
    document.getElementById("result").textContent =
      "Predicted Class: " + result.prediction;
  });
