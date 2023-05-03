$(".search").on("click", function () {
  $.ajax({
    url: `http://www.omdbapi.com/?apikey=6d884f84&s=` + $(".input-here").val(),
    success: (result) => {
      const convert = result.Search;

      let cards = "";

      convert.forEach((m) => {
        cards += showCards(m);
      });

      $(".card-container").html(cards);
      document.body.style.background = "linear-gradient(white,black)";
      document.body.classList.toggle("active");
      // event click of details information
      $(".more-button").on("click", function () {
        console.log($(this).data("imdbid"));
        $.ajax({
          url: `http://www.omdbapi.com/?apikey=6d884f84&i=` + $(this).data("imdbid"),
          success: (m) => {
            const modalBox = showModals(m);

            $(".modal-body").html(modalBox);
          },
          error: (p) => {
            console.log(p.responseText);
          },
        });
      });
    },
    error: (p) => {
      console.log(p.responseText);
    },
  });
});

function showCards(m) {
  return `
                <div class="col-md-3 mb-4 col-sm-6">
                    <div class="card h-100">
                        <img src="${m.Poster}" class="card-img-top h-75" alt="" />
                        <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-success fw-bold more-button" data-bs-toggle="modal" data-bs-target="#showModal" data-imdbid="${m.imdbID}">More Details</a>
                        </div>
                    </div>
                </div>
        `;
}

function showModals(m) {
  return ` <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4">
                        <img src="${m.Poster}" class="img-fluid" alt="" />
                    </div>
                    <div class="col-md mx-auto">
                        <ul class="list-group">
                        <li class="list-group-item"><strong>Movies Title :</strong> ${m.Title}</li>
                        <li class="list-group-item"><strong>Released : ${m.Released}</strong></li>
                        <li class="list-group-item"><strong>Genre :</strong> ${m.Genre}</li>
                        <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
                        <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                        <li class="list-group-item"><strong>Writer : </strong> ${m.Writer}</li>
                        <li class="list-group-item">
                            <strong>Plot : </strong><br />
                            ${m.Writer}
                        </li>
                        </ul>
                    </div>
                </div>
            </div>`;
}
