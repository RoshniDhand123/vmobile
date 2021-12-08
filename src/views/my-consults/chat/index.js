import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import styles, { chatStyles, MsgInputBoxStyles } from "./style";
import { CustomNavigationHeaderBar, Loader } from "app/elements";
import { loader } from "app/services/utils";
import moment from "moment";
import { getRoomName } from "app/services/api-services/account";

const MockData = [
  { msg: "Hello Sir/Ma'am", self: false, date: "Today 10:00 AM" },
  {
    msg: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit",
    self: false,
    date: "Today 10:00 AM",
  },
  { msg: "Hello Sir/Ma'am", self: true, date: "Today 10:00 AM" },
  {
    msg: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit",
    self: true,
    date: "Today 10:00 AM",
  },
  { msg: "Hello Sir/Ma'am", self: false, date: "Today 10:00 AM" },
  {
    msg: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit",
    self: false,
    date: "Today 10:00 AM",
  },
  { msg: "Hello Sir/Ma'am", self: true, date: "Today 10:00 AM" },
  {
    msg: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit",
    self: true,
    date: "Today 10:00 AM",
  },
];
const HOST = "vdoc.ellocent.com";

var ws;
const Chat = ({ navigation }) => {
  const [msgs, setMsg] = useState(MockData);
  try {
    ws = React.useRef(new WebSocket(`ws://${HOST}/`)).current;
  } catch (error) {
    alert("Disconnected. Check internet or server");
  }
  const loadRoomName = async () => {
    // loader.show();
    // const resp = await getRoomName(2);
    // console.log("resp", resp);
    // loader.hide();
    // loader.hide();
  };
  React.useEffect(() => {
    loadRoomName();
    const msgList = [];
    try {
      if (ws) {
        ws.onopen = () => {
          console.log("Connected to the server");
        };
        ws.onclose = (e) => {
          console.log("Disconnected. Check internet or server.");
        };
        ws.onerror = (e) => {
          console.log(e.message);
        };
        ws.onmessage = (e) => {
          msgList.push({
            msg: e.data,
            self: msgList.length % 2 === 0,
            date: "Today " + moment().format("HH:ss a"),
          });
          setMsg([...msgList]);
        };
      }
    } catch (error) {
      alert("Disconnected. Check internet or server");
    }
  }, []);
  const submitMessage = (msg) => {
    if (ws && msg) ws.send(msg, 1, "developer");
  };
  return (
    <>
      <ScrollView scrollEventThrottle={0}>
        <CustomNavigationHeaderBar
          navigation={navigation}
          title="Dr. Haley Lawrence"
          showBack={true}
        />
        <View style={styles.root}>
          <View style={styles.msgContainer}>
            {msgs.map((item, index) => (
              <MsgBox {...item} key={index} />
            ))}
          </View>
        </View>
      </ScrollView>
      <MsgInputBox onSendMsg={submitMessage} />
    </>
  );
};

export default Chat;

const MsgBox = ({ self = false, msg, date }) => {
  const styles = chatStyles(self);
  return (
    <View style={styles.root}>
      <View style={{ alignItems: "baseline" }}>
        <View style={styles.msgContainer}>
          <Text style={[styles.msgTxt, styles.msg]}>{msg}</Text>
        </View>
      </View>
      <View style={styles.timeContainer}>
        <Text style={[styles.msgTxt, styles.time]}>{date}</Text>
      </View>
    </View>
  );
};

const MsgInputBox = ({ onSendMsg }) => {
  const styles = MsgInputBoxStyles;
  const [msg, setMsg] = useState("");
  const handleMsg = () => {
    console.log("msg", msg);
    if (msg && msg.length && onSendMsg) {
      onSendMsg(msg);
      setMsg("");
    }
  };
  return (
    <View style={styles.root}>
      <TextInput
        onChangeText={setMsg}
        value={msg}
        placeholder={"Type a message..."}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleMsg} style={styles.btnRoot}>
        <Text style={styles.btnTxt}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};
