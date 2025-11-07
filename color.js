<!DOCTYPE html>
<html>
<head>
  <title>Change Background Color</title>
</head>
<body style="text-align: center; margin-top: 100px;">

  <h2>Click the button to change the background color!</h2>
  <button onclick="changeColor()">Change Color</button>

  <script>
    function changeColor() {
      const colors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = randomColor;
    }
  </script>

</body>
</html>
