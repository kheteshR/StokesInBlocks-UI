import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        userdashboard:function(){  
            var mycontroller = this;
            var walletName = this.get('name');
            console.log(walletName);
            var password = this.get('password');
            console.log("password", password);
            var inputs = {
                "walletName": walletName,
                "password": password
            }
            $.ajax({
                type: "POST",
                url: 'http://localhost:3007/login',
                data: JSON.stringify(inputs),
                contentType: "application/json",
                dataType: "json",
                success: function(response) {
                    console.log(JSON.stringify(response));
                    console.log("response=====>>", response);
                    var walletname=response.usertype.walletName
                    var usertype = response.usertype.usertype;
                    console.log("usertype==========>>" + usertype)
                    var userId = response.userid;
                    console.log("userId==========>>" + userId)
                    mycontroller.set('userId',userId)

                    if (usertype === 'user') {
                        console.log("login done")
                       
                        console.log("walletname===>>" + walletname)
                        mycontroller.set('walletname',walletname)
                        mycontroller.transitionToRoute('userform')
                    } else if (walletName == "Bank@rapidqube.com") {
                        console.log("admin loged in")
                        mycontroller.transitionToRoute('bank')
                    } else if (walletName == "NSE@rapidqube.com") {
                        console.log("Institute@info.com loged in")
                        mycontroller.transitionToRoute('nsedashboard')
                    } else if (walletName == "Evaluator@rapidqube.com") {
                        mycontroller.set('walletname',walletname)
                        console.log(walletname)
                        console.log("entering employer dashboard")
                        mycontroller.transitionToRoute('evaluator')
                    }
                }

            });   
    }
    }
});
