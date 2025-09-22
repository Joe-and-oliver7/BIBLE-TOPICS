function showTopic(topicId) {
  // Hide all sections
  const sections = document.querySelectorAll(".topic");
  sections.forEach(section => section.classList.add("hidden"));

  // Show the selected one
  document.getElementById(topicId).classList.remove("hidden");
}
