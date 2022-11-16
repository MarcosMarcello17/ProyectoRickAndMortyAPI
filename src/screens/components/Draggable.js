import React, { Component } from "react";
import store from "../store";
import { StyleSheet, PanResponder, Animated } from "react-native";
import { connect } from "react-redux";
import {
  add_favorite,
  delete_from_favorites,
  change_state,
} from "../actions/actions";

class Draggable extends Component {
  constructor(props) {
    super(props);
    this.item = this.props.item;
    this.onDelete = this.props.onDelete;
    //this.addOrRemove = this.props.addOrRemove; //no entiendo por que esto no funciona pero el color si.
    this.state = {
      isDraggable: true,
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1),
    };

    this._val = { x: 0, y: 0 };
    this.state.pan.addListener((value) => (this._val = value));
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gesture) => {
        if (this.state.isDraggable) {
          this.state.pan.x._value > 310 || this.state.pan.x._value < 0
            ? null
            : Animated.event(
                [
                  null,
                  {
                    dx: this.state.pan.x,
                  },
                ],
                { useNativeDriver: false }
              )(e, gesture);
        }
      },
      onPanResponderGrant: () => {
        this.state.pan.setOffset({ x: this._val.x, y: this._val.y });
        this.state.pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderRelease: (e, gesture) => {
        if (this.isDropArea(gesture)) {
          console.log("cambiando estado");
          store.dispatch(change_state(this.item));
          console.log("estado cambiado");
          Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: 400,
            useNativeDriver: false,
          }).start(() => this.setState({ isDraggable: false }));
          this.onDelete();
        } else {
          Animated.spring(this.state.pan, {
            toValue: { x: 0, y: 0 },
            friction: 10,
            useNativeDriver: false,
          }).start();
        }
      },
    });
  }

  isDropArea(gesture) {
    return gesture.moveX > 350;
  }

  render() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform(),
      opacity: this.state.opacity,
      backgroundColor: this.props.color,
    };

    return (
      <Animated.View
        {...this.PanResponder.panHandlers}
        style={[panStyle, styles.circle]}
      ></Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
});

export default connect(null, {
  change_state,
})(Draggable);
