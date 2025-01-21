// Initialize Feather icons
feather.replace();
// Roadmap Step 1: Select DOM elements
const goalAmountEl = document.getElementById("goal-amount");
const currentSavingsEl = document.getElementById("current-savings");
const monthlyContributionEl = document.getElementById("monthly-contribution");

const calcButton = document.getElementById("calculate-btn");
const progressBar = document.getElementById("progress-bar");
const resultEl = document.getElementById("result");

// Roadmap Step 2: Add event listener for calculate button
calcButton.addEventListener("click", () => {
  // Roadmap Step 3: Validate user input
  const goalAmountElValue = parseInt(goalAmountEl.value);
  const currentSavingsElValue = parseInt(currentSavingsEl.value);
  const monthlyContributionElValue = parseInt(monthlyContributionEl.value);
  if (
    isNaN(goalAmountElValue) ||
    isNaN(currentSavingsElValue) ||
    isNaN(monthlyContributionElValue)
  ) {
    resultEl.textContent = "Please enter numerical value";
    resultEl.classList.add("show");
    return;
  }
  // Roadmap Step 4: Calculate remaining amount and months to reach goal
  const remainingAmt = goalAmountElValue - currentSavingsElValue;
  const months = Math.ceil(remainingAmt / monthlyContributionElValue);
  const progress = (currentSavingsElValue / goalAmountElValue) * 100;

  progressBar.style.width = `${progress}%`;
  // Roadmap Step 6: Display result based on the savings progress
  resultEl.classList.remove("show");
  setTimeout(() => {
    if (currentSavingsElValue > goalAmountElValue) {
      resultEl.innerHTML = "🎉Congratulations";
    } else {
      resultEl.innerHTML = `${months} months to go my dear 🤞`;
    }
    resultEl.classList.add("show");
  }, 100);
});

// Roadmap Step 7: Handle UI updates and transitions for result display
