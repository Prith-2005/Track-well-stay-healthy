let prompt = document.querySelector(".prompt");
let container = document.querySelector(".container");
let chatContainer = document.querySelector(".chat-container");
let btn = document.querySelector(".btn");
let userMessage = null;

let Api_Url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCew7I0FIr3TOFFGV31aHKWfZ5a8wXUx28';

// Create and return a chat box element
function createChatBox(html, className) {
  const div = document.createElement("div");
  div.classList.add(className);
  div.innerHTML = html;
  return div;
}

// Send the user message to the API and display the response
async function generateApiResponse(aiChatBox) {
  const textElement = aiChatBox.querySelector(".text");
  try {
    const response = await fetch(Api_Url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          role: "user",
          parts: [{ text: `${userMessage} in 10 words` }]
        }]
      })
    });

    const data = await response.json();
    const apiResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    textElement.innerText = apiResponse || "No response from AI.";
  } catch (error) {
    console.error("API error:", error);
    textElement.innerText = "Something went wrong. Please try again.";
  } finally {
    aiChatBox.querySelector(".loading").style.display = "none";
  }
}

// Show loading animation and trigger the API call
function showLoading() {
  const html = `
    <div id="img">
      <img src="https://cdn.dribbble.com/userupload/22779250/file/original-3f1c5a6c5a04ba9b5f0d6a8e2379dd95.jpg?resize=752x&vertical=center" alt="">
    </div>
    <div class="text"></div>
    <img src="loading.gif" alt="" height="50" class="loading">`;

  let aiChatBox = createChatBox(html, "ai-chat-box");
  chatContainer.appendChild(aiChatBox);
  generateApiResponse(aiChatBox);
}

// Handle button click
btn.addEventListener("click", () => {
  userMessage = prompt.value.trim();

  if (userMessage === "") {
    container.style.display = "flex";
    return;
  } else {
    container.style.display = "none";
  }

  const html = `
    <div id="img">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" alt="">
    </div>
    <div class="text"></div>`;

  let userChatBox = createChatBox(html, "user-chat-box");
  userChatBox.querySelector(".text").innerText = userMessage;
  chatContainer.appendChild(userChatBox);

  prompt.value = "";
  setTimeout(showLoading, 500);
});
