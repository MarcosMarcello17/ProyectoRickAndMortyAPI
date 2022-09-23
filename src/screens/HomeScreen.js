import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import ListItem from "./components/ListItem";

const HomeScreen = () => {
  var page = 1;
  const [characters, setcharacters] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [pagsTotal, setPagsTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const getCharacters = () => {
    fetch("http://rickandmortyapi.com/api/character/?page=" + currentPage)
      .then((res) => res.json())
      .then((res) => {
        setcharacters([...characters, ...res.results]);
      });
  };

  useEffect(() => {
    console.log("Carga inicial");
    fetch("https://rickandmortyapi.com/api/character/")
      .then((res) => res.json())
      .then((res) => {
        setPagsTotal(res.info.pages);
      });
  }, []);

  const loadMoreCharacters = () => {
    console.log("Cambia pagina");
    console.log(currentPage);
    console.log(pagsTotal);
    if (currentPage < pagsTotal) {
      setcurrentPage(currentPage + 1);
    } else {
      alert("End of the list reached");
    }
  };

  useEffect(() => {
    console.log("Cargo pagina");
    getCharacters();
  }, [currentPage]);

  return (
    <View style={{ backgroundColor: "#212226" }}>
      <FlatList
        data={characters}
        renderItem={({ item, index }) => <ListItem item={item} />}
        keyExtractor={(item, index) => String(index)}
        onEndReached={loadMoreCharacters}
        onEndReachedThreshold={0.01}
        numColumns={2}
      />
    </View>
  );
};

export default HomeScreen;
