const app = require('./app')()

app.listen(4000, (err) => {
    if (err) {
        console.log(`App doesn't work:`, err)
    } else {
        console.log(`App work's at http://localhost:4000`)
    }
})