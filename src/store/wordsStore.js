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
      const response = await fetch("/api/words");
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
      this.isLoaded = true;
    } catch (e) {
      console.log(e);
      this.isError = true;
      throw e;
    }
  };

  addNewWord = async (newWord) => {
    try {
      const response = await fetch("/api/words/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWord),
      });
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
      const response = await fetch(`/api/words/${id}/delete`, {
        method: "POST",
        body: JSON.stringify(newDataWords),
      });
      console.log(response, "Удалено");
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  updateWord = async (id, value) => {
    try {
      const response = await fetch(`/api/words/${id}/update`, {
        method: "POST",
        body: JSON.stringify(value),
      });
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

  getRandomWord = async (id) => {
    try {
      const response = await fetch(`/api/words/${id}`);
      const data = await response.json();
      console.log(response, "Получено слово");
      if (Object.keys(data).length === 0) {
        runInAction(() => {
          return this.randomWord;
        });
      } else {
        runInAction(() => {
          this.randomWord = data;
        });
      }
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
}
