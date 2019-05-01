import React, { Component } from 'react';
import { View, Text, Dimensions, TextInput, FlatList, AsyncStorage, Alert } from 'react-native';

import Button from './Button';
import Items from './Items';

const { width, height } = Dimensions.get('window');

class Main extends Component {

    state = {
        title: '',
        description: '',
        data: []
    }

    componentWillMount() {
        const value = AsyncStorage.getItem('data1', (err, result) => {
            if(result != null) {
                const array = result.split(",");
                console.log('gelen data', array[0]);
                this.setState({
                    data: array 
                });
            }
          });
        
    }

    render() {
        return (
            <View style={styles.view2}>
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(title) => this.setState({ title })}
                    value={this.state.title}
                    placeholder={'Enter Title'}
                />
                <TextInput
                    style={[styles.inputStyle, { height: 75 }]}
                    onChangeText={(description) => this.setState({ description })}
                    value={this.state.description}
                    multiline={true}
                    numberOfLines={10}
                    placeholder={'Enter Description'}
                />

                <Button
                    onClick={() => {

                        if (this.state.title.trim() === "") {
                            this.setState(() => ({ nameError: "Please enter input!" }));
                        }
                        else if (this.state.description.trim() === "") {
                            this.setState(() => ({ nameError: "Please enter description!" }));
                        }
                        else {
                            this.setState(prevState => ({
                                data: [...prevState.data, this.state.title]
                            }));

                            AsyncStorage.setItem('data1', this.state.data.toString());
                        }

                    }}
                    title={'Save'}
                    style={{ backgroundColor: '#1E90FF' }}
                />

                <FlatList
                    style={{ backgroundColor: '', width, margin: 20 }}
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <Items data={item}
                    />
                    }
                />

            </View>
        );
    }
}

const styles = {
    view2: {
        flex: 9,
        backgroundColor: '',
        alignItems: 'center',
        paddingTop: 20,

    },

    inputStyle: {
        height: 40,
        width: width * 0.9,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 5,
    }
};

export default Main;