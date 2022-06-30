import { useState } from "react"
import Payment from "../sendmoney/transfermoney";


export default function MoneyRecieved(){

    const[moneyRecieved, setMoneyRecieved] = useState()
    const[user, setUser] = useState()
    
    if (Payment (isRecieved == false)) {
     
      } else {
        useEffect(() => {
            const fetchData = async () => isRecieved == true && <p> You have recieved money! </p>;)}
            componentDidMount() {
                this.timer = setInterval(()=> this.getMoney(), 10000);
                return () => clearInterval(interval);
              };
            }
            try {
                const response = await axios.put(`${url}/notification`, user);
                const response2 = await axios.put(`${url}/notification`, MoneyRecieved);
                console.log(response.data);
                console.log(response2.data);
                setMoneyRecieved(!isRecieved)
    
    
             
            } catch (error) {
                console.error(error.response.data);
                console.error(error.response2.data);
                
            }
        }
     
            };
              
        //       componentWillUnmount() {
        //         this.timer = null; 
        //       }
              
        //       getMoney() {
        //         fetch(this.getIsRecieved('https://overflowingstacksweb.azurewebsites.net/notification'))
        //           .then(isRecieved => result.json())
        //           .then(isReceived => this.setState({ money: result }));
        //       };
        //     }
        // onPayment={this.findAll}
        // update
      
      
      return (
        <div>
          <p> Money has been added to your account </p>
        </div>
      );
    

    
 