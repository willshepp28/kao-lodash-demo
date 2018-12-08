const kao = require("koa");
const koaRouter = require("koa-router");
const _ = require("lodash");

const application = new kao();
const router = koaRouter();

var users = [
    { 'user': 'barney',  'active': false, 'age': 40 },
    { 'user': 'fred',    'active': false, 'age': 30 },
    { 'user': 'pebbles', 'active': true, 'age': 20 }
  ];


  // Get the last user of the users array
router.get("/last-user", (ctx) => {
    ctx.body = _.last(users);
});

// Get the first user out of the users array
router.get("/first-user", (ctx) => {
    ctx.body = _.head(users);
});

// Drops the first two users in the users array
router.get("/drop-two-users", (ctx) => {
    ctx.body = _.drop(users, 2);
});

// Reverse all the users in the users array
router.get("/reverse-users", (ctx) => {
    ctx.body = _.reverse(users);
});

// Get users that are greater than 40
router.get("/greater-than-40", (ctx) => {
    ctx.body = _.filter(users, (user) => {
        return user.age >= 40;
    });
});


// Get the total amount of users in the users array
router.get("/total-users", (ctx) => {
    ctx.status = 200;
    ctx.body = _.size(users);
})


application.use(router.routes())
    .use(router.allowedMethods());


application.listen(1234, () => console.log("running on port 1234"));