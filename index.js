
const fs = require("fs")

fs.readdir(process.argv[2], { withFileTypes: true },
    (err, files) => {
        if (err) throw err;
        console.log(files)

        files.map((item) => {
            if (item.isFile()) {
                console.log(`${item.name}:File`)
            }
            else {
                console.log(`${item.name}:Folder`)
            }
        })

    })

