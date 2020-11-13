import React, { useState } from "react";
import {
	StyleSheet,
	View,
	FlatList,
	Alert,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
// import Sandbox from "./components/Sandbox";

export default function App() {
	const uuidv4 = () => {
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
			c
		) {
			var r = (Math.random() * 16) | 0,
				v = c == "x" ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		});
	};

	const [todos, setTodos] = useState([
		{ text: "buy coffee", key: "1" },
		{ text: "create a react native app", key: "2" },
		{ text: "play a game", key: "3" },
	]);

	const createAlertAgain = () =>
		Alert.alert(
			"Warning",
			"You have no CHOICE",
			[{ text: "Understood", onPress: () => console.log("OK Pressed") }],
			{ cancelable: false }
		);

	const createAlert = () =>
		Alert.alert(
			"Warning",
			"Todos must be over 3 characters long",
			[
				{ text: "I Dont Care!!", onPress: () => createAlertAgain() },
				{ text: "Understood", onPress: () => console.log("OK Pressed") },
			],
			{ cancelable: false }
		);

	const deleteItem = (id) => {
		console.log("deleting ", id);
		setTodos(
			todos.filter((todo) => {
				return todo.key != id;
			})
		);
	};

	const addTodo = (text) => {
		console.log("Adding todo: ", text);
		if (text.length > 3) {
			setTodos([
				{
					text: text,
					key: uuidv4(),
				},
				...todos,
			]);
		} else {
			createAlert();
		}
	};

	const dismissKeyboard = () => {
		Keyboard.dismiss();
		console.log("Keyboard dismissed");
	};

	return (
		// <Sandbox />
		<TouchableWithoutFeedback onPress={dismissKeyboard}>
			<View style={styles.container}>
				{/* header */}
				<Header />
				<View style={styles.content}>
					{/* todo form */}
					<AddTodo addTodo={addTodo} />
					<View style={styles.list}>
						<FlatList
							data={todos}
							renderItem={({ item }) => {
								return <TodoItem item={item} deleteItem={deleteItem} />;
							}}
						/>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	content: {
		flex: 1,
		padding: 40,
	},
	list: {
		flex: 1,
		marginTop: 20,
	},
});
