"use strict";

const API_ENDPOINT = "https://icanhazdadjoke.com/";

async function fetchDadJoke() {
  const result = await fetch(API_ENDPOINT, {
    headers: {
      Accept: "application/json"
    }
  });
  const data = await result.json();

  return data.joke;
}

module.exports = {
  fetchDadJoke
};