import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function HistoryScreen() {
  const router = useRouter();
  const [history, setHistory] = useState([
    { id: "1", name: "ABC Fuel Station" },
    { id: "2", name: "XYZ Garage" },
    { id: "3", name: "RM Garage" },
  ]);

  const clearHistory = () => {
    setHistory([]);
    console.log("History Cleared");
  };

  const deleteEntry = (id) => {
    setHistory(history.filter((entry) => entry.id !== id));
    console.log(`Entry ${id} deleted`);
  };

  return (
    <View style={styles.container}>
      {/* History List */}
      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text style={styles.historyText}>{item.name}</Text>
            <TouchableOpacity
              style={styles.moreButton}
              onPress={() =>
                router.push(`/details/${item.name.replace(/\s/g, "_")}`)
              }
            >
              <Text style={styles.moreButtonText}>More</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteEntry(item.id)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Clear All Button */}
      <TouchableOpacity style={styles.clearButton} onPress={clearHistory}>
        <Text style={styles.clearButtonText}>Clear All</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  historyItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  historyText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    flex: 1,
  },
  moreButton: {
    backgroundColor: "#3498db", // Light blue color for the "More" button
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginLeft: 10,
  },
  moreButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  deleteButton: {
    backgroundColor: "#3498db", // Same as cancel button
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginLeft: 10,
  },
  deleteButtonText: {
    color: "#FF3B30", // Red text for delete button
    fontWeight: "800", // ExtraBold
    fontFamily: "Outfit", // Font style
    fontSize: 14,
  },
  clearButton: {
    backgroundColor: "#3498db", // Light blue color for the "Clear All" button
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },
  clearButtonText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 16,
  },
});
