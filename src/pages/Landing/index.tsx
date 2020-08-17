import React, { useState, useEffect } from "react";

import LandingImg from "../../assets/images/landing.png";
import StudyIcon from "../../assets/images/icons/study.png";
import GiveClassesIcon from "../../assets/images/icons/give-classes.png";
import purpleHeartIcon from "../../assets/images/icons/heart.png";

import stylesFunc from "./styles";

import { View, Image, Text, Alert, TouchableOpacity } from "react-native";
import api from "../../services/api";

export default function Landing() {
  const styles = stylesFunc();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api
      .get("/connections/quantity")
      .then((response) => {
        setTotalConnections(response.data.total);
        Alert.alert(response.data.total);
      })
      .catch((e) => Alert.alert("error", api.getUri()));
  }, []);

  // api
  //   .get("/connections/quantity")
  //   .then((response) => setTotalConnections(response.data.total));

  return (
    <View style={styles.container}>
      <View>
        <Image source={LandingImg} style={styles.banner} />
        <Text style={styles.title}>
          Seja bem-vinde, {"\n"}
          <Text style={styles.titleBold}>O que deseja fazer?</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => Alert.alert("Dar Aula")}>
          <View style={[styles.buttonsLanding, styles.buttonStudy]}>
            <Image source={StudyIcon} />
            <Text style={styles.buttonText}>Estudar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Dar Aula")}>
          <View style={[styles.buttonsLanding, styles.buttonGiveClasses]}>
            <Image source={GiveClassesIcon} />
            <Text style={styles.buttonText}>Dar Aulas</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.connections}>
          Total de {totalConnections} conexões realizadas.{" "}
          <Image source={purpleHeartIcon} />
        </Text>
      </View>
    </View>
  );
}
