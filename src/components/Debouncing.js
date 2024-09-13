import React from 'react'

const Debouncing = () => {

    let names = {
        firstName: "ram",
        lastName:"raju"
    }
    
    let printname = function( city,state) {
        console.log(this.firstName + " " + this.lastName + " " + city +  ", "+state)
    }
// let printFullname = printname.bind(names)
// printFullname()

    // eslint-disable-next-line no-extend-native
    Function.prototype.myBind = function (...args) {
        let obj = this,params = args.slice(1);
        return function (...args2) {
            obj.apply(args[0] , [...params, ...args2])
        }
    }
    let printFullname1 = printname.myBind(names ,'Hyderabad')
printFullname1('Telangana')




    let count = 0;
    const getData = () => {
        console.log('Fetching data... ', count++ )
    }
    const handleKeyup = ( d) => {
        let timer;
        return function () {
        let context = this,args = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
            getData();
            
        }, d);    
        }
        
    }
  return (
      <div>
          <input type="search"
            //   onKeyUp={handleKeyup(300)} 
                  
          
          />

    </div>
  )
}

export default Debouncing