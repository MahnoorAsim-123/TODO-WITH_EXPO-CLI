import React, { useState } from "react";
import styles from "../screens/TodoStyle.js";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { Appbar, Menu, Button, TextInput } from "react-native-paper";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);

  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  //Add Todo List
  const addTodo = () => {
    if (!inputValue) {
      alert("Enter Todo");
    }
    setTodo([...todo, inputValue]);
  };

  //Delete All Todo Lists
  const deleteAll = () => {
    setTodo([]);
  };

  //Delete One Todo List
  const deleteOne = (id) => {
    const updatedTodo = todo.filter((_, ind) => {
      return ind !== id;
    });
    setTodo(updatedTodo);
  };

  //Edit Todo List
  const editTodo = (id) => {
    const editTodo = prompt("Edit Todo");
    todo.splice(id, 1, editTodo);
    setTodo([...todo]);
  };

  //RenderItem Function ---> FlatList
  const renderItem = ({ index, item }) => {
    return (
      <View style={styles.todoItem}>
        &nbsp; &nbsp;{" "}
        <Text style={styles.todoItemText}>{index + 1 + "." + "  " + item}</Text>
        <View style={styles.todoItemBtn}>
          <Button
            style={{
              backgroundColor: "green",
              width: 70,
              fontWeight: "bold",
              marginRight: 7,
              marginTop: 7,
              paddingTop: 3,
              paddingBottom: 3,
            }}
            mode="contained"
            onPress={(e) => editTodo(index)}
          >
            EDIT
          </Button>
          <Button
            style={{
              backgroundColor: "red",
              width: 93,
              fontWeight: "bold",

              marginTop: 7,
              paddingTop: 3,
              paddingBottom: 3,
            }}
            mode="contained"
            onPress={(e) => deleteOne(index)}
          >
            DELETE
          </Button>
          {/* <TouchableOpacity style={styles.btn} onPress={(e) => editTodo(index)}>
            <Text style={styles.btnText}> EDIT</Text>
          </TouchableOpacity> */}
          {/* <TouchableOpacity
            style={styles.btn}
            onPress={(e) => deleteOne(index)}
          >
            <Text style={styles.btnText}>DELETE</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Appbar.Header
        style={{
          backgroundColor: "red",
        }}
      >
        <Appbar.Content title="TODO" />
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action icon="menu" color="white" onPress={openMenu} />
          }
        >
          <Menu.Item
            onPress={() => {
              console.log("Option 1 was pressed");
            }}
            title="Option 1"
          />
          <Menu.Item
            onPress={() => {
              console.log("Option 2 was pressed");
            }}
            title="Option 2"
          />
          <Menu.Item
            onPress={() => {
              console.log("Option 3 was pressed");
            }}
            title="Option 3"
            disabled
          />
        </Menu>
      </Appbar.Header>
      <br />

      {/* <Image
        style={{ width: "100%", height: 300, marginTop: -18, backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover" }}
          source={{
            uri: 'https://images.appypie.com/wp-content/uploads/2020/03/31164233/Appy-Pie-Google-Tasks.png',
          }}
      /> */}

      <View style={styles.inputBox}>
        <TextInput
          style={{ width: "86%", backgroundColor: "white" }}
          label="Enter Todo"
          onChangeText={(e) => setInputValue(e)}
        />
        {/* <TextInput
          onChangeText={(e) => setInputValue(e)}
          style={styles.inputBar}
          placeholder="ENTER TODO"
        /> */}

        <View style={styles.btnBox}>
          <Button
            style={{
              backgroundColor: "blue",
              width: 120,
              fontWeight: "bold",
              marginRight: 7,
              marginTop: 7,
              paddingTop: 5,
              paddingBottom: 5,
            }}
            icon="plus"
            mode="contained"
            onPress={addTodo}
          >
            ADD
          </Button>
          <Button
            style={{
              backgroundColor: "red",
              width: 120,
              fontWeight: "bold",
              marginTop: 7,
              paddingTop: 5,
              paddingBottom: 5,
            }}
            icon="delete"
            mode="contained"
            onPress={deleteAll}
          >
            DELETE
          </Button>
          {/* <TouchableOpacity style={styles.btn} onPress={addTodo}>
            <Text style={styles.btnText}> ADD TODO</Text>
          </TouchableOpacity> */}
          {/* <TouchableOpacity style={styles.btn} onPress={deleteAll}>
            <Text style={styles.btnText}>DELETE ALL</Text>
          </TouchableOpacity> */}
        </View>
      </View>

      <View style={styles.todoList}>
        <FlatList
          data={todo}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        />
      </View>

      <View
        style={{
          backgroundColor: "black",
          width: "100%",
          height: 50,
          fontWeight: "bold",
          paddingTop: 5,
          paddingBottom: 5,
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 14,
          }}
        >
          Copyright &copy; TODO APP 2022
        </Text>
      </View>
    </View>
  );
};

export default TodoList;
