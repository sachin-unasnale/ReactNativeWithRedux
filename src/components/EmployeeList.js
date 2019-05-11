import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Text } from 'react-native';
import { Card, CardSection } from './common';

class EmployeeList extends Component {

    renderItem(employee) {
        return (
            <Card>

            <CardSection>    
             <Text>Name: {employee.item.name} </Text>
            </CardSection>

            <CardSection>    
             <Text>Age: {employee.item.age} </Text>
            </CardSection>

            <CardSection>    
             <Text>Gender: {employee.item.gender} </Text>
            </CardSection>

            <CardSection>    
             <Text>Email: {employee.item.email} </Text>
            </CardSection>

            <CardSection>    
             <Text>Phone Number: {employee.item.phoneNo} </Text>
            </CardSection>
            </Card>
        );
    }

    loadServices()
    {
        return(
            <View style={{flex: 1}}>
            <FlatList
            data={this.props.employees}
            renderItem={this.renderItem}
            keyExtractor={employees => employees.id.toString()}
            />
            </View>
        );  
    }

    render() {
        return(
            this.loadServices()
        );
    }
}

const mapStateToProps = state => {
    return { 
              employees: state.employees
           };
  };

export default connect(mapStateToProps)(EmployeeList);