sap.ui.controller("routing.controller.Master1", 
{
        onInit: function() 
        {
        	
        	this.router = sap.ui.core.UIComponent.getRouterFor(this);
        },
        
      handleListItemPress: function(oEvent){

   var entity = oEvent.getSource().getBindingContext().getPath().split("/");

	this.router.navTo("Detail1", 
	{
		from: "Master1",
		entity: entity[2]
	});
}


});