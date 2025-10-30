//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function() {
  const input = document.getElementById("ip").value;
  const output = document.getElementById("output");
  const num = Number(input);
  

 

  new Promise((resolve) => {
    setTimeout(() => {
      output.textContent = `Result: ${num}`;
      resolve(num);
    }, 2000);
  })
    .then((res) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = res * 2;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 2000);
      });
    })
    .then((res) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = res - 3;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((res) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = res / 2;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((res) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = res + 10;
          output.textContent = `Final Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    });
});
