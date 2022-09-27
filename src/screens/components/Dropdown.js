import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Dropdown = ({
  value = {},
  items = [],
  name = "",
  onSelect = () => {},
}) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <View>
      <TouchableOpacity
        style={styles.dropdownStyle}
        activeOpacity={0.8}
        onPress={() => {
          setShowOptions(!showOptions);
        }}
      >
        <Text>{!!value || value.id == 0 ? value.name : name}</Text>
      </TouchableOpacity>
      {showOptions && (
        <View>
          {items.map((val, i) => {
            return (
              <TouchableOpacity
                key={String(i)}
                style={{
                  backgroundColor: "#A49B98",
                  paddingVertical: 8,
                  borderRadius: 4,
                  paddingHorizontal: 6,
                }}
                onPress={() => {
                  setShowOptions(false);
                  onSelect(val);
                }}
              >
                <Text>{val.id == 0 ? "No selection" : val.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownStyle: {
    backgroundColor: "#A49B98",
    padding: 8,
    borderRadius: 6,
    minHeight: 42,
    justifyContent: "center",
    marginBottom: 6,
  },
});

export default Dropdown;
