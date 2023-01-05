"use strict";

const products = [
  {
    id: 0,
    name: "The Art of Computer Programming",
    price: 35,
    imageUrl:
      "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3213/9780321335708.jpg",
    description:
      " This book is actually two book in one. The first section is a short tutorial on developing enterprise applications, which you can read from start to finish to understand the scope of the books lesson. The next section, the bulk of the book, is a detailed reference to the patterns themselves. Each pattern provides usage and implementation information, as well as detailed code examples in Java or C#. The entire book is also richly illustrated with UML diagrams to further explain the concepts.",
    timeStamp: new Date().toISOString(),
    likes: [
      {
        id: Math.random() * 100000000000,
        email: "asdadasd@gmail.com",
        password: "53252353",
        name: "Furkan",
        token: "sadadasdasd",
        timeStamp: new Date().toISOString(),
      },
    ],
  },
  {
    id: 1,
    name: "The Hidden Language of Computer ",
    price: 45,
    imageUrl: "https://m.media-amazon.com/images/I/310WZuKyEUL._AC_SY780_.jpg",
    description:
      " This book is actually two book in one. The first section is a short tutorial on developing enterprise applications, which you can read from start to finish to understand the scope of the books lesson. The next section, the bulk of the book, is a detailed reference to the patterns themselves. Each pattern provides usage and implementation information, as well as detailed code examples in Java or C#. The entire book is also richly illustrated with UML diagrams to further explain the concepts.",
    timeStamp: new Date().toISOString(),
    likes: [
      {
        id: Math.random() * 100000000000,
        email: "asdadasd@gmail.com",
        password: "53252353",
        name: "Furkan",
        token: "sadadasdasd",
        timeStamp: new Date().toISOString(),
      },
    ],
  },
  {
    id: 2,
    name: "Patterns of Enterprise Application Architecture",
    price: 50,
    imageUrl: "https://m.media-amazon.com/images/I/81jKqZiJIBL.jpg",
    description:
      " This book is actually two book in one. The first section is a short tutorial on developing enterprise applications, which you can read from start to finish to understand the scope of the books lesson. The next section, the bulk of the book, is a detailed reference to the patterns themselves. Each pattern provides usage and implementation information, as well as detailed code examples in Java or C#. The entire book is also richly illustrated with UML diagrams to further explain the concepts.",
    timeStamp: new Date().toISOString(),
    likes: [
      {
        id: Math.random() * 100000000000,
        email: "asdadasd@gmail.com",
        password: "53252353",
        name: "Furkan",
        token: "sadadasdasd",
        timeStamp: new Date().toISOString(),
      },
    ],
  },
  {
    id: 3,
    name: "Clean Architecture a Craftsman's Guide to Software Structure and Design",
    price: 65,
    imageUrl: "https://m.media-amazon.com/images/I/51ev4PLtsML.jpg",
    description:
      " This book is actually two book in one. The first section is a short tutorial on developing enterprise applications, which you can read from start to finish to understand the scope of the books lesson. The next section, the bulk of the book, is a detailed reference to the patterns themselves. Each pattern provides usage and implementation information, as well as detailed code examples in Java or C#. The entire book is also richly illustrated with UML diagrams to further explain the concepts.",
    timeStamp: new Date().toISOString(),
    likes: [
      {
        id: Math.random() * 100000000000,
        email: "asdadasd@gmail.com",
        password: "53252353",
        name: "Furkan",
        token: "sadadasdasd",
        timeStamp: new Date().toISOString(),
      },
    ],
  },
];

const users = [];

class App {
  form = document.querySelector(".form");
  registerRight = document.querySelector(".register--right");
  title = document.querySelector(".register--right__title");
  subTitle = document.querySelector(".register--right__subtitle");
  registerBtn = document.querySelector(".form--btn__register");
  loginBtn = document.querySelector(".form--btn__login");
  // prettier-ignore
  loginRegisterContainer = document.querySelector(".login--register__container");
  secondPage = document.querySelector(".secondPage");
  logOutBtn = document.querySelector(".secondPage--logout");
  card = document.querySelector(".card");
  details = document.querySelector(".details");
  cardsContainer = document.querySelector(".cards");
  leftArrow = document.querySelector(".details__icon");
  heartIcons = document.querySelectorAll(".card--icon");
  cardsList = document.querySelector(".cards--lists");
  details = document.querySelector(".details");
  thirdPage = document.querySelector(".thirdPage");
  timesIcon = document.querySelector(".errorMessage--icon");
  btnBackRegister = document.querySelector(".backRegister");

  // input-variables
  inputName = document.querySelector(".form--name");
  inputSurname = document.querySelector(".form--surname");
  inputPhone = document.querySelector(".form--phone");
  inputEmail = document.querySelector(".form--email");
  inputPassword = document.querySelector(".form--password");
  inputRePassword = document.querySelector(".form--rePassword");

  constructor() {
    this.form.addEventListener("submit", this.formSubmitHandler.bind(this));
    this.loginBtn.addEventListener("click", this.Login.bind(this));
    this.thirdPage.addEventListener("click", this.GoPreviousPage.bind(this));
    this.logOutBtn.addEventListener("click", this.closeAccount.bind(this));
    this.showProductsPageTwo();
    this.cardsList.addEventListener("click", this.goToThirdPage.bind(this));
    this.secondPage.addEventListener("click", this.addBookmark.bind(this));
    this.registerRight.addEventListener("click", this.closeErrorMessage);
    this.inputPhone.addEventListener("blur", this.maskPhoneNumber);
    // this.registerRight.addEventListener("click", this.backRegister.bind(this));
  }

  // backRegister(event) {
  //   if (event.target.classList.contains("backRegister")) {
  //     this.title.textContent = "Hello";
  //     this.subTitle.textContent = "Sign Up To Get Started";
  //     this.inputName.style.display = "block";
  //     this.inputSurname.style.display = "block";
  //     this.inputRePassword.style.display = "block";
  //     this.inputPhone.style.display = "block";
  //     document.querySelector(".backRegister").style.display = "none";
  //     this.removeLoginAddRegisterButton();
  //     this.clearInputs();
  //     this.clearErrors();
  //   }
  // }

  maskPhoneNumber(e) {
    const x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{3})(\d{3})(\d{2})(\d{2})/);
    e.target.value = "+90" + "(" + x[1] + ") " + x[2] + "-" + x[3] + "-" + x[4];
  }

  closeErrorMessage(event) {
    if (event.target.classList.contains("fa-xmark")) {
      const errorMessageEl = event.target.closest(".errorMessage");
      errorMessageEl.remove();
    }
  }

  clearInputs() {
    this.form.reset();
  }

  showDetails(id) {
    const productObj = products.at(id);

    let html = `
    <div class="details ">
      <img class="details--image" src="${productObj.imageUrl}" alt="${productObj.name}" />
      <div class="details--container">
        <h2 class="details--title">${productObj.name}</h2>
        <p class="details--text">
          ${productObj.description}
        </p>
        <button class="details--price">${productObj.price}.00 ₺</button>
      </div>
      <i class="fa-solid fa-arrow-left-long details__icon"></i>
    </div>
    `;
    this.thirdPage.innerHTML = "";
    this.addNavigation(this.thirdPage);
    this.thirdPage.insertAdjacentHTML("beforeend", html);
    this.thirdPage.classList.toggle("hidden");
    this.secondPage.classList.toggle("hidden");
  }

  addNavigation(element) {
    let html = `
    <nav class="secondPage--nav">
        <p class="secondPage--logo">
          Piton<span class="secondPage--shop">Shop</span>
        </p>
        <button class="secondPage--logout">Logout</button>
      </nav>
    `;
    element.insertAdjacentHTML("afterbegin", html);
  }

  showProductsPageTwo() {
    products.forEach((product) => {
      let html = `
      <li class="cards--item" data-id="${product.id}">
        <div class="card">
          <img class="card--image" src="${product.imageUrl}" alt="Book" width=250 height=300 />
          <p class="card--title">${product.name}</p>
          <hr class="card--horizontal" />
          <p class="card--price">${product.price}.00₺</p>
          <i class="fa-regular fa-heart card--icon"></i>
        </div>
      </li>
      `;

      this.cardsList.insertAdjacentHTML("beforeend", html);
    });
  }

  renderCheckboxInput() {
    let html = `
    <div class="checkbox--container">
      <input type="checkbox" class="checkbox" id="checkbox" />
      <label for="checkbox">Remember Me!</label>
    </div>
    `;
    this.loginBtn.insertAdjacentHTML("beforebegin", html);
  }

  renderInputsAndTitles() {
    this.title.textContent = "Hello Again!";
    this.subTitle.textContent = "Welcome Back";
    this.inputName.style.display = "none";
    this.inputSurname.style.display = "none";
    this.inputRePassword.style.display = "none";
    this.inputPhone.style.display = "none";
    this.renderCheckboxInput();
    this.removeRegisterAddLoginButton();
    this.addForgotPasswordButton();
  }

  removeRegisterAddLoginButton() {
    this.registerBtn.classList.add("hidden");
    this.loginBtn.classList.remove("hidden");
  }

  removeLoginAddRegisterButton() {
    this.registerBtn.classList.remove("hidden");
    this.loginBtn.classList.add("hidden");
  }

  addForgotPasswordButton() {
    const html = `
    <p class="forgotPassword">Forgot Password</p>
    `;
    this.form.insertAdjacentHTML("beforeend", html);
  }

  getDataFromForm() {
    const data = {
      name: this.inputName.value,
      surname: this.inputSurname.value,
      password: this.inputPassword.value,
      phone: this.inputPhone.value,
      email: this.inputEmail.value,
    };

    return data;
  }

  Validation() {
    try {
      let isValid = true;

      const name = this.inputName.value;
      const surname = this.inputSurname.value;
      const password = this.inputPassword.value;
      const rePassword = this.inputRePassword.value;
      const phone = this.inputPhone.value;
      const email = this.inputEmail.value;

      if (password !== rePassword) {
        isValid = false;
        throw new Error(
          "Password and the Re-Password field must be the same! \n"
        );
      }

      if (
        name.trim().length === 0 ||
        surname.trim().length === 0 ||
        phone.trim().length === 0 ||
        email.trim().length === 0 ||
        password.trim().length === 0 ||
        rePassword.trim().length === 0
      ) {
        isValid = false;
        throw new Error("All fields are must be filled.");
      }

      if (password.length < 6 || password.length > 20) {
        isValid = false;
        throw new Error("Password must be between 6-20 characters.  \n");
      }

      return isValid;
    } catch (err) {
      this.renderError(err.message, this.registerRight);
    }
  }

  formSubmitHandler(e) {
    e.preventDefault();
    const validation = this.Validation();

    if (validation) {
      e.preventDefault();
      this.renderInputsAndTitles();
      const data = this.getDataFromForm();
      console.log(data);
      users.push(data);
      this.clearInputs();
      console.log(users);
    }
  }

  Login(e) {
    try {
      e.preventDefault();

      const email = this.inputEmail.value;
      const password = this.inputPassword.value;
      const inputCheckbox = document.querySelector(".checkbox");

      const currentUser = users.find((user) => user.email === email);

      if (!currentUser) throw new Error("Your email is not valid.");

      if (currentUser && currentUser.password === password) {
        this.loginRegisterContainer.classList.toggle("hidden");
        this.secondPage.classList.toggle("hidden");
        if (!inputCheckbox.checked) {
          this.inputEmail.value = "";
          this.inputPassword.value = "";
        }
      } else {
        throw new Error("Your password is wrong.");
      }
    } catch (err) {
      this.renderError(err.message, this.registerRight);
    }
  }

  fromSecondToThirdPage(e) {
    if (!e.target.classList.contains("fa-heart")) {
      this.cardsContainer.classList.toggle("hidden");
      this.details.classList.toggle("hidden");
    }
  }

  goToThirdPage(event) {
    if (!event.target.classList.contains("fa-heart")) {
      const cardItem = event.target.closest(".cards--item");
      if (!cardItem) return;
      const id = +cardItem.dataset.id;
      this.showDetails(id);
    }
  }

  GoPreviousPage(event) {
    if (event.target.classList.contains("fa-arrow-left-long")) {
      this.secondPage.classList.toggle("hidden");
      this.thirdPage.classList.toggle("hidden");
    }
  }

  addBookmark(e) {
    if (e.target.classList.contains("fa-heart")) {
      const cardsItem = e.target.closest(".cards--item");
      const id = +cardsItem.dataset.id;
      products[id].bookmarked = true;

      const heartIcon = e.target;
      if (heartIcon.classList.contains("fa-regular")) {
        heartIcon.classList.remove("fa-regular");
        heartIcon.classList.add("fa-solid");
      } else {
        heartIcon.classList.add("fa-regular");
        heartIcon.classList.remove("fa-solid");
      }
      console.log(products[id].bookmarked);
    }
  }

  closeAccount() {
    this.loginRegisterContainer.classList.toggle("hidden");
    this.secondPage.classList.toggle("hidden");
    this.clearErrors();
  }

  renderError(message, parentElement) {
    let html = `
    <div class="errorMessage errorMessage-warning">
      <i class="fa-solid fa-xmark errorMessage--icon"></i>
      <div class="message">${message}</div>
    </div>
    `;
    parentElement.insertAdjacentHTML("afterbegin", html);
  }

  clearErrors() {
    const errorMessages = document.querySelectorAll(".errorMessage");
    errorMessages.forEach((errorMessage) => {
      errorMessage.style.display = "none";
    });
  }
}

const app = new App();
