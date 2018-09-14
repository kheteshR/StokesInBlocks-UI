import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        var _this=this;
        var JsonData2={ 
            "RxAddress":"MDG56GVWJ455VUJJCLUSYB32UG2Q7RBD2EYHMRHW"  
            }
        $.ajax({
            type: "POST",
            url: 'http://localhost:3007/RequestAll',
            data: JSON.stringify(JsonData2),
            contentType: "application/json",
            dataType: "json",
            success: function(response) {
            console.log("Result of request initiate=====>>",response.Result.request);
            _this.controllerFor('bank').set('AllRequest',response.Result)
            _this.set('message',response.message);
          
           //_this.set('balance',response.result.data.balance);
           
           
            }
        })
    }
    
});
