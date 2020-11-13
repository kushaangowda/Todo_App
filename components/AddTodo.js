import React, { useState } from "react";
import { StyleSheet, Button, TextInput, View } from "react-native";

export default function TodoItem({ addTodo }) {
	const [text, setText] = useState("");

	const handleSubmit = (text) => {
		addTodo(text);
		setText("");
	};

	return (
		<View style={styles.form}>
			<TextInput
				placeholder="e.g. Buy Milk"
				keyboardType="default"
				multiline
				onChangeText={(value) => setText(value)}
				style={styles.input}
				value={text}
			/>
			<Button
				title="Add Todo"
				onPress={() => {
					handleSubmit(text);
				}}
				color="coral"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		padding: 16,
		marginTop: 16,
		borderColor: "#bbb",
		borderWidth: 1,
		borderStyle: "solid",
		borderRadius: 10,
		margin: 10,
	},
	form: {
		borderRadius: 10,
		padding: 20,
		margin: 20,
	},
});
