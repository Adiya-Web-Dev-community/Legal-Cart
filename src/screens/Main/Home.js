import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../theme/colors';
import {verticalScale, scale, moderateScale} from '../../utils/scalling';
import Octicons from 'react-native-vector-icons/Octicons';

export default function () {
  const randomNumber = () => {
    return Math.floor(Math.random() * 200) + 1;
  };
  return (
    <View style={styles.screen}>
      <View style={styles.banner}>
        <Text style={styles.highlightedTxt} numberOfLines={3}>
          Online Lawyer Consultaion Anytime Anywhere
        </Text>
        <Text style={styles.consultationTxt}>
          Legal Consultaion Starts from
          <Text style={styles.highlightedColoredTxt}> ₹19.99/min</Text>
        </Text>
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
              source={{
                uri: 'https://www.legalkart.com/frontend/client_base_web/layout-optim/just-consult-landing-new/lawyer-onilne2.jpg',
              }}
              style={styles.logoImg}
            />
            <Image
              source={{
                uri: 'https://www.legalkart.com/frontend/client_base_web/layout-optim/just-consult-landing-new/lawyer-onilne7.jpg',
              }}
              style={styles.logoImg}
            />
            <Image
              source={{
                uri: 'https://www.legalkart.com/frontend/client_base_web/layout-optim/just-consult-landing-new/lawyer-onilne4.jpg',
              }}
              style={styles.logoImg}
            />
          </View>
          <Text style={styles.consultationTxt}>
            {' '}
            +{randomNumber()} Lawyers are online{' '}
          </Text>
          <Octicons name="dot-fill" size={12} color="green" />
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Consult Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  logoImg: {
    height: verticalScale(30),
    width: scale(30),
    borderWidth: 1,
    borderColor: Colors.white,
    overflow: 'hidden',
    borderRadius: moderateScale(30),
    resizeMode: 'contain',
  },
  imgContainer: {
    flexDirection: 'row',
    width: '28%',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  banner: {
    height: '40%',
    width: '100%',
    backgroundColor: Colors.lavender,
    justifyContent: 'space-around',
    padding: verticalScale(10),
  },
  highlightedTxt: {
    fontSize: moderateScale(26),
    fontWeight: '800',
    color: Colors.black,
    width: '70%',
  },
  consultationTxt: {
    fontSize: moderateScale(14),
    color: Colors.black,
    fontWeight: 'bold',
  },
  highlightedColoredTxt: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color: Colors.ceruleanBlue,
  },
  btn: {
    height: verticalScale(40),
    width: scale(100),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    backgroundColor: Colors.ceruleanBlue,
  },
  btnTxt: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color: Colors.white,
  },
});
