module.exports = [function(){
  var srvc = this;

  var map = {};
  var comments = [];


  function tree(flatArray){
    var map = {};
    var result = [];

    //find all the parents
    for(var i=flatArray.length-1; i >= 0;i--){
      var el = flatArray[i];
      if(el.parentId === null){
        map[el.id] = el;
        result.push(el);
        flatArray.splice(i,1);
      }else if(map[el.parentId]){
        //if a previous iteration added this element's parent to the map, add it as a child now
        addToParentAndMap(el);
        flatArray.splice(i,1);
      }
    }

    //continuously pop the front element off the array and try to find its parent in the map
    //if the parent's not there, it's further forward in the array so just push the el to the back and try again later
    while(flatArray.length > 0){
      var el = flatArray.shift();
      if(map[el.parentId]){
        addToParentAndMap(el);
      }else{
        flatArray.push(el);
      }
    }

    function addToParentAndMap(el){
      map[el.parentId].nodes.push(el);
      map[el.id] = el;
    }

    return result;
  }

  srvc.addNodes = function(flatNodes){
    flatNodes.forEach(function(){

    });
  };



  srvc.updateNodes = function(){};

  srvc.removeNodes = function(nodeIds){

  };

  srvc.getNode = function(){};

}];
