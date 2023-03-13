import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Continents() {
  const [continents, setContinents] = useState([]);

  useEffect(() => {
    fetchContinents();
  }, []);

  const fetchContinents = async () => {
    const url =
      "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL";

    const response = await axios.get(url, {
      headers: { "Content-Type": "application/xml" },
    });
    console.log(response.data);
  };

  return (
    <View>
      {continents.map((c) => (
        <Text key={c}>{c}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
