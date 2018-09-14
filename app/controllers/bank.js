import Controller from '@ember/controller';

export default Controller.extend({
    Rejected:false,
    Accepted:false,

    actions:{
        ActionApprove:function(_id,status,message){
            
            var _this=this;
            console.log(_id,status,message)
          var JsonData4={
            "_id":_id,
            "status":status,
            "message":message
          }
            $.ajax({
                type: "POST",
                url: 'http://localhost:3007/RequestUpdate',
                data: JSON.stringify(JsonData4),
                contentType: "application/json",
                dataType: "json",
                success: function(response) {
                console.log("Action initiated =====>>",response.result);
                _this.set('message',response.message);
                var hash=response.result.transactionHash
                console.log(hash)
                _this.set('Accepted',true);
                //console.log(response.result.status)
                //_this.set('ActionStatus',response.result.status);
               
                }
            })
        },
        ActionReject:function(_id,status,message){
            var _this=this;
            console.log(_id,status,message)
          var JsonData4={
            "_id":_id,
            "status":status,
            "message":message
          }
            $.ajax({
                type: "POST",
                url: 'http://localhost:3007/RequestUpdate',
                data: JSON.stringify(JsonData4),
                contentType: "application/json",
                dataType: "json",
                success: function(response) {
                console.log("Action initiated =====>>",response.result);
                _this.set('message',response.message);
                var hash=response.result.transactionHash
                console.log(hash)
                _this.set('Rejected',true);
               
               
                }
            })

        }
    }
});
