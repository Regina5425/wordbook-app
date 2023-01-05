import { makeAutoObservable } from "mobx";
import { request } from "../request/request";

class WordStore {
  dataWords = [
    {
      id: "1",
      english: "read",
      transcription: "[ riːd ]",
      russian: "читать",
      tags: "глагол",
    },
    {
      id: "2",
      english: "animal ",
      transcription: "[ ˈæn.ɪ.məl ]",
      russian: "животное",
      tags: "животные",
    },
  ];

  isLoading = false;
  error = false;

  constructor() {
    makeAutoObservable(this);
  }

  getAllDataWords = async () => {
    const response = await request("/api/words");
    const data = await response.json();
    this.dataWords = [...this.dataWords, ...data];
  };

  addNewWord = async (newWord) => {
    const response = await request(
      "/api/words/add",
      "POST",
      JSON.stringify(newWord)
    );
    const result = await response.json();
    console.log(response, "Добавлено");
    this.dataWords = this.dataWords.push(result);
  };

  deleteWord = (id) => {
    const newDataWords = this.dataWords.filter((item) => item.id !== id);
    this.dataWords = [...newDataWords];
    request(`/api/words/${id}/delete`, "POST", JSON.stringify(newDataWords))
      .then((response) => console.log(response, "Удалено"))
      .catch((e) => console.log(e));
  };

  saveChanges = async (id, value) => {
    const response = await request(
      `/api/words/${id}/update`,
      "POST",
      JSON.stringify(value)
    );
    const result = await response.json();
    console.log(response, "Изменено");

    function getNew() {
      const index = this.dataWords.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.dataWords[index] = result;
      }
      return this.dataWords;
    }
    const newWordData = getNew();
    this.dataWords = [...newWordData];
  };
}

export default WordStore;
