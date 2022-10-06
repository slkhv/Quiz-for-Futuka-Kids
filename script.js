class Quiz {
  // function to make a steps by step navigation enter data {text, comment, answer}
  constructor() {
    this.data = data;
    this.current = 0;
  }

}

let quiz = new Quiz(
  [
    {
      title: "Оставить жалобу",
      comment: "Пожалуйста, оставьте свою жалобу",
      content: "",
    }, {
      title: "Поблагодарить",
      comment: "Пожалуйста, оставьте свою жалобу",
      content: "",
    }, {
      title: "Внести предложение",
      comment: "Пожалуйста, оставьте свою жалобу",
      content: `
        <form>
          <input type="text" placeholder="Ваше имя">
          <input type="text" placeholder="Ваша фамилия">
          <input type="text" placeholder="Ваше отчество">
          <input type="text" placeholder="Ваше предложение">
          <input type="submit" value="Отправить">
        </form>
      `,
    },
    `
      
    `
  ]
);