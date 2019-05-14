gdjs.eventsFunction__createhealthbar__function = {};
gdjs.eventsFunction__createhealthbar__function.GDEnemyObjects1= [];
gdjs.eventsFunction__createhealthbar__function.GDEnemyObjects2= [];
gdjs.eventsFunction__createhealthbar__function.GDHealthBarObjects1= [];
gdjs.eventsFunction__createhealthbar__function.GDHealthBarObjects2= [];

gdjs.eventsFunction__createhealthbar__function.conditionTrue_0 = {val:false};
gdjs.eventsFunction__createhealthbar__function.condition0IsTrue_0 = {val:false};


gdjs.eventsFunction__createhealthbar__function.mapOfGDgdjs_46eventsFunction_95_95createhealthbar_95_95function_46GDHealthBarObjects1Objects = Hashtable.newFrom({"HealthBar": gdjs.eventsFunction__createhealthbar__function.GDHealthBarObjects1});gdjs.eventsFunction__createhealthbar__function.eventsList0xb1f18 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.eventsFunction__createhealthbar__function.GDEnemyObjects1.createFrom(eventsFunctionContext.getObjects("Enemy"));
gdjs.eventsFunction__createhealthbar__function.GDHealthBarObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.eventsFunction__createhealthbar__function.mapOfGDgdjs_46eventsFunction_95_95createhealthbar_95_95function_46GDHealthBarObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.eventsFunction__createhealthbar__function.GDHealthBarObjects1.length ;i < len;++i) {
    gdjs.eventsFunction__createhealthbar__function.GDHealthBarObjects1[i].setZOrder(600);
}
}{for(var i = 0, len = gdjs.eventsFunction__createhealthbar__function.GDHealthBarObjects1.length ;i < len;++i) {
    gdjs.eventsFunction__createhealthbar__function.GDHealthBarObjects1[i].setScaleY(gdjs.eventsFunction__createhealthbar__function.GDHealthBarObjects1[i].getScaleY() * (0.2));
}
}{for(var i = 0, len = gdjs.eventsFunction__createhealthbar__function.GDHealthBarObjects1.length ;i < len;++i) {
    gdjs.eventsFunction__createhealthbar__function.GDHealthBarObjects1[i].setScaleX(1);
}
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.eventsFunction__createhealthbar__function.GDHealthBarObjects1.length !== 0 ? gdjs.eventsFunction__createhealthbar__function.GDHealthBarObjects1[0] : null), (gdjs.eventsFunction__createhealthbar__function.GDEnemyObjects1.length !== 0 ? gdjs.eventsFunction__createhealthbar__function.GDEnemyObjects1[0] : null));
}}

}


}; //End of gdjs.eventsFunction__createhealthbar__function.eventsList0xb1f18


gdjs.eventsFunction__createhealthbar__function.func = function(runtimeScene, Enemy, HealthBar, parentEventsFunctionContext) {
var eventsFunctionContext = {
  objectsMap: {
"Enemy": Enemy
, "HealthBar": HealthBar
},
  getObjects: function(objectName) {
    var objectsList = eventsFunctionContext.objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext.objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};

gdjs.eventsFunction__createhealthbar__function.GDEnemyObjects1.length = 0;
gdjs.eventsFunction__createhealthbar__function.GDEnemyObjects2.length = 0;
gdjs.eventsFunction__createhealthbar__function.GDHealthBarObjects1.length = 0;
gdjs.eventsFunction__createhealthbar__function.GDHealthBarObjects2.length = 0;

gdjs.eventsFunction__createhealthbar__function.eventsList0xb1f18(runtimeScene, eventsFunctionContext);
return;
}
