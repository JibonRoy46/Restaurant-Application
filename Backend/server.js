import app from "./app.js";


app.listen(process.env.PORT, () => {
    console.log(`Server Ronning On Port ${process.env.PORT}`);
});