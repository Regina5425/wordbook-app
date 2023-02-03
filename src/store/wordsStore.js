import { runInAction, makeAutoObservable } from "mobx";

export default class WordStore {
  dataWords = [];
  randomWord = {
    english: "universe",
    transcription: "[ˈjuːnɪvɜːs]",
    russian: "вселенная",
    className: "word",
  };

  isLoading = false;
  isLoaded = false;
  isError = false;

  constructor() {
    makeAutoObservable(this);
  }

  getAllWords = async () => {
    try {
      if (this.isLoaded && this.isLoading) {
        return;
      }

      this.isLoading = true;
      const response = await fetch(
        "https://63dd3878367aa5a7a40bbb9d.mockapi.io/words",
				{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: null,
        }
      );
      runInAction(() => {
        this.isLoading = false;
      });

      if (!response.ok) {
        throw new Error(`Could not fetch API, status: ${response.status}`);
      }

      const data = await response.json();

      runInAction(() => {
        this.dataWords = [...this.dataWords, ...data];
      });

      const dataRandom = Math.floor(Math.random() * data.length);
      runInAction(() => {
        this.randomWord = data[dataRandom];
      });

      this.isLoaded = true;
    } catch (e) {
      console.log(e);
      this.isError = true;
      throw e;
    }
  };

  addNewWord = async (newWord) => {
    try {
      const response = await fetch(
        "https://63dd3878367aa5a7a40bbb9d.mockapi.io/words",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newWord),
        }
      );
      console.log(response, "Добавлено");

      if (!response.ok) {
        throw new Error(`Could not fetch API, status: ${response.status}`);
      }

      runInAction(() => {
        this.dataWords.push(newWord);
      });
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  deleteWord = async (id) => {
    try {
      const newDataWords = this.dataWords.filter((item) => item.id !== id);
      runInAction(() => {
        this.dataWords = [...newDataWords];
      });
      const response = await fetch(
        `https://63dd3878367aa5a7a40bbb9d.mockapi.io/words/${id}`,
        {
          method: "DELETE",
					headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newDataWords),
        }
      );
      console.log(response, "Удалено");
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  updateWord = async (id, value) => {
    try {
      const response = await fetch(
        `https://63dd3878367aa5a7a40bbb9d.mockapi.io/words/${id}`,
        {
          method: "PUT",
					headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
        }
      );
      console.log(response, "Изменено");

      const index = this.dataWords.findIndex((item) => item.id === id);
      if (index !== -1) {
        runInAction(() => {
          this.dataWords[index] = value;
        });
        return this.dataWords;
      }
      return this.dataWords;
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
}
