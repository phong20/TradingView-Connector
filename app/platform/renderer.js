const platformRadios = document.querySelectorAll('input[name="platform"]');
const mt5Form = document.getElementById("mt5-form");
const tradelockerForm = document.getElementById("tradelocker-form");
const connectionMsg = document.querySelector(".connection-error");
platformRadios.forEach((radio) => {
  radio.addEventListener("change", function () {
    if (this.value === "mt5") {
      mt5Form.classList.add("active");
      tradelockerForm.classList.remove("active");
    } else if (this.value === "tradelocker") {
      tradelockerForm.classList.add("active");
      mt5Form.classList.remove("active");
    }
  });
});
window.electron.ipcRenderer.on('platform-error', (error) => {
      if (connectionMsg) {
        connectionMsg.innerText = `Error connecting to ${error} platform`;
      }
    });
// Handle form submission
function handleSubmit() {
  const selectedPlatform = document.querySelector(
    'input[name="platform"]:checked',
  );

  if (!selectedPlatform) {
    alert("Vui lòng chọn nền tảng trading!");
    return;
  }

  let formData = {
    platform: selectedPlatform.value,
  };

  if (selectedPlatform.value === "mt5") {
    const port = document.getElementById("mt5-port").value;
    const percentage = document.getElementById("mt5-percentage").value;

    if (!port || !percentage) {
      alert("Vui lòng điền đầy đủ thông tin cho MT5!");
      return;
    }

    formData.port = port;
    formData.percentage = percentage;
  } else if (selectedPlatform.value === "tradelocker") {
    const session = document.getElementById("tl-session").value;
    const username = document.getElementById("tl-username").value;
    const password = document.getElementById("tl-password").value;
    const server = document.getElementById("tl-server").value;
    const percentage = document.getElementById("tl-percentage").value;

    if (!session || !username || !password || !server || !percentage) {
      alert("Vui lòng điền đầy đủ thông tin cho TradeLocker!");
      return;
    }

    formData.session = session;
    formData.username = username;
    formData.password = password;
    formData.server = server;
    formData.percentage = percentage;
  }

  // Send data to Electron main process
  console.log("Form Data:", formData);

  // If running in Electron context
  if (window.electron && window.electron.ipcRenderer) {
    window.electron.ipcRenderer.send("trading-config", formData);
  } else {
    // For demo purposes
    alert("Cấu hình đã được lưu:\n" + JSON.stringify(formData, null, 2));
  }
}
// Auto-focus first input when platform is selected
platformRadios.forEach((radio) => {
  radio.addEventListener("change", function () {
    setTimeout(() => {
      if (this.value === "mt5") {
        document.getElementById("mt5-port").focus();
      } else if (this.value === "tradelocker") {
        document.getElementById("tl-session").focus();
      }
    }, 100);
  });
});

// Handle Enter key submission
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    handleSubmit();
  }
});
