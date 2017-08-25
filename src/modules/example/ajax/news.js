export function ajaxGetNewsList(requestData) {
  // return new Promise(
  //   (resolve, reject) => {
  //     $.ajax({
  //       method: 'GET',
  //       url: '/data/newsList',
  //       data: requestData,
  //       success: function(data) {
  //         resolve(data);
  //       },
  //       error: function(err) {
  //         reject(err);
  //       },
  //     });
  //   }
  // );
  return new Promise(
    (resolve, reject) => {
      fetch('/data/newsList')
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            resolve(data);
          }).cathch((err) => {
            console.error(err);
          });
          return;
        }
        reject(res);
      });
    }
  );
}
