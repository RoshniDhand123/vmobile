import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Card from "./card";

import { MenuItem } from "./organ-menuItems";

import styles from "./styles";

const RenderMenu = ({ organOptionItems }) =>
    organOptionItems.map((item, index) => (
        <View style={{ width: "30%" }} key={index}>
            <Card {...item} />
        </View>
    ));

const ConsultOrgan = (props) => {
    const [organOptionItems, setOrganOptionItems] = useState([]);
    const { option } = props;
    console.log("option", option.length);

    useEffect(() => {
        createOrganMenuItemHandler();
    }, []);

    const createOrganMenuItemHandler = () => {
        const newOptionArray = [];
        for (let i = 0; i < option.length; i++) {
            for (let j = i; j <= i; j++) {
                newOptionArray.push({ ...option[i], ...MenuItem[j] });
            }
        }
        setOrganOptionItems(newOptionArray);
    };

    return (
        <View>
            <View style={styles.questionContainer}>
                <Text style={styles.questionTxt}>{props.question}</Text>
            </View>
            {organOptionItems && organOptionItems.length > 0 && (
                <View style={styles.flexBox}>
                    <RenderMenu organOptionItems={organOptionItems} />
                </View>
            )}
        </View>
    );
};

export default ConsultOrgan;
