import express from 'express';
const app = express();

// Custom middleware function here!
function myLog(req, res, next) {
    console.log("Request received " + req.method + " " + req.path);
    req.potatohammock = 72;
    next();
    console.log("Request completed");
}

// This line here enables our middleware to run for every request coming in!
app.use(myLog);

// Technically this *is* a kind of middleware!
// But generally these are not really regarded as middleware
// Usually middleware runs before or after this
app.get("/", (req, res) => {
    console.log("Root path active!");
    console.log("Potatohammock is " + req.potatohammock);
    res.send("root\n");
});

app.listen(3000);