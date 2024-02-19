import FastestValidator from "fastest-validator";

const validator = new FastestValidator({
  haltOnFirstError: true,
  messages: {
    stringMin: "حداقل کارکتر مجاز ۳ می باشد.",
    stringMax: "حداکثر کارکتر مجاز ۲۴ می باشد."
  },
});

const schema = {
  name: {
    type: "string",
    min: 3,
    max: 24
  },
  userName: {
    type: "string",
    min: 3,
    max: 20
  },
  phoneNumber: {
    type: "string",
    pattern: /^(\+98|0|98)?9\d{9}$/
  },
  email: {
    type: "email",
    min: 4,
    normalize: true
  },
  password: {
    type: "string",
    min: 8,
    max: 24
  },
  role: {
    type: "string",
    pattern: /^[a-fA-F0-9]{24}$/
  }
};

// export default validator.compile(schema);

const check = validator.compile(schema);

console.log(
  check({
    name: "Asghar",
    userName: "asghar78",
    phoneNumber: "09033212321",
    email: "   aaaaaAasdwdd@@gmail.com   ",
    password: "li2jkjkhjkhjkjhjj",
    role: "65bbe10e448cb9cae5622afa"
  })
);
