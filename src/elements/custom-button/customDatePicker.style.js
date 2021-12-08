import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#1C0C5B',

    flexDirection: 'row',
    alignItems: 'center',
    height: 45,

    borderWidth: 2,
    marginVertical: 20,
    borderColor: '#193498',
    borderRadius: 5,
  },
  icon: {width: 17, height: 19},
  iconContainer: {paddingLeft: 15, paddingRight: 10},
  label: {color: '#fff', fontSize: 12},
});
