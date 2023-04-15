export var NavAarry =["Home", "Q&A","Food","ClientReviews"];


export function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#","");

  if (pageID !=""){
$.get(`pages/${pageID}/${pageID}.html`, function (data){
 $("#app").html(data);
})
    }else{
     $.get(`pages/home/home.html`,function (data){
      $("#app").html(data);
  })

}

}


