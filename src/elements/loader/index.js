import React from "react";
import { View, ActivityIndicator } from "react-native";

export const loader = {
    show: () => {
        console.log("custom show method....");
        if (window.loader) {
            console.log("custom show method");
            window.loader.show();
        }
    },
    hide: () => {
        if (window.loader) window.loader.hide();
    },
};

export default class Loader extends React.PureComponent {
    state = {
        show: false,
    };

    componentDidMount() {
        console.log("window.loader");
        window.loader = this;
    }

    componentDidUpdate() {
        console.log("window.loader");
        window.loader = this;
    }

    componentWillUnmount() {
        window.loader = null;
    }

    show() {
        console.log("Up show is running", this.state.show);

        this.setState({ show: true });

        console.log("Bottom show is running", this.state.show);
    }

    hide() {
        console.log("Up hide is running", this.state.show);

        this.setState({ show: false });

        console.log("Bottom hide is running", this.state.show);
    }

    render() {
        return (
            // this.state.show && (
            <View
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: -50,
                    zIndex: 99999,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "black",
                    opacity: 0.6,
                }}
            >
                {console.log("LOADER")}
                <ActivityIndicator size={50} color="white" />
            </View>
            // )
        );
    }
}
