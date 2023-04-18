const currentURL = location.href;
console.log(currentURL);

const urlObj = new URL(currentURL);

const params = urlObj.searchParams;

const id = params.get("id");

console.log(id);
const movieURL = `https://api.themoviedb.org/3/movie/${id}?api_key=d5973569877cd7950c8f05e4748588b8&language=ko-KR`;
$.ajax({
  type: "GET",
  url: movieURL,
  dataType: "json",
  async: false,
  success: function (data) {
    console.log("전체 data", data);
  },
  error: function (request, status, error) {
    console.log("code:" + request.status);
    console.log("message:" + request.responseText);
    console.log("error:" + error);
  },
});
