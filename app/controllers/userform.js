import Controller from '@ember/controller';

export default Controller.extend({
    IdShow:false,
    actions:{
        submit:function(){
        //var name=this.get()
        var _this=this;
        var JsonData={ 
        "firstname": "Khetesh",
        "lastname": "Rotangan",
        "usertype": "user",
        "age": "32",
        "pan": "rr11111",
        "aadhar": "1111111111111",
        "address": "Mumbai",
        "emailid": "khetesh@rapidqube.com",
        "userId":"2327"
        }
      
        $.ajax({
            type: "POST",
            url: ' http://localhost:3007/user_identity_request',
            data: JSON.stringify(JsonData),
            contentType: "application/json",
            dataType: "json",
            success: function(response) {
            console.log("Result=====>>",response.result);
            _this.set('message',response.result.message);
            _this.set('DigitalIdentity',response.result.data.DigitalIdentity);
            _this.set('balance',response.result.data.balance);
            _this.set('IdShow',true);
           
            }
        })
    },
    Request:function(){
        var _this=this;
        var JsonData1={ 
            "userId":"2327",
            "SpendingAmount":"500",
            "NumberOfToken":"10",
            "RxAddress":"MDG56GVWJ455VUJJCLUSYB32UG2Q7RBD2EYHMRHW"  
            }
        $.ajax({
            type: "POST",
            url: 'http://localhost:3007/InitiateRequest',
            data: JSON.stringify(JsonData1),
            contentType: "application/json",
            dataType: "json",
            success: function(response) {
            console.log("Result of request initiate=====>>",response.Result.transactionHash);
            _this.set('message',response.message);
            var hash=(response.Result.transactionHash).toString();
           _this.set('transactionHash',hash);
           //_this.set('balance',response.result.data.balance);
           _this.set('IdShow1',true);
           
            }
        })
    }
    }
});
