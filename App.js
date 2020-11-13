import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/Header";

export default function App() {
	const [todos, setTodos] = useState([
		{ text: "buy coffee", key: "1" },
		{ text: "create a react native app", key: "2" },
		{ text: "play a game", key: "3" },
	]);

	return (
		<View style={styles.container}>
			{/* header */}
			<Header />
			<View style={styles.content}>
				{/* todo form */}
				<View style={styles.list}>
					<FlatList
						data={todos}
						renderItem={({ item }) => {
							return <Text>{item.text}</Text>;
						}}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	content: {
		padding: 40,
	},
	list: {
		marginTop: 20,
	},
});
