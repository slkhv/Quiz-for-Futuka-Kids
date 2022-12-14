class Quiz {
  
  constructor(list, template) {

    this.container = document.querySelector('.quiz__content');
    this.controls = document.querySelector('.quiz__controls');
    this.backBtn = document.querySelector('.quiz__controls--back');

    this.list = list;
    this.template = template;
    
    this.level = 0;
    this.currentID = [];


    let that = this;
    this.backBtn.addEventListener('click', function () {
      that.back(); // this = element
    });
  }

  renderList () {

    if (this.level==0) { // First level

      this.hideControls();

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
        
        // if (typeof this.list[i].content != 'string') {
          
          let that = this;
          document.querySelector(`#Quiz_${Number(this.level)+1}_${i}`).addEventListener('click', function () {
            that.chooseItem(this, i); // this = element
          });
        // }
      }

    } else {

      this.showControls();


      let list;

      if (this.level==1) {
        list = this.list[this.currentID[0]];
      } else if (this.level==2) {
        list = this.list[this.currentID[0]].content[this.currentID[1]];
      } else if (this.level==3) {
        list = this.list[this.currentID[0]].content[this.currentID[1]].content[this.currentID[2]];
      } else if (this.level==4) {
        list = this.list[this.currentID[0]].content[this.currentID[1]].content[this.currentID[2]].content[this.currentID[3]];
      } else if (this.level==5) {
        list = this.list[this.currentID[0]].content[this.currentID[1]].content[this.currentID[2]].content[this.currentID[3]].content[this.currentID[4]];
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
        
          let that = this;

          if (document.querySelector(`#Quiz_${(Number(this.level)+1)}_${i}`) != null) {
            document.querySelector(`#Quiz_${(Number(this.level)+1)}_${i}`).addEventListener('click', function () {
              that.chooseItem(this, i); // this = element
            });
          }
      }
    }
  }
  
  chooseItem (e, id) {

    this.currentID[this.level] = Number(id);
    this.level = e.getAttribute('data-level');

     this.renderList();
  }

  back () {

    this.level>1 ? this.level-- : this.level = 0;

    this.renderList();
  }

  hideControls () {
    this.controls.classList.add('-hidden');
  }

  showControls () {
    this.controls.classList.remove('-hidden');
  }
}

let quiz = new Quiz(

  // Quiz elements hierarchy
  // content(content) used for continue navigation
  // Content(content) used to show the final step e.g. Feedback form
  [
    {
      title: "???????????????? ????????????",
      comment: "",
      content: [
        {
          title: "???????????????? ???????????? 1",
          comment: "????????????????????, ???????????????? ???????? ????????????",
          content: `
            <script data-b24-form="inline/8/k9vyjr" data-skip-moving="true">(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://b24.futuka.ru/upload/crm/form/loader_8_k9vyjr.js');</script>
          `
        },
        {
          title: "???????????????? ???????????? 2",
          comment: "????????????????????, ???????????????? ???????? ????????????",
          content: [
            {
              title: "???????????????? ???????????? 2_1",
              comment: "????????????????????, ???????????????? ???????? ????????????",
              content: `
                <script data-b24-form="inline/8/k9vyjr" data-skip-moving="true">(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://b24.futuka.ru/upload/crm/form/loader_8_k9vyjr.js');</script>
              `
            },
            {
              title: "???????????????? ???????????? 2_2",
              comment: "????????????????????, ???????????????? ???????? ????????????",
              content: `
                <script data-b24-form="inline/8/k9vyjr" data-skip-moving="true">(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://b24.futuka.ru/upload/crm/form/loader_8_k9vyjr.js');</script>
              `
            },
            {
              title: "???????????????? ???????????? 2_3",
              comment: "????????????????????, ???????????????? ???????? ????????????",
              content: `
                <script data-b24-form="inline/8/k9vyjr" data-skip-moving="true">(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://b24.futuka.ru/upload/crm/form/loader_8_k9vyjr.js');</script>
              `
            }
          ]
        },
        {
          title: "???????????????? ???????????? 3",
          comment: "????????????????????, ???????????????? ???????? ????????????",
          content: `
            <script data-b24-form="inline/8/k9vyjr" data-skip-moving="true">(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://b24.futuka.ru/upload/crm/form/loader_8_k9vyjr.js');</script>
          `
        }
      ]
    }, {
      title: "??????????????????????????",
      comment: "",
      content: `
        <script data-b24-form="inline/8/k9vyjr" data-skip-moving="true">(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://b24.futuka.ru/upload/crm/form/loader_8_k9vyjr.js');</script>
      `,
    }, {
      title: "???????????? ??????????????????????",
      comment: "",
      content: ` 
        <script data-b24-form="inline/8/k9vyjr" data-skip-moving="true">(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://b24.futuka.ru/upload/crm/form/loader_8_k9vyjr.js');</script>
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