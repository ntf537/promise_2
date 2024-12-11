const cont = document.getElementById("container");
const b1 = document.getElementById("b1");
const firstUser = document.getElementById("first-user");

async function fetchAllData() {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(url);
    const data = await response.json();
    renderData(data);
  } catch (error) {
    console.log("nt");
  }
}

/* function renderData(data) {
  if (typeof data[0] === "object") {
    for (let key0 in data[0]) {
      if (typeof data[0][key0] === "object") {
        console.log(key0);
        for (let key1 in data[0][key0]) {
          if (typeof data[0][key0][key1] === "object") {
            console.log("    " + key1);
            for (let key2 in data[0][key0][key1]) {
              console.log(
                "        key: " + key2 + "; value: " + data[0][key0][key1][key2]
              );
            }
          } else {
            console.log("    key: " + key1 + "; value: " + data[0][key0][key1]);
          }
        }
      } else {
        console.log("key: " + key0 + "; value: " + data[0][key0]);
      }
    }
  }
} */

function renderData(data) {
  if (typeof data[0] === "object") {
    for (let key0 in data[0]) {
      if (typeof data[0][key0] === "object") {
        const dt_element0 = document.createElement("dt");
        dt_element0.textContent = key0;
        firstUser.insertAdjacentElement("afterend", dt_element0);
        for (let key1 in data[0][key0]) {
          if (typeof data[0][key0][key1] === "object") {
            const dt_element10 = document.createElement("dt");
            dt_element10.textContent = key1;
            dt_element0.insertAdjacentElement("afterend", dt_element10);
            for (let key2 in data[0][key0][key1]) {
              const dt_element2 = document.createElement("dt");
              const dd_element2 = document.createElement("dd");
              dt_element2.textContent = key2;
              dd_element2.textContent = data[0][key0][key1][key2];
              dt_element10.insertAdjacentElement("afterend", dt_element2);
              dt_element2.insertAdjacentElement("afterend", dd_element2);
            }
          } else {
            const dt_element1 = document.createElement("dt");
            const dd_element1 = document.createElement("dd");
            dt_element1.textContent = key1;
            dd_element1.textContent = data[0][key0][key1];
            const fuLast = firstUser.lastChild;
            dt_element0.insertAdjacentElement("afterend", dt_element1);
            dt_element1.insertAdjacentElement("afterend", dd_element1);
          }
        }
      } else {
        const dt_element = document.createElement("dt");
        const dd_element = document.createElement("dd");
        dt_element.textContent = key0;
        dd_element.textContent = data[0][key0];
        firstUser.insertAdjacentElement("afterend", dt_element);
        dt_element.insertAdjacentElement("afterend", dd_element);
      }
    }
  }
}

const onButton = () => {
  fetchAllData();
};

b1.addEventListener("click", onButton);
