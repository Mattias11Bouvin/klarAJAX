async function run() {

    try {

        const response = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=7f8196e8&fbclid&s=star%20trek&type=series');

        const data = await response.json();

        console.log(data.Search);

        for(let i in data.Search) {

            console.log(i);

            console.log(data.Search[i].Title);

            $('#content').append(`

                <h3>${data.Search[i].Title}</h3>

                <img src="${data.Search[i].Poster}">

                <p>Was on TV: ${data.Search[i].Year}</p><hr>

            `);

           

        }



    } catch {

        $('body').append(`

        

    `);



    } finally {

        console.log("Finally-block");

    }

}



run()
        