
import * as Model from "../model/model.js";


function initURLListener(){
    $(window).on("hashchange", Model.changeRoute);
    Model.changeRoute();
}


$(document).ready(function(){

  console.log(Model.NavAarry)
initURLListener()
});

