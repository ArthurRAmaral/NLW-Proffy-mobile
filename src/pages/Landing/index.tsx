import React, { useState, useEffect } from "react";

import LandingImg from "../../assets/images/landing.png";

import styles from "./styles";

import { View, Image, Text } from "react-native";

export default function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    // api
    //   .get("/connections/quantity")
    //   .then((response) => setTotalConnections(response.data.total));
  }, []);

  // api
  //   .get("/connections/quantity")
  //   .then((response) => setTotalConnections(response.data.total));

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Image source={LandingImg} style={styles.banner} />
          <Text style={styles.title}>
            Seja bem-vinde, {"\n"}
            <Text style={styles.titleBold}>O que deseja fazer?</Text>
          </Text>
        </View>

        {/* <Image source={LandingImg} /> */}

        {/* <View >
          <Link to="/classes" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/createclass" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas" />
            Dar Aulas
          </Link>
        </View>

        <span className="total-connections">
          Total de {totalConnections} conexões realizadas.{" "}
          <img src={purpleHeartIcon} alt="Coração Roxo" />
        </span>
      </View> */}
      </View>
    </View>
  );
}
