const url = "https://v2.jokeapi.dev/joke/Any?type=single";
const jokes = document.querySelector("#joke");
const loadJokes = document.querySelector("#load");
const cat = document.querySelector("#cat")

const generateJokes = async () => {
  try {
    const setHeader = {
      headers: {
        Accept: "application/json",
      },
    };

    const res = await fetch(url, setHeader);
    const data = await res.json();
    jokes.innerHTML = data.joke;
    cat.innerHTML = data.category
  } catch (error) {
      console.log(error)
  }
};

loadJokes.addEventListener("click", generateJokes);
