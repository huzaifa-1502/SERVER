import express from "express";
const app = express();
const port = process.env.PORT || 3000


app.get("/", (req, res) => {
    res.send("I am a hello world server");
})
app.get("/profile", (req, res) => {
    res.send("here is your profile");
})
app.get("/about", (req, res) => {
    res.send("some information about me");
})
app.get("/*", (req, res) => {
    res.send("Page not found");
})
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
}); 
