document.addEventListener("DOMContentLoaded", () => {
  // Simulated build status
  const buildStatus = document.getElementById("build-status");
  buildStatus.textContent = "✅ All builds passing";

  // Simulated deployment info
  const deploymentInfo = document.getElementById("deployment-info");
  deploymentInfo.textContent = "v2.3 deployed to production on Sept 3, 2025";

  // Simulated team updates
  const teamUpdates = [
    "Alice pushed new Docker config",
    "Bob merged feature branch",
    "Charlie updated CI pipeline"
  ];

  const updatesList = document.getElementById("team-updates");
  teamUpdates.forEach(update => {
    const li = document.createElement("li");
    li.textContent = update;
    updatesList.appendChild(li);
  });
});
