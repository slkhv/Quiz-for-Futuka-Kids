class Quiz {
  
  constructor(list, template) {

    this.container = document.querySelector('.quiz__content');
    this.backBtn = document.querySelector('.quiz__controls--back');

    this.list = list;
    this.template = template;
    
    this.level = 0;
    this.current = [];


    let that = this;
    this.backBtn.addEventListener('click', function () {
      that.back(); // this = element
    });
  }

  renderList () {

    if (this.level==0) { // First level

      let html = "";

      for (let i=0;i<this.list.length;i++) {
        
        let title = this.list[i].title;
        let comment = this.list[i].comment;
        
        html += this.template
                .replace("{{id}}", i)
                .replace("{{level}}", Number(this.level)+1)
                .replace("{{level}}", Number(this.level)+1)
                .replace("{{title}}", title)
                .replace("{{comment}}", comment);
      }

      this.container.innerHTML = html;

      for (let i=0;i<this.list.length;i++) {
        
        if (typeof this.list[i].content != 'string') {
          
          let that = this;
          document.querySelector(`#Quiz_${Number(this.level)-(-1)}_${i}`).addEventListener('click', function () {
            that.chooseItem(this, i); // this = element
          });
        }
      }

    } else {

      let list;

      if (this.level==1) {
        list = this.list[this.current[0]];
      } else if (this.level==2) {
        list = this.list[this.current[0]].content[this.current[1]];
      } else if (this.level==3) {
        list = this.list[this.current[0]].content[this.current[1]].content[this.current[2]];
      } else if (this.level==4) {
        list = this.list[this.current[0]].content[this.current[1]].content[this.current[2]].content[this.current[3]];
      } else if (this.level==5) {
        list = this.list[this.current[0]].content[this.current[1]].content[this.current[2]].content[this.current[3]].content[this.current[4]];
      }



      let html = "";

      if (typeof list.content != 'string') {
        for (let i=0;i<list.content.length;i++) {
      
          let title = list.content[i].title;
          let comment = list.content[i].comment;
          
          html += this.template
                  .replace("{{id}}", i)
                  .replace("{{level}}", Number(this.level)+1)
                  .replace("{{level}}", Number(this.level)+1)
                  .replace("{{title}}", title)
                  .replace("{{comment}}", comment);
        }
      } else {
        html = list.content;
      }

      this.container.innerHTML = html;

      for (let i=0;i<list.content.length;i++) {

        console.log(i, typeof this.list[i].content);
        
        if (typeof this.list[i].content != 'string') {
          
          let that = this;
          document.querySelector(`#Quiz_${(Number(this.level)+1)}_${i}`).addEventListener('click', function () {
            that.chooseItem(this, i); // this = element
          });
        }
      }
    }
  }
  
  chooseItem (e, id) {

    this.current[this.level] = Number(id);
    this.level = e.getAttribute('data-level');

     this.renderList();
  }

  back () {

    this.level--;

    this.renderList();
  }
}

let quiz = new Quiz(

  // Quiz elements hierarchy
  // content(content) used for continue navigation
  // Content(content) used to show the final step e.g. Feedback form
  [
    {
      title: "Оставить жалобу",
      comment: "",
      content: [
        {
          title: "Осertтавить жалобу",
          comment: "Пожалуйста, оставьте свою жалобу",
          content: `<p>Спасибо за вашу жалобу</p>`
        },
        {
          title: "Оставить edty",
          comment: "Пожалуйста, оставьте свою жалобу",
          content: [
            {
              title: "Осertтавить жалобу",
              comment: "Пожалуйста, оставьте свою жалобу",
              content: `<p>Спасибо за вашу жалобу</p>`
            },
            {
              title: "Оставить edty",
              comment: "Пожалуйста, оставьте свою жалобу",
              content: [{}]
            },
            {
              title: "Оставить f",
              comment: "Пожалуйста, оставьте свою жалобу",
              content: [{}]
            }
          ]
        },
        {
          title: "Оставить f",
          comment: "Пожалуйста, оставьте свою жалобу",
          content: `<p>Спасибо за вашу жалобу 3</p>`
        }
      ]
    }, {
      title: "Поблагодарить",
      comment: "",
      content: `
        <form>
          <input type="text" placeholder="Имя">
          <input type="text" placeholder="Фамилия">
          <input type="text" placeholder="Телефон">
          <input type="text" placeholder="Email">
          <input type="text" placeholder="Адрес проживания">
          <input type="text" placeholder="Сообщение">
          <button type="submit">Отправить</button>
        </form>
      `,
    }, {
      title: "Внести предложение",
      comment: "",
      content: ` 
        <form>
          <input type="text" placeholder="Ваше имя">
          <input type="text" placeholder="Ваша фамилия">
          <input type="text" placeholder="Ваше отчество">
          <input type="text" placeholder="Ваше предложение">
          <input type="submit" value="Отправить">
        </form>
      `,
    }
  ],

  // Quiz item's template with dynamic data
  `
    <div data-level="{{level}}" id="Quiz_{{level}}_{{id}}" class="quiz__item">
      <h3 class="quiz__item--title">{{title}}</h3>
      <p class="quiz__item--comment">{{comment}}</p>
    </div>
  `
);

quiz.renderList();