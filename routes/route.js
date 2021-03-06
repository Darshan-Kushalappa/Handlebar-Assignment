exports.home=function(req,res){
  res.render('home',{title:'iLoveMyCity',
                    headline:'All the cities in the world are beautiful'
                    });
                  }


exports.city=function(req,res){
    var cityName=req.params.city;
    var title,headline;
    var imageArray=[1,2,3,4];

    if(cityName==='berlin'){
       title="Berlin";
       headline="Berlin: Where love is in the air";
    }
    else if(cityName==='london'){
       title="London";
       headline="London: Sparkling, Still, Food, Gorgeous";
    }
    else if(cityName==='madrid'){
       title="Madrid";
       headline="Madrid: Buzz, Beautiful architecture and Football";
    }
    else if(cityName==='newyork'){
       title="New York";
       headline="New York: Come to New York to become someone new";
       imageArray.push(5);
       imageArray.push(6);
    }
    else if(cityName==='paris'){
       title="Paris";
       headline="Paris: Good talkers are only found in Paris";
    }

    res.render('city',{
      title:title,
      headline:headline,
      city:cityName,
      imageArray:imageArray});
  }
