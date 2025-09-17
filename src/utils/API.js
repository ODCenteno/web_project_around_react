class Api {
  constructor(apiDetails) {
    this._baseUrl = apiDetails.baseUrl;
    this._headers = apiDetails.headers;
  }

  _callApi(endpoint, method, body) {
    return fetch(`${this._baseUrl}${endpoint}`, {
      method: method || "GET",
      headers: this._headers,
      body: body ? JSON.stringify(body) : undefined,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch: ", res.status);
        }
        return res.json();
      })
      .catch((err) => console.error(err));
  }

  getUserInfo() {
    return this._callApi("users/me")
      .then((user) => {
        return user;
      })
      .catch((error) => {
        console.error(error);
        return { name: "", description: "" };
      });
  }

  saveUserDetails(userDetails) {
    return this._callApi("users/me", "PATCH", {
      name: userDetails.name,
      about: userDetails.about,
    });
  }

  saveAvatar(avatar) {
    return this._callApi("users/me/avatar", "PATCH", avatar);
  }

  getCards() {
    console.log("Obteniendo Cards");
    return this._callApi(`cards/`);
  }

  postNewCard(body) {
    return this._callApi(`cards/`, "POST", body);
  }

  updateUser(userId, body) {
    return this._callApi(`user/${userId}`, "PATCH", body);
  }

  deleteCard(cardId) {
    return this._callApi(`cards/${cardId}`, "DELETE");
  }

  addLike(cardId) {
    return this._callApi(`/cards/${cardId}/likes`, "PUT");
  }

  removeLike(cardId) {
    return this._callApi(`/cards/${cardId}/likes`, "DELETE");
  }

  changeLikeCardStatus(cardId, isLiked) {
    return isLiked ? this.addLike(cardId) : this.removeLike(cardId);
  }
}

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1/",
  headers: {
    authorization: "a5cb0d16-6952-4c7a-a5a0-b8b568da9065",
    "Content-Type": "application/json",
  },
});

export default api;
