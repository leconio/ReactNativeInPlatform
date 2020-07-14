import * as React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';

class WelcomePage extends React.PureComponent {
  static navigationOptions = (headerProps) => {
    return {
      title: '欢迎页',
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight>
          <View style={styles.btn}>
            <Text style={styles.btn_text}>跳转到本地bundle的页面</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={{marginTop: 16}}>
          <View style={styles.btn}>
            <Text style={styles.btn_text}>跳转到远程bundle的页面</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  btn: {
    height: 40,
    backgroundColor: '#1E90FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  btn_text: {
    color: 'white',
  },
});

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
