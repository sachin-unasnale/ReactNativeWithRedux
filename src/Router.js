import React from 'react';
import { Scene, Router, Actions, Tabs, ActionConst } from 'react-native-router-flux';
import Login from './components/Login.js';
import EmployeeList from './components/EmployeeList.js'

const RouterComponent = (props) => {

   return (

       <Router >
         <Scene key="root" hideNavBar>
            <Scene key="UsersList">
            <Scene key="login" component={Login}  hideNavBar={true} initial={true} />
            <Scene key="employeeList" component={EmployeeList} panHandlers={null} hideNavBar={false} title={"EmployeeList"}/>
            </Scene>
         </Scene>    
       </Router>    
   );
};

export default RouterComponent;

/*
 Axios.post('http://api.msg91.com/api/sendotp.php?authkey=207976AN2wP5Z4a5K75ac7587a&mobile=919591359153&message=HI%20otp%20is%202786&sender=THREEI&otp=2786')
                     .then(response => {});
*/